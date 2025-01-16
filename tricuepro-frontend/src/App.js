import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Importa Navigate
import Login from "./Login";
import Dashboard from "./Dashboard";
import Inicio from "./pages/Inicio";
import GestionMesas from "./pages/GestionMesas";
import Configuracion from "./pages/Configuracion";
import GestionProductos from "./pages/GestionProductos";
import MetodosPago from "./pages/MetodosPago";
import Licencia from "./pages/Licencia";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Navigate to="inicio" />} />
        <Route path="inicio" element={<Inicio />} />
        <Route path="gestion-mesas" element={<GestionMesas />} />
        <Route path="configuracion" element={<Configuracion />} />
        <Route path="gestion-productos" element={<GestionProductos />} />
        <Route path="metodos-pago" element={<MetodosPago />} />
        <Route path="licencia" element={<Licencia />} />
      </Route>
    </Routes>
  );
};

export default App;
