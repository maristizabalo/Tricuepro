import React, { useState } from "react";

const Configuracion = () => {
  // Estado para manejar la configuración de las cámaras
  const [cameraSettings, setCameraSettings] = useState({
    delay: 0,
    resolution: "1080p",
    cameraId: 1,
    cameraName: "Mesa 1",
    brightness: 50,
  });

  // Función para manejar el cambio de valores
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCameraSettings((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg mt-4 space-y-6">
      <h2 className="text-3xl font-extrabold text-yellow-400 mb-4">🎥 Configuración de Cámaras</h2>

      <div className="bg-gray-700 p-6 rounded-lg shadow-md w-full max-w-lg">
        <h3 className="text-xl font-semibold text-white mb-4">Configuración de Cámara: {cameraSettings.cameraName}</h3>

        {/* Selección de la cámara */}
        <div className="mb-4">
          <label className="block text-sm text-gray-300 mb-2">Seleccionar Cámara</label>
          <select
            name="cameraId"
            value={cameraSettings.cameraId}
            onChange={handleChange}
            className="bg-gray-600 text-white p-2 rounded-lg w-full"
          >
            <option value={1}>Mesa 1</option>
            <option value={2}>Mesa 2</option>
            <option value={3}>Mesa 3</option>
          </select>
        </div>

        {/* Configuración de retraso */}
        <div className="mb-4">
          <label className="block text-sm text-gray-300 mb-2">Retraso (en segundos)</label>
          <input
            type="number"
            name="delay"
            value={cameraSettings.delay}
            onChange={handleChange}
            min="0"
            className="bg-gray-600 text-white p-2 rounded-lg w-full"
          />
        </div>

        {/* Resolución de la cámara */}
        <div className="mb-4">
          <label className="block text-sm text-gray-300 mb-2">Resolución de Cámara</label>
          <select
            name="resolution"
            value={cameraSettings.resolution}
            onChange={handleChange}
            className="bg-gray-600 text-white p-2 rounded-lg w-full"
          >
            <option value="1080p">1080p</option>
            <option value="720p">720p</option>
            <option value="480p">480p</option>
          </select>
        </div>

        {/* Configuración de brillo */}
        <div className="mb-4">
          <label className="block text-sm text-gray-300 mb-2">Brillo</label>
          <input
            type="range"
            name="brightness"
            value={cameraSettings.brightness}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full"
          />
          <div className="text-center text-sm text-gray-300 mt-2">
            {cameraSettings.brightness}%
          </div>
        </div>

        {/* Botón para guardar la configuración */}
        <button
          onClick={() => alert("Configuración guardada")}
          className="bg-green-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700 w-full"
        >
          Guardar Configuración
        </button>
      </div>
    </div>
  );
};

export default Configuracion;
