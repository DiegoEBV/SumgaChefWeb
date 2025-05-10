import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Productos from "./pages/Productos";
import Pedidos from "./pages/Pedidos";
import Calificaciones from "./pages/Calificaciones";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/calificaciones" element={<Calificaciones />} />
      </Routes>
    </Router>
  );
}

export default App;
