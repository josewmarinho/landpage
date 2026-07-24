import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './index.css';

// Modo "flat" (sem animações de entrada) para quem prefere menos movimento.
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const flatParam = new URLSearchParams(window.location.search).has('flat');
if (prefersReduced || flatParam) {
  document.documentElement.setAttribute('data-flat', '');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
