// import React from 'react';
// import { Button } from 'antd';
// import { UserOutlined, BulbOutlined, MoonOutlined, HomeOutlined, AppstoreAddOutlined, PhoneOutlined, FileAddOutlined, QuestionCircleOutlined } from '@ant-design/icons';
// import logov6 from '../../assets/images/logo_v7-nobackground.png';
// import { useNavigate } from 'react-router-dom';

// const Navbar = ({ isDarkMode, setIsDarkMode }) => {
//     const navigate = useNavigate();

//     // Función para cambiar el tema
//     const toggleTheme = () => {
//         setIsDarkMode(!isDarkMode);
//     };

//     const handleLogin = () => {
//         navigate("/login");
//     };
 
//     const handleNavigate = (path) => {
//         navigate(path);
//     };

//     return (
//         <div className={`${isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-gray-900'} fixed w-full z-10 top-0`}>
//             <nav className="flex items-center justify-between px-6 py-4 shadow-md">
                
//                 <div className="flex items-center gap-4">
//                     <img src={logov6} alt="Logo" width={150} className="rounded-md" />
//                 </div>
                
//                 <div className="flex items-center gap-6 w-full justify-center">
//                     <Button type="link" className={`text-lg font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-900'} hover:text-yellow-500 transition-all duration-300`} onClick={() => handleNavigate("/")}>
//                         <HomeOutlined /> Inicio
//                     </Button>
//                     <Button type="link" className={`text-lg font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-900'} hover:text-yellow-500 transition-all duration-300`} onClick={() => handleNavigate("/solicitar-demo")}>
//                         <FileAddOutlined /> Solicitar demo
//                     </Button>
//                     <Button type="link" className={`text-lg font-extrabold hover:text-yellow-500 transition-all duration-300`} onClick={() => handleNavigate("/soporte")}>
//                         <QuestionCircleOutlined /> Soporte
//                     </Button>
//                     <Button type="link" className={`text-lg font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-900'} hover:text-yellow-500 transition-all duration-300`}>
//                         <AppstoreAddOutlined /> Servicio POS
//                     </Button>
//                     <Button type="link" className={`text-lg font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-900'} hover:text-yellow-500 transition-all duration-300`}>
//                         <PhoneOutlined /> Contáctanos
//                     </Button>
//                 </div>
//                 <div className="flex items-center gap-4 ml-auto">
//                     {/* Botón para cambiar el tema */}
//                     <Button onClick={toggleTheme} className="bg-yellow-500 rounded-full">
//                         {isDarkMode ? <BulbOutlined /> : <MoonOutlined />}
//                     </Button>

//                     {/* Botón de login */}
//                     <Button type="primary" onClick={handleLogin} className="rounded-full">
//                         <UserOutlined />
//                     </Button>
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default Navbar;
