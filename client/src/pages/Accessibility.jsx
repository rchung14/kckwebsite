import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { FIRM } from '../seo/site.js';
import { useLocale, localePath } from '../i18n/LocaleContext.jsx';
import { t } from '../i18n/strings.js';
import '../styles/Legal.css';

const copy = {
  en: {
    h1: 'Accessibility Statement',
    updated: 'Last updated: July 2026',
    sections: [
      {
        h: 'Our commitment',
        p: `${FIRM.name} wants every visitor to be able to use this website. We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA, and we build with semantic HTML, keyboard-navigable menus and forms, sufficient color contrast, descriptive alternative text for images, and support for reduced-motion preferences.`,
      },
      {
        h: 'Ongoing effort',
        p: `Accessibility is an ongoing effort, not a one-time audit. As we add content, we review it against the same standards. Some third-party content or older documents may not yet meet them.`,
      },
      {
        h: 'Tell us if something isn’t working',
        p: `If you encounter a barrier on this site, a page that doesn’t work with your screen reader, a form you can’t complete, content you can’t reach by keyboard, please contact us at ${FIRM.email} or ${FIRM.phone}. Include the page address and a description of the problem, and we will address it promptly and provide the information you need in an accessible format in the meantime.`,
      },
    ],
  },
  ko: {
    h1: '웹 접근성 안내',
    updated: '최종 수정: 2026년 7월',
    sections: [
      {
        h: '저희의 약속',
        p: `${FIRM.name}는 모든 방문자가 이 웹사이트를 이용할 수 있기를 바랍니다. 웹 콘텐츠 접근성 지침(WCAG) 2.1 AA 수준 준수를 목표로 하며, 시맨틱 HTML, 키보드로 조작 가능한 메뉴와 양식, 충분한 색상 대비, 이미지 대체 텍스트, 동작 축소 설정 지원을 바탕으로 사이트를 만들고 있습니다.`,
      },
      {
        h: '지속적인 개선',
        p: `접근성은 일회성 점검이 아닌 지속적인 노력입니다. 콘텐츠를 추가할 때마다 같은 기준으로 검토합니다. 일부 제3자 콘텐츠나 오래된 문서는 아직 기준을 충족하지 못할 수 있습니다.`,
      },
      {
        h: '불편을 겪으셨다면 알려주세요',
        p: `이 사이트에서 장벽을 만나셨다면, 스크린 리더로 읽히지 않는 페이지, 작성할 수 없는 양식, 키보드로 접근할 수 없는 콘텐츠 등, ${FIRM.email} 또는 ${FIRM.phone}으로 알려주세요. 페이지 주소와 문제 내용을 함께 보내주시면 신속히 수정하고, 그동안 필요하신 정보를 접근 가능한 형태로 제공해 드리겠습니다.`,
      },
    ],
  },
};

export default function Accessibility() {
  const locale = useLocale();
  const str = t(locale);
  const c = copy[locale] || copy.ko;
  const crumbs = [
    { name: str.breadcrumbHome, path: localePath(locale, '/') },
    { name: str.footer.accessibility, path: localePath(locale, '/accessibility') },
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
