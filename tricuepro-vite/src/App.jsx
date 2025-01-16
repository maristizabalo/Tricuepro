import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Importa Navigate
import Login from "./Login";
import Inicio from "./pages/Inicio";
import GestionMesas from "./pages/GestionMesas";
import Configuracion from "./pages/Configuracion";
import GestionProductos from "./pages/GestionProductos";
import MetodosPago from "./pages/MetodosPago";
import Licencia from "./pages/Licencia";
import AdminDashboard from "./Dashboard";
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Loading from "./components/layout/Loading";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#E80B2C',
        },
      }}
    >
      <Suspense fallback={<Loading />} >
        <Router> {/* Aquí envolvemos la aplicación en el enrutador */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<AdminDashboard />}>
              <Route index element={<Navigate to="inicio" />} />
              <Route path="inicio" element={<Inicio />} />
              <Route path="gestion-mesas" element={<GestionMesas />} />
              <Route path="configuracion" element={<Configuracion />} />
              <Route path="gestion-productos" element={<GestionProductos />} />
              <Route path="metodos-pago" element={<MetodosPago />} />
              <Route path="licencia" element={<Licencia />} />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </ConfigProvider>

  );
};

export default App;
