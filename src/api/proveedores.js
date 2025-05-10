import axios from "axios";
import { API_BASE_URL } from "../constants/config";

export const getProveedores = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/proveedores`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener proveedores:", error);
    return [];
  }
};
export const createProveedor = async (proveedor) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/proveedores`, proveedor);
    return response.data;
  } catch (error) {
    console.error("Error al crear proveedor:", error);
    return null;
  }
};