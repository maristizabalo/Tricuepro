import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Loading from "./components/layout/Loading";
import PrivateRoute from "./utils/PrivateRoute";
import { Provider } from "react-redux";
import store from './redux/store'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Private from "./pages/private/Private";


const App = () => {

  return (

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
