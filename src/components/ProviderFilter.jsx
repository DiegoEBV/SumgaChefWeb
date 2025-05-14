// src/components/ProviderFilter.jsx
import React from 'react';

const categories = ['Abarrotes', 'Vegetales', 'Carnes', 'Bebidas', 'Frutas', 'Lacteos'];

const ProviderFilter = () => {
  return (
    <div className="flex px-6 space-x-6 text-sm font-semibold mt-4 border-b border-gray-700">
      {categories.map((cat, idx) => (
        <button
          key={idx}
          className={`pb-1 ${idx === 0
            ? 'text-[#FF6B57] border-b-2 border-[#FF6B57]'
            : 'text-gray-400 hover:text-white'}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default ProviderFilter;
