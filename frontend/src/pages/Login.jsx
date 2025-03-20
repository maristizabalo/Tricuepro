import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Row, Col, Form, Input, Button, Typography } from "antd";
import { FaLock, FaUserAlt } from "react-icons/fa";
import Title from "antd/es/typography/Title";
import logo_kroco from "../assets/images/logo_v7-nobackground.png";
import { login } from '../services/authService';
import { jwtDecode } from 'jwt-decode';
import Particle from "../components/layout/Particle";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/states/user";
import { ROLES } from "../utils/constants";
import openNotificationWithIcon from "../utils/notification";

const Login = () => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const [loginMode, setLoginMode] = useState(true);

  const onFinish = async (values) => {
    try {
      const result = await login(values);
      const user = jwtDecode(result.access);
      user['auth_tokens'] = result;
      dispatch(createUser(user));
      openNotificationWithIcon('success', 'Inicio de sesión exitoso', '', 4);
      console.log("notification succes")

      // Determinar la ruta de redireccionamiento según el rol del usuario
      if (user.rol === ROLES.JUGADOR) {
        navigate('/private/lock');
      } else if (user.rol === ROLES.PROPIETARIO) {
        navigate('/private/inicio');
      } else if (user.rol === ROLES.ADMIN) {
        navigate('/private/inicio');
      }
    } catch (error) {
      openNotificationWithIcon('error', 'Verifica tu usuario y clave, si el error continúa contacta con el administrador.', '', 4);
      console.log("error", error)
    }
  };

  return (
    <div className="min-h-screen text-white relative">
      <div>
        <Particle />
        <div className="relative">

          <Row className="h-screen">
            <Col
              xs={12}
              md={12}
              lg={12}
              xl={12}
              xxl={12}
              className="flex justify-center items-center h-full"
            >
              <img src={logo_kroco} alt="Logo" className="w-[80%]" />
            </Col>
            <Col
              xs={12}
              md={12}
              lg={12}
              xl={12}
              xxl={12}
              className="flex justify-center items-center h-full"
            >
              <Form
                name="normal_login"
                className="redForm border border-primaryRed shadow-lg shadow-secondaryRed p-8 rounded-lg bg-gray-900"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Title className="text-primary-2 text-3xl mb-4 text-center">
                  ¡Iniciemos!
                </Title>
                <Form.Item
                  name="username"
                  type="text"
                  className="form-item mt-4"
                  rules={[{ required: true, message: "Por favor ingrese su nombre de usuario!" }]}
                >
                  <Input
                    placeholder="Nombre de usuario"
                    addonBefore={<FaUserAlt className="text-primary-2" />}
                    size="large"
                    className=" text-white border-none"
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[{ required: true, message: "Por favor ingrese su contraseña!" }]}
                >
                  <Input.Password
                    size="large"
                    placeholder="Contraseña"
                    addonBefore={<FaLock className="text-primary-2" />}
                    className=" text-white border-none"
                  />
                </Form.Item>

                <div className="text-left mt-4">
                  <a
                    className="text-primary-2 font-bold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ¿Olvidó su contraseña?
                  </a>
                </div>

                <Form.Item className="text-center mt-6">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="mt-4 bg-primary-2 hover:bg-primary-2"
                    size="large"
                  >
                    Iniciar sesión
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Login;
