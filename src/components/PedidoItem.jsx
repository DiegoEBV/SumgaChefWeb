export default function PedidoItem({ pedido }) {
  return (
    <div className="border p-4 rounded mb-3 shadow-sm">
      <h3 className="text-lg font-semibold">Pedido #{pedido.id_pedido}</h3>
      <p className="text-sm text-gray-700">{pedido.desc_pedido}</p>
      <p>Fecha: {new Date(pedido.fecha_pedido).toLocaleDateString()}</p>
      <p>Estado: <span className="font-bold">{pedido.estado_pedido}</span></p>
      <p>Monto: S/ {pedido.monto_pedido.toFixed(2)}</p>
    </div>
  );
}
