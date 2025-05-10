import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (producto) => {
    setCartItems((prev) => {
      const found = prev.find((item) => item.id_prod === producto.id_prod);
      if (found) {
        return prev.map((item) =>
          item.id_prod === producto.id_prod
            ? { ...item, cantidad: (item.cantidad || 1) + 1 }
            : item
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  const removeFromCart = (id_prod) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id_prod !== id_prod)
    );
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
