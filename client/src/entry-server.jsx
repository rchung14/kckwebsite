import { StrictMode } from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { PassThrough } from 'node:stream';
import { StaticRouter } from 'react-router';
import App from './App.jsx';

export { routesMeta } from './seo/routesMeta.js';
export { SITE_URL } from './seo/site.js';

// Route-level code splitting (see App.jsx) means non-home pages are lazy
// components. renderToString can't wait for those chunks to resolve — it
// bakes in whatever is ready synchronously, which for a lazy route is the
// Suspense fallback, not the real content. renderToPipeableStream's
// onAllReady fires only once every Suspense boundary (including lazy route
// chunks) has resolved, so the collected HTML has full content, same as
// before code splitting was introduced.
export function render(url) {
  return new Promise((resolve, reject) => {
    const passThrough = new PassThrough();
    const chunks = [];
    passThrough.on('data', (chunk) => chunks.push(chunk));
    passThrough.on('end', () => resolve({ html: Buffer.concat(chunks).toString('utf8') }));
    passThrough.on('error', reject);

    const { pipe } = renderToPipeableStream(
      <StrictMode>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </StrictMode>,
      {
        onAllReady() {
          pipe(passThrough);
        },
        onError(err) {
          reject(err);
        },
      }
    );
  });
}
