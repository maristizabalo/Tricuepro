import React from "react";

const MetodosPago = () => {
  return (
    <div className="p-6 relative">
      {/* Fondo de la mesa de billar */}
      <div className="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-lg border-8 border-yellow-600">
        {/* Borde de la mesa */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-400 rounded-lg">
          {/* Bolas de billar animadas (opcional) */}
        </div>
      </div>

      <div className="relative z-10 text-white">
        <h1 className="text-4xl font-bold text-yellow-400 mb-8">Métodos de Pago</h1>
        <p className="text-xl mb-6">Selecciona tu método de pago utilizando los códigos QR</p>

        {/* Contenedor de los códigos QR */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Código QR para Nequi */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col items-center">
            <div className="w-40 h-40 bg-white border-4 border-black mb-4 flex items-center justify-center">
              {/* Simulación del código QR */}
              <div className="w-28 h-28 bg-gray-700"></div>
            </div>
            <p className="text-xl font-bold text-yellow-400">Nequi</p>
            <p className="text-sm text-white">Escanea para pagar con Nequi</p>
          </div>

          {/* Código QR para Daviplata */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col items-center">
            <div className="w-40 h-40 bg-white border-4 border-black mb-4 flex items-center justify-center">
              {/* Simulación del código QR */}
              <div className="w-28 h-28 bg-gray-700"></div>
            </div>
            <p className="text-xl font-bold text-yellow-400">Daviplata</p>
            <p className="text-sm text-white">Escanea para pagar con Daviplata</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetodosPago;
