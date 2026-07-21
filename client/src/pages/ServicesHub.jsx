import { Link } from 'react-router';
import Eyebrow from '../components/Eyebrow.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { getServices } from '../data/services.js';
import { useLocale, localePath } from '../i18n/LocaleContext.jsx';
import { t } from '../i18n/strings.js';
import '../styles/PageHero.css';
import './ServicesHub.css';

const copy = {
  en: {
    h1: 'New Jersey Real Estate Legal Services',
    intro:
      'Kim, Choi & Kim, PC concentrates its practice on real estate law, nothing else competes for our attention. Whether you need a real estate attorney for a home purchase, a commercial real estate lawyer for an acquisition or lease, or a title and closing attorney to get your transaction recorded cleanly, every matter starts with a free consultation and a clear, written fee.',
    detail: (title) => `${title} in detail →`,
  },
  ko: {
    h1: '부동산 법률 서비스',
    intro:
      'Kim, Choi & Kim, PC는 부동산법에 집중하는 로펌입니다, 다른 업무가 저희의 집중을 나누지 않습니다. 주택 구입을 위한 부동산 변호사가 필요하시든, 매입이나 임대차를 위한 상업용 부동산 변호사가 필요하시든, 거래를 깨끗하게 등기할 타이틀 & 클로징 변호사가 필요하시든, 모든 사건은 무료 상담과 명확한 서면 수임료 안내로 시작합니다.',
    detail: (title) => `${title} 자세히 보기 →`,
  },
};

export default function ServicesHub() {
  const locale = useLocale();
  const str = t(locale);
  const c = copy[locale] || copy.ko;
  const services = getServices(locale);
  const p = (path) => localePath(locale, path);

  const crumbs = [
    { name: str.breadcrumbHome, path: p('/') },
    { name: str.nav.services, path: p('/services') },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs crumbs={crumbs} />
          <Eyebrow>{str.practiceAreas}</Eyebrow>
          <h1 className="page-title">{c.h1}</h1>
          <p className="page-intro">{c.intro}</p>
        </div>
      </section>

      <section className="services services-hub">
        <div className="container">
          {services.map((s, i) => (
            <article key={s.slug} className={i % 2 === 1 ? 'hub-card hub-card-featured' : 'hub-card'}>
              <div className="hub-card-head">
                <div className="service-number">{s.number}</div>
                <h2>
                  <Link to={p(s.path)}>{s.title}</Link>
                </h2>
              </div>
              <div className="hub-card-body">
                <p>{s.short}</p>
                <p>{s.intro[0]}</p>
                <ul>
                  {s.bullets.map((b) => (
                    <li key={b}>
                      <span>—</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to={p(s.path)} className="link-gold">
                  {c.detail(s.title)}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
