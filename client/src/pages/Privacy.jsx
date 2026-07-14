import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { FIRM } from '../seo/site.js';
import { useLocale, localePath } from '../i18n/LocaleContext.jsx';
import { t } from '../i18n/strings.js';

const copy = {
  en: {
    h1: 'Privacy Policy',
    updated: 'Last updated: July 2026',
    sections: [
      {
        h: 'Information we collect',
        p: `When you submit our contact form, we collect the information you provide: your name, email address, optional phone number, the type of matter you select, and your message. Like most websites, our hosting providers also log basic technical information such as IP address and browser type for security and reliability purposes.`,
      },
      {
        h: 'How we use it',
        p: `Information you submit is used solely to respond to your inquiry and, if you become a client, to provide legal services. We do not sell, rent, or share your information with third parties for marketing purposes. Form submissions are delivered to the firm by our email service provider and are not used for any other purpose.`,
      },
      {
        h: 'Confidentiality note',
        p: `Submitting information through this website does not create an attorney-client relationship, and information sent before such a relationship is established may not be treated as privileged. Please do not send confidential details until we have confirmed the engagement.`,
      },
      {
        h: 'Cookies and analytics',
        p: `This site does not use advertising cookies or third-party tracking scripts. If analytics are added in the future, this policy will be updated to describe them.`,
      },
      {
        h: 'Your choices',
        p: `You may request a copy of the information you have submitted to us, or ask us to delete it, by contacting ${FIRM.email} or calling ${FIRM.phone}.`,
      },
    ],
  },
  ko: {
    h1: '개인정보 처리방침',
    updated: '최종 수정: 2026년 7월',
    sections: [
      {
        h: '수집하는 정보',
        p: `상담 문의 양식을 제출하시면 입력하신 정보, 성명, 이메일 주소, 전화번호(선택), 선택하신 상담 분야, 메시지, 가 수집됩니다. 대부분의 웹사이트와 마찬가지로, 호스팅 제공업체는 보안과 안정성을 위해 IP 주소, 브라우저 종류 등 기본적인 기술 정보를 기록할 수 있습니다.`,
      },
      {
        h: '정보의 이용',
        p: `제출하신 정보는 문의에 회신하고, 의뢰인이 되시는 경우 법률 서비스를 제공하는 목적으로만 사용됩니다. 고객 정보를 마케팅 목적으로 제3자에게 판매·대여·공유하지 않습니다. 양식 제출 내용은 이메일 서비스 제공업체를 통해 사무소로 전달되며 다른 목적으로 사용되지 않습니다.`,
      },
      {
        h: '기밀 유지 안내',
        p: `본 웹사이트를 통한 정보 제출만으로 변호사-의뢰인 관계가 성립하지 않으며, 그 관계가 성립하기 전에 보내신 정보는 비밀특권의 보호를 받지 못할 수 있습니다. 수임이 확정되기 전에는 기밀 정보를 보내지 마시기 바랍니다.`,
      },
      {
        h: '쿠키와 분석 도구',
        p: `본 사이트는 광고 쿠키나 제3자 추적 스크립트를 사용하지 않습니다. 향후 분석 도구가 추가되는 경우 본 방침에 그 내용을 반영하겠습니다.`,
      },
      {
        h: '정보 열람 및 삭제 요청',
        p: `제출하신 정보의 사본을 요청하시거나 삭제를 원하시면 ${FIRM.email} 또는 ${FIRM.phone}으로 연락해 주세요.`,
      },
    ],
  },
};

export default function Privacy() {
  const locale = useLocale();
  const str = t(locale);
  const c = copy[locale] || copy.ko;
  const crumbs = [
    { name: str.breadcrumbHome, path: localePath(locale, '/') },
    { name: str.footer.privacy, path: localePath(locale, '/privacy') },
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
