import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* puedes agregar más rutas */}
    </Routes>
  );
};

export default App;
