import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom"; // Se agrega Outlet para renderizar subrutas

const AdminDashboard = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuItems = [
    { name: "Inicio", icon: "🏠", route: "inicio" }, // Cambiar rutas a relativas
    { name: "Gestión de Mesas", icon: "📋", route: "gestion-mesas" },
    { name: "Configuración de Cámaras", icon: "🎥", route: "configuracion" },
    { name: "Gestión de Productos", icon: "🛒", route: "gestion-productos" },
    { name: "Métodos de Pago", icon: "💳", route: "metodos-pago" },
    { name: "Licencia Activa", icon: "📄", route: "licencia" },
  ];

  return (
    <div className="relative flex flex-col h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      {/* Header */}
      <header className="w-full bg-green-700 shadow-lg p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">🎱 TriCue Pro - Panel de Administración</h1>
        <button className="flex items-center bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg text-white font-semibold">
          <span className="material-icons-outlined mr-2">logout</span> Cerrar Sesión
        </button>
      </header>

      {/* Menú desplegable */}
      <div className="relative z-10">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="flex items-center px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 rounded-md shadow-lg focus:outline-none"
        >
          <FaBars className="mr-2" />
          Menú
        </button>
        {showMenu && (
          <aside className="absolute top-full left-0 bg-gray-800 w-64 rounded-lg shadow-lg mt-2">
            <ul className="space-y-3 p-4">
              {menuItems.map((item, index) => (
                <li key={index} className="hover:text-green-400 cursor-pointer flex items-center py-2">
                  <Link to={item.route} className="flex items-center">
                    <span className="mr-2">{item.icon}</span> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>

      {/* Contenido dinámico */}
      <div className="flex-1 p-6 bg-gray-700 rounded-lg shadow-lg mt-4">
         <Outlet />
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-900 py-4 text-center text-sm text-gray-400">
        © 2025 TriCue Pro - Todos los derechos reservados
      </footer>
    </div>
  );
};

export default AdminDashboard;
