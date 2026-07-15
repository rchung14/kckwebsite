// All service content, cards, page copy, and section structure, per locale.
// Section shape: { heading, paragraphs: [string], list?: [string] }
// NOTE: Korean copy is a translation prepared for review, have a native
// Korean speaker at the firm approve it before launch.

const shared = [
  { slug: 'residential-real-estate', path: '/services/residential-real-estate', number: '01' },
  { slug: 'commercial-real-estate', path: '/services/commercial-real-estate', number: '02' },
  { slug: 'title-closing-services', path: '/services/title-closing-services', number: '03' },
];

const en = [
  {
    ...shared[0],
    title: 'Residential Transactions',
    h1: 'New Jersey Residential Real Estate Attorney',
    short:
      'Purchase and sale agreements, contract review, buyer and seller representation, and closing coordination for single-family, condo, and co-op transactions.',
    bullets: ['Contract negotiation', 'Due diligence review', 'Closing representation'],
    intro: [
      'Buying or selling a home is the largest financial transaction most people ever make, and the contract you sign controls everything that follows. A residential real estate attorney reviews and negotiates that contract before you are bound by it, examines the title behind the property, and stands beside you at the settlement table so nothing is signed that you do not fully understand.',
      'Kim, Choi & Kim, PC represents buyers and sellers throughout New Jersey and the greater Washington DC area, as well as first-time homebuyers, downsizing owners, and families purchasing condominiums and co-op units. If you are searching for a real estate attorney who explains every document and returns every call, we would like to earn your business, starting with a free real estate consultation.',
    ],
    sections: [
      {
        heading: 'What we do, step by step',
        paragraphs: [
          'Residential representation follows the life of your transaction. We begin the moment you have an offer in hand, ideally before you sign it, and stay engaged through recording and post-closing follow-up.',
        ],
        list: [
          'Review and negotiate the purchase and sale agreement, including contingencies for financing, inspection, and appraisal',
          'Order and examine the title search, and run lien searches against the property and the parties',
          'Resolve title defects, open permits, unreleased mortgages, and judgment liens before they can delay your closing',
          'Prepare or review the deed, deed of trust, and transfer documents',
          'Review the settlement statement, the ALTA statement or Closing Disclosure (successor to the HUD-1), line by line so every credit, tax proration, and fee is correct',
          'Attend closing with you, explain each document, and confirm funds are disbursed and the deed is recorded',
        ],
      },
      {
        heading: 'Contract review and negotiation',
        paragraphs: [
          'Most residential disputes trace back to contract terms that were never negotiated: an inspection contingency that expired too soon, a financing deadline that did not match the lender’s timeline, or a seller credit that was promised but never written down. As your contract review attorney, we mark up the agreement in plain language, explain what each provision costs or protects, and negotiate revisions with the other side before you are committed.',
          'For sellers, we prepare and review counteroffers, evaluate the buyer’s financing and earnest money terms, and draft rider language that limits post-closing exposure.',
        ],
      },
      {
        heading: 'Specialized residential matters',
        paragraphs: ['Some transactions carry extra layers of review, and we handle them regularly:'],
        list: [
          'First-time homebuyer representation, extra time walking through every document, deadline, and dollar',
          'Condominium and co-op purchases, resale packages, board approval, bylaws, and assessment review',
          'Refinancing representation, reviewing the new deed of trust and payoff of the old loan',
          '1031 exchanges, coordinating timelines and documentation with your qualified intermediary and tax advisor',
          'For-sale-by-owner (FSBO) transactions, full contract drafting when no agent is involved',
        ],
      },
      {
        heading: 'New Jersey, DC, Maryland & Virginia context',
        paragraphs: [
          'Local rules shape every closing. In New Jersey, most contracts prepared by real estate agents are subject to a three-day attorney review period, during which your attorney can revise or cancel the contract, and sellers should plan for the realty transfer fee at closing. In the District of Columbia, transfer and recordation taxes are a significant closing cost, and sales of rental property can trigger tenant rights under the Tenant Opportunity to Purchase Act (TOPA) that must be addressed before a sale can close. Maryland layers county-level transfer taxes on top of state taxes, with programs that can reduce costs for qualifying first-time homebuyers. Virginia closings are governed by wet settlement requirements that control when funds must be disbursed. A property attorney who works in these jurisdictions daily will spot the local issue before it becomes a delay.',
        ],
      },
      {
        heading: 'What you receive',
        paragraphs: [
          'Every residential client gets a single attorney point of contact, a marked-up contract with plain-English explanations, written title review findings, a reconciled settlement statement before closing day, and confirmation once your deed is recorded. Flat-fee pricing is available for most standard residential closings, and every engagement begins with a free consultation.',
        ],
      },
    ],
  },
  {
    ...shared[1],
    title: 'Commercial Real Estate',
    h1: 'New Jersey Commercial Real Estate Lawyer',
    short:
      'Acquisitions, dispositions, leasing, and development projects for commercial clients, from small investors to institutional funds.',
    bullets: ['Acquisition & disposition', 'Commercial leasing', 'Development & zoning'],
    intro: [
      'Commercial real estate rewards preparation and punishes assumptions. Whether you are acquiring your first investment property, negotiating a lease for your business, or repositioning a mixed-use building, the documents are longer, the diligence is deeper, and the consequences of a missed issue are measured in years, not weeks.',
      'Kim, Choi & Kim, PC represents investors, owner-operators, small businesses, and developers in New Jersey and the greater Washington DC area. We combine boutique-firm responsiveness with transaction experience across purchases, sales, leasing, and development, and we scale our involvement to the size of your deal, so a small retail lease is not billed like an institutional acquisition.',
    ],
    sections: [
      {
        heading: 'From letter of intent to closing',
        paragraphs: [
          'The letter of intent (LOI) sets the economics of your deal before lawyers are usually involved, which is exactly why it deserves legal review. We review or draft LOIs so the binding and non-binding terms are clear, then carry the transaction forward:',
        ],
        list: [
          'Draft and negotiate the purchase and sale agreement, including representations, warranties, and closing conditions',
          'Manage the due diligence period, title, survey, leases, service contracts, and estoppel certificates',
          'Coordinate environmental review (Phase I, and Phase II where indicated) with your consultants',
          'Review zoning and land use constraints, certificates of occupancy, and permitted-use questions',
          'Negotiate title insurance coverage and endorsements appropriate to commercial transactions',
          'Close the transaction and confirm recording, releases, and post-closing deliverables',
        ],
      },
      {
        heading: 'Commercial leasing, landlord and tenant',
        paragraphs: [
          'A commercial lease is a long-term business contract that determines your occupancy costs, build-out rights, and exit options. We represent both landlords and tenants in office, retail, restaurant, warehouse, and mixed-use leasing. For tenants, we focus on the provisions that surface later: operating expense pass-throughs and CAM reconciliation, assignment and subletting rights, personal guaranty limits, exclusivity, and renewal options. For landlords, we build lease forms that protect the asset and survive tenant turnover.',
        ],
      },
      {
        heading: 'Entity structuring and investment transactions',
        paragraphs: [
          'How you take title matters as much as what you buy. We advise on entity structuring for real estate investment, single-asset LLCs, joint venture arrangements, and operating agreements that spell out capital calls, distributions, and exit mechanics before partners disagree. For investors exchanging one property for another, we coordinate 1031 exchange documentation and deadlines with your qualified intermediary so tax deferral is not lost to a paperwork error.',
        ],
      },
      {
        heading: 'Mixed-use and development projects',
        paragraphs: [
          'Mixed-use properties combine the diligence burdens of every asset class they contain: residential tenant protections, retail lease obligations, and commercial financing requirements in a single building. We negotiate purchase and sale agreements for mixed-use properties, review existing leases and tenant files, and flag the regulatory issues, including tenant rights on the residential side in the District, that affect valuation and timing. For development work, we coordinate with land use counsel and consultants on zoning, entitlements, and construction-phase agreements.',
        ],
      },
      {
        heading: 'What you receive',
        paragraphs: [
          'Commercial clients receive a deal checklist maintained from LOI through closing, marked-up documents with business-term summaries you can forward to partners and lenders, a due diligence memorandum identifying issues by severity, and direct attorney access throughout, no associates learning on your file. Initial consultations are free, and fee structures (hourly or fixed-fee by phase) are agreed in writing before work begins.',
        ],
      },
    ],
  },
  {
    ...shared[2],
    title: 'Title & Closing Services',
    h1: 'New Jersey Title & Closing Attorney',
    short:
      'Thorough title examination, lien resolution, and closing services to ensure a clean transfer of ownership and protect your investment from future claims.',
    bullets: ['Title search & clearance', 'Lien & encumbrance review', 'Deed preparation'],
    intro: [
      'Title is the legal foundation of every real estate purchase. If the seller cannot convey clean title, because of an old mortgage that was never released, a contractor’s lien, a boundary dispute, or an heir with an unresolved claim, the problem becomes yours the moment you close. Title and closing work exists to find those problems first and fix them before your money moves.',
      'Kim, Choi & Kim, PC provides title and closing attorney services for buyers, sellers, lenders, and investors in New Jersey and the greater Washington DC area. We handle the full arc: title search and examination, title insurance, curative work, escrow, settlement coordination, and recording, with an attorney, not a processor, reviewing your file.',
    ],
    sections: [
      {
        heading: 'Title search and examination',
        paragraphs: [
          'A title search assembles the recorded history of a property, deeds, mortgages, liens, easements, and court filings. Examination is the legal judgment applied to that history: which items actually affect your ownership, which must be released before closing, and which can be insured over. We examine every search personally and give you written findings in plain language, so “subject to matters of record” never hides a surprise.',
        ],
      },
      {
        heading: 'Title insurance, owner’s and lender’s policies',
        paragraphs: [
          'Your lender will require a lender’s title insurance policy, but that policy protects only the lender. An owner’s policy, purchased once, at closing, for a one-time premium, protects your equity against covered title defects for as long as you own the property, including claims that no search could have revealed, such as forged documents or unknown heirs. We explain the coverage, review exceptions, and negotiate endorsements where the transaction warrants them.',
        ],
      },
      {
        heading: 'Clearing title defects, liens, and encumbrances',
        paragraphs: ['Most title problems are curable when someone takes ownership of the cure. Common defects we resolve:'],
        list: [
          'Unreleased mortgages and deeds of trust from prior sales or refinances',
          'Judgment liens, tax liens, and mechanic’s liens against the property or a party',
          'Estate and inheritance issues, missing probate, unknown or unlocated heirs',
          'Errors in prior deeds: misspelled names, wrong legal descriptions, defective acknowledgments',
          'Open permits, unpaid utility and municipal charges, and HOA or condominium assessments',
        ],
      },
      {
        heading: 'Settlement, escrow, and recording',
        paragraphs: [
          'On closing day, we coordinate the settlement itself: preparing and reviewing the ALTA settlement statement and Closing Disclosure under RESPA, holding and disbursing funds through escrow, preparing the deed and transfer documents, collecting payoffs and releases, and recording with the proper land records office. After closing we track the recorded deed and release of prior liens, and send you final documents, post-closing follow-up that many settlement shops skip.',
          'When a deal has to move fast, we can accommodate expedited and same-day closings once title is clear and funds are confirmed.',
        ],
      },
      {
        heading: 'What you receive',
        paragraphs: [
          'Every title and closing client receives a written title review, a settlement statement reconciled before, not at, the closing table, coordinated escrow and disbursement, recorded documents delivered with a closing binder, and a single attorney contact from title order through post-closing. Real estate closing services are offered at transparent, quoted fees, and consultations are always free.',
        ],
      },
    ],
  },
];

