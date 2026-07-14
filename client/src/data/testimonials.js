// Client testimonials, per locale.
//
// ⚠️ PLACEHOLDER CONTENT, every entry below is an invented example, marked
// with `placeholder: true`, which renders a visible "sample review" badge on
// the site. Replace with real, permissioned client reviews before launch and
// remove the flag. Fabricated reviews on a live law-firm site violate FTC
// rules and attorney-advertising ethics rules.

export const testimonialsByLocale = {
  en: [
    {
      placeholder: true,
      quote:
        'They handled our home purchase with complete professionalism and caught a title issue our agent missed entirely. Worth every penny and then some.',
      name: 'David & Christine',
      meta: 'First-time homebuyers · Fort Lee, NJ',
    },
    {
      placeholder: true,
      quote:
        'We have closed three investment properties with the firm. The level of detail and communication is unmatched, I recommend them to every investor I know.',
      name: 'Elena',
      meta: 'Commercial investor · Palisades Park, NJ',
    },
    {
      placeholder: true,
      quote:
        'Our closing ran into a last-minute lien dispute and it was resolved in two days. Calm, thorough, and decisive, exactly what you want in an attorney.',
      name: 'James',
      meta: 'Property owner · Arlington, VA',
    },
  ],
  ko: [
    {
      placeholder: true,
      quote:
        '주택 구입 전 과정을 정말 전문적으로 처리해 주셨고, 에이전트가 완전히 놓친 타이틀 문제까지 찾아내 주셨습니다. 수임료가 전혀 아깝지 않았습니다.',
      name: 'David & Christine',
      meta: '생애 첫 주택 구입 · 포트리, NJ',
    },
    {
      placeholder: true,
      quote:
        '이 사무소를 통해 투자용 부동산 세 건을 클로징했습니다. 꼼꼼함과 소통은 비교할 곳이 없습니다, 아는 투자자들에게 모두 추천하고 있습니다.',
      name: 'Elena',
      meta: '상업용 부동산 투자자 · 팰리세이즈파크, NJ',
    },
    {
      placeholder: true,
      quote:
        '클로징 직전에 유치권 분쟁이 터졌는데 이틀 만에 해결해 주셨습니다. 침착하고 철저하며 결단력 있는, 변호사에게 바라는 그대로였습니다.',
      name: 'James',
      meta: '부동산 소유주 · 알링턴, VA',
    },
  ],
};

export function getTestimonials(locale) {
  return testimonialsByLocale[locale] || testimonialsByLocale.ko;
}
