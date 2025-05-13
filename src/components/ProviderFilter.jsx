import React from "react";
export default function ProviderFilter({ proveedores, selected, onChange }) {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border rounded mb-4"
    >
      <option value="">Todos los proveedores</option>
      {proveedores.map((prov) => (
        <option key={prov.id} value={prov.id}>
          {prov.nombre}
        </option>
      ))}
    </select>
  );
}
