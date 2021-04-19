import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import reportWebVitals from './reportWebVitals';

render((
  <Router>
    <AppRoutes />
  </Router>
), document.getElementById('root'));

reportWebVitals();
