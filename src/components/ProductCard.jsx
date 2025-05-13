// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-[#2a2b39] p-4 rounded-xl flex flex-col items-center text-center hover:scale-105 transition">
      <img src={product.image} alt={product.name} className="h-24 object-contain mb-4" />
      <h3 className="font-semibold text-sm">{product.name}</h3>
      <p className="text-sm text-gray-400">S/ {product.price}</p>
      <p className="text-xs text-gray-500">{product.stock} Disponibles</p>
    </div>
  );
};

export default ProductCard;
