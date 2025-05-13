<<<<<<< Updated upstream
import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
export default function ProductCard({ producto }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border p-4 rounded shadow-md">
      <h3 className="font-bold text-lg">{producto.nombre}</h3>
      <p className="text-sm text-gray-600">{producto.descripcion}</p>
      <p className="mt-2 font-semibold text-green-700">S/ {producto.precio.toFixed(2)}</p>
      <button
        onClick={() => addToCart(producto)}
        className="mt-3 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
=======
// src/components/ProductCard.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-[#23232e] rounded-lg p-4">
      <img src={product.image} alt={product.nombre} className="w-full h-32 object-cover rounded-lg mb-2" />
      <h3 className="text-white text-lg font-semibold">{product.nombre}</h3>
      <p className="text-gray-400 text-sm">S/ {product.precio}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-[#FF6B57] hover:bg-[#ff543d] text-white px-4 py-2 rounded-lg"
>>>>>>> Stashed changes
      >
        Agregar al carrito
      </button>
    </div>
  );
<<<<<<< Updated upstream
}
=======
};

export default ProductCard;
>>>>>>> Stashed changes
