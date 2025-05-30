// src/components/CartModal.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { Trash2 } from 'lucide-react';

const CartModal = ({ onContinue }) => {
  const { cartItems, removeFromCart } = useContext(CartContext); // Usamos el CartContext
  const subtotal = cartItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div className="bg-[#2a2b39] h-full rounded-xl p-5 flex flex-col justify-between text-white shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold">Pedido #34562</h2>
          <p className="text-xs text-gray-400">Cliente presencial</p>
        </div>
        <div className="flex gap-2">
          <button className="text-xs px-4 py-1 rounded-full bg-[#FF6B57] text-white">Recojo</button>
          <button className="text-xs px-4 py-1 rounded-full border border-[#FF6B57] text-[#FF6B57] hover:bg-[#ff6b5733] transition">
            Delivery
          </button>
        </div>
      </div>

      {/* Cart Items */}
      <div className="flex-1 justify-between overflow-y-auto space-y-4 text-sm pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        {cartItems.map((item) => (
          <div key={item.id_prod} className="flex justify-between items-center">
            <CartItem item={item} />
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-400"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-gray-700 mt-4 space-y-3 text-sm">
        <div className="flex justify-between text-gray-400">
          <span>Descuento</span>
          <span>S/ 0.00</span>
        </div>
        <div className="flex justify-between text-white font-semibold text-base">
          <span>Subtotal</span>
          <span>S/ {subtotal.toFixed(2)}</span>
        </div>
        <button
          className="w-full bg-[#FF6B57] py-2 rounded-xl text-white font-semibold hover:bg-[#ff543d] transition duration-200"
          onClick={onContinue}
        >
          Continuar al pago
        </button>
      </div>
    </div>
  );
};

export default CartModal;
