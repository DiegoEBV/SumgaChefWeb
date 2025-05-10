import { useEffect, useState } from "react";
import { getPedidosByRestaurante } from "../api/pedidos";
import { useAuth } from "../context/AuthContext";

export default function usePedidos() {
  const { user } = useAuth();
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const fetchPedidos = async () => {
      try {
        const data = await getPedidosByRestaurante(user.id_rest);
        setPedidos(data);
      } catch (error) {
        console.error("Error al obtener pedidos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPedidos();
  }, [user]);

  return { pedidos, loading };
}
