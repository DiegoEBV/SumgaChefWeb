import axios from "axios";
import { API_BASE_URL } from "../constants/config";

export const getProductos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/productos`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
  }
};
