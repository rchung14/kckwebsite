// FAQ content per service page, keyed by locale then service slug.
// Rendered on-page and emitted as FAQPage JSON-LD.
// NOTE: Korean copy is a translation prepared for review, have a native
// Korean speaker at the firm approve it before launch.

const en = {
  'residential-real-estate': [
    {
      q: 'Do I need a real estate attorney to buy a home in New Jersey or the DC area?',
      a: 'An attorney is not always legally required, but title companies and settlement agents do not represent you, they facilitate the transaction. A residential real estate attorney reviews the contract before you sign, negotiates repairs and credits, examines title, and protects your interests at closing. For most buyers, the fee is small relative to the risk on a purchase of this size.',
    },
    {
      q: 'When should I contact an attorney, before or after signing the contract?',
      a: 'Before, whenever possible. Once a purchase and sale agreement is signed, your leverage is limited to the contingencies it contains. If you have already signed, contact us immediately: review windows are short, and an attorney can often still act within the inspection or document-review window.',
    },
    {
      q: 'What is the difference between the HUD-1, the Closing Disclosure, and the ALTA statement?',
      a: 'They are all settlement statements, itemized accountings of every dollar in your closing. The Closing Disclosure replaced the HUD-1 for most mortgage transactions in 2015, and the ALTA settlement statement is commonly used alongside it. We review whichever forms your closing uses, line by line, before closing day.',
    },
    {
      q: 'What is TOPA and does it affect my purchase?',
      a: 'The Tenant Opportunity to Purchase Act is a District of Columbia law that gives tenants of rental housing certain rights when the property is sold, which can affect timing and required notices. If you are buying or selling a DC property that is or was tenant-occupied, TOPA compliance should be reviewed early, it is one of the most common causes of delayed DC closings.',
    },
    {
      q: 'How much does residential representation cost?',
      a: 'Most standard residential closings are handled on a quoted flat fee, agreed in writing before work begins, and every matter starts with a free consultation. Complex matters, contested issues, estate complications, commercial-adjacent properties, are quoted separately.',
    },
  ],
  'commercial-real-estate': [
    {
      q: 'Should a lawyer review my letter of intent (LOI)?',
      a: 'Yes. Although most LOI terms are non-binding, the LOI sets the economics and framework that the purchase agreement will follow, and some provisions, exclusivity, confidentiality, deposit terms, often are binding. A short legal review at the LOI stage costs little and prevents negotiating uphill later.',
    },
    {
      q: 'What does commercial due diligence include?',
      a: 'Typically: title and survey review, lease and estoppel review for tenant-occupied property, service and management contracts, zoning and permitted-use confirmation, certificates of occupancy, environmental reports (Phase I, and Phase II if indicated), and financial diligence you conduct with your accountant. We run the legal workstreams on a checklist you can see and manage the calendar against your study-period deadline.',
    },
    {
      q: 'Should I buy commercial property in an LLC?',
      a: 'Usually there are good reasons to hold investment real estate in a dedicated entity, liability separation, financing requirements, and cleaner partnership mechanics. The right structure depends on your lenders, partners, and tax position, so we coordinate entity structuring with your tax advisor before you go under contract.',
    },
    {
      q: 'Do tenants really need their own lease counsel?',
      a: 'Landlord lease forms are drafted to favor the landlord, and the provisions that hurt tenants, operating expense pass-throughs, relocation clauses, personal guaranties, assignment restrictions, rarely announce themselves. A tenant-side review typically pays for itself in a single negotiated concession.',
    },
    {
      q: 'Can you handle a 1031 exchange?',
      a: 'We coordinate the legal side of 1031 exchanges for investment properties, contract language, deadlines, and documentation, working alongside your qualified intermediary and tax advisor, for both the relinquished and replacement property closings.',
    },
  ],
  'title-closing-services': [
    {
      q: 'What is title insurance, and do I really need an owner’s policy?',
      a: 'Title insurance protects against defects in the ownership history of a property, forged deeds, unknown heirs, unreleased liens, that even a careful search can miss. The lender’s policy your mortgage requires protects only the lender. An owner’s policy, purchased once at closing, protects your own equity for as long as you own the property. For nearly all buyers, we recommend it.',
    },
    {
      q: 'How long does a title search and examination take?',
      a: 'A typical residential search and examination is completed within a few business days of the order, depending on the jurisdiction and the property’s history. Complex files, estates, foreclosures, older unreleased liens, take longer because curative work begins as soon as an issue is found. We order title early precisely so there is time to cure.',
    },
    {
      q: 'What happens if a lien or defect is found on the property?',
      a: 'Most defects are curable: we obtain payoff letters and releases for old mortgages and liens, correct defective deeds, resolve estate gaps, and negotiate holdbacks or title insurance coverage where a full cure is not possible before closing. You receive written findings and a recommended path for each issue, the decision on how to proceed is always yours.',
    },
    {
      q: 'What actually happens at settlement?',
      a: 'Settlement is where every thread of the transaction converges: documents are signed, funds are collected and disbursed through escrow, the deed and deed of trust are executed, and the file goes to recording. We prepare and reconcile the settlement statement in advance, walk you through each document as you sign, and confirm recording and lien releases afterward.',
    },
    {
      q: 'Can you accommodate a rush or same-day closing?',
      a: 'Yes, once title is clear and funds are confirmed, we can accommodate expedited and same-day closings. Tell us your deadline at the first call and we will build the title and settlement timeline backward from it.',
    },
  ],
};

