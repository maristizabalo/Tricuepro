import React, { useState } from "react";

const Licencia = () => {
  // Estado para manejar el estado de la licencia
  const [licenseStatus, setLicenseStatus] = useState("Activa"); // Puedes cambiarlo entre 'Activa', 'Caducada', etc.
  const [subscriptionInfo, setSubscriptionInfo] = useState({
    expirationDate: "2025-12-31", // Fecha de expiración de la licencia
    plan: "Plan billar", // El plan actual
  });

  // Funciones para manejar la cancelación y renovación
  const handleCancelSubscription = () => {
    alert("Tu suscripción ha sido cancelada.");
    setLicenseStatus("Caducada");
  };

  const handleRenewSubscription = () => {
    alert("Tu suscripción ha sido renovada.");
    setLicenseStatus("Activa");
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg mt-4 space-y-6">
      <h2 className="text-3xl font-extrabold text-yellow-400 mb-4">🏆 Licencia Activa - TriCue Pro</h2>

      {/* Sección de Información de Licencia */}
      <div className="bg-gray-700 p-6 rounded-lg shadow-md w-full max-w-lg">
        <h3 className="text-xl font-semibold text-white mb-4">Detalles de tu Licencia</h3>

        {/* Estado de la licencia */}
        <div className="mb-4 flex items-center">
          <span className="text-gray-300 mr-2">Estado de la Licencia:</span>
          <span
            className={`${
              licenseStatus === "Activa" ? "text-green-500" : "text-red-500"
            } font-bold`}
          >
            {licenseStatus}
          </span>
        </div>

        {/* Plan Actual */}
        <div className="mb-4">
          <span className="text-gray-300">Plan Actual: </span>
          <span className="text-yellow-400 font-semibold">{subscriptionInfo.plan}</span>
        </div>

        {/* Fecha de Expiración */}
        <div className="mb-4">
          <span className="text-gray-300">Fecha de Expiración: </span>
          <span className="text-white">{subscriptionInfo.expirationDate}</span>
        </div>

        {/* Botones de acción */}
        <div className="mt-6 flex space-x-4">
          <button
            onClick={handleCancelSubscription}
            className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-700 w-full max-w-xs"
          >
            Cancelar Suscripción
          </button>
          <button
            onClick={handleRenewSubscription}
            className="bg-green-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700 w-full max-w-xs"
          >
            Renovar Suscripción
          </button>
        </div>
      </div>

      {/* Sección de Estética Billar 3 Bandas */}
      <div className="w-full max-w-lg mt-6 flex justify-center items-center">
        <img
          src="https://via.placeholder.com/200x200?text=Billar+3+Bandas"
          alt="Billar 3 Bandas"
          className="rounded-full border-4 border-green-500 shadow-lg"
        />
      </div>

      {/* Mensaje de Advertencia */}
      <div className="bg-yellow-500 text-black text-sm p-4 rounded-lg mt-6">
        <p className="font-semibold">¡Recuerda!</p>
        <p>Una vez que tu suscripción se venza, perderás el acceso a las funcionalidades.</p>
      </div>
    </div>
  );
};

export default Licencia;
