import React, { useContext, useState } from 'react';
import { X, ChevronLeft, Plus, Trash2 } from 'lucide-react';
import { CartContext } from '../context/CartContext';

const paymentMethods = [
  { label: 'Credit Card', value: 'card', icon: <i className="fa-regular fa-credit-card" /> },
  { label: 'Yape', value: 'yape', icon: <i className="fa-brands fa-y-combinator" /> },
  { label: 'Cash', value: 'cash', icon: <i className="fa-solid fa-money-bill" /> },
];

const PaymentModal = ({ open, onClose, cart, subtotal }) => {
  const [selectedMethod, setSelectedMethod] = useState('card');

  const { removeFromCart } = useContext(CartContext);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-[#23232e] rounded-2xl shadow-2xl w-[900px] max-w-full flex overflow-hidden border border-[#2a2b39]">
        {/* Confirmación */}
        <section className="w-1/2 px-8 py-8 border-r border-[#2a2b39] flex flex-col">
          <div className="flex items-center mb-6">
            <button onClick={onClose} className="text-gray-400 hover:text-white mr-3">
              <ChevronLeft size={22} />
            </button>
            <h2 className="text-2xl font-bold flex-1">Confirmación</h2>
            <button className="bg-[#FF6B57] text-white rounded-full p-2 ml-2">
              <Plus size={18} />
            </button>
          </div>
          <p className="text-xs text-gray-400 mb-6">Orden #34562</p>
          <div className="flex-1 space-y-6 overflow-y-auto pr-2">
            {cart.map((item, id) => (
              <div key={id} className="flex items-center gap-3">
                <img src={item.image} alt={item.nombre} className="w-12 h-12 object-cover rounded-lg" />
                <div className="flex-1">
                  <p className="font-medium truncate">{item.nombre}</p>
                  <p className="text-xs text-gray-400">S/ {item.precio.toFixed(2)}</p>
                  <input
                    type="text"
                    placeholder="Nota de pedido..."
                    className="mt-1 w-full bg-[#22232d] border border-[#393a48] rounded-lg px-3 py-1 text-xs text-gray-300"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <input
                    type="number"
                    value={item.cantidad}
                    min={1}
                    readOnly
                    className="w-12 text-center bg-[#23232e] border border-[#393a48] rounded-lg py-1 mb-1"
                  />
                  <span className="text-sm font-semibold text-white">S/ {(item.precio * item.cantidad).toFixed(2)}</span>
                </div>
                <button className="ml-2 text-[#FF6B57] hover:bg-[#ff6b571a] rounded-lg p-2 transition"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
          <div className="border-t border-[#2a2b39] pt-4 mt-6">
            <div className="flex justify-between text-gray-400 text-sm mb-1">
              <span>Discount</span>
              <span>S/ 0</span>
            </div>
            <div className="flex justify-between text-white font-semibold text-base">
              <span>Subtotal</span>
              <span>S/ {subtotal.toFixed(2)}</span>
            </div>
          </div>
        </section>

        {/* Pago */}
        <section className="w-1/2 px-8 py-8 flex flex-col">
          <h2 className="text-2xl font-bold mb-1">Pago</h2>
          <p className="text-xs text-gray-400 mb-6">3 métodos de pago disponibles</p>
          <div className="mb-4">
            <span className="block text-sm font-semibold mb-2">Método de pago</span>
            <div className="flex gap-2">
              {paymentMethods.map((m) => (
                <button
                  key={m.value}
                  onClick={() => setSelectedMethod(m.value)}
                  className={`flex-1 flex items-center justify-center px-4 py-2 rounded-lg border
                    ${selectedMethod === m.value
                      ? 'bg-[#23232e] border-[#FF6B57] text-[#FF6B57]'
                      : 'bg-[#23232e] border-[#393a48] text-gray-400 hover:text-white'}
                  `}
                >
                  {m.icon}
                  <span className="ml-2">{m.label}</span>
                </button>
              ))}
            </div>
          </div>
          <form className="space-y-3">
            <input
              type="text"
              className="w-full bg-[#23232e] border border-[#393a48] rounded-lg px-3 py-2 text-white"
              placeholder="Titular de tarjeta"
              defaultValue="Levi Ackerman"
              disabled={selectedMethod !== 'card'}
            />
            <input
              type="text"
              className="w-full bg-[#23232e] border border-[#393a48] rounded-lg px-3 py-2 text-white"
              placeholder="Número de tarjeta"
              defaultValue="2564 1421 0897 1244"
              disabled={selectedMethod !== 'card'}
            />
            <div className="flex gap-2">
              <input
                type="text"
                className="w-1/2 bg-[#23232e] border border-[#393a48] rounded-lg px-3 py-2 text-white"
                placeholder="Fecha de expiración"
                defaultValue="02/2022"
                disabled={selectedMethod !== 'card'}
              />
              <input
                type="text"
                className="w-1/2 bg-[#23232e] border border-[#393a48] rounded-lg px-3 py-2 text-white"
                placeholder="CVV"
                defaultValue="•••"
                disabled={selectedMethod !== 'card'}
              />
            </div>
            <div className="flex gap-2">
              <select className="w-1/2 bg-[#23232e] border border-[#393a48] rounded-lg px-3 py-2 text-white">
                <option>Delivery</option>
                <option>Recojo</option>
              </select>
              <input
                type="text"
                className="w-1/2 bg-[#23232e] border border-[#393a48] rounded-lg px-3 py-2 text-white"
                placeholder="Table no."
                defaultValue="140"
              />
            </div>
          </form>
          <div className="flex justify-end gap-3 mt-8">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-lg bg-transparent border border-[#FF6B57] text-[#FF6B57] hover:bg-[#ff6b571a] transition"
            >
              Cancel
            </button>
            <button className="px-6 py-2 rounded-lg bg-[#FF6B57] text-white font-semibold hover:bg-[#ff543d] transition">
              Confirmar Pago
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PaymentModal;