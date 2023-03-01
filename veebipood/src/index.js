import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Navigeerimiseks:
// 1. react-router-dom    --->  laeb internetist alla võimekuse navigeerimsieks (paneb koodi node_modules kausta)
// 2. index.js failis tuleb BrowserRouter kasutusele võtta
// 3. App.js failis teeme URL ja sisu seosed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
