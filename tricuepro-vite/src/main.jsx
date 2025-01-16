import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'; // Enrutamiento para la aplicación


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router> {/* Aquí envolvemos la aplicación en el enrutador */}
      <App /> {/* Aquí cargamos el componente principal que contiene las rutas */}
    </Router>
  </StrictMode>,
)
