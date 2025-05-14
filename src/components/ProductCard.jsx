// src/components/ProductCard.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import require from 'require-context'; 

const ProductCard = ({ producto }) => {
  console.log(producto); // Verificamos que el producto se esté pasando correctamente
  const { addToCart } = useContext(CartContext); // Usamos el CartContext

  const handleAddToCart = () => {
    addToCart(producto); // Agregamos el producto al carrito
  };

  // let imageSrc;
  // try {
  //   imageSrc = require(`../assets/img/${producto.nombre}.png`);
  // } catch (error) {
  //   console.warn(`No se encontró imagen para ${producto.nombre}, usando imagen por defecto.`);
  //   imageSrc = require(`../assets/img/default.png`);
  // }

  return (
    <div className="bg-[#2a2b39] p-4 rounded-xl flex flex-col items-center text-center hover:scale-105 transition">
      <img src={producto.image} alt={producto.nombre} className="h-24 object-contain mb-4" />
      <h3 className="font-semibold text-sm">{producto.nombre}</h3>
      <p className="text-sm text-gray-400">S/ {producto.precio}</p>
      <p className="text-xs text-gray-500">{producto.stock} disponibles</p>
      <button
        onClick={handleAddToCart}
        className="mt-3 bg-[#FF6B57] text-white py-2 px-4 rounded-xl hover:bg-[#ff543d] transition"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;