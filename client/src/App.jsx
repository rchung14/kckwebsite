import { Routes, Route } from 'react-router';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import ServicesHub from './pages/ServicesHub.jsx';
import ServicePage from './pages/ServicePage.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import Accessibility from './pages/Accessibility.jsx';
import NotFound from './pages/NotFound.jsx';

function pageRoutes() {
  return (
    <>
      <Route index element={<Home />} />
      <Route path="services" element={<ServicesHub />} />
      <Route path="services/:slug" element={<ServicePage />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="terms" element={<Terms />} />
      <Route path="accessibility" element={<Accessibility />} />
      <Route path="*" element={<NotFound />} />
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
