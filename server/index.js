import 'dotenv/config';
import express from 'express';
import { Resend } from 'resend';

const app = express();
app.disable('x-powered-by');
app.set('trust proxy', 1); // Render sits behind a proxy

const PORT = process.env.PORT || 10000;
let resend = null;
function getResend() {
  if (!resend) resend = new Resend(process.env.RESEND_API_KEY);
  return resend;
}
const RECIPIENTS = (process.env.CONTACT_RECIPIENT || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
const EMAIL_FROM = process.env.EMAIL_FROM || '';
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

// ── Security headers ──
app.use((req, res, next) => {
  res.set({
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains',
    'Content-Security-Policy': "default-src 'none'; frame-ancestors 'none'",
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  });
  next();
});

// ── CORS allowlist ──
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.set({
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
      Vary: 'Origin',
    });
  }
  if (req.method === 'OPTIONS') return res.status(204).end();
  next();
});

app.use(express.json({ limit: '50kb' }));

// ── In-memory rate limiting: 5 requests per IP per 15 minutes ──
const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map(); // ip -> [timestamps]

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

// Periodically drop stale entries so the map doesn't grow unbounded.
setInterval(() => {
  const now = Date.now();
  for (const [ip, times] of hits) {
    const recent = times.filter((t) => now - t < WINDOW_MS);
    if (recent.length === 0) hits.delete(ip);
    else hits.set(ip, recent);
  }
}, WINDOW_MS).unref();

// ── Validation (mirrors the client) ──
const MATTER_OPTIONS = ['Residential Purchase', 'Residential Sale', 'Commercial', 'Title & Closing', 'Other'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body) {
  if (typeof body !== 'object' || body === null) return false;
  const { firstName, lastName, email, phone, matter, message } = body;
  return (
    typeof firstName === 'string' && firstName.trim().length > 0 && firstName.length <= 100 &&
    typeof lastName === 'string' && lastName.trim().length > 0 && lastName.length <= 100 &&
    typeof email === 'string' && EMAIL_RE.test(email) && email.length <= 254 &&
    (phone === undefined || phone === '' || (typeof phone === 'string' && phone.length <= 40)) &&
    MATTER_OPTIONS.includes(matter) &&
    typeof message === 'string' && message.trim().length >= 10 && message.length <= 5000
  );
}

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.post('/api/contact', async (req, res) => {
  if (rateLimited(req.ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  const body = req.body || {};

  // Honeypot: bots fill the hidden "company" field. Accept silently.
  if (typeof body.company === 'string' && body.company.trim() !== '') {
    return res.json({ ok: true });
  }

  if (!validate(body)) {
    return res.status(400).json({ error: 'Invalid submission.' });
  }

  if (!process.env.RESEND_API_KEY || RECIPIENTS.length === 0 || !EMAIL_FROM) {
    console.error('Contact endpoint is not configured (missing env vars).');
    return res.status(503).json({ error: 'Unable to send message right now.' });
  }

  const { firstName, lastName, email, phone, matter, message } = body;
  const text = [
    `New consultation request from the website.`,
    ``,
    `Name:   ${firstName.trim()} ${lastName.trim()}`,
    `Email:  ${email.trim()}`,
    `Phone:  ${phone ? phone.trim() : '—'}`,
    `Matter: ${matter}`,
    ``,
    `Message:`,
    message.trim(),
  ].join('\n');

  try {
    const { error } = await getResend().emails.send({
      from: `Kim Choi & Kim Website <${EMAIL_FROM}>`,
      to: RECIPIENTS,
      replyTo: email.trim(),
      subject: `New consultation request — ${matter}`,
      text,
    });
    if (error) throw new Error(error.message || 'Resend error');
    res.json({ ok: true });
  } catch (err) {
    console.error('Email send failed:', err.message);
    res.status(502).json({ error: 'Unable to send message right now.' });
  }
});

app.use((req, res) => res.status(404).json({ error: 'Not found.' }));

// Last-resort error handler — generic response, no stack traces.
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(err.type === 'entity.too.large' ? 413 : 400).json({ error: 'Bad request.' });
});

app.listen(PORT, () => {
  console.log(`Contact API listening on port ${PORT}`);
});
