import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.jsx';

// The prerendered head only carries a fetch hint for the webfont CSS
// (<link rel="preload" as="style">) — no inline onload handler, since the
// deployed CSP is `script-src 'self'` and blocks inline event handlers.
// This external script satisfies 'self', so it does the rel="stylesheet"
// swap-in that the inline handler used to do.
const fontsPreload = document.querySelector('link[rel="preload"][as="style"][href*="fonts"]');
if (fontsPreload && !document.querySelector(`link[rel="stylesheet"][href="${fontsPreload.href}"]`)) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = fontsPreload.href;
  document.head.appendChild(link);
}
import './styles/tokens.css';
import './styles/font-fallbacks.css';
import './styles/shared.css';
import './components/Nav.css';
import './pages/Home.css';
import './styles/PageHero.css';
import './pages/ServicesHub.css';
import './pages/ServicePage.css';
import './components/FaqList.css';
import './styles/AttorneyProfile.css';
import './pages/About.css';
import './styles/ContactPanel.css';
import './components/ContactForm.css';
import './components/CtaBand.css';
import './styles/Legal.css';
import './components/Footer.css';
import './styles/Responsive.css';

hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
