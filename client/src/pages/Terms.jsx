import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { FIRM } from '../seo/site.js';
import { useLocale, localePath } from '../i18n/LocaleContext.jsx';
import { t } from '../i18n/strings.js';
import '../styles/Legal.css';

const copy = {
  en: {
    h1: 'Terms of Service',
    updated: 'Last updated: July 2026',
    sections: [
      {
        h: 'Attorney advertising',
        p: `This website is attorney advertising. It is provided by ${FIRM.name} for general informational purposes only. Prior results do not guarantee a similar outcome.`,
      },
      {
        h: 'No legal advice; no attorney-client relationship',
        p: `Nothing on this website constitutes legal advice, and reading it does not make you a client of the firm. An attorney-client relationship is formed only by a signed engagement agreement. Do not act or refrain from acting based on anything on this site without obtaining advice from a lawyer licensed in your jurisdiction about your specific situation.`,
      },
      {
        h: 'Accuracy of information',
        p: `Real estate law changes, and rules differ by jurisdiction. While we try to keep content current, we make no warranty that the information on this site is complete, accurate, or up to date at the moment you read it.`,
      },
      {
        h: 'Use of the site',
        p: `You agree not to misuse this website, including by attempting to interfere with its operation or by submitting false, unlawful, or abusive content through the contact form. The site and its content may not be copied for commercial use without permission.`,
      },
      {
        h: 'Limitation of liability',
        p: `To the fullest extent permitted by law, ${FIRM.name} is not liable for damages arising from your use of this website or your reliance on its contents.`,
      },
      {
        h: 'Contact',
        p: `Questions about these terms can be directed to ${FIRM.email} or ${FIRM.phone}.`,
      },
    ],
  },
  ko: {
    h1: '이용약관',
    updated: '최종 수정: 2026년 7월',
    sections: [
      {
        h: '변호사 광고',
        p: `본 웹사이트는 변호사 광고입니다. ${FIRM.name}가 일반적인 정보 제공 목적으로만 운영하며, 과거의 결과가 유사한 결과를 보장하지 않습니다.`,
      },
      {
        h: '법률 자문 아님 · 변호사-의뢰인 관계 불성립',
        p: `본 웹사이트의 어떤 내용도 법률 자문이 아니며, 열람만으로 의뢰인이 되지 않습니다. 변호사-의뢰인 관계는 서명된 수임 계약을 통해서만 성립합니다. 구체적인 상황에 대해서는 해당 관할에서 자격을 갖춘 변호사의 자문을 받기 전에 본 사이트의 내용에 근거하여 행동하거나 행동을 보류하지 마시기 바랍니다.`,
      },
      {
        h: '정보의 정확성',
        p: `부동산법은 계속 바뀌고 관할마다 규정이 다릅니다. 콘텐츠를 최신으로 유지하려고 노력하지만, 열람하시는 시점에 본 사이트의 정보가 완전하고 정확하며 최신임을 보증하지 않습니다.`,
      },
      {
        h: '사이트 이용',
        p: `사이트 운영을 방해하려 하거나 상담 양식을 통해 허위·불법·모욕적인 내용을 제출하는 등 본 웹사이트를 오용하지 않을 것에 동의하십니다. 사이트와 그 콘텐츠는 허락 없이 상업적 목적으로 복제할 수 없습니다.`,
      },
      {
        h: '책임의 제한',
        p: `법이 허용하는 최대 범위 내에서, ${FIRM.name}는 본 웹사이트의 이용 또는 그 내용에 대한 신뢰로 인해 발생하는 손해에 대해 책임을 지지 않습니다.`,
      },
      {
        h: '문의',
        p: `본 약관에 대한 문의는 ${FIRM.email} 또는 ${FIRM.phone}으로 연락해 주세요.`,
      },
    ],
  },
};

export default function Terms() {
  const locale = useLocale();
  const str = t(locale);
  const c = copy[locale] || copy.ko;
  const crumbs = [
    { name: str.breadcrumbHome, path: localePath(locale, '/') },
    { name: str.footer.terms, path: localePath(locale, '/terms') },
  ];

  return (
    <section className="legal-page">
      <div className="container container-narrow">
        <Breadcrumbs crumbs={crumbs} />
        <h1 className="page-title">{c.h1}</h1>
        <p className="legal-updated">{c.updated}</p>
        {c.sections.map((sec) => (
          <div key={sec.h}>
            <h2>{sec.h}</h2>
            <p>{sec.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
