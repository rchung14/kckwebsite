import { Link } from 'react-router';
import JsonLd from './JsonLd.jsx';
import { breadcrumbSchema } from '../seo/schema.js';

// crumbs: [{ name, path }], last crumb is the current page.
export default function Breadcrumbs({ crumbs }) {
  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          {crumbs.map((c, i) => (
            <li key={c.path}>
              {i < crumbs.length - 1 ? (
                <Link to={c.path}>{c.name}</Link>
              ) : (
                <span aria-current="page">{c.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(crumbs)} />
    </>
  );
}
