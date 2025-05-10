import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">SumaCheft</h1>
      <ul className="flex gap-6">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/pedidos">Pedidos</Link></li>
        <li><Link to="/calificaciones">Calificaciones</Link></li>
      </ul>
    </nav>
  );
}
