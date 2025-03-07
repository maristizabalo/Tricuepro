import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Loading from "./components/layout/Loading";
import PrivateRoute from "./utils/PrivateRoute";
import Private from "./pages/Private";
import { Provider } from "react-redux";
import store from './redux/store'
import Home from "./pages/Home";
import Login from "./pages/Login";


const App = () => {

  return (
    // <ConfigProvider
    //   theme={{
    //     token: {
    //       colorPrimary: '#6CC426',
    //     },
    //   }}
    // >
    //   <Suspense fallback={<Loading />}>
    //     <Router>
    //       <div className="min-h-screen">
    //         <Routes>
    //           <Route path="/" element={<Home/>} />
    //           <Route path="/login" element={<Login />} />
    //           <Route path="/dashboard" element={<AdminDashboard />}>
    //             <Route index element={<Navigate to="inicio" />} />
    //             <Route path="inicio" element={<Inicio />} />
    //             <Route path="gestion-mesas" element={<GestionMesas />} />
    //             <Route path="configuracion" element={<Configuracion />} />
    //             <Route path="gestion-productos" element={<GestionProductos />} />
    //             <Route path="metodos-pago" element={<MetodosPago />} />
    //             <Route path="licencia" element={<Licencia />} />
    //           </Route>

    //           <Route path="/solicitar-demo" element={<SolicitarDemo />} />
    //           <Route path="/soporte" element={<Soporte />} />
    //         </Routes>
    //       </div>
    //     </Router>
    //   </Suspense>
    // </ConfigProvider>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#6CC426',
        },
      }}
    >
      <Suspense fallback={<Loading />}>
        <Provider store={store} >
          <Router>
            <Routes>
              <Route element={<PrivateRoute />} >
                <Route path='/private/*' element={<Private />} />
              </Route>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/login' element={<Login />} />
            </Routes>
          </Router>
        </Provider>
      </Suspense>
    </ConfigProvider>
  );
};

export default App;
