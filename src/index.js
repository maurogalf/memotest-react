import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
// PARA DEPLOY EN GH PAGES COMENTAR BROWSER ROUTER Y DESCOMENTAR HASHROUTER

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
    </HashRouter>
  </React.StrictMode>
);

