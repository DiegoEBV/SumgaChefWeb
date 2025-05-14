// src/components/CartItem.jsx
import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 justify-between">
        <img src={item.imagen} alt={item.nombre} className="w-12 h-12 object-cover rounded" />
        <div>
          <p className="font-medium">{item.nombre}</p>
          <p className="text-gray-400 text-sm">x{item.cantidad}</p>
        </div>
      </div>
      <div className="font-semibold">S/ {(item.precio * item.cantidad).toFixed(2)}</div>
    </div>
  );
};

export default CartItem;
