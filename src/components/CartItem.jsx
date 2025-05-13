// src/components/CartItem.jsx
import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
        <div>
          <p className="font-medium">{item.name}</p>
          <p className="text-gray-400 text-sm">x{item.qty}</p>
        </div>
      </div>
      <div className="font-semibold">S/ {(item.price * item.qty).toFixed(2)}</div>
    </div>
  );
};

export default CartItem;
