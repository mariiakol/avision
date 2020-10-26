import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

