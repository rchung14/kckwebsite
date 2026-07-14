// JSON-LD structured data builders.
import { SITE_URL, FIRM } from './site.js';
import { services } from '../data/services.js';

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: FIRM.address.street,
  addressLocality: FIRM.address.city,
  addressRegion: FIRM.address.state,
  postalCode: FIRM.address.zip,
  addressCountry: 'US',
};

export function legalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LegalService', 'LocalBusiness'],
    '@id': `${SITE_URL}/#firm`,
    name: FIRM.name,
    description:
      'Real estate law firm based in Palisades Park, New Jersey, serving clients statewide and in the Washington DC area: residential transactions, commercial real estate, and title & closing services.',
    url: SITE_URL,
    telephone: FIRM.phoneE164,
    email: FIRM.email,
    address: postalAddress,
    openingHours: FIRM.hoursSchema,
    areaServed: FIRM.areaServed,
    knowsLanguage: ['en', 'ko'],
    image: `${SITE_URL}/og-card.png`,
    priceRange: '$$',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Legal Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          url: `${SITE_URL}${s.path}`,
        },
      })),
    },
  };
}

export function serviceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    description: service.short,
    url: `${SITE_URL}${service.path}`,
    provider: { '@id': `${SITE_URL}/#firm` },
    areaServed: FIRM.areaServed,
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function personSchema(attorney) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: attorney.name,
    jobTitle: 'Attorney',
    worksFor: { '@type': 'Organization', name: FIRM.name },
    knowsAbout: ['Real Estate Law', 'Title Insurance', 'Commercial Real Estate'],
  };
  if (attorney.education) schema.alumniOf = attorney.education.school;
  return schema;
}

// crumbs: [{ name, path }]
export function breadcrumbSchema(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path === '/' ? '' : c.path}`,
    })),
  };
}
