import { lazy, Suspense, useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom"; 
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Loading from "./components/layout/Loading";

// Importación de componentes con lazy loading
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const AdminDashboard = lazy(() => import('./pages/private/Dashboard'));
const Inicio = lazy(() => import('./pages/private/Inicio'));
const GestionMesas = lazy(() => import('./pages/private/GestionMesas'));
const Configuracion = lazy(() => import('./pages/private/Configuracion'));
const GestionProductos = lazy(() => import('./pages/private/GestionProductos'));
const MetodosPago = lazy(() => import('./pages/private/MetodosPago'));
const Licencia = lazy(() => import('./pages/private/Licencia'));

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#E80B2C',
        },
      }}
    >
      <Suspense fallback={<Loading />} >
        <Router>
          {/* Envolvemos toda la aplicación en un div que cambia de color */}
          <div className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen`}>
            <Routes>
              <Route path="/" element={<Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
              <Route path="/login" element={<Login />} />
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
          </div>
        </Router>
      </Suspense>
    </ConfigProvider>
  );
};

export default App;
