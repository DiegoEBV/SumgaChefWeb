import useProductos from "../hooks/useProductos";
import useProveedores from "../hooks/useProveedores";
import { ProductCard, ProviderFilter } from "../components";

const Productos = () => {
  const { productos, loading } = useProductos();
  const { proveedores } = useProveedores();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Productos disponibles</h2>
      <ProviderFilter proveedores={proveedores} />
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {productos.map((prod) => (
            <ProductCard key={prod.id_prod} producto={prod} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Productos;
