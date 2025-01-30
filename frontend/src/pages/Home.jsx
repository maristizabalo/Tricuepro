import React from 'react';
import { Card, Carousel, Col, Divider, Image, Row, Typography } from 'antd';
import { FaCoins, FaCashRegister, FaVideo } from 'react-icons/fa';
import sistemaPOS from '../assets/images/sistema_pos.webp';
import repeticion from '../assets/images/repeticion_jugada.webp';
import enProduccion from '../assets/images/funcionamiento_total.webp';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';



const Home = () => {
  return (

    <div className='bg-slate-900 h-full'>
      <Navbar />
      <Row className='my-12 px-14'>
        {/* Columna izquierda: Texto degradado */}
        <Col span={12} className="items-center justify-center text-center">
          <h1
            className="text-6xl font-bold bg-gradient-to-r from-red-600 via-red-700 to-white text-transparent bg-clip-text text-center"
          >
            KrocoBilliard, el futuro del billar<br />
          </h1>
          <p className='text-white text-2xl'>¡Eleva tu negocio al siguiente nivel!</p>
        </Col>

        {/* Columna derecha: Carrusel con imágenes */}
        <Col span={12} className="flex items-center justify-center">
          <div className="w-3/4">
            <div className="overflow-hidden rounded-lg border-primaryRed shadow-lg shadow-secondaryRed">
              <Carousel autoplay>
                <div>
                  <img
                    src={sistemaPOS}
                    alt="Billiard Image 2"
                  />
                </div>
                <div>
                  <img
                    src={repeticion}
                    alt="Billiard Image 3"
                  />
                </div>
                <div>
                  <img
                    src={enProduccion}
                    alt="Billiard Image 3"
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </Col>
      </Row>

      <Divider className="bg-red-500 h-1" />

      <p className="text-8xl text-white text-center mt-16">
        Nuestros Servicios
      </p>
      <Row className="mt-16 px-14 justify-center">
        <Col span={8} className="flex justify-center">
          <Card
            className="text-center border border-primaryRed shadow-lg shadow-secondaryRed"
            style={{ width: 300 }}
            cover={
              <div className="flex justify-center items-center h-full w-full text-6xl text-yellow-500 my-4">
                <FaCoins />
              </div>
            }
          >
            <h3 className="text-xl font-semibold">Administración</h3>
            <p className="text-gray-600">
              Gestiona las operaciones diarias del billar con herramientas diseñadas para optimizar el rendimiento y facilitar el control.
            </p>
          </Card>
        </Col>
        <Col span={8} className="flex justify-center">
          <Card
            className="text-center border border-primaryRed shadow-lg shadow-secondaryRed"
            style={{ width: 300 }}
            cover={
              <div className="flex justify-center items-center text-6xl text-blue-500 my-4">
                <FaCashRegister />
              </div>
            }
          >
            <h3 className="text-xl font-semibold">Sistema POS</h3>
            <p className="text-gray-600">
              Facilita la venta de servicios y productos con un sistema de punto de venta intuitivo y confiable.
            </p>
          </Card>
        </Col>
        <Col span={8} className="flex justify-center">
          <Card
            className="text-center border border-primaryRed shadow-lg shadow-secondaryRed"
            style={{ width: 300 }}
            cover={
              <div className="flex justify-center items-center text-6xl text-red-500 my-4">
                <FaVideo />
              </div>
            }
          >
            <h3 className="text-xl font-semibold">Repetición al Instante</h3>
            <p className="text-gray-600">
              Revive las mejores jugadas al instante con nuestro sistema avanzado de repetición en video.
            </p>
          </Card>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Home;
