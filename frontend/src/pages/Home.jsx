import React, { useState } from 'react';
import { Card, Carousel, Col, Divider, Row, Rate, Input, Button } from 'antd';
import { FaCoins, FaCashRegister, FaVideo, FaChartBar, FaCogs, FaFacebook, FaWhatsapp } from 'react-icons/fa';  
import sistemaPOS from '../assets/images/sistema_pos.webp';
import enProduccion from '../assets/images/funcionamiento_total.webp';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Home = () => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(3);

  const handleCommentChange = (e) => setComment(e.target.value);
  const handleRatingChange = (value) => setRating(value);

  return (
    <div className="h-full">
      <div className="mt-48">
        <Navbar />

        <Row className='my-12 px-14'>
          {/* Columna derecha: Carrusel con imágenes */}
          <Col span={12} className="items-center justify-center text-center">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-red-600 via-red-700 to-white text-transparent bg-clip-text text-center mt-16">
              KrocoBilliard, el futuro del billar<br />
            </h1>
            <p className='text-2xl font-semibold text-center'>
              Revoluciona la experiencia del billar con nuestro sistema innovador, diseñado para llevar el juego de 3 bandas y otros estilos a un nuevo nivel. Optimiza la gestión, disfruta de tecnología avanzada y lleva a tu negocio al futuro del billar.
            </p>
          </Col>

          {/* Columna derecha: Carrusel con imágenes */}
          <Col span={12} className="flex items-center justify-center">
            <div className="w-3/4">
              <div className="overflow-hidden rounded-lg border-primaryRed shadow-lg shadow-secondaryRed">
                <Carousel autoplay>
                  <div>
                    <img src={sistemaPOS} alt="Billiard Image 2" />
                  </div>
                  <div>
                    <img src={enProduccion} alt="Billiard Image 3" />
                  </div>
                </Carousel>
              </div>
            </div>
          </Col>
        </Row>

        <Divider className="bg-red-500 h-1" />

        <p className="text-8xl text-center mt-16">
          Nuestros Servicios
        </p>

        <Row className="mt-16 px-14 justify-center">
          {/* Servicios */}
          <Col span={6} className="flex justify-center mb-8">
            <Card
              className="text-center border border-primaryRed shadow-lg shadow-secondaryRed transition-transform transform hover:scale-110 hover:rotate-2 duration-300"
              style={{ width: 350 }}
              cover={
                <div className="flex justify-center items-center h-full w-full text-6xl text-yellow-500 my-4">
                  <FaCoins />
                </div>
              }
            >
              <h3 className="text-xl font-semibold">Administración</h3>
              <p >
                Gestiona las operaciones diarias del billar con herramientas diseñadas para optimizar el rendimiento y facilitar el control.
              </p>
            </Card>
          </Col>

          <Col span={6} className="flex justify-center mb-8">
            <Card
              className="text-center border border-primaryRed shadow-lg shadow-secondaryRed transition-transform transform hover:scale-110 hover:rotate-2 duration-300"
              style={{ width: 350 }}
              cover={
                <div className="flex justify-center items-center text-6xl text-blue-500 my-4">
                  <FaCashRegister />
                </div>
              }
            >
              <h3 className="text-xl font-semibold">Sistema POS</h3>
              <p >
                Facilita la venta de servicios y productos con un sistema de punto de venta intuitivo y confiable.
              </p>
            </Card>
          </Col>

          <Col span={6} className="flex justify-center mb-8">
            <Card
              className="text-center border border-primaryRed shadow-lg shadow-secondaryRed transition-transform transform hover:scale-110 hover:rotate-2 duration-300"
              style={{ width: 350 }}
              cover={
                <div className="flex justify-center items-center text-6xl text-red-500 my-4">
                  <FaVideo />
                </div>
              }
            >
              <h3 className="text-xl font-semibold">Repetición al Instante</h3>
              <p >
                Revive las mejores jugadas al instante con nuestro sistema avanzado de repetición en video.
              </p>
            </Card>
          </Col>

          <Col span={6} className="flex justify-center mb-8">
            <Card
              className="text-center border border-primaryRed shadow-lg shadow-secondaryRed transition-transform transform hover:scale-110 hover:rotate-2 duration-300"
              style={{ width: 350 }}
              cover={
                <div className="flex justify-center items-center text-6xl text-green-500 my-4">
                  <FaChartBar />
                </div>
              }
            >
              <h3 className="text-xl font-semibold">Análisis de Datos</h3>
              <p >
                Accede a informes detallados para mejorar el rendimiento y la gestión de tu negocio de billar con nuestro sistema de análisis.
              </p>
            </Card>
          </Col>

          <Col span={6} className="flex justify-center mb-8">
            <Card
              className="text-center border border-primaryRed shadow-lg shadow-secondaryRed transition-transform transform hover:scale-110 hover:rotate-2 duration-300"
              style={{ width: 350 }}
              cover={
                <div className="flex justify-center items-center text-6xl text-purple-500 my-4">
                  <FaCogs />
                </div>
              }
            >
              <h3 className="text-xl font-semibold">Configuración Personalizada</h3>
              <p >
                Personaliza y ajusta las funciones del sistema para adaptarlas a las necesidades específicas de tu billar.
              </p>
            </Card>
          </Col>
        </Row>

        {/* ¿Por qué elegirnos? */}
        <Divider className="bg-red-500 h-1" />
        <p className="text-4xl text-center mt-16">
          ¿Por qué elegir KrocoBilliard?
        </p>
        <Row className="mt-8 px-14 justify-center">
          <Col span={12} className="text-center">
            <p className="text-2xl">
              Nuestro software no solo mejora la experiencia del cliente, sino que también optimiza la administración del negocio de billar con herramientas avanzadas y fáciles de usar. ¡Transforma tu negocio hoy con tecnología de vanguardia!
            </p>
            <p className="text-xl mt-8">
              Además, con nuestro sistema de repetición al instante, cada jugador podrá analizar sus mejores jugadas en tiempo real, mejorando su rendimiento y disfrutando de una experiencia única.
            </p>
            <p className="text-xl mt-4">
              La integración con el sistema de análisis de datos permite que puedas acceder a reportes detallados de cada partida, ayudando a gestionar el rendimiento de tu negocio de manera eficiente.
            </p>
            <p className="text-xl mt-4">
              Y por si fuera poco, nuestro sistema de configuración personalizada se adapta a las necesidades de tu negocio, brindando flexibilidad y escalabilidad para que crezcas sin límites.
            </p>
          </Col>
        </Row>

        {/* Testimonios */}
        <Divider className="bg-red-500 h-1" />
        <p className="text-4xl text-center mt-16">
          Testimonios
        </p>

        <Row className="mt-8 px-14 justify-center">
          <Col span={12} className="text-center">
            <p className="text-2xl">
              Ayúdanos a mejorar nuestro sistema, tu opinión es muy importante para nosotros.
            </p>
            <Rate value={rating} onChange={handleRatingChange} className="text-xl mt-4" />
            <Input.TextArea
              value={comment}
              onChange={handleCommentChange}
              placeholder="Escribe tu comentario aquí..."
              rows={4}
              className="mt-4"
            />
            <Button type="primary" className="mt-4">Enviar Comentario</Button>

            <div className="mt-8">
              <p className="text-2xl">Lo que dicen nuestros usuarios:</p>
              <div className="mt-4">
                <p className="text-xl font-semibold">Juan Pérez</p>
                <Rate value={5} disabled className="text-yellow-500" />
                <p className="mt-2 text-gray-600">"El sistema es increíble, mejora muchísimo la experiencia de juego y hace todo mucho más fácil. Lo recomiendo al 100%."</p>
              </div>

              <div className="mt-4">
                <p className="text-xl font-semibold">María González</p>
                <Rate value={4} disabled className="text-yellow-500" />
                <p className="mt-2 text-gray-600">"Me encanta la repetición instantánea, es una herramienta muy útil para mejorar mi juego. ¡Estoy muy contenta con el sistema!"</p>
              </div>

              <div className="mt-4">
                <p className="text-xl font-semibold">Carlos Rodríguez</p>
                <Rate value={5} disabled className="text-yellow-500" />
                <p className="mt-2 text-gray-600">"El sistema de análisis de datos me ha ayudado a mejorar la administración de mi negocio. ¡Es una herramienta muy completa!"</p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Redes Sociales */}
        <Row className="mt-16 px-14 justify-center">
          <Col span={12} className="flex justify-center space-x-8">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-5xl text-blue-500 hover:text-blue-700 transition-colors duration-300" />
            </a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-5xl text-green-500 hover:text-green-700 transition-colors duration-300" />
            </a>
          </Col>
        </Row>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
