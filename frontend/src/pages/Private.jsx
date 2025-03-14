import { lazy, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import LockPage from './LockPage';
import { ROLES } from '../utils/constants';
import Loading from '../components/layout/Loading';
import AppLayout from '../components/layout/AppLayout';

// Importación de componentes con lazy loading
const AdminDashboard = lazy(() => import('./private/Dashboard'));
const Inicio = lazy(() => import('./private/Inicio'));
const GestionMesas = lazy(() => import('./private/GestionMesas'));
const Configuracion = lazy(() => import('./private/Configuracion'));
const GestionProductos = lazy(() => import('./private/GestionProductos'));
const MetodosPago = lazy(() => import('./private/MetodosPago'));
const Licencia = lazy(() => import('./private/Licencia'));

const Private = () => {
    const userRole = useSelector((store) => store.userInfo.user.rol);
    const [isAuthLoaded, setIsAuthLoaded] = useState(false);

    useEffect(() => {
        if (userRole !== undefined) {
            setIsAuthLoaded(true);
        }
    }, [userRole]);

    if (!isAuthLoaded) {
        return <Loading />;
    }

    // Definir las rutas disponibles según el rol del usuario
    let routes;
    // if (userRole === ROLES.PROPIETARIO || userRole === ROLES.ADMIN) {
    //     routes = (
    //         // <Route path="/dashboard" element={<AdminDashboard />}>
    //         <>
    //             {/* <Route index element={<Navigate to="inicio" />} />
    //             <Route path="/inicio" element={<Inicio />} />
    //             <Route path="/gestion-mesas" element={<GestionMesas />} />
    //             <Route path="/configuracion" element={<Configuracion />} />
    //             <Route path="/gestion-productos" element={<GestionProductos />} />
    //             <Route path="/metodos-pago" element={<MetodosPago />} />
    //             <Route path="/licencia" element={<Licencia />} /> */}
    //         </>
    //         // </Route>
    //     );
    // } else if (userRole === ROLES.JUGADOR) {
    //     routes = (
    //         <Route path="/lock" element={<LockPage />} />
    //     );
    // }


    // if (userRole === ROLES.GERENCIA) {
    //     routes = (
    //         <Route path="/estadisticas" element={<EstadisticasPage />} />
    //     );
    // } else if (userRole === ROLES.JUGADOR) {
    //     routes = (
    //         <Route path="/lock" element={<LockPage />} />
    //     );
    // } else if (userRole === ROLES.BARRIDO) {
    //     routes = (
    //         <Route path="/barrido" element={<BarridoPage />} />
    //     );
    // } else {
    //     routes = (
    //         <>
    //             <Route path="/taller" element={<TallerPage />} />
    //             <Route path="/informe" element={<InformePage />} />
    //             <Route path="/administrador" element={<AdministradorPage />} />
    //             <Route path="/perfil" element={<PerfilPage />} />
    //             <Route path="/notas" element={<NotasPage />} />
    //         </>
    //     );
    // }

    return (
        <AppLayout>
            <Routes>
                {routes}
            </Routes>
        </AppLayout>
    );
}

export default Private;