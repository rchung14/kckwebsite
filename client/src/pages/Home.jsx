import { Link } from 'react-router';
import Eyebrow from '../components/Eyebrow.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { getServices } from '../data/services.js';
import { getTestimonials } from '../data/testimonials.js';
import { getAttorneys } from '../data/attorneys.js';
import { FIRM } from '../seo/site.js';
import { useLocale, localePath } from '../i18n/LocaleContext.jsx';
import { t } from '../i18n/strings.js';

export default function Home() {
  const locale = useLocale();
  const str = t(locale);
  const h = str.home;
  const services = getServices(locale);
  const testimonials = getTestimonials(locale);
  const [leadAttorney] = getAttorneys(locale);
  const p = (path) => localePath(locale, path);

  return (
    <>
      {/* ═══ Hero ═══ */}
      <section className="hero">
        <div className="hero-content">
          <div className="reveal">
            <Eyebrow>{h.eyebrow}</Eyebrow>
          </div>
          <h1 className="hero-title reveal-2">
            {h.h1a}
            <br />
            <em>{h.h1b}</em>
          </h1>
          <p className="hero-body reveal-3">{h.body}</p>
          <div className="hero-actions reveal-3">
            <Link to={p('/contact')} className="btn-dark btn-hero">
              {h.cta}
            </Link>
            <a href={FIRM.phoneHref} className="hero-phone">
              <span className="hero-phone-label">{h.callDirectly}</span>
              <span className="hero-phone-number">{FIRM.phone}</span>
            </a>
          </div>
          <div className="trust-bar">
            {h.stats.map((stat, i) => (
              <div key={stat.label} className="trust-group">
                {i > 0 && <div className="trust-divider" />}
                <div className="trust-stat">
                  <div className="trust-number">{stat.number}</div>
                  <div className="trust-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <picture>
            <source
              type="image/avif"
              sizes="(max-width: 768px) 100vw, 50vw"
              srcSet="/images/attorney-portrait-hero-800.avif 800w, /images/attorney-portrait-hero-1400.avif 1400w, /images/attorney-portrait-hero-2000.avif 2000w"
            />
            <source
              type="image/webp"
              sizes="(max-width: 768px) 100vw, 50vw"
              srcSet="/images/attorney-portrait-hero-800.webp 800w, /images/attorney-portrait-hero-1400.webp 1400w, /images/attorney-portrait-hero-2000.webp 2000w"
            />
            <img
              className="hero-photo"
              src="/images/attorney-portrait-hero.webp"
              width="1040"
              height="1300"
              alt={h.heroAlt}
              fetchPriority="high"
            />
          </picture>
        </div>
      </section>

      {/* ═══ Services ═══ */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <div>
              <Eyebrow>{h.servicesEyebrow}</Eyebrow>
              <h2 className="section-title">{h.servicesTitle}</h2>
            </div>
            <Link to={p('/services')} className="link-gold">
              {h.allServices}
            </Link>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <div key={s.slug} className={i === 1 ? 'service-card service-card-featured' : 'service-card'}>
                <div className="service-number">{s.number}</div>
                <h3>
                  <Link to={p(s.path)}>{s.title}</Link>
                </h3>
                <p>{s.short}</p>
                <ul>
                  {s.bullets.map((b) => (
                    <li key={b}>
                      <span>—</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to={p(s.path)} className="link-gold service-card-link">
                  {h.learnMore}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ About preview ═══ */}
      <section id="about" className="about">
        <div className="container about-grid">
          <div className="about-portrait">
            <div className="portrait-frame">
              <picture>
                <source srcSet="/images/attorney-headshot-about.avif" type="image/avif" />
                <img
                  src="/images/attorney-headshot-about.webp"
                  width={leadAttorney.photo.width}
                  height={leadAttorney.photo.height}
                  alt={leadAttorney.photo.alt}
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="nameplate">
              <div className="nameplate-name">
                {leadAttorney.name}, {leadAttorney.suffix}
              </div>
              <div className="nameplate-title">{h.nameplateTitle}</div>
            </div>
          </div>

          <div className="about-bio">
            <Eyebrow>{h.aboutEyebrow}</Eyebrow>
            <h2 className="section-title about-title">
              {h.aboutTitle[0]}
              <br />
              {h.aboutTitle[1]}
            </h2>
            <p>{h.aboutP1}</p>
            <p>
              {h.aboutP2}
              <Link to={p('/about')} className="text-link">
                {h.meetAttorneys}
              </Link>
            </p>

            <div className="credentials">
              <div className="credential-cell">
                <div className="credential-label">{h.credentials.education}</div>
                <div className="credential-value">{h.credentials.educationV}</div>
              </div>
              <div className="credential-cell">
                <div className="credential-label">{h.credentials.admitted}</div>
                <div className="credential-value">{h.credentials.admittedV}</div>
              </div>
              <div className="credential-cell">
                <div className="credential-label">{h.credentials.languages}</div>
                <div className="credential-value">{h.credentials.languagesV}</div>
              </div>
              <div className="credential-cell">
                <div className="credential-label">{h.credentials.consult}</div>
                <div className="credential-value">{h.credentials.consultV}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials: hidden until real reviews replace the placeholders */}
      {testimonials.length > 0 && (
        <section id="testimonials" className="testimonials">
          <div className="container">
            <div className="testimonials-header">
              <Eyebrow centered>{h.reviewsEyebrow}</Eyebrow>
              <h2 className="section-title">{h.reviewsTitle}</h2>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((tm) => (
                <div className="review-card" key={tm.name}>
                  <div className="review-stars" aria-label={str.reviews.stars}>
                    ★★★★★
                  </div>
                  <p className="review-quote">"{tm.quote}"</p>
                  <div className="review-footer">
                    <div className="review-name">{tm.name}</div>
                    <div className="review-meta">{tm.meta}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ Contact ═══ */}
      <section id="contact" className="contact">
        <div className="container contact-grid">
          <div className="contact-info">
            <Eyebrow>{h.contactEyebrow}</Eyebrow>
            <h2 className="contact-title">
              {h.contactTitle[0]}
              <br />
              <em>{h.contactTitle[1]}</em>
            </h2>
            <p className="contact-body">{h.contactBody}</p>

            <div className="contact-details">
              <div>
                <div className="contact-label">{h.phone}</div>
                <div className="contact-phone">
                  <a href={FIRM.phoneHref}>{FIRM.phone}</a>
                </div>
              </div>
              <div>
                <div className="contact-label">{h.email}</div>
                <div className="contact-value">
                  <a href={`mailto:${FIRM.email}`}>{FIRM.email}</a>
                </div>
              </div>
              <div>
                <div className="contact-label">{h.office}</div>
                <div className="contact-value">
                  {FIRM.address.street}
                  <br />
                  {FIRM.address.city}, {FIRM.address.state} {FIRM.address.zip}
                </div>
              </div>
              <div>
                <div className="contact-label">{h.hours}</div>
                <div className="contact-value">{h.hoursValue}</div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
