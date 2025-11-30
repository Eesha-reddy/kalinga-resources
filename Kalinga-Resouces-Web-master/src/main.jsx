import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Changed from App.tsx to App
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);