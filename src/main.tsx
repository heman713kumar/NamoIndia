import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Global error listener to automatically replace broken images with a high-quality cinematic placeholder
if (typeof window !== 'undefined') {
  window.addEventListener(
    'error',
    (event) => {
      const target = event.target;
      if (target instanceof HTMLImageElement) {
        // Prevent infinite loops if the fallback image itself fails
        if (!target.dataset.fallbackApplied) {
          target.dataset.fallbackApplied = 'true';
          // Use a beautiful scenic travel shot from Unsplash as the default placeholder (Taj Mahal silhouette)
          target.src = 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800';
        }
      }
    },
    { capture: true } // capture is required since 'error' events on media don't bubble
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
