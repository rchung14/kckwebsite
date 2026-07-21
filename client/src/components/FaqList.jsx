import JsonLd from './JsonLd.jsx';
import { faqSchema } from '../seo/schema.js';
import './FaqList.css';

export default function FaqList({ faqs }) {
  return (
    <div className="faq-list">
      {faqs.map((f) => (
        <details className="faq-item" key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
      <JsonLd data={faqSchema(faqs)} />
    </div>
  );
}
