import React from 'react';
import ReactDOM from 'react-dom/client';
import GifExpertApp from './GifExpertApp';
import './styles.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);

reportWebVitals();

//El modo estricto nos ayuda a identificar problemas de ciclado, warnings, etc, solo se aplica en desarrollo