import React from 'react';
import Navbar from '../components/Navbar';
import ProviderFilter from '../components/ProviderFilter';
import ProveedorList from '../components/ProveedorList';
import CartModal from '../components/CartModal';

const Productos = () => {
  return (
    <div className="flex min-h-screen text-white bg-[#1B1D2A]">
      <Navbar />
      <div className="flex flex-col flex-1 p-6">
        <header className="mb-4">
          <h1 className="text-2xl font-semibold">SumaChef</h1>
          <p className="text-sm text-gray-400">Lunes, 12 Feb 2025</p>
        </header>
        <ProviderFilter />
        <h2 className="mt-4 text-xl font-semibold">Elegir insumos</h2>
        <ProveedorList />
      </div>
      <CartModal />
    </div>
  );
};

export default Productos;
