import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CartProvider } from './context/CartContext.jsx';

import { CartProvider } from './context/CartContext'; // Importa el contexto del carrito

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<< Updated upstream
    <CartProvider>
      <App />
    </CartProvider>
=======
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
>>>>>>> Stashed changes
  </React.StrictMode>
);
