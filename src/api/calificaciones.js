import axios from "axios";
import { API_BASE_URL } from "../constants/config";

// Obtener calificaciones por producto o proveedor
export const getCalificaciones = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/calificaciones`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener calificaciones:", error);
    return [];
  }
};

// Crear nueva calificación
export const createCalificacion = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/calificaciones`, data);
    return response.data;
  } catch (error) {
    console.error("Error al registrar calificación:", error);
    throw error;
  }
};
