import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'leaflet/dist/leaflet.css';
import './index.css';
import './i18n';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartSumContextProvider } from './store/CartSumContext'
import { AuthContextProvider } from './store/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartSumContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </CartSumContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// .red {color: red}
// .red {color: #312311} <-- siis saan üle kirjutada (asendada) kui minu .css on allpool

// uuendaSonum("1");
// uuendaSonum("2"); <-- alumine kirjutab ülemise üle

