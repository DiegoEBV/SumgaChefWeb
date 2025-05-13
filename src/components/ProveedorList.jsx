import React from "react";
import { useEffect, useState } from "react";
import { getProveedores } from "../api/proveedores";

<<<<<<< Updated upstream
function ProveedorList() {
  const [proveedores, setProveedores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await getProveedores();
        setProveedores(data);
      } catch (err) {
        setError('Error al cargar proveedores');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>Cargando proveedores...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
=======
const sampleProducts = [
  {
    name: 'Arroz Costeños Extra Añejo',
    price: 2.29,
    stock: 20,
    image: 'src/assets/imagenes/arroz2.png'
  },
  {
    name: 'Azucar Refinada CasaGrande',
    price: 2.69,
    stock: 11,
    image: 'src/assets/imagenes/azucar.png'
  },
  // ...otros productos
];
>>>>>>> Stashed changes

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Proveedores</h2>
      <ul className="space-y-2">
        {proveedores.map((prov) => (
          <li key={prov.id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{prov.nombre}</h3>
            <p>{prov.desc}</p>
            <p>{prov.direc} - {prov.distrito}</p>
            <p>Email: {prov.correo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProveedorList;
