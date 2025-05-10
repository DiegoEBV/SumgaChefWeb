import axios from "axios";
import { API_BASE_URL } from "../constants/config";

// Crear un nuevo pedido
export const createPedido = async (pedidoData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/pedidos`, pedidoData);
    return response.data;
  } catch (error) {
    console.error("Error al crear pedido:", error);
    throw error;
  }
};

// Obtener historial de pedidos por restaurante
export const getPedidosByRestaurante = async (id_rest) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pedidos/restaurante/${id_rest}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener pedidos:", error);
    return [];
  }
};
