import React from 'react';
import ProductCard from './ProductCard';

const sampleProducts = [
  {
    name: 'Arroz Costeños Extra Añejo',
    price: 2.29,
    stock: 20,
    image: '/arroz.png'
  },
  {
    name: 'Azucar Refinada CasaGrande',
    price: 2.69,
    stock: 11,
    image: '/azucar.png'
  },
  // ...otros productos
];

const ProveedorList = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-6">
      {sampleProducts.map((product, idx) => (
        <ProductCard key={idx} product={product} />
      ))}
    </div>
  );
};

export default ProveedorList;