import React, { useState, useContext } from 'react';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import CartModal from '../components/CartModal';
import ProviderFilter from '../components/ProviderFilter';
import PaymentModal from '../components/PaymentModal';
import productsData from '../constants/productsData';
import { CartContext } from '../context/CartContext';
import useProductos from '../hooks/useProductos';

const Home = () => {
  const { cartItems } = useContext(CartContext); // Obtenemos el carrito real desde el contexto
  const [showPayment, setShowPayment] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const { productos, loading } = useProductos();

  return (
    <div className="flex h-screen bg-[#1c1d27] text-white font-sans">
      {/* Sidebar lateral */}
      <Sidebar />

      {/* Contenido principal */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">SumaChef</h1>
            <p className="text-sm text-gray-400">Lunes, 12 Feb 2025</p>
          </div>

          <input
            type="text"
            placeholder="Buscar por tubérculos, harina..."
            className="bg-[#2a2b39] text-white px-4 py-2 rounded-xl placeholder-gray-400 w-96"
          />
        </div>

        <ProviderFilter />
        <h2 className="text-xl font-semibold mt-6 mb-4">Elegir insumos</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productos.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <aside className="w-120 bg-[#1a1b25] border-0 border-gray-700">
        <CartModal onContinue={() => setShowPayment(true)} />
      </aside>

      <PaymentModal
        open={showPayment}
        onClose={() => setShowPayment(false)}
        cart={cartItems}
        subtotal={subtotal}
      />
    </div>
  );
};

export default Home;