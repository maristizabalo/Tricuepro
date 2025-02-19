import React from "react";
import { Button, Collapse } from "antd";
import { ArrowDownOutlined, PlayCircleOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const { Panel } = Collapse;

const Soporte = () => {
  return (
    <div className="min-h-screen">
    
      <Navbar isDarkMode={false} setIsDarkMode={() => {}} />

      <div className="p-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Centro de Soporte</h1>
          <p className="text-lg text-gray-600">Aquí encontrarás toda la ayuda que necesitas para sacar el máximo provecho de nuestro software de billar.</p>
        </div>

      
        <div className="flex justify-center gap-8 mb-12">
          <Link to="#documentacion" className="text-lg font-semibold text-yellow-500 hover:text-yellow-700">Documentación</Link>
          <Link to="#faq" className="text-lg font-semibold text-yellow-500 hover:text-yellow-700">Preguntas Frecuentes</Link>
          <Link to="#tutoriales" className="text-lg font-semibold text-yellow-500 hover:text-yellow-700">Tutoriales en Video</Link>
          <Link to="#contacto" className="text-lg font-semibold text-yellow-500 hover:text-yellow-700">Contactar Soporte</Link>
        </div>

       
        <section id="documentacion" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Documentación Oficial</h2>
          <p className="text-lg text-gray-600 mb-6">Accede a los manuales completos de todas las funcionalidades de nuestro software de billar.</p>
          <Button type="primary" size="large" className="mb-6">
            Descargar Manual del Usuario
          </Button>
          <p className="text-gray-500">Manual de configuración, instalación y uso avanzado.</p>
        </section>

      
        <section id="faq" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes (FAQ)</h2>
          <Collapse accordion className="mb-8">
            <Panel header="¿Cómo instalar el software de billar?" key="1" extra={<ArrowDownOutlined />}>
              <p className="text-gray-600">Para instalar el software de billar, solo debes seguir los pasos indicados en el manual de instalación...</p>
            </Panel>
            <Panel header="¿Cómo agregar nuevas mesas al sistema?" key="2" extra={<ArrowDownOutlined />}>
              <p className="text-gray-600">Para agregar nuevas mesas, ingresa al panel de administración y haz clic en "Gestionar Mesas"...</p>
            </Panel>
            <Panel header="¿Cómo puedo hacer un seguimiento de mis partidas?" key="3" extra={<ArrowDownOutlined />}>
              <p className="text-gray-600">Puedes ver las estadísticas de tus partidas desde la sección "Repetición", donde podrás analizar los detalles...</p>
            </Panel>
          </Collapse>
        </section>

       
        <section id="tutoriales" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Tutoriales en Video</h2>
          <div className="flex justify-center gap-8">
            <div className="flex flex-col items-center">
              <PlayCircleOutlined className="text-4xl text-yellow-500 mb-2" />
              <Button type="link" href="https://www.youtube.com/watch?v=1" target="_blank" className="text-lg font-semibold text-yellow-500 hover:text-yellow-700">
                Ver Tutorial 1: Introducción al Software
              </Button>
            </div>
            <div className="flex flex-col items-center">
              <PlayCircleOutlined className="text-4xl text-yellow-500 mb-2" />
              <Button type="link" href="https://www.youtube.com/watch?v=2" target="_blank" className="text-lg font-semibold text-yellow-500 hover:text-yellow-700">
                Ver Tutorial 2: Configuración de Mesas
              </Button>
            </div>
          </div>
        </section>

      
        <section id="contacto" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Contactar Soporte</h2>
          <p className="text-lg text-gray-600 mb-6">Si necesitas asistencia inmediata, no dudes en ponerte en contacto con nuestro equipo de soporte.</p>
          <div className="flex justify-center gap-8">
            <Button type="primary" size="large" className="bg-green-500 hover:bg-green-600">
              Soporte por Correo
            </Button>
            <Button type="primary" size="large" icon={<WhatsAppOutlined />} className="bg-green-500 hover:bg-green-600">
              Soporte por WhatsApp
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Soporte;
