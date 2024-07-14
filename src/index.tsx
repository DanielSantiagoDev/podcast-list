// src/index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { PodcastProvider } from './context/AppContext';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <PodcastProvider>
      <App />
    </PodcastProvider>
  </React.StrictMode>
);
