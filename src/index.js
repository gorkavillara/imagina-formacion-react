import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

navigator.serviceWorker.register('/service-worker.js')
  .then(registration => console.log('Service worker registrado', registration.scope))
  .catch(error => console.error('Service worker NO registrado', error))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
