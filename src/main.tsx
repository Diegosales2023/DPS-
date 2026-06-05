import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Safeguard against polyfills trying to directly override window.fetch
try {
  let originalFetch = window.fetch;
  Object.defineProperty(window, 'fetch', {
    get() {
      return originalFetch;
    },
    set(newFetch) {
      originalFetch = newFetch;
    },
    configurable: true,
    enumerable: true
  });
} catch (e) {
  console.warn('[Fetch Patch TS] Safe fetch setter setup bypassed or failed:', e);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
