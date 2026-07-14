import { useParams } from 'react-router';
import Eyebrow from '../components/Eyebrow.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import FaqList from '../components/FaqList.jsx';
import CtaBand from '../components/CtaBand.jsx';
import JsonLd from '../components/JsonLd.jsx';
import NotFound from './NotFound.jsx';
import { getService } from '../data/services.js';
import { getFaqs } from '../data/faq.js';
import { serviceSchema } from '../seo/schema.js';
import { useLocale, localePath } from '../i18n/LocaleContext.jsx';
import { t } from '../i18n/strings.js';

export default function ServicePage() {
  const { slug } = useParams();
  const locale = useLocale();
  const str = t(locale);
  const service = getService(locale, slug);
  if (!service) return <NotFound />;

  const faqs = getFaqs(locale, slug);
  const p = (path) => localePath(locale, path);
  const crumbs = [
    { name: str.breadcrumbHome, path: p('/') },
    { name: str.nav.services, path: p('/services') },
    { name: service.title, path: p(service.path) },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs crumbs={crumbs} />
          <Eyebrow>
            {str.practiceAreas} · {service.number}
          </Eyebrow>
          <h1 className="page-title">{service.h1}</h1>
          {service.intro.map((para) => (
            <p key={para.slice(0, 40)} className="page-intro">
              {para}
            </p>
          ))}
        </div>
      </section>

      <article className="service-article">
        <div className="container container-narrow">
          {service.sections.map((sec) => (
            <section key={sec.heading} className="service-section">
              <h2>{sec.heading}</h2>
              {sec.paragraphs.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
              {sec.list && (
                <ul className="dash-list">
                  {sec.list.map((item) => (
                    <li key={item}>
                      <span>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="service-section faq-section">
            <h2>{str.faqTitle}</h2>
            <FaqList faqs={faqs} />
          </section>
        </div>
      </article>

      <CtaBand />
      <JsonLd data={serviceSchema(service)} />
    </>
  );
}
