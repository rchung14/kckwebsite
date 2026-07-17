import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.jsx';
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
