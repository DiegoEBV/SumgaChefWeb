// // src/components/CartItem.jsx
import React from 'react';
import { Trash2 } from 'lucide-react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={item.image} alt={item.nombre} className="w-12 h-12 object-cover rounded" />
        <div>
          <p className="font-medium">{item.nombre}</p>
          <p className="text-gray-400 text-sm">x{item.cantidad}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-semibold">S/ {(item.precio * item.cantidad).toFixed(2)}</span>
        <button onClick={onRemove} className="text-[#FF6B57] hover:bg-[#ff6b571a] p-1 rounded">
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;