import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import { GlobalStyle } from 'styles';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global styles={GlobalStyle} />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