const ko = {
  'residential-real-estate': [
    {
      q: '뉴저지나 워싱턴 DC 지역에서 집을 살 때 꼭 변호사가 필요한가요?',
      a: '법적으로 항상 의무는 아니지만, 타이틀 회사와 정산 대행사는 고객을 대리하지 않습니다, 그들은 거래를 진행할 뿐입니다. 주택 전문 부동산 변호사는 서명 전에 계약서를 검토하고, 수리와 크레딧을 협상하며, 타이틀을 조사하고, 클로징에서 고객의 이익을 보호합니다. 이 규모의 거래에서 감수하는 위험에 비하면 변호사 비용은 크지 않습니다.',
    },
    {
      q: '변호사는 계약서 서명 전에 찾아야 하나요, 서명 후에 찾아야 하나요?',
      a: '가능하면 서명 전입니다. 매매계약서에 서명한 뒤에는 계약서에 포함된 조건(컨틴전시) 범위 안에서만 협상력이 남습니다. 이미 서명하셨다면 즉시 연락 주세요, 검토 기간은 짧지만, 인스펙션이나 서류 검토 기간 내라면 변호사가 조치할 수 있는 경우가 많습니다.',
    },
    {
      q: 'HUD-1, 클로징 공시서(CD), ALTA 정산서는 무엇이 다른가요?',
      a: '모두 클로징의 모든 금액을 항목별로 기록한 정산서입니다. 2015년부터 대부분의 모기지 거래에서 클로징 공시서가 HUD-1을 대체했고, ALTA 정산서는 그와 함께 널리 사용됩니다. 어떤 양식이 사용되든, 클로징 당일 전에 항목별로 검토해 드립니다.',
    },
    {
      q: 'TOPA가 무엇이고 제 거래에도 영향이 있나요?',
      a: '세입자 우선매수권법(TOPA)은 임대 주택이 매각될 때 세입자에게 일정한 권리를 부여하는 워싱턴 DC 법으로, 거래 일정과 필수 통지에 영향을 줄 수 있습니다. 세입자가 거주 중이거나 거주했던 DC 부동산을 사고파는 경우, TOPA 준수 여부를 초기에 검토해야 합니다, DC 클로징이 지연되는 가장 흔한 원인 중 하나입니다.',
    },
    {
      q: '주택 거래 수임료는 어느 정도인가요?',
      a: '대부분의 표준 주택 클로징은 업무 시작 전에 서면으로 합의하는 정액 수임료로 진행되며, 모든 사건은 무료 상담으로 시작합니다. 분쟁이 있는 사안, 상속 관련 문제, 상업용에 가까운 부동산 등 복잡한 사건은 별도로 견적해 드립니다.',
    },
  ],
  'commercial-real-estate': [
    {
      q: '의향서(LOI)도 변호사 검토가 필요한가요?',
      a: '네. LOI 조항 대부분이 구속력이 없더라도, LOI는 이후 매매계약이 따라갈 경제 조건과 틀을 결정하며, 독점 협상·비밀유지·계약금 조항 등 일부는 구속력이 있는 경우가 많습니다. LOI 단계의 짧은 법률 검토는 비용이 적게 들면서 나중에 불리한 협상을 막아 줍니다.',
    },
    {
      q: '상업용 부동산 실사에는 무엇이 포함되나요?',
      a: '일반적으로 타이틀·측량 검토, 세입 부동산의 임대차·임차인 확인서 검토, 서비스·관리 계약, 조닝과 허용 용도 확인, 사용승인서(CO), 환경 보고서(Phase I, 필요시 Phase II), 그리고 회계사와 진행하시는 재무 실사가 포함됩니다. 저희는 고객이 확인할 수 있는 체크리스트로 법률 실사를 진행하고, 실사 기간 마감에 맞춰 일정을 관리합니다.',
    },
    {
      q: '상업용 부동산은 LLC 명의로 사야 하나요?',
      a: '투자용 부동산을 전용 법인으로 보유하면 책임 분리, 융자 요건 충족, 명확한 동업 구조 등 이점이 있는 경우가 많습니다. 적절한 구조는 렌더, 파트너, 세무 상황에 따라 달라지므로, 계약 전에 세무사와 함께 법인 구조를 조율해 드립니다.',
    },
    {
      q: '임차인도 따로 변호사가 필요한가요?',
      a: '임대인의 표준 임대차 양식은 임대인에게 유리하게 작성되어 있으며, 임차인에게 불리한 조항, 운영비 전가, 이전 조항, 개인 보증, 양도 제한, 은 눈에 잘 띄지 않습니다. 임차인 측 검토는 보통 조항 하나만 양보받아도 비용 이상의 값어치를 합니다.',
    },
    {
      q: '1031 교환도 처리하시나요?',
      a: '네. 투자용 부동산의 1031 교환에서 계약 문구, 기한, 서류 등 법률 측면을 담당하며, 양도 부동산과 대체 부동산 양쪽 클로징 모두 중개기관(QI) 및 세무사와 협력하여 진행합니다.',
    },
  ],
  'title-closing-services': [
    {
      q: '타이틀 보험이 무엇이고, 소유자용 보험이 정말 필요한가요?',
      a: '타이틀 보험은 위조 증서, 알려지지 않은 상속인, 말소되지 않은 유치권 등 아무리 꼼꼼한 조사도 놓칠 수 있는 소유권 이력의 하자로부터 보호해 줍니다. 모기지에 요구되는 렌더용 보험은 렌더만 보호합니다. 소유자용 보험은 클로징 때 한 번 가입하면 부동산을 소유하는 동안 고객의 지분을 보호합니다. 거의 모든 매수인에게 권해 드립니다.',
    },
    {
      q: '타이틀 조사와 검토는 얼마나 걸리나요?',
      a: '일반적인 주택 타이틀 조사와 검토는 관할과 부동산 이력에 따라 발주 후 수 영업일 내에 완료됩니다. 상속, 차압, 오래된 미말소 유치권 등이 얽힌 복잡한 파일은 하자 치유 작업이 병행되어 더 걸립니다. 치유할 시간을 확보하기 위해 저희는 타이틀을 일찍 발주합니다.',
    },
    {
      q: '부동산에서 유치권이나 하자가 발견되면 어떻게 되나요?',
      a: '대부분의 하자는 치유할 수 있습니다. 오래된 모기지와 유치권의 상환 확인서·말소 서류를 받아내고, 하자 있는 증서를 정정하며, 상속 공백을 해결하고, 클로징 전 완전한 치유가 어려운 경우에는 홀드백이나 타이틀 보험 보장을 협상합니다. 각 사안에 대해 서면 결과와 권장 방안을 받으시며, 진행 여부의 결정은 언제나 고객의 몫입니다.',
    },
    {
      q: '정산(클로징) 당일에는 실제로 무슨 일이 일어나나요?',
      a: '정산은 거래의 모든 실타래가 모이는 자리입니다. 서류에 서명하고, 에스크로를 통해 자금을 수령·지급하며, 증서와 신탁증서를 작성하고, 파일이 등기소로 넘어갑니다. 저희는 정산서를 미리 준비·검증하고, 서명하시는 서류를 하나하나 설명하며, 이후 등기와 유치권 말소까지 확인합니다.',
    },
    {
      q: '급한 클로징이나 당일 클로징도 가능한가요?',
      a: '네, 타이틀이 정리되고 자금이 확인되면 신속 클로징과 당일 클로징이 가능합니다. 첫 통화에서 마감일을 알려주시면 그 날짜로부터 역산하여 타이틀·정산 일정을 세워 드립니다.',
    },
  ],
};

export const faqsByLocale = { en, ko };

export function getFaqs(locale, slug) {
  return (faqsByLocale[locale] || ko)[slug] || [];
}
