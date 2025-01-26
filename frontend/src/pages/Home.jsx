import React from 'react';
import { Image } from 'antd';
import fondoHome from '../assets/images/fondoHome.png';
import logov5 from '../assets/images/logo_v5-nobackground.png';
import logov6 from '../assets/images/logo_v7-nobackground.png';
import Navbar from '../components/layout/Navbar';


const Home = () => {
  return (

    // OLD CODE MODIFIED
    // <div
    //   className="h-screen bg-cover bg-center relative"
    //   style={{ backgroundImage: `url(${fondoHome})` }}
    // >
    //   {/* Overlay para mayor contraste */}
    //   <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    //   {/* Contenido principal */}
    //   <div className="relative z-10 h-full flex flex-col justify-between">
    //     {/* Encabezado */}
    //     <header className="flex justify-between items-center p-6 text-white">
    //       <h1 className="text-3xl font-extrabold tracking-wide">TricuePro</h1>

    //       <nav className="space-x-4 mt-8">
    //         <Button type="primary" className="bg-green-500 hover:bg-green-600 shadow-lg">
    //           Donar
    //         </Button>
    //         <Button type="primary" className="bg-blue-500 hover:bg-blue-600 shadow-lg">
    //           Comprar
    //         </Button>
    //         <Button type="primary" className="bg-gray-500 hover:bg-gray-600 shadow-lg">
    //           Contáctanos
    //         </Button>
    //         <Button type="primary" className="bg-purple-500 hover:bg-purple-600 shadow-lg">
    //           <a href="/login" className="text-white no-underline">Iniciar Sesión</a>
    //         </Button>
    //       </nav>
    //     </header>

    //     {/* Título y descripción */}
    //     <div className="flex flex-col items-center justify-center text-white px-6 mt-[-64px]">
    //       <h2 className="text-5xl md:text-7xl font-extrabold mb-4 text-center">
    //         ¡Bienvenido a TricuePro!
    //       </h2>
    //       <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed text-center">
    //         El software más completo para la gestión y administración de billares en Colombia. 
    //         ¡Eleva tu negocio al siguiente nivel!
    //       </p>
    //     </div>

    //     {/* Botones de acción */}
    //     <div className="flex justify-center space-x-6 pb-24 mt-auto">
    //       <div className="text-center">
    //         <p className="text-lg text-white mb-2">Alquila mesas para tu negocio</p>
    //         <Button type="primary" className="bg-yellow-500 hover:bg-yellow-600 shadow-lg">
    //           Alquiler de Mesas
    //         </Button>
    //       </div>
    //       <div className="text-center">
    //         <p className="text-lg text-white mb-2">Compra productos para tu mesa de billar</p>
    //         <Button type="primary" className="bg-blue-500 hover:bg-blue-600 shadow-lg">
    //           Venta de Productos
    //         </Button>
    //       </div>
    //       <div className="text-center">
    //         <p className="text-lg text-white mb-2">Consulta las mesas disponibles</p>
    //         <Button type="primary" className="bg-green-500 hover:bg-green-600 shadow-lg">
    //           Ver Mesas
    //         </Button>
    //       </div>
    //     </div>

    //     {/* Pie de página */}
    //     <footer className="text-center text-white pb-6">
    //       <p className="text-sm">
    //         © 2025 TricuePro. Todos los derechos reservados.
    //       </p>
    //     </footer>
    //   </div>
    // </div>

    <div className='bg-slate-900 h-screen '>
      <Navbar />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
