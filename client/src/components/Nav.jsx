import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { Menu, X, Globe } from 'lucide-react';
import { FIRM } from '../seo/site.js';
import { useLocale, localePath } from '../i18n/LocaleContext.jsx';
import { t } from '../i18n/strings.js';
import { getMeta } from '../seo/routesMeta.js';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const locale = useLocale();
  const s = t(locale).nav;
  const { pathname } = useLocation();

  const links = [
    { to: localePath(locale, '/services'), label: s.services },
    { to: localePath(locale, '/about'), label: s.about },
    { to: `${localePath(locale, '/')}#testimonials`.replace('//#', '/#'), label: s.reviews, hash: true },
    { to: localePath(locale, '/contact'), label: s.contact },
  ];

  // Language toggle points at the same page in the other locale.
  const other = locale === 'ko' ? 'en' : 'ko';
  const meta = getMeta(pathname);
  const togglePath = meta ? meta.alternates[other] : localePath(other, '/');

  return (
    <nav className="nav" aria-label="Main navigation">
      <Link to={localePath(locale, '/')} className="nav-logo" onClick={close}>
        <span className="nav-logo-name">KIM, CHOI &amp; KIM</span>
        <span className="nav-logo-tagline">{FIRM.tagline}</span>
      </Link>

      <div className="nav-links">
        {links.map((l) =>
          l.hash ? (
            <Link key={l.label} to={l.to}>
              {l.label}
            </Link>
          ) : (
            <NavLink key={l.label} to={l.to} end={false}>
              {l.label}
            </NavLink>
          )
        )}
      </div>

      <div className="nav-cta">
        <Link to={togglePath} className="lang-toggle" lang={other === 'ko' ? 'ko' : 'en'}>
          <Globe size={13} aria-hidden="true" />
          {s.toggleLabel}
        </Link>
        <a href={FIRM.phoneHref} className="nav-phone">
          {FIRM.phone}
        </a>
        <Link to={localePath(locale, '/contact')} className="btn-dark btn-nav">
          {s.freeConsult}
        </Link>
      </div>

      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="mobile-drawer"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div id="mobile-drawer" className={open ? 'nav-drawer nav-drawer-open' : 'nav-drawer'}>
        {links.map((l) => (
          <Link key={l.label} to={l.to} onClick={close}>
            {l.label}
          </Link>
        ))}
        <Link to={togglePath} onClick={close} lang={other === 'ko' ? 'ko' : 'en'}>
          {s.toggleLabel}
        </Link>
        <a href={FIRM.phoneHref} onClick={close}>
          {FIRM.phone}
        </a>
        <Link to={localePath(locale, '/contact')} className="btn-dark btn-nav" onClick={close}>
          {s.freeConsult}
        </Link>
      </div>
    </nav>
  );
}
