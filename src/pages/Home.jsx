import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import CartModal from '../components/CartModal';
import ProviderFilter from '../components/ProviderFilter';
import PaymentModal from '../components/PaymentModal'; // Importa el modal de pago
import productsData from '../constants/productsData';

// Usa el mismo carrito simulado que en CartModal para pasar datos al modal de pago
const mockCart = [
  { name: 'Leche Gloria Deslactosada', qty: 2, price: 2.29, image: 'assets/imagenes/leche.png' },
  { name: 'Arroz Costeños Extra', qty: 1, price: 2.69, image: 'assets/imagenes/arroz2.png' },
];

const Home = () => {
  // Estado para mostrar/ocultar el modal de pago
  const [showPayment, setShowPayment] = useState(false);

  // Calcula subtotal para pasar al modal de pago
  const subtotal = mockCart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="flex h-screen bg-[#1c1d27] text-white font-sans">
      {/* Sidebar lateral */}
      <Sidebar />

      {/* Contenido principal */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Encabezado con título y buscador */}
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

        {/* Filtros de categoría */}
        <ProviderFilter />

        {/* Título sección productos */}
        <h2 className="text-xl font-semibold mt-6 mb-4">Elegir insumos</h2>

        {/* Productos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      {/* Carrito lateral */}
      <aside className="w-120 bg-[#1a1b25] border-0 border-gray-700">
        {/* Pasa la función para abrir el modal */}
        <CartModal onContinue={() => setShowPayment(true)} />
      </aside>

      {/* Modal de pago */}
      <PaymentModal
        open={showPayment}
        onClose={() => setShowPayment(false)}
        cart={mockCart}
        subtotal={subtotal}
      />
    </div>
  );
};

export default Home;
