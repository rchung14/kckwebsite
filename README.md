# Kim, Choi & Kim, PC — Marketing Website

Full-stack marketing site for a real estate law firm. Static-generated React frontend
(deploys to Vercel) + Express contact-form API (deploys to Render).

**Bilingual, Korean-first.** Korean pages live at the root (`/`, `/services`, …) and
English mirrors under `/en/*`. Every page is prerendered in both languages with
`hreflang` alternates, per-locale titles/descriptions, and a language toggle in the
nav. UI strings live in `client/src/i18n/strings.js`; long-form content is per-locale
in `client/src/data/`. Korean copy is machine-drafted — **have a native speaker at the
firm review it before launch.**

**Placeholder policy.** Invented content is explicitly labeled: the three testimonials
carry `placeholder: true` and render a visible "예시 후기 / Sample review — placeholder"
badge until replaced with real, permissioned reviews.

## Structure

```
client/            Vite 7 + React 19 + React Router 7 frontend
  src/data/        All page content (services, FAQs, attorneys, testimonials)
  src/seo/         Site facts (site.js), per-route meta, JSON-LD builders
  scripts/         fetch-fonts.mjs · generate-assets.mjs · prerender.mjs
  public/          Fonts (self-hosted), images, og-card.png, favicon, robots
  vercel.json      Security headers + caching for Vercel
server/            Express API — POST /api/contact via Resend
static-prototype/  Original single-page static prototype (superseded)
```

## Develop

```sh
cd server && npm i && npm run dev          # API on :10000
cd client && npm i && npm run dev          # Vite dev server, /api proxied to :10000
```

## Build (SSG)

```sh
cd client && npm run build
```

Runs three steps: client bundle → SSR bundle → `scripts/prerender.mjs`, which writes
every route as static HTML into `dist/` with title/description/canonical/OG tags baked
in, plus `sitemap.xml`, `robots.txt`, and `404.html`. `src/main.jsx` hydrates in the
browser.

## Deploy

- **Frontend (Vercel):** project root `client/`, build `npm run build`, output `dist`.
  Set env vars `VITE_SITE_URL` (production domain) and `VITE_API_URL` (Render URL).
  Update the `connect-src` backend URL in `client/vercel.json` to the real Render URL.
- **Backend (Render):** root `server/`, start `npm start`. Set env vars from
  `server/.env.example` (`RESEND_API_KEY`, `CONTACT_RECIPIENT`, `EMAIL_FROM`,
  `ALLOWED_ORIGINS`).

## Before launch — content to confirm with the firm

1. **Geographic targeting**: content targets Washington DC / MD / VA per the brief, but
   the firm's verified office is 460 Bergen Blvd, Palisades Park, NJ, and the verified
   bar admission (Sung Min Kim) is New York 2006. Confirm DC/MD/VA licensure before
   publishing — geographic attorney-advertising claims are regulated.
2. **Domain**: `https://www.kimchoikim.com` is a placeholder default in
   `client/src/seo/site.js` (override with `VITE_SITE_URL`). Regenerate the OG card
   domain text if the domain differs.
3. **Photos**: replace `client/public/images/attorney-portrait-hero.{avif,webp}`
   (1040×1300) and `attorney-headshot-about.{avif,webp}` (900×1200) with real photos —
   same filenames, no code changes. `npm run assets` regenerates the placeholders.
4. **Testimonials** (`src/data/testimonials.js`) are anonymized examples with visible
   placeholder badges — replace with real, permissioned reviews and remove the
   `placeholder: true` flags.
5. **GSC**: replace `PASTE_GSC_CODE_HERE` in `client/scripts/prerender.mjs` and rebuild.
6. **Korean copy**: translations in `src/data/*` and `src/i18n/strings.js` need native
   review. Attorney names are kept romanized in Korean text — supply hangul spellings
   (e.g. for Sung Min Kim / Dongsung Kim) to localize them properly.
7. **Unverified business details to confirm**: office hours (Mon–Fri 9–6), free
   consultation policy, and fixed-fee options are carried from the design brief, not
   verified facts.
