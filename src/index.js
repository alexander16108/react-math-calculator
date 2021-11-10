import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Calculator from './component/Calculator';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Calculator />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
