import React, { useState } from "react";

// Simulamos usuarios registrados
const usuarios = [
  { id: 1, nombre: "Usuario 1", carrito: [] },
  { id: 2, nombre: "Usuario 2", carrito: [] },
  { id: 3, nombre: "Usuario 3", carrito: [] },
];

const GestionProductos = () => {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Cue Ball",
      precio: 15.99,
      imagen: "https://via.placeholder.com/150x150?text=Cue+Ball", // Imagen placeholder
    },
    {
      id: 2,
      nombre: "Tiza de Billar",
      precio: 3.50,
      imagen: "https://via.placeholder.com/150x150?text=Tiza+de+Billar", // Imagen placeholder
    },
    {
      id: 3,
      nombre: "Mesa de Billar Profesional",
      precio: 2000,
      imagen: "https://via.placeholder.com/150x150?text=Mesa+Billar", // Imagen placeholder
    },
    {
      id: 4,
      nombre: "Palo de Billar",
      precio: 100,
      imagen: "https://via.placeholder.com/150x150?text=Palo+de+Billar", // Imagen placeholder
    },
  ]);
  
  // Estado para manejar el formulario de agregar productos
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    precio: "",
    imagen: "",
  });
  
  // Estado para manejar el usuario seleccionado
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(usuarios[0]);

  // Función para manejar el cambio en el formulario de nuevos productos
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoProducto((prevProducto) => ({
      ...prevProducto,
      [name]: value,
    }));
  };

  // Función para agregar un nuevo producto
  const agregarProducto = () => {
    setProductos((prevProductos) => [
      ...prevProductos,
      {
        id: prevProductos.length + 1, // Generar un ID único
        ...nuevoProducto,
        precio: parseFloat(nuevoProducto.precio), // Convertir precio a número
      },
    ]);
    setNuevoProducto({ nombre: "", precio: "", imagen: "" });
  };

  // Función para asignar producto al carrito del usuario seleccionado
  const agregarAlCarrito = (producto) => {
    setUsuarioSeleccionado((prevUsuario) => {
      const usuarioActualizado = {
        ...prevUsuario,
        carrito: [...prevUsuario.carrito, producto],
      };
      return usuarioActualizado;
    });
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg mt-4 space-y-6">
      <h2 className="text-3xl font-extrabold text-yellow-400 mb-4">🛒 Gestión de Productos</h2>

      {/* Formulario para agregar un nuevo producto */}
      <div className="bg-gray-700 p-4 rounded-lg mb-6">
        <h3 className="text-2xl text-white mb-4">Agregar Nuevo Producto</h3>
        <input
          type="text"
          name="nombre"
          value={nuevoProducto.nombre}
          onChange={handleInputChange}
          placeholder="Nombre del producto"
          className="w-full p-2 mb-2 bg-gray-600 text-white rounded-md"
        />
        <input
          type="number"
          name="precio"
          value={nuevoProducto.precio}
          onChange={handleInputChange}
          placeholder="Precio"
          className="w-full p-2 mb-2 bg-gray-600 text-white rounded-md"
        />
        <input
          type="text"
          name="imagen"
          value={nuevoProducto.imagen}
          onChange={handleInputChange}
          placeholder="URL de la imagen"
          className="w-full p-2 mb-2 bg-gray-600 text-white rounded-md"
        />
        <button
          onClick={agregarProducto}
          className="bg-green-600 text-white py-2 px-6 rounded-lg mt-4 hover:bg-green-700"
        >
          Agregar Producto
        </button>
      </div>

      {/* Selección de usuario */}
      <div className="mb-4">
        <h3 className="text-white mb-2">Seleccionar Usuario</h3>
        <select
          onChange={(e) => setUsuarioSeleccionado(usuarios[e.target.value])}
          className="bg-gray-600 text-white p-2 rounded-md"
        >
          {usuarios.map((usuario, index) => (
            <option key={usuario.id} value={index}>
              {usuario.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Mostrar productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="bg-gray-700 rounded-lg shadow-lg p-4 flex flex-col items-center text-center"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-white mb-2">{producto.nombre}</h3>
            <p className="text-yellow-400 font-bold mb-4">${producto.precio.toFixed(2)}</p>
            <button
              onClick={() => agregarAlCarrito(producto)}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700"
            >
              Agregar al carrito de {usuarioSeleccionado.nombre}
            </button>
          </div>
        ))}
      </div>

      {/* Mostrar el carrito del usuario seleccionado */}
      <div className="mt-6 bg-gray-700 p-4 rounded-lg w-full">
        <h3 className="text-2xl text-white mb-4">Carrito de {usuarioSeleccionado.nombre}</h3>
        {usuarioSeleccionado.carrito.length > 0 ? (
          <ul className="space-y-2">
            {usuarioSeleccionado.carrito.map((producto, index) => (
              <li key={index} className="text-white">
                {producto.nombre} - ${producto.precio.toFixed(2)}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white">El carrito está vacío.</p>
        )}
      </div>
    </div>
  );
};

export default GestionProductos;
