import React from "react";
import ProveedorList from "../components/ProveedorList";

function Landing() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Insumos de Calidad para Restaurantes en Perú
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-6">
          Proveemos los mejores insumos para restaurantes y panaderías a precios mayoristas. Calidad garantizada para tu negocio.
        </p>
        <a
          href="#proveedores"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition"
        >
          Ver Proveedores
        </a>
      </section>

      {/* Beneficios Section */}
      <section className="grid md:grid-cols-3 gap-8 mb-16 text-center">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Precios Competitivos</h3>
          <p className="text-gray-600">
            Compra insumos al por mayor con descuentos exclusivos para restaurantes en Perú.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Calidad Garantizada</h3>
          <p className="text-gray-600">
            Solo trabajamos con proveedores certificados para asegurar la frescura y calidad.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Entrega Rápida</h3>
          <p className="text-gray-600">
            Logística eficiente para que recibas tus insumos a tiempo y sin contratiempos.
          </p>
        </div>
      </section>

      {/* Proveedor List Section */}
      <section id="proveedores" className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Proveedores</h2>
        <ProveedorList />
      </section>

      {/* Testimonios Section */}
      <section className="bg-gray-100 py-12 px-6 rounded-lg max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonios</h2>
        <div className="space-y-8">
          <blockquote className="text-center italic text-gray-700">
            "Gracias a estos insumos, nuestro restaurante ha mejorado la calidad de sus platos y reducido costos. ¡Muy recomendados!"
            <footer className="mt-2 font-semibold">- Restaurante La Casona, Lima</footer>
          </blockquote>
          <blockquote className="text-center italic text-gray-700">
            "Excelente servicio y entrega puntual. Los insumos siempre llegan frescos y en perfectas condiciones."
            <footer className="mt-2 font-semibold">- Panadería El Buen Pan, Arequipa</footer>
          </blockquote>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="text-center py-8 border-t border-gray-300">
        <p className="mb-4 text-lg">
          ¿Quieres recibir una cotización personalizada?
        </p>
        <a
          href="mailto:contacto@insumosperu.com"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition"
        >
          Contáctanos
        </a>
      </footer>
    </div>
  );
}

export default Landing;
