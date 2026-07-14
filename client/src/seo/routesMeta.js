// Per-route, per-locale SEO metadata. Korean is the default locale at the
// root; English mirrors under /en. The prerender script reads this to bake
// <title>, meta description, canonical, hreflang alternates, and OG tags
// into static HTML, and to generate sitemap.xml.

const pages = [
  {
    base: '/',
    sitemap: true,
    priority: '1.0',
    changefreq: 'monthly',
    ko: {
      title: '뉴저지 부동산 전문 변호사 | Kim, Choi & Kim, PC',
      description:
        'Kim, Choi & Kim, PC는 뉴저지 팰리세이즈파크에 위치한 부동산 전문 로펌으로, 뉴저지 전역과 워싱턴 DC 지역 고객을 돕습니다. 주택 매매, 상업용 부동산, 타이틀 & 클로징 서비스를 한국어로 상담하세요. 초기 상담 무료.',
      breadcrumb: '홈',
    },
    en: {
      title: 'New Jersey Real Estate Attorney | Kim, Choi & Kim, PC',
      description:
        'Kim, Choi & Kim, PC is a real estate law firm based in Palisades Park, New Jersey, serving clients statewide and in the Washington DC area: residential transactions, commercial real estate, and title & closing services. Free consultation.',
      breadcrumb: 'Home',
    },
  },
  {
    base: '/services',
    sitemap: true,
    priority: '0.8',
    changefreq: 'monthly',
    ko: {
      title: '부동산 법률 서비스 | Kim, Choi & Kim, PC',
      description:
        'Kim, Choi & Kim, PC의 부동산 법률 서비스, 주택 매매, 상업용 부동산, 타이틀 & 클로징. 뉴저지와 워싱턴 DC 지역에서 한국어와 영어로 상담해 드립니다.',
      breadcrumb: '업무 분야',
    },
    en: {
      title: 'Real Estate Legal Services | Kim, Choi & Kim, PC',
      description:
        'Explore the real estate legal services of Kim, Choi & Kim, PC, residential purchase and sale, commercial real estate, and title & closing services in New Jersey and the DC area.',
      breadcrumb: 'Services',
    },
  },
  {
    base: '/services/residential-real-estate',
    sitemap: true,
    priority: '0.8',
    changefreq: 'monthly',
    ko: {
      title: '주택 매매 전문 변호사 (뉴저지) | Kim, Choi & Kim, PC',
      description:
        '주택 매수인·매도인을 위한 부동산 변호사, 계약서 검토와 협상, 타이틀 조사, 유치권 확인, 클로징 대리. 뉴저지 및 워싱턴 DC 지역.',
      breadcrumb: '주택 매매',
    },
    en: {
      title: 'Residential Real Estate Attorney NJ | Kim, Choi & Kim, PC',
      description:
        'Residential real estate attorney for buyers and sellers, contract review and negotiation, title examination, lien searches, and closing representation in New Jersey and the DC area.',
      breadcrumb: 'Residential Real Estate',
    },
  },
  {
    base: '/services/commercial-real-estate',
    sitemap: true,
    priority: '0.8',
    changefreq: 'monthly',
    ko: {
      title: '상업용 부동산 변호사 (뉴저지) | Kim, Choi & Kim, PC',
      description:
        '상업용 부동산 매입·매각, 임대차, 실사, 조닝, 법인 구조 자문. 뉴저지와 워싱턴 DC 지역 투자자와 사업주를 위한 실용적인 법률 자문.',
      breadcrumb: '상업용 부동산',
    },
    en: {
      title: 'Commercial Real Estate Lawyer NJ | Kim, Choi & Kim, PC',
      description:
        'Commercial real estate lawyer for acquisitions, dispositions, leasing, due diligence, zoning, and entity structuring: practical counsel for investors and businesses in New Jersey and the DC area.',
      breadcrumb: 'Commercial Real Estate',
    },
  },
  {
    base: '/services/title-closing-services',
    sitemap: true,
    priority: '0.8',
    changefreq: 'monthly',
    ko: {
      title: '타이틀 & 클로징 변호사 (뉴저지) | Kim, Choi & Kim, PC',
      description:
        '타이틀 조사와 검토, 소유자용·렌더용 타이틀 보험, 유치권 해결, 에스크로, 정산 조율. 뉴저지와 워싱턴 DC 지역 클로징을 변호사가 직접 처리합니다.',
      breadcrumb: '타이틀 & 클로징',
    },
    en: {
      title: 'Title & Closing Attorney New Jersey | Kim, Choi & Kim, PC',
      description:
        'Title and closing attorney services, title search and examination, owner’s and lender’s title insurance, lien resolution, escrow, and settlement coordination for New Jersey and DC-area closings.',
      breadcrumb: 'Title & Closing Services',
    },
  },
  {
    base: '/about',
    sitemap: true,
    priority: '0.7',
    changefreq: 'monthly',
    ko: {
      title: '변호사 소개 | Kim, Choi & Kim, PC',
      description:
        'Kim, Choi & Kim, PC 변호사 소개, 한국어·영어 이중 언어 상담, 무료 초기 상담, 모든 클로징을 변호사가 직접 챙기는 부티크 부동산 로펌입니다.',
      breadcrumb: '변호사 소개',
    },
    en: {
      title: 'About Our Attorneys | Kim, Choi & Kim, PC',
      description:
        'Meet the attorneys of Kim, Choi & Kim, PC, a boutique real estate law firm offering bilingual Korean-English service, free consultations, and hands-on attention to every closing.',
      breadcrumb: 'About',
    },
  },
  {
    base: '/contact',
    sitemap: true,
    priority: '0.7',
    changefreq: 'monthly',
    ko: {
      title: '무료 상담 예약 | Kim, Choi & Kim, PC',
      description:
        'Kim, Choi & Kim, PC 무료 부동산 상담, (201) 363-0010으로 전화하시거나 온라인으로 문의하세요. 영업일 기준 1일 이내에 한국어 또는 영어로 회신해 드립니다.',
      breadcrumb: '상담 문의',
    },
    en: {
      title: 'Free Real Estate Consultation | Kim, Choi & Kim, PC',
      description:
        'Request a free real estate consultation with Kim, Choi & Kim, PC. Call (201) 363-0010 or send a message online, we respond within one business day.',
      breadcrumb: 'Contact',
    },
  },
  {
    base: '/privacy',
    sitemap: false,
    ko: {
      title: '개인정보 처리방침 | Kim, Choi & Kim, PC',
      description: 'Kim, Choi & Kim, PC가 웹사이트를 통해 제출된 정보를 수집·이용·보호하는 방법을 안내합니다.',
      breadcrumb: '개인정보 처리방침',
    },
    en: {
      title: 'Privacy Policy | Kim, Choi & Kim, PC',
      description: 'How Kim, Choi & Kim, PC collects, uses, and protects information submitted through this website.',
      breadcrumb: 'Privacy Policy',
    },
  },
  {
    base: '/terms',
    sitemap: false,
    ko: {
      title: '이용약관 | Kim, Choi & Kim, PC',
      description: 'Kim, Choi & Kim, PC 웹사이트 이용에 적용되는 약관과 변호사 광고 고지 사항입니다.',
      breadcrumb: '이용약관',
    },
    en: {
      title: 'Terms of Service | Kim, Choi & Kim, PC',
      description: 'Terms governing the use of the Kim, Choi & Kim, PC website, including attorney advertising notices.',
      breadcrumb: 'Terms of Service',
    },
  },
  {
    base: '/accessibility',
    sitemap: false,
    ko: {
      title: '웹 접근성 안내 | Kim, Choi & Kim, PC',
      description: 'Kim, Choi & Kim, PC의 웹 접근성에 대한 약속과, 이용에 불편을 겪으실 경우 연락하실 방법을 안내합니다.',
      breadcrumb: '웹 접근성',
    },
    en: {
      title: 'Accessibility Statement | Kim, Choi & Kim, PC',
      description: 'The accessibility commitment of Kim, Choi & Kim, PC and how to reach us if you encounter a barrier on this site.',
      breadcrumb: 'Accessibility',
    },
  },
];

const enPath = (base) => (base === '/' ? '/en' : `/en${base}`);

export const routesMeta = pages.flatMap((p) => {
  const alternates = { ko: p.base, en: enPath(p.base) };
  const common = {
    sitemap: p.sitemap,
    priority: p.priority,
    changefreq: p.changefreq,
    alternates,
  };
  return [
    { ...common, path: p.base, lang: 'ko', ...p.ko },
    { ...common, path: enPath(p.base), lang: 'en', ...p.en },
  ];
});

export function getMeta(path) {
  const clean = path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path;
  return routesMeta.find((r) => r.path === clean);
}
