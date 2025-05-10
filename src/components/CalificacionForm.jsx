import { useState } from "react";
import { createCalificacion } from "../api/calificaciones";

export default function CalificacionForm({ id_prod, id_rest }) {
  const [puntos, setPuntos] = useState(0);
  const [comentario, setComentario] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCalificacion({
        id_prod,
        id_rest,
        puntos_calificacion: puntos,
        comentario_calificacion: comentario,
        fecha_calificacion: new Date().toISOString(),
      });
      alert("Calificación enviada correctamente");
      setPuntos(0);
      setComentario("");
    } catch (error) {
      alert("Error al enviar la calificación");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded shadow-md">
      <h2 className="font-bold text-lg mb-2">Calificar proveedor</h2>
      <input
        type="number"
        min="0"
        max="5"
        value={puntos}
        onChange={(e) => setPuntos(e.target.value)}
        className="w-full border p-2 mb-2"
        placeholder="Puntuación (0 a 5)"
      />
      <textarea
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        className="w-full border p-2 mb-2"
        placeholder="Comentario"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Enviar
      </button>
    </form>
  );
}
