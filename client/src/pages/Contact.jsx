import Eyebrow from '../components/Eyebrow.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { FIRM } from '../seo/site.js';
import { useLocale, localePath } from '../i18n/LocaleContext.jsx';
import { t } from '../i18n/strings.js';
import '../styles/PageHero.css';

const copy = {
  en: {
    eyebrow: 'Free Consultation',
    h1: 'Schedule Your Free Real Estate Consultation',
    intro:
      'Bring us your contract, your closing date, or just your questions. Every new client consultation is free, in English or Korean, and we respond to every message within one business day.',
    titleA: 'Talk to an',
    titleB: 'attorney.',
    body: 'Calls are answered during business hours; form submissions receive a response within one business day.',
  },
  ko: {
    eyebrow: '무료 상담',
    h1: '무료 부동산 법률 상담 예약',
    intro:
      '계약서든, 클로징 날짜든, 궁금한 점이든 편하게 가져오세요. 신규 고객 상담은 한국어와 영어 모두 무료이며, 모든 문의에 영업일 기준 1일 이내에 회신해 드립니다.',
    titleA: '변호사와',
    titleB: '직접 상담하세요.',
    body: '업무 시간에는 전화로 바로 연결되며, 온라인 문의는 영업일 기준 1일 이내에 회신해 드립니다.',
  },
};

export default function Contact() {
  const locale = useLocale();
  const str = t(locale);
  const c = copy[locale] || copy.ko;
  const h = str.home;
  const p = (path) => localePath(locale, path);

  const crumbs = [
    { name: str.breadcrumbHome, path: p('/') },
    { name: str.nav.contact, path: p('/contact') },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs crumbs={crumbs} />
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h1 className="page-title">{c.h1}</h1>
          <p className="page-intro">{c.intro}</p>
        </div>
      </section>

      <section className="contact contact-page">
        <div className="container contact-grid">
          <div className="contact-info">
            <Eyebrow>{h.contactEyebrow}</Eyebrow>
            <h2 className="contact-title">
              {c.titleA}
              <br />
              <em>{c.titleB}</em>
            </h2>
            <p className="contact-body">{c.body}</p>

            <div className="contact-details">
              <div>
                <div className="contact-label">{h.phone}</div>
                <div className="contact-phone">
                  <a href={FIRM.phoneHref}>{FIRM.phone}</a>
                </div>
              </div>
              <div>
                <div className="contact-label">{h.email}</div>
                <div className="contact-value">
                  <a href={`mailto:${FIRM.email}`}>{FIRM.email}</a>
                </div>
              </div>
              <div>
                <div className="contact-label">{h.office}</div>
                <div className="contact-value">
                  {FIRM.address.street}
                  <br />
                  {FIRM.address.city}, {FIRM.address.state} {FIRM.address.zip}
                </div>
              </div>
              <div>
                <div className="contact-label">{h.hours}</div>
                <div className="contact-value">{h.hoursValue}</div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
