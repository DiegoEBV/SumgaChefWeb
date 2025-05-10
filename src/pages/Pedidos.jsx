import usePedidos from "../hooks/usePedidos";
import PedidoItem from "../components/PedidoItem";

const Pedidos = () => {
  const { pedidos, loading } = usePedidos();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Historial de Pedidos</h2>
      {loading ? (
        <p>Cargando pedidos...</p>
      ) : pedidos.length === 0 ? (
        <p>No hay pedidos registrados.</p>
      ) : (
        <div className="space-y-4">
          {pedidos.map((pedido) => (
            <PedidoItem key={pedido.id_pedido} pedido={pedido} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Pedidos;
