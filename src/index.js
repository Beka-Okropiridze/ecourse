import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ScrollToTop } from './components';
import { FilterProvider } from './context';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <ScrollToTop />
        <App />
      </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
