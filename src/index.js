import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StyleContextProvider } from './Store/styleContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyleContextProvider>
      <App />
    </StyleContextProvider>
  </React.StrictMode>
);