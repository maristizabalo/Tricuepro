import React, { useState, useEffect } from "react";
import { FaPlus, FaClock, FaExpand } from "react-icons/fa";

const mesasIniciales = [
  { id: 1, estado: "Disponible", tiempo: 0, tiempoTotal: 0 },
  { id: 2, estado: "Disponible", tiempo: 0, tiempoTotal: 0 },
  { id: 3, estado: "Disponible", tiempo: 0, tiempoTotal: 0 },
  { id: 4, estado: "Disponible", tiempo: 0, tiempoTotal: 0 },
];

const GestionMesas = () => {
  const [mesas, setMesas] = useState(mesasIniciales);
  const [cronometroMesa, setCronometroMesa] = useState(null);
  const [mesaAmpliada, setMesaAmpliada] = useState(null);
  const [tiempoRestante, setTiempoRestante] = useState(0);
  const [tiempoManual, setTiempoManual] = useState("");

  // Función para alquilar una mesa con tiempo manual
  const alquilarMesa = (id) => {
    const tiempoEnSegundos = parseInt(tiempoManual, 10) * 60;
    if (isNaN(tiempoEnSegundos) || tiempoEnSegundos <= 0) {
      alert("Por favor ingresa un tiempo válido en minutos.");
      return;
    }
    setMesas((prevMesas) =>
      prevMesas.map((mesa) =>
        mesa.id === id
          ? { ...mesa, estado: "Alquilada", tiempo: tiempoEnSegundos, tiempoTotal: tiempoEnSegundos }
          : mesa
      )
    );
    setCronometroMesa(id);
    setTiempoRestante(tiempoEnSegundos);
    setTiempoManual(""); // Limpiar el campo de tiempo
  };

  // Función para liberar una mesa
  const liberarMesa = (id) => {
    setMesas((prevMesas) =>
      prevMesas.map((mesa) =>
        mesa.id === id ? { ...mesa, estado: "Disponible", tiempo: 0, tiempoTotal: 0 } : mesa
      )
    );
    if (cronometroMesa === id) setCronometroMesa(null);
    if (mesaAmpliada === id) setMesaAmpliada(null);
  };

  // Función para agregar una nueva mesa
  const agregarMesa = () => {
    const nuevaMesa = {
      id: mesas.length + 1,
      estado: "Disponible",
      tiempo: 0,
      tiempoTotal: 0,
    };
    setMesas((prevMesas) => [...prevMesas, nuevaMesa]);
  };

  // Actualización del cronómetro
  useEffect(() => {
    if (cronometroMesa !== null) {
      const intervalo = setInterval(() => {
        setMesas((prevMesas) =>
          prevMesas.map((mesa) => {
            if (mesa.id === cronometroMesa && mesa.tiempo > 0) {
              return { ...mesa, tiempo: mesa.tiempo - 1 };
            }
            return mesa;
          })
        );
      }, 1000);

      return () => clearInterval(intervalo); // Limpiar intervalo al desmontar componente
    }
  }, [cronometroMesa]);

  // Formateo del tiempo restante
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">🎱 Gestión de Mesas</h1>

      {/* Botón para agregar mesas */}
      <div className="mb-6">
        <button
          onClick={agregarMesa}
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center"
        >
          <FaPlus className="mr-2" /> Agregar Mesa
        </button>
      </div>

      {/* Lista de mesas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mesas.map((mesa) => (
          <div
            key={mesa.id}
            className="bg-gray-700 p-4 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <h3 className="text-xl font-semibold text-white">Mesa {mesa.id}</h3>
            <p
              className={`text-lg ${
                mesa.estado === "Disponible" ? "text-green-500" : "text-yellow-500"
              }`}
            >
              Estado: {mesa.estado}
            </p>

            {/* Temporizador */}
            {mesa.estado === "Alquilada" && (
              <p className="text-lg text-white mt-2">
                Tiempo restante: {formatTime(mesa.tiempo)}
              </p>
            )}

            {/* Botones */}
            <div className="space-x-4 mt-4">
              {mesa.estado === "Disponible" ? (
                <>
                  <input
                    type="number"
                    placeholder="Minutos"
                    value={tiempoManual}
                    onChange={(e) => setTiempoManual(e.target.value)}
                    className="bg-gray-600 text-white py-2 px-4 rounded-lg mb-2"
                  />
                  <button
                    onClick={() => alquilarMesa(mesa.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                  >
                    Alquilar Mesa
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => liberarMesa(mesa.id)}
                    className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
                  >
                    Liberar Mesa
                  </button>
                  <button
                    onClick={() => setMesaAmpliada(mesa.id)}
                    className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
                  >
                    Ver en Grande
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pantalla de cronómetro */}
      {cronometroMesa && (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-80 flex items-center justify-center">
          <div className="bg-gray-700 p-6 rounded-lg text-center">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">
              Mesa {cronometroMesa} - Tiempo Restante
            </h2>
            <div className="text-6xl font-bold text-white mb-6 flex items-center justify-center">
              <FaClock className="mr-4" /> {formatTime(tiempoRestante)}
            </div>
            <button
              onClick={() => setCronometroMesa(null)}
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Pantalla de mesa ampliada */}
      {mesaAmpliada && (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-80 flex items-center justify-center">
          <div className="bg-gray-700 p-6 rounded-lg text-center">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">
              Mesa {mesaAmpliada} - Vista Ampliada
            </h2>
            <div className="w-full h-64 bg-gray-600 rounded-lg mb-6">
              {/* Simulación de video de la mesa */}
              <p className="text-white text-2xl">🎥 Vista de la Mesa</p>
            </div>
            <button
              onClick={() => setMesaAmpliada(null)}
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
            >
              Cerrar Vista
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GestionMesas;
