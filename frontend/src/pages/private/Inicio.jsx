import React from "react";
import { motion } from "framer-motion";

const Inicio = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-black text-white px-4 py-10">
      {/* Título */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-yellow-400 mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🌟 Bienvenido a <span className="text-red-500">KrocoBilliards</span>
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        className="text-lg md:text-2xl italic text-gray-300 mb-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        "El futuro del desarrollo de software para billares de 3 bandas, donde la
        innovación y la fluidez golpean el mercado con precisión."
      </motion.p>

      {/* Contenido principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Texto descriptivo */}
        <motion.div
          className="space-y-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-yellow-400">
            🌍 Quiénes Somos
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Desde el año pasado, nos propusimos revolucionar la industria de
            los billares con un software que combina <strong>innovación</strong>,{" "}
            <strong>eficiencia</strong> y <strong>fluidez</strong>. Nuestro
            enfoque está en ofrecer soluciones de alto nivel para la gestión de
            billares de 3 bandas.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Con KrocoBilliards, los propietarios de billares pueden maximizar su
            rentabilidad y ofrecer una experiencia inigualable a sus clientes.
          </p>
        </motion.div>

        {/* Imagen animada */}
        <motion.div
          className="relative flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://example.com/mesa_billar.jpg"
            alt="Mesa de billar"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      {/* Misión y Visión */}
      <div className="mt-16 space-y-12 text-center">
        <motion.div
          className="space-y-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-yellow-400">
            🎯 Nuestra Misión
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Ser la herramienta líder en la industria de billares, ofreciendo
            soluciones de gestión que potencien la eficiencia operativa y la
            experiencia del cliente.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-yellow-400">
            🚀 Nuestra Visión
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Convertirnos en el estándar global para la gestión de billares,
            redefiniendo la industria con herramientas innovadoras y tecnología
            de punta.
          </p>
        </motion.div>
      </div>

      {/* Botón de contacto */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          📩 Contáctanos
        </button>
      </motion.div>
    </div>
  );
};

export default Inicio;
