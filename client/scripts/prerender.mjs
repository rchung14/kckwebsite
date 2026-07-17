// Build-time prerendering (SSG).
// Renders every route (Korean at the root, English under /en) through the
// SSR bundle and writes static HTML into dist/ with title, meta description,
// canonical, hreflang alternates, and OG tags baked in. Also generates
// sitemap.xml, robots.txt, and 404.html.

import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const { render, routesMeta, SITE_URL } = await import(
  path.resolve('dist-ssr/entry-server.js')
);

const esc = (s) =>
  s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

const abs = (p) => `${SITE_URL}${p === '/' ? '/' : p}`;

function headFor(meta, { noindex = false } = {}) {
  const canonical = abs(meta.path);
  const ogImage = `${SITE_URL}/og-card.png`;
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<link rel="canonical" href="${canonical}" />`,
  ];
  if (meta.alternates) {
    tags.push(
      `<link rel="alternate" hreflang="ko" href="${abs(meta.alternates.ko)}" />`,
      `<link rel="alternate" hreflang="en" href="${abs(meta.alternates.en)}" />`,
      `<link rel="alternate" hreflang="x-default" href="${abs(meta.alternates.ko)}" />`
    );
  }
  if (meta.path === '/' || meta.path === '/en') {
    tags.push(
      `<link rel="preload" as="image" type="image/avif" imagesizes="(max-width: 768px) 100vw, 50vw" imagesrcset="/images/attorney-portrait-hero-800.avif 800w, /images/attorney-portrait-hero-1400.avif 1400w, /images/attorney-portrait-hero-2000.avif 2000w" />`
    );
  }
  if (noindex) tags.push('<meta name="robots" content="noindex" />');
  tags.push(
    `<meta property="og:site_name" content="Kim, Choi &amp; Kim, PC" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="${meta.lang === 'ko' ? 'ko_KR' : 'en_US'}" />`,
    `<meta property="og:locale:alternate" content="${meta.lang === 'ko' ? 'en_US' : 'ko_KR'}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${ogImage}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${ogImage}" />`
  );
  return tags.join('\n    ');
}

function renderPage(routePath, meta, opts) {
  const { html: appHtml } = render(routePath);
  return template
    .replace('<html lang="ko">', `<html lang="${meta.lang}">`)
    .split('<!--app-head-->')
    .join(headFor(meta, opts))
    .split('<!--app-html-->')
    .join(appHtml);
}

function writePage(routePath, html) {
  const outFile =
    routePath === '/'
      ? path.join(dist, 'index.html')
      : path.join(dist, routePath.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html);
  console.log(`✓ prerendered ${routePath}`);
}

for (const meta of routesMeta) {
  writePage(meta.path, renderPage(meta.path, meta));
}

// 404 page (served by Vercel for unknown paths) — Korean, matching the
// default locale, with noindex.
{
  const meta = {
    path: '/404',
    lang: 'ko',
    title: '페이지를 찾을 수 없습니다 | Kim, Choi & Kim, PC',
    description: '요청하신 페이지가 존재하지 않습니다.',
  };
  fs.writeFileSync(
    path.join(dist, '404.html'),
    renderPage('/this-page-does-not-exist', meta, { noindex: true })
  );
  console.log('✓ prerendered /404');
}

// sitemap.xml — public routes in both locales, with hreflang alternates
{
  const today = new Date().toISOString().slice(0, 10);
  const urls = routesMeta
    .filter((r) => r.sitemap)
    .map((r) => {
      const alternates = `
    <xhtml:link rel="alternate" hreflang="ko" href="${abs(r.alternates.ko)}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${abs(r.alternates.en)}"/>`;
      return `  <url>
    <loc>${abs(r.path)}</loc>${alternates}
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`;
    })
    .join('\n');
  fs.writeFileSync(
    path.join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`
  );
  console.log('✓ wrote sitemap.xml');
}

// robots.txt
fs.writeFileSync(
  path.join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
);
console.log('✓ wrote robots.txt');
