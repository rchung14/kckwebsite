import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import JsonLd from './JsonLd.jsx';
import { legalServiceSchema } from '../seo/schema.js';
import { getMeta } from '../seo/routesMeta.js';
import { SITE_URL } from '../seo/site.js';
import { LocaleContext } from '../i18n/LocaleContext.jsx';
import { t } from '../i18n/strings.js';

// Keeps <head> tags in sync during client-side navigation.
// Initial values are baked into the static HTML by the prerender script.
function useHeadSync(pathname) {
  useEffect(() => {
    const meta = getMeta(pathname);
    if (!meta) return;
    document.title = meta.title;
    document.documentElement.lang = meta.lang;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', meta.description);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${SITE_URL}${meta.path === '/' ? '/' : meta.path}`);
    }
  }, [pathname]);
}

export default function Layout({ locale }) {
  const { pathname, hash } = useLocation();
  useHeadSync(pathname);

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <LocaleContext.Provider value={locale}>
      <a className="skip-link" href="#main">
        {t(locale).skipLink}
      </a>
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <JsonLd data={legalServiceSchema()} />
    </LocaleContext.Provider>
  );
}
