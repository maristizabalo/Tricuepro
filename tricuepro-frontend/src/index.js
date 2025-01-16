// index.js
import React from "react";
import ReactDOM from "react-dom/client"; // En versiones más recientes
import './index.css'; // Archivo de estilos globales
import App from './App'; // Importamos el componente principal App
import { BrowserRouter as Router } from 'react-router-dom'; // Enrutamiento para la aplicación

const root = ReactDOM.createRoot(document.getElementById("root")); // Obtiene el contenedor raíz en el HTML

root.render(
  <React.StrictMode>
    <Router> {/* Aquí envolvemos la aplicación en el enrutador */}
      <App /> {/* Aquí cargamos el componente principal que contiene las rutas */}
    </Router>
  </React.StrictMode>
);
