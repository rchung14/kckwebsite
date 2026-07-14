import { Link } from 'react-router';
import { FIRM } from '../seo/site.js';
import { getServices } from '../data/services.js';
import { useLocale, localePath } from '../i18n/LocaleContext.jsx';
import { t } from '../i18n/strings.js';

export default function Footer() {
  const locale = useLocale();
  const s = t(locale).footer;
  const services = getServices(locale);
  const p = (path) => localePath(locale, path);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">KIM, CHOI &amp; KIM</div>
            <div className="footer-tagline">{FIRM.tagline}</div>
            <p>{s.blurb}</p>
          </div>
          <div className="footer-col">
            <div className="footer-heading">{s.services}</div>
            {services.map((sv) => (
              <Link key={sv.slug} to={p(sv.path)}>
                {sv.title}
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <div className="footer-heading">{s.firm}</div>
            <Link to={p('/about')}>{s.about}</Link>
            <Link to={`${p('/')}#testimonials`.replace('//#', '/#')}>{s.reviews}</Link>
            <Link to={p('/contact')}>{s.contactLink}</Link>
          </div>
          <div className="footer-col">
            <div className="footer-heading">{s.contact}</div>
            <a href={FIRM.phoneHref}>{FIRM.phone}</a>
            <a href={`mailto:${FIRM.email}`}>{FIRM.email}</a>
            <span>
              {FIRM.address.street}
              <br />
              {FIRM.address.city}, {FIRM.address.state} {FIRM.address.zip}
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} {FIRM.name} {s.rights}
          </div>
          <div className="footer-legal">
            <Link to={p('/privacy')}>{s.privacy}</Link>
            <Link to={p('/terms')}>{s.terms}</Link>
            <Link to={p('/accessibility')}>{s.accessibility}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
