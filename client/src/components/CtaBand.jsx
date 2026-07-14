import { Link } from 'react-router';
import Eyebrow from './Eyebrow.jsx';
import { FIRM } from '../seo/site.js';
import { useLocale, localePath } from '../i18n/LocaleContext.jsx';
import { t } from '../i18n/strings.js';

export default function CtaBand() {
  const locale = useLocale();
  const s = t(locale).cta;

  return (
    <section className="cta-band">
      <div className="container cta-band-inner">
        <div>
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <h2 className="cta-band-title">
            {s.titleA}
            <em>{s.titleB}</em>
          </h2>
          <p>{s.body}</p>
        </div>
        <div className="cta-band-actions">
          <Link to={localePath(locale, '/contact')} className="btn-gold">
            {s.button}
          </Link>
          <a href={FIRM.phoneHref} className="cta-band-phone">
            <span className="cta-phone-label">{s.callDirectly}</span>
            <span className="cta-phone-number">{FIRM.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
