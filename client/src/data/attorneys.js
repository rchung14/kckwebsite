// Attorney bios and credentials, per locale.
// Facts are limited to publicly verifiable information (Albany Law School,
// New York bar 2006, ~20 years in practice). Expand with firm-provided
// details before launch. PLACEHOLDER items to confirm with the firm:
//  - Korean (hangul) spellings of attorney names, kept romanized until confirmed
//  - additional bar admissions, memberships, recognition
//  - office hours, free-consultation and fixed-fee policies

export const attorneysByLocale = {
  en: [
    {
      name: 'Sung Min Kim',
      suffix: 'Esq.',
      title: 'Attorney',
      education: { school: 'Albany Law School', degree: 'J.D.' },
      admissions: ['New York, 2006'],
      languages: ['English', 'Korean'],
      bio: [
        'Sung Min Kim has practiced law for roughly two decades, representing homebuyers, sellers, investors, and business owners in real estate transactions and the legal matters that surround them. A graduate of Albany Law School, he was admitted to the New York bar in 2006 and has built the firm’s practice on a simple conviction: clients deserve an attorney who explains every document, anticipates every issue, and returns every call.',
        'He works with each client directly, there is no hand-off to a processor or paralegal-only file, and serves the region’s Korean-American community in both Korean and English.',
      ],
      photo: {
        src: '/images/attorney-headshot-about',
        width: 600,
        height: 800,
        alt: 'Attorney Sung Min Kim, real estate lawyer at Kim Choi & Kim PC serving New Jersey and the Washington DC area',
      },
    },
    {
      name: 'Dongsung Kim',
      suffix: 'Esq.',
      title: 'Attorney',
      languages: ['English', 'Korean'],
      bio: ['Dongsung Kim is an attorney with the firm, practicing across its real estate matters.'],
    },
  ],
  ko: [
    {
      name: 'Sung Min Kim',
      suffix: '변호사',
      title: '변호사',
      education: { school: '올바니 로스쿨 (Albany Law School)', degree: 'J.D.' },
      admissions: ['뉴욕주, 2006'],
      languages: ['한국어', '영어'],
      bio: [
        'Sung Min Kim 변호사는 약 20년간 주택 구입자, 매도인, 투자자, 사업주를 대리하며 부동산 거래와 그에 수반되는 법률 문제를 다뤄 왔습니다. 올바니 로스쿨(Albany Law School)을 졸업하고 2006년 뉴욕주 변호사 자격을 취득했으며, "고객은 모든 서류를 설명해 주고, 모든 문제를 미리 짚어 주며, 모든 전화에 회신하는 변호사를 만날 자격이 있다"는 신념 위에 사무소를 운영해 왔습니다.',
        '모든 사건을 변호사가 직접 담당하며, 프로세서나 사무직원에게만 맡겨지는 파일은 없습니다, 한인 커뮤니티를 위해 한국어와 영어로 상담합니다.',
      ],
      photo: {
        src: '/images/attorney-headshot-about',
        width: 600,
        height: 800,
        alt: 'Kim Choi & Kim PC 부동산 전문 Sung Min Kim 변호사, 뉴저지 및 워싱턴 DC 지역',
      },
    },
    {
      name: 'Dongsung Kim',
      suffix: '변호사',
      title: '변호사',
      languages: ['한국어', '영어'],
      bio: ['Dongsung Kim 변호사는 사무소의 부동산 업무 전반을 담당하고 있습니다.'],
    },
  ],
};

export function getAttorneys(locale) {
  return attorneysByLocale[locale] || attorneysByLocale.ko;
}

// English list for language-neutral structured data.
export const attorneys = attorneysByLocale.en;

export const whyChooseUsByLocale = {
  en: [
    {
      title: 'Bilingual service',
      body: 'Every matter can be handled in Korean or English, documents explained in the language you think in.',
    },
    {
      title: 'Boutique attention',
      body: 'You work with an attorney, not a case number. One point of contact from first call to recorded deed.',
    },
    {
      title: 'Free consultation',
      body: 'Every engagement starts with a free consultation, bring your contract or your questions.',
    },
    {
      title: 'Fixed-fee options',
      body: 'Flat, quoted fees for most standard closings and reviews, agreed in writing before work begins.',
    },
  ],
  ko: [
    {
      title: '이중 언어 상담',
      body: '모든 사건을 한국어 또는 영어로 진행할 수 있습니다, 가장 편한 언어로 서류를 설명해 드립니다.',
    },
    {
      title: '부티크 로펌의 밀착 관리',
      body: '사건 번호가 아닌 변호사와 직접 일하십니다. 첫 통화부터 등기 완료까지 담당 창구는 하나입니다.',
    },
    {
      title: '무료 초기 상담',
      body: '모든 사건은 무료 상담으로 시작합니다, 계약서든 궁금한 점이든 들고 오세요.',
    },
    {
      title: '정액 수임료 옵션',
      body: '대부분의 표준 클로징과 검토는 업무 시작 전 서면으로 합의하는 정액 수임료로 진행합니다.',
    },
  ],
};

export function getWhyChooseUs(locale) {
  return whyChooseUsByLocale[locale] || whyChooseUsByLocale.ko;
}
