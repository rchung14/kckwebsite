// Renders a JSON-LD structured-data script. JSON-LD is never executed by
// the browser, so it is compatible with a strict script-src CSP.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
