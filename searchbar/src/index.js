import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FsContextPrv from './conts/fs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FsContextPrv>  
    <App />
    </FsContextPrv>
  </React.StrictMode>
);


reportWebVitals();
