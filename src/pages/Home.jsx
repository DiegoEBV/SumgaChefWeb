import React, { useContext, useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import CartModal from '../components/CartModal';
import ProviderFilter from '../components/ProviderFilter';
import PaymentModal from '../components/PaymentModal'; // Importa el modal de pago
import productsData from '../constants/productsData';
import useProductos from '../hooks/useProductos';
import { CartContext } from '../context/CartContext';

const Home = () => {
  // Estado para mostrar/ocultar el modal de pago
  const [showPayment, setShowPayment] = useState(false);
  const { productos, loading } = useProductos();
  const { cartItems } = useContext(CartContext);
  // Calcula subtotal para pasar al modal de pago
  const subtotal = cartItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

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
          {productos.map((product) => (
            console.log(product), // Verificamos que el producto se esté pasando correctamente
            <ProductCard key={product.id} producto={product} />
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
        cart={cartItems}
        subtotal={subtotal}
      />
    </div>
  );
};

export default Home;
