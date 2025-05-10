export default function ProviderFilter({ proveedores, selected, onChange }) {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border rounded mb-4"
    >
      <option value="">Todos los proveedores</option>
      {proveedores.map((prov) => (
        <option key={prov.id_prov} value={prov.id_prov}>
          {prov.nombre_prov}
        </option>
      ))}
    </select>
  );
}
