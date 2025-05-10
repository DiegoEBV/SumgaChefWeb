import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartModal() {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.precioun_prod * (item.cantidad || 1),
    0
  );

  return (
    <div className="fixed top-16 right-4 bg-white shadow-lg border rounded p-4 w-64 z-50">
      <h2 className="text-lg font-bold mb-3">Carrito de compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id_prod} className="border-b py-1">
                {item.nombre_prod} - S/ {item.precioun_prod.toFixed(2)}
              </li>
            ))}
          </ul>
          <p className="mt-3 font-bold">Total: S/ {total.toFixed(2)}</p>
        </>
      )}
    </div>
  );
}