const ko = [
  {
    ...shared[0],
    title: '주택 매매 (Residential)',
    h1: '뉴저지 주택 매매 전문 변호사',
    short:
      '단독주택, 콘도, 코업(co-op) 거래를 위한 매매계약서 검토와 협상, 매수인·매도인 대리, 클로징 진행까지 책임집니다.',
    bullets: ['계약 협상', '실사(Due Diligence) 검토', '클로징 대리'],
    intro: [
      '주택 매매는 대부분의 사람에게 일생에서 가장 큰 금융 거래이며, 서명하는 계약서가 그 이후의 모든 것을 결정합니다. 주택 전문 부동산 변호사는 계약서에 법적으로 구속되기 전에 계약 조건을 검토·협상하고, 해당 부동산의 타이틀(소유권)을 조사하며, 클로징 테이블에서 고객 곁을 지키면서 이해하지 못한 서류에 서명하는 일이 없도록 합니다.',
      'Kim, Choi & Kim, PC는 뉴저지와 워싱턴 DC 지역 전역에서 매수인과 매도인을 대리하며, 생애 첫 주택 구입자, 주택 규모를 줄이는 분들, 콘도·코업을 구입하는 가족들을 돕고 있습니다. 모든 서류를 설명해 주고 모든 전화에 회신하는 변호사를 찾고 계시다면, 무료 상담부터 시작해 보세요.',
    ],
    sections: [
      {
        heading: '단계별 업무 내용',
        paragraphs: [
          '주택 거래 대리는 거래의 전 과정을 함께합니다. 오퍼를 받은 순간, 가능하면 서명하시기 전에, 시작하여, 등기와 클로징 후 사후 관리까지 책임집니다.',
        ],
        list: [
          '융자·인스펙션·감정평가 조건(컨틴전시)을 포함한 매매계약서 검토 및 협상',
          '타이틀 조사 발주·검토 및 부동산과 당사자에 대한 유치권(lien) 조사',
          '클로징을 지연시킬 수 있는 타이틀 하자, 미종결 퍼밋, 말소되지 않은 모기지, 판결 유치권의 사전 해결',
          '증서(Deed), 신탁증서(Deed of Trust), 소유권 이전 서류의 작성 및 검토',
          '정산서, ALTA 정산서 및 클로징 공시서(Closing Disclosure, 구 HUD-1), 를 항목별로 검토하여 크레딧, 세금 정산, 수수료의 정확성 확인',
          '클로징에 동석하여 서류를 하나하나 설명하고, 자금 지급과 증서 등기 완료까지 확인',
        ],
      },
      {
        heading: '계약서 검토와 협상',
        paragraphs: [
          '주택 거래 분쟁의 대부분은 협상되지 않은 계약 조항에서 시작됩니다. 너무 일찍 만료된 인스펙션 조건, 렌더의 일정과 맞지 않는 융자 기한, 구두로만 약속되고 서면에 남지 않은 셀러 크레딧이 그 예입니다. 저희는 계약서를 쉬운 언어로 짚어 드리고, 각 조항이 무엇을 보호하고 어떤 비용을 수반하는지 설명하며, 확정되기 전에 상대방과 수정 협상을 진행합니다.',
          '매도인을 위해서는 카운터오퍼를 준비·검토하고, 매수인의 융자 조건과 계약금 조건을 평가하며, 클로징 이후의 책임을 제한하는 특약(라이더) 문구를 작성합니다.',
        ],
      },
      {
        heading: '특수한 주택 거래',
        paragraphs: ['추가적인 검토가 필요한 거래도 일상적으로 처리하고 있습니다:'],
        list: [
          '생애 첫 주택 구입자 대리, 모든 서류와 기한, 비용 항목을 충분한 시간을 들여 설명',
          '콘도·코업 구입, 리세일 패키지, 이사회 승인, 관리규약 및 관리비 검토',
          '재융자(리파이낸싱) 대리, 새 신탁증서 검토 및 기존 대출 상환 확인',
          '1031 교환, 중개기관(QI) 및 세무사와 일정·서류 조율',
          '중개인 없는 직거래(FSBO), 계약서 전체 작성',
        ],
      },
      {
        heading: '뉴저지 · DC · 메릴랜드 · 버지니아 지역 법률 특성',
        paragraphs: [
          '클로징은 관할별 규정의 영향을 크게 받습니다. 뉴저지에서는 부동산 중개인이 작성한 계약서에 3일간의 변호사 검토 기간(attorney review)이 적용되어 이 기간에 변호사가 계약을 수정하거나 취소할 수 있으며, 매도인은 클로징 시 부동산 양도세(realty transfer fee)를 부담합니다. 워싱턴 DC에서는 양도세와 등기세(transfer & recordation tax)가 상당한 클로징 비용이며, 임대 부동산 매각 시 세입자 우선매수권법(TOPA)에 따른 세입자 권리를 매각 전에 반드시 처리해야 합니다. 메릴랜드는 주 세금에 카운티별 양도세가 더해지며, 생애 첫 주택 구입자를 위한 감면 제도가 있습니다. 버지니아의 클로징은 자금 지급 시기를 규율하는 즉시정산법(wet settlement)의 적용을 받습니다. 이 지역에서 매일 일하는 부동산 변호사는 이런 지역 이슈를 지연 사유가 되기 전에 발견합니다.',
        ],
      },
      {
        heading: '고객이 받으시는 것',
        paragraphs: [
          '모든 주택 거래 고객에게는 담당 변호사 단일 창구, 쉬운 설명이 달린 계약서 검토본, 서면 타이틀 검토 결과, 클로징 당일 이전에 정산 완료된 정산서, 그리고 증서 등기 완료 확인이 제공됩니다. 대부분의 표준 주택 클로징은 정액 수임료로 진행되며, 모든 사건은 무료 상담으로 시작합니다.',
        ],
      },
    ],
  },
  {
    ...shared[1],
    title: '상업용 부동산 (Commercial)',
    h1: '뉴저지 상업용 부동산 변호사',
    short:
      '소규모 투자자부터 기관 투자자까지, 상업용 부동산의 매입·매각, 임대차, 개발 프로젝트를 자문합니다.',
    bullets: ['매입 & 매각', '상업용 임대차', '개발 & 용도지역(조닝)'],
    intro: [
      '상업용 부동산은 준비된 만큼 보상하고, 안일한 가정에는 대가를 치르게 합니다. 첫 투자용 부동산을 매입하시든, 사업장 임대차 계약을 협상하시든, 복합용도 건물을 리포지셔닝하시든, 서류는 더 길고, 실사는 더 깊으며, 놓친 문제의 대가는 몇 주가 아니라 몇 년 단위로 돌아옵니다.',
      'Kim, Choi & Kim, PC는 뉴저지와 워싱턴 DC 지역의 투자자, 자영 사업주, 중소기업, 개발업자를 위한 상업용 부동산 법률 자문을 제공합니다. 부티크 로펌의 신속한 대응과 매입·매각·임대차·개발 전반의 거래 경험을 결합하고, 거래 규모에 맞게 업무 범위를 조정하므로 소규모 상가 임대차에 기관급 수임료가 청구되는 일은 없습니다.',
    ],
    sections: [
      {
        heading: '의향서(LOI)부터 클로징까지',
        paragraphs: [
          '의향서(LOI)는 변호사가 참여하기 전에 거래의 경제 조건을 결정하는 경우가 많습니다, 바로 그렇기 때문에 법률 검토가 필요합니다. 저희는 구속력 있는 조항과 없는 조항을 명확히 하여 LOI를 검토·작성한 뒤, 거래를 다음 단계로 이끌어 갑니다:',
        ],
        list: [
          '진술·보증 및 클로징 조건을 포함한 매매계약서 작성 및 협상',
          '실사 기간 관리, 타이틀, 측량, 임대차계약, 서비스 계약, 임차인 확인서(estoppel)',
          '환경 실사(Phase I, 필요시 Phase II) 컨설턴트 조율',
          '용도지역(조닝)·토지이용 제한, 사용승인서(CO), 허용 용도 검토',
          '상업 거래에 적합한 타이틀 보험 보장 범위와 특약(endorsement) 협상',
          '클로징 진행 및 등기, 말소, 클로징 후 인도 서류 확인',
        ],
      },
      {
        heading: '상업용 임대차, 임대인과 임차인',
        paragraphs: [
          '상업용 임대차 계약은 점유 비용, 인테리어 공사 권리, 계약 종료 옵션을 결정하는 장기 사업 계약입니다. 저희는 오피스, 리테일, 요식업, 창고, 복합용도 임대차에서 임대인과 임차인 양쪽을 대리합니다. 임차인 측에서는 나중에 문제가 되는 조항, 운영비 전가와 CAM 정산, 양도·전대 권리, 개인 보증 한도, 독점 조항, 갱신 옵션, 에 집중하고, 임대인 측에서는 자산을 보호하고 임차인이 바뀌어도 유지되는 임대차 양식을 구축합니다.',
        ],
      },
      {
        heading: '법인 구조와 투자 거래',
        paragraphs: [
          '무엇을 사느냐만큼 어떤 명의로 사느냐도 중요합니다. 단일 자산 LLC, 합작투자(JV) 구조, 출자·분배·탈퇴 조건을 미리 정하는 운영계약서 등 부동산 투자를 위한 법인 구조를 자문합니다. 부동산을 교체 취득하는 투자자를 위해서는 1031 교환의 서류와 기한을 중개기관(QI)과 조율하여, 서류상 실수로 과세 이연 혜택을 잃지 않도록 합니다.',
        ],
      },
      {
        heading: '복합용도 및 개발 프로젝트',
        paragraphs: [
          '복합용도 부동산은 그 안에 포함된 모든 자산 유형의 실사 부담을 동시에 안고 있습니다, 한 건물 안에 주거 세입자 보호, 리테일 임대차 의무, 상업 융자 요건이 공존합니다. 저희는 복합용도 부동산의 매매계약을 협상하고, 기존 임대차와 세입자 파일을 검토하며, 평가액과 일정에 영향을 주는 규제 이슈, DC 주거 부분의 세입자 권리를 포함하여, 를 짚어 드립니다. 개발 업무에서는 조닝, 인허가, 시공 단계 계약에 관해 토지이용 전문 변호사 및 컨설턴트와 협력합니다.',
        ],
      },
      {
        heading: '고객이 받으시는 것',
        paragraphs: [
          '상업 거래 고객에게는 LOI부터 클로징까지 관리되는 거래 체크리스트, 파트너와 렌더에게 바로 전달할 수 있는 핵심 조건 요약이 달린 검토 서류, 사안별 중요도가 표시된 실사 보고서, 그리고 전 과정에서 변호사와의 직접 소통이 제공됩니다. 초기 상담은 무료이며, 수임료 구조(시간제 또는 단계별 정액제)는 업무 시작 전에 서면으로 합의합니다.',
        ],
      },
    ],
  },
  {
    ...shared[2],
    title: '타이틀 & 클로징',
    h1: '뉴저지 타이틀 & 클로징 변호사',
    short:
      '철저한 타이틀 조사와 유치권 해결, 클로징 서비스로 깨끗한 소유권 이전과 고객의 투자를 보호합니다.',
    bullets: ['타이틀 조사 & 하자 정리', '유치권·부담권 검토', '증서(Deed) 작성'],
    intro: [
      '타이틀(소유권)은 모든 부동산 거래의 법적 기초입니다. 말소되지 않은 오래된 모기지, 시공업자 유치권, 경계 분쟁, 정리되지 않은 상속인의 권리 주장 때문에 매도인이 깨끗한 소유권을 넘기지 못한다면, 클로징하는 순간 그 문제는 고객의 문제가 됩니다. 타이틀·클로징 업무는 돈이 움직이기 전에 그 문제들을 먼저 찾아 해결하기 위해 존재합니다.',
      'Kim, Choi & Kim, PC는 뉴저지와 워싱턴 DC 지역의 매수인, 매도인, 렌더, 투자자를 위해 타이틀 조사와 검토, 타이틀 보험, 하자 치유, 에스크로, 정산 조율, 등기까지 전 과정을 처리합니다, 프로세서가 아닌 변호사가 직접 파일을 검토합니다.',
    ],
    sections: [
      {
        heading: '타이틀 조사와 검토',
        paragraphs: [
          '타이틀 조사는 부동산의 등기 이력, 증서, 모기지, 유치권, 지역권, 법원 기록, 을 모으는 작업입니다. 검토(examination)는 그 이력에 법적 판단을 더하는 일입니다: 어떤 항목이 실제로 소유권에 영향을 주는지, 어떤 것을 클로징 전에 말소해야 하는지, 어떤 것은 보험으로 처리할 수 있는지. 저희는 모든 조사 결과를 변호사가 직접 검토하고 쉬운 언어의 서면 보고서로 알려 드리므로, "등기부상 기재 사항에 따름"이라는 문구 뒤에 숨는 변수가 없습니다.',
        ],
      },
      {
        heading: '타이틀 보험, 소유자용과 렌더용',
        paragraphs: [
          '렌더는 렌더용 타이틀 보험을 요구하지만, 그 보험은 렌더만 보호합니다. 소유자용 보험(owner’s policy)은 클로징 때 한 번의 보험료로 가입하면, 위조 서류나 알려지지 않은 상속인처럼 어떤 조사로도 발견할 수 없었던 하자를 포함해, 부동산을 소유하는 동안 고객의 지분을 보호합니다. 저희는 보장 내용을 설명하고 예외 조항을 검토하며, 거래에 필요한 경우 특약을 협상합니다.',
        ],
      },
      {
        heading: '타이틀 하자, 유치권, 부담권 정리',
        paragraphs: ['대부분의 타이틀 문제는 누군가 책임지고 처리하면 치유될 수 있습니다. 자주 해결하는 하자 유형:'],
        list: [
          '과거 매매나 재융자에서 말소되지 않은 모기지·신탁증서',
          '부동산 또는 당사자에 대한 판결 유치권, 세금 유치권, 시공 유치권(mechanic’s lien)',
          '상속 문제, 누락된 유산 검인(probate), 소재 불명 상속인',
          '과거 증서의 오류, 이름 오기, 잘못된 지번(법적 표시), 하자 있는 공증',
          '미종결 퍼밋, 미납 공과금·지방세, HOA 및 콘도 관리비',
        ],
      },
      {
        heading: '정산, 에스크로, 등기',
        paragraphs: [
          '클로징 당일에는 정산 자체를 총괄합니다: RESPA에 따른 ALTA 정산서와 클로징 공시서 작성·검토, 에스크로를 통한 자금 보관과 지급, 증서와 이전 서류 준비, 대출 상환금과 말소 서류 수령, 관할 등기소 등기까지. 클로징 후에는 등기된 증서와 기존 유치권 말소를 추적하여 최종 서류를 보내 드립니다, 많은 정산 업체가 생략하는 사후 관리입니다.',
          '거래를 서둘러야 할 때는, 타이틀이 정리되고 자금이 확인되는 대로 신속 클로징과 당일 클로징도 가능합니다.',
        ],
      },
      {
        heading: '고객이 받으시는 것',
        paragraphs: [
          '모든 타이틀·클로징 고객에게는 서면 타이틀 검토 보고서, 클로징 테이블이 아닌 그 이전에 정산 완료된 정산서, 에스크로 자금 관리, 클로징 바인더와 함께 전달되는 등기 서류, 그리고 타이틀 발주부터 사후 관리까지 담당 변호사 단일 창구가 제공됩니다. 클로징 서비스는 투명한 사전 견적 수임료로 제공되며, 상담은 언제나 무료입니다.',
        ],
      },
    ],
  },
];

export const servicesByLocale = { en, ko };

export function getServices(locale) {
  return servicesByLocale[locale] || ko;
}

export function getService(locale, slug) {
  return getServices(locale).find((s) => s.slug === slug);
}

// English list, used for language-neutral structured data.
export const services = en;
