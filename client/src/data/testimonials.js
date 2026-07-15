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
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      name: 'Jane Doe',
      meta: 'First-time homebuyers · Fort Lee, NJ',
    },
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      name: 'John Doe',
      meta: 'Commercial investor · Palisades Park, NJ',
    },
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      name: 'Jane Doe',
      meta: 'Property owner · Arlington, VA',
    },
  ],
  ko: [
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      name: 'Jane Doe',
      meta: '생애 첫 주택 구입 · 포트리, NJ',
    },
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      name: 'John Doe',
      meta: '상업용 부동산 투자자 · 팰리세이즈파크, NJ',
    },
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      name: 'Jane Doe',
      meta: '부동산 소유주 · 알링턴, VA',
    },
  ],
};

export function getTestimonials(locale) {
  return testimonialsByLocale[locale] || testimonialsByLocale.ko;
}
