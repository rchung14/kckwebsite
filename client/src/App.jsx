import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';

// Home ships in the main bundle since it's the landing page for both
// locales; every other route code-splits into its own chunk, fetched only
// on navigation. The prerender step (scripts/prerender.mjs) uses
// renderToPipeableStream + onAllReady so these chunks are still fully
// resolved into the static HTML at build time — SEO content isn't affected,
// only what ships to the browser on first load.
const ServicesHub = lazy(() => import('./pages/ServicesHub.jsx'));
const ServicePage = lazy(() => import('./pages/ServicePage.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Privacy = lazy(() => import('./pages/Privacy.jsx'));
const Terms = lazy(() => import('./pages/Terms.jsx'));
const Accessibility = lazy(() => import('./pages/Accessibility.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function lazyRoute(Component) {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}

function pageRoutes() {
  return (
    <>
      <Route index element={<Home />} />
      <Route path="services" element={lazyRoute(ServicesHub)} />
      <Route path="services/:slug" element={lazyRoute(ServicePage)} />
      <Route path="about" element={lazyRoute(About)} />
      <Route path="contact" element={lazyRoute(Contact)} />
      <Route path="privacy" element={lazyRoute(Privacy)} />
      <Route path="terms" element={lazyRoute(Terms)} />
      <Route path="accessibility" element={lazyRoute(Accessibility)} />
      <Route path="*" element={lazyRoute(NotFound)} />
    </>
  );
}

// Korean is the default locale at the root; English mirrors under /en.
export default function App() {
  return (
    <Routes>
      <Route path="/en" element={<Layout locale="en" />}>
        {pageRoutes()}
      </Route>
      <Route element={<Layout locale="ko" />}>{pageRoutes()}</Route>
    </Routes>
  );
}
