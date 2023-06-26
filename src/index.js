import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom/client';
import { ScrollToTop } from './components';
import { FilterProvider, CartProvider } from './context';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <FilterProvider>
          <ToastContainer autoClose={3000} />
          <ScrollToTop />
          <App />
        </FilterProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
