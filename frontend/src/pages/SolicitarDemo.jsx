import React from "react";
import Navbar from "../components/layout/Navbar"; 
import { Button } from "antd";
import { UserAddOutlined, PlayCircleOutlined } from "@ant-design/icons";

const SolicitarDemo = () => {
  return (
    <div className="min-h-screen">
      <Navbar isDarkMode={false} setIsDarkMode={() => {}} />

      {/* Contenido principal */}
      <div className="px-6 py-16 bg-gray-100">
        {/* Sección Principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">¡Solicita una Demo Gratuita de Nuestro Software de Billar!</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Prueba todas las funciones avanzadas de nuestro software de billar sin compromiso. Disfruta de una experiencia completa con nuestra versión demo gratuita. ¡Descubre cómo podemos mejorar tu experiencia con mesas de billar y gestión de partidas!
          </p>
        </div>

        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Beneficios de la Demo Gratuita</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start">
              <div className="p-4 bg-yellow-500 rounded-lg shadow-md text-white">
                <PlayCircleOutlined className="text-4xl mb-4" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold mb-2">Acceso Completo a Funcionalidades</h3>
                <p className="text-lg text-gray-700">
                  Explora todas las características del software de billar, desde la gestión de mesas hasta el análisis de partidas. ¡La demo tiene acceso a todo!
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="p-4 bg-yellow-500 rounded-lg shadow-md text-white">
                <UserAddOutlined className="text-4xl mb-4" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold mb-2">Fácil Instalación y Uso</h3>
                <p className="text-lg text-gray-700">
                  Disfruta de una instalación rápida y sin complicaciones. La interfaz es intuitiva y está diseñada para que puedas comenzar a utilizarla de inmediato.
                </p>
              </div>
            </div>
          </div>
        </div>

      
        <div className="bg-white p-12 shadow-lg rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">¿Cómo Funciona la Demo?</h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Solicitar la demo es fácil. Solo tienes que completar el formulario a continuación, y recibirás acceso inmediato para comenzar a usar el software.
          </p>

          
          <div className="flex justify-center">
            <form className="space-y-6 w-full max-w-3xl">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-800">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm"
                  placeholder="Ingresa tu nombre"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-800">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm"
                  placeholder="Ingresa tu correo electrónico"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-lg font-medium text-gray-800">Número de Teléfono</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm"
                  placeholder="Ingresa tu número de teléfono"
                  required
                />
              </div>
              <div className="text-center mt-6">
                <Button type="primary" size="large" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                  Solicitar Demo Gratuita
                </Button>
              </div>
            </form>
          </div>
        </div>

        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Lo que Dicen Nuestros Usuarios</h2>
          <div className="flex justify-center gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-xs">
              <p className="text-lg text-gray-700 mb-4">
                "Este software ha revolucionado la forma en que gestionamos nuestras mesas de billar. ¡La demo fue increíble y ahora somos usuarios pagos!"
              </p>
              <p className="text-md font-semibold text-gray-800">Juan Pérez</p>
              <p className="text-sm text-gray-500">Gerente de Billar Club XYZ</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-xs">
              <p className="text-lg text-gray-700 mb-4">
                "La demo es una excelente manera de probar todas las funcionalidades antes de comprar. ¡Lo recomiendo sin duda!"
              </p>
              <p className="text-md font-semibold text-gray-800">Ana Gómez</p>
              <p className="text-sm text-gray-500">Propietaria de Sala de Billar ABC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolicitarDemo;
