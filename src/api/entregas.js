import axios from "axios";
import { API_BASE_URL } from "../constants/config";

// Obtener entregas por pedido
export const getEntregasByPedido = async (id_pedido) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/entregas/pedido/${id_pedido}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener entregas:", error);
    return [];
  }
};
