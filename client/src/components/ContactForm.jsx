import { useState } from 'react';
import { API_URL } from '../seo/site.js';
import { useLocale } from '../i18n/LocaleContext.jsx';
import { t } from '../i18n/strings.js';

// Submitted values stay in English, the server validates against these.
const MATTER_VALUES = ['Residential Purchase', 'Residential Sale', 'Commercial', 'Title & Closing', 'Other'];

const initial = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  matter: '',
  message: '',
  company: '', // honeypot, humans never see or fill this
};

export default function ContactForm() {
  const locale = useLocale();
  const s = t(locale).form;
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errors, setErrors] = useState([]);

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  function validate() {
    const found = [];
    if (!form.firstName.trim()) found.push(s.errFirst);
    if (!form.lastName.trim()) found.push(s.errLast);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) found.push(s.errEmail);
    if (!MATTER_VALUES.includes(form.matter)) found.push(s.errMatter);
    if (form.message.trim().length < 10) found.push(s.errMessage);
    return found;
  }

  async function onSubmit(e) {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (found.length > 0) return;

    setStatus('submitting');
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm(initial);
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success" role="status">
        <h3>{s.successTitle}</h3>
        <p>{s.successBody}</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="cf-first">{s.firstName}</label>
          <input id="cf-first" name="firstName" type="text" autoComplete="given-name" required value={form.firstName} onChange={set('firstName')} />
        </div>
        <div className="form-field">
          <label htmlFor="cf-last">{s.lastName}</label>
          <input id="cf-last" name="lastName" type="text" autoComplete="family-name" required value={form.lastName} onChange={set('lastName')} />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="cf-email">{s.email}</label>
        <input id="cf-email" name="email" type="email" autoComplete="email" required value={form.email} onChange={set('email')} />
      </div>
      <div className="form-field">
        <label htmlFor="cf-phone">{s.phone}</label>
        <input id="cf-phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={set('phone')} />
      </div>
      <div className="form-field">
        <label htmlFor="cf-matter">{s.matter}</label>
        <select id="cf-matter" name="matter" required value={form.matter} onChange={set('matter')}>
          <option value="">{s.selectOne}</option>
          {MATTER_VALUES.map((m) => (
            <option key={m} value={m}>
              {s.matterOptions[m]}
            </option>
          ))}
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="cf-message">{s.message}</label>
        <textarea id="cf-message" name="message" rows={5} required value={form.message} onChange={set('message')} />
      </div>

      <div className="hp-field" aria-hidden="true">
        <label htmlFor="cf-company">Company</label>
        <input id="cf-company" name="company" type="text" tabIndex={-1} autoComplete="off" value={form.company} onChange={set('company')} />
      </div>

      {errors.length > 0 && (
        <ul className="form-errors" role="alert">
          {errors.map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      {status === 'error' && (
        <p className="form-errors" role="alert">
          {s.errSend}
        </p>
      )}

      <button type="submit" className="btn-gold" disabled={status === 'submitting'}>
        {status === 'submitting' ? s.sending : s.submit}
      </button>
      <p className="form-disclaimer">{s.disclaimer}</p>
    </form>
  );
}
