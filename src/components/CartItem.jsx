export default function CartItem({ item }) {
  return (
    <div className="flex justify-between items-center border-b p-2">
      <span>{item.nombre_prod}</span>
      <span>{item.cantidad || 1} x S/ {item.precioun_prod.toFixed(2)}</span>
    </div>
  );
}
