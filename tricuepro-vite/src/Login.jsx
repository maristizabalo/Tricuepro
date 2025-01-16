import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Particle from "./components/layout/Particle";
import { Row, Col, Form, Input, Button, Typography, notification } from 'antd';
import { FaLock, FaUserAlt } from "react-icons/fa";
import Title from "antd/es/typography/Title";
import logo_tricuepro from './assets/images/logo_v1_not_background.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Usar useNavigate para navegar

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    alert(`Iniciar sesión con:\nEmail: ${email}\nPassword: ${password}`);
    navigate("/dashboard"); // Navegar a la ruta /dashboard
  };

  return (
    // OLD CODE
    // <div className="flex items-center justify-center h-screen relative">
    //   {/* Fondo de la mesa de billar azul con animación de juego */}
    //   <div className="absolute top-0 left-0 w-full h-full bg-blue-600 rounded-lg border-8 border-yellow-600">
    //     {/* Borde de la mesa */}
    //     <div className="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-lg">
    //       {/* Bolas de billar animadas */}
    //       <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 bg-white w-12 h-12 rounded-full border-4 border-black animate-move-ball-1"></div>
    //       <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 bg-red-600 w-12 h-12 rounded-full border-4 border-black animate-move-ball-2"></div>
    //       <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 bg-yellow-500 w-12 h-12 rounded-full border-4 border-black animate-move-ball-3"></div>
    //       <div className="absolute top-3/4 left-1/3 transform -translate-x-1/2 bg-green-500 w-12 h-12 rounded-full border-4 border-black animate-move-ball-4"></div>
    //       <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 bg-blue-500 w-12 h-12 rounded-full border-4 border-black animate-move-ball-5"></div>
    //       <div className="absolute top-2/3 left-1/4 transform -translate-x-1/2 bg-purple-600 w-12 h-12 rounded-full border-4 border-black animate-move-ball-6"></div>
    //     </div>
    //   </div>

    //   {/* Formulario de Login */}
    //   <div className="relative z-10 bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-sm w-full">
    //     <h1 className="text-4xl font-bold mb-4 text-center text-yellow-400">Login - TriCue Pro</h1>
    //     <form onSubmit={handleSubmit} className="space-y-4">
    //       <input
    //         type="email"
    //         placeholder="Correo electrónico"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         className="w-full p-3 rounded border border-gray-600 focus:outline-none bg-gray-900 text-white"
    //       />
    //       <input
    //         type="password"
    //         placeholder="Contraseña"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         className="w-full p-3 rounded border border-gray-600 focus:outline-none bg-gray-900 text-white"
    //       />
    //       <button
    //         type="submit"
    //         className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
    //       >
    //         Iniciar sesión
    //       </button>
    //     </form>
    //   </div>
    // </div>

    // NEW CODE
    <>
      <Particle />
      <div>
        <div className="full-view">
          <Row className="h-svh">
            <Col
              xs={12} md={12} lg={12} xl={12} xxl={12}
              className="flex justify-center items-center h-full"
            >
              <img src={logo_tricuepro} alt="Logo" className='w-[80%]' />
            </Col>
            <Col
              xs={12} md={12} lg={12} xl={12} xxl={12}
              className="flex justify-center items-center h-full"
            >
              <Form
                name="normal_login"
                className="redForm border border-primaryRed shadow-lg shadow-secondaryRed"
                initialValues={{ remember: true }}
              // onFinish={onFinish}
              >
                <Title className='titleRedPrimary'>
                  ¡Iniciemos!
                </Title>
                <Form.Item
                  name="username"
                  type="text"
                  className="form-item mt-8"
                  rules={[{ required: true, message: 'Por favor ingrese su nombre de usuario!' }]}
                >
                  <Input
                    placeholder="Nombre de usuario"
                    addonBefore={<FaUserAlt className="site-form-item-icon text-primaryRed" />}
                    size='large'
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Por favor ingrese su contraseña!' }]}
                >
                  <Input.Password
                    size='large'
                    placeholder="Contraseña"
                    addonBefore={<FaLock className="site-form-item-icon text-primaryRed" />}
                  />
                </Form.Item>

                <div className='text-left mt-8'>
                  <a
                    // href="https://cuenta.dadep.gov.co/forgotten"
                    className='text-primaryRed font-bold hover:underline'
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ¿Olvidó su contraseña?
                  </a>
                </div>

                <Form.Item className='text-center mt-5'>
                  <Button type='primary' htmlType="submit" className="mt-4" size='large'>
                    Iniciar sesión
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default Login;
