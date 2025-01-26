import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom"; 
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Loading from "./components/layout/Loading";

// Importaciond e componentes con lazy loading para evitar la carga de todos los componentes al inicio de la aplicación. Se utiliza el componente Loading para mostrar un spinner mientras se cargan los componentes.
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
            <Route path="/" element={<Home />} />
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
        </Router>
      </Suspense>
    </ConfigProvider>

  );
};

export default App;
