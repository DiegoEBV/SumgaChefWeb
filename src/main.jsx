import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'; // CSS global, importante
import { CartProvider } from './context/CartContext'; // Importa el CartProvider
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Toaster position='top-right'/>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
