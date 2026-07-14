// Single source of truth for site-wide facts and configuration.
// Values marked VERIFY should be confirmed with the firm before launch.

export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://www.kimchoikim.com').replace(/\/+$/, '');

export const FIRM = {
  name: 'Kim, Choi & Kim, PC',
  legalName: 'Law Firm of Kim, Choi & Kim, P.C.',
  tagline: 'Real Estate Law',
  phone: '(201) 363-0010',
  phoneHref: 'tel:+12013630010',
  phoneE164: '+12013630010',
  email: 'kimchoikim@gmail.com',
  address: {
    street: '460 Bergen Blvd, Suite 206',
    city: 'Palisades Park',
    state: 'NJ',
    zip: '07650',
  },
  hours: 'Monday – Friday, 9am – 6pm',
  hoursSchema: 'Mo-Fr 09:00-18:00',
  areaServed: ['New Jersey', 'Washington DC', 'Maryland', 'Virginia'],
};

export const API_URL = import.meta.env.VITE_API_URL || '';
