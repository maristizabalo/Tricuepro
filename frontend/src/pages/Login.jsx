import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, Input, Button, Typography } from "antd";
import { FaLock, FaUserAlt } from "react-icons/fa";
import Title from "antd/es/typography/Title";
import logo_kroco from "../assets/images/logo_v7-nobackground.png";

// componentes
import Loading from "../components/layout/Loading";
import Particle from "../components/layout/Particle";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1600); 
  };

  return (
    <div className="min-h-screen text-white relative">
      {loading ? (
        <Loading />
      ) : (
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
                >
                  <Title className="text-red-500 text-3xl mb-4 text-center">
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
                      addonBefore={<FaUserAlt className="text-red-500" />}
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
                      addonBefore={<FaLock className="text-red-500" />}
                      className=" text-white border-none"
                    />
                  </Form.Item>

                  <div className="text-left mt-4">
                    <a
                      className="text-red-500 font-bold hover:underline"
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
                      className="mt-4 bg-red-500 hover:bg-red-600"
                      size="large"
                      onClick={handleLogin}
                    >
                      Iniciar sesión
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
