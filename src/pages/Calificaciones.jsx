import { useState, useEffect } from "react";
import { getCalificaciones } from "../api/calificaciones";
import CalificacionForm from "../components/CalificacionForm";

const Calificaciones = () => {
  const [calificaciones, setCalificaciones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCalificaciones();
        setCalificaciones(data);
      } catch (error) {
        console.error("Error al cargar calificaciones", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Calificaciones de Productos</h2>
      <div className="space-y-2 mb-8">
        {calificaciones.map((cali) => (
          <div key={cali.id_calificacion} className="border p-2 rounded">
            <p><strong>Producto:</strong> {cali.id_prod}</p>
            <p><strong>Comentario:</strong> {cali.comentario_calificacion}</p>
            <p><strong>Puntaje:</strong> {cali.puntos_calificacion}</p>
          </div>
        ))}
      </div>

      <CalificacionForm />
    </div>
  );
};

export default Calificaciones;
