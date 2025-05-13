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
      >
        Agregar al carrito
      </button>
    </div>
  );
}
