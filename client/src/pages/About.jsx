import Eyebrow from '../components/Eyebrow.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import CtaBand from '../components/CtaBand.jsx';
import JsonLd from '../components/JsonLd.jsx';
import { getAttorneys, getWhyChooseUs, attorneys } from '../data/attorneys.js';
import { personSchema } from '../seo/schema.js';
import { useLocale, localePath } from '../i18n/LocaleContext.jsx';
import { t } from '../i18n/strings.js';
import '../styles/PageHero.css';
import './About.css';

const copy = {
  en: {
    eyebrow: 'About the Firm',
    h1: 'About Kim, Choi & Kim, PC',
    intro1:
      'Kim, Choi & Kim, PC is a boutique real estate law firm based in Palisades Park, New Jersey, serving clients throughout New Jersey and the greater Washington DC area. The firm was built on a simple conviction: real estate clients deserve attorneys who explain every document, anticipate every issue, and return every call, in the client’s own language.',
    intro2:
      'That conviction shapes how we work. Files are handled by attorneys, not routed through processors. Fees are quoted in writing before work begins, with fixed-fee options for most standard closings and reviews. And every engagement, from a first-time homebuyer’s contract review to a multi-party commercial acquisition, begins with a free consultation.',
    profileEyebrow: 'Attorney Profile',
    nameplateTitle: 'Attorney at Law',
    education: 'Education',
    admissions: 'Bar Admissions',
    languages: 'Languages',
    focus: 'Practice Focus',
    focusV: 'Residential, Commercial & Title',
    whyEyebrow: 'Why Kim, Choi & Kim',
    whyTitle: 'A different kind of law firm',
    community:
      'The firm is proud to serve the Korean-American community across the region, every consultation, document review, and closing can be conducted in Korean (한국어 상담 가능) as well as English.',
  },
  ko: {
    eyebrow: '사무소 소개',
    h1: 'Kim, Choi & Kim, PC 소개',
    intro1:
      'Kim, Choi & Kim, PC는 뉴저지 팰리세이즈파크에 기반을 두고 뉴저지 전역과 워싱턴 DC 지역 고객을 돕는 부티크 부동산 로펌입니다. 저희는 단순한 신념 위에 세워졌습니다, 부동산 고객은 모든 서류를 설명해 주고, 모든 문제를 미리 짚어 주며, 모든 전화에 회신하는 변호사를, 자신의 언어로 만날 자격이 있다는 것입니다.',
    intro2:
      '그 신념이 일하는 방식을 만듭니다. 사건은 프로세서가 아닌 변호사가 직접 처리합니다. 수임료는 업무 시작 전에 서면으로 안내하며, 대부분의 표준 클로징과 검토에는 정액제를 적용합니다. 그리고 생애 첫 주택 구입자의 계약서 검토부터 다자간 상업 인수까지, 모든 사건은 무료 상담으로 시작합니다.',
    profileEyebrow: '변호사 프로필',
    nameplateTitle: '변호사',
    education: '학력',
    admissions: '변호사 자격',
    languages: '상담 언어',
    focus: '주요 업무',
    focusV: '주택 · 상업용 부동산 · 타이틀',
    whyEyebrow: 'Kim, Choi & Kim을 선택하는 이유',
    whyTitle: '다른 로펌과 다릅니다',
    community:
      '저희 사무소는 이 지역 한인 커뮤니티와 함께해 온 것을 자랑스럽게 생각합니다, 모든 상담, 서류 검토, 클로징을 영어는 물론 한국어로 진행할 수 있습니다.',
  },
};

export default function About() {
  const locale = useLocale();
  const str = t(locale);
  const c = copy[locale] || copy.ko;
  const attorneyList = getAttorneys(locale);
  const whyChooseUs = getWhyChooseUs(locale);
  const [leadAttorney, ...otherAttorneys] = attorneyList;
  const p = (path) => localePath(locale, path);

  const crumbs = [
    { name: str.breadcrumbHome, path: p('/') },
    { name: str.nav.about, path: p('/about') },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs crumbs={crumbs} />
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h1 className="page-title">{c.h1}</h1>
          <p className="page-intro">{c.intro1}</p>
          <p className="page-intro">{c.intro2}</p>
        </div>
      </section>

      <section className="about about-page">
        <div className="container about-grid">
          <div className="about-portrait">
            <div className="portrait-frame">
              <picture>
                <source srcSet="/images/attorney-headshot-about.avif" type="image/avif" />
                <img
                  src="/images/attorney-headshot-about.webp"
                  width={leadAttorney.photo.width}
                  height={leadAttorney.photo.height}
                  alt={leadAttorney.photo.alt}
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="nameplate">
              <div className="nameplate-name">
                {leadAttorney.name}, {leadAttorney.suffix}
              </div>
              <div className="nameplate-title">{c.nameplateTitle}</div>
            </div>
          </div>

          <div className="about-bio">
            <Eyebrow>{c.profileEyebrow}</Eyebrow>
            <h2 className="section-title about-title">{leadAttorney.name}</h2>
            {leadAttorney.bio.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}

            <div className="credentials">
              <div className="credential-cell">
                <div className="credential-label">{c.education}</div>
                <div className="credential-value">
                  {leadAttorney.education.school}, {leadAttorney.education.degree}
                </div>
              </div>
              <div className="credential-cell">
                <div className="credential-label">{c.admissions}</div>
                <div className="credential-value">{leadAttorney.admissions.join(' · ')}</div>
              </div>
              <div className="credential-cell">
                <div className="credential-label">{c.languages}</div>
                <div className="credential-value">{leadAttorney.languages.join(' & ')}</div>
              </div>
              <div className="credential-cell">
                <div className="credential-label">{c.focus}</div>
                <div className="credential-value">{c.focusV}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {otherAttorneys.length > 0 && (
        <section className="attorneys-more">
          <div className="container container-narrow">
            {otherAttorneys.map((a) => (
              <div key={a.name} className="attorney-brief">
                <h2 className="section-title">
                  {a.name}, {a.suffix}
                </h2>
                {a.bio.map((para) => (
                  <p key={para.slice(0, 40)}>{para}</p>
                ))}
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="why-us">
        <div className="container">
          <div className="testimonials-header">
            <Eyebrow centered>{c.whyEyebrow}</Eyebrow>
            <h2 className="section-title">{c.whyTitle}</h2>
          </div>
          <div className="why-grid">
            {whyChooseUs.map((w) => (
              <div key={w.title} className="why-card">
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </div>
            ))}
          </div>
          <p className="community-note">{c.community}</p>
        </div>
      </section>

      <CtaBand />
      {attorneys.map((a) => (
        <JsonLd key={a.name} data={personSchema(a)} />
      ))}
    </>
  );
}
