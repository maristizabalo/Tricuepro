import { Row, Col, Input, Button } from "antd";
import img from "../../assets/images/img1.png";

const HeroSection = () => {
    return (
        <div id="inicio" className="lg:mt-0 border-b border-neutral-800 px-6 pb-12 bg-slate-100 dark:bg-neutral-900">
            <Row gutter={[32, 32]}>

                {/* Primera columna: Texto con SEO y formulario */}
                <Col xs={24} md={12}>
                    <h1 className="font-semibold text-4xl sm:text-6xl lg:text-7xl text-center md:text-left tracking-wide text-neutral-900 dark:text-slate-100">
                        <span className="bg-gradient-to-r from-primary-2 to-secondary-2 text-transparent bg-clip-text">
                            Software de Billar
                        </span>{" "}
                        con Tecnología Avanzada
                    </h1>
                    <p className="mt-6 text-lg text-center md:text-left text-neutral-700 dark:text-slate-300 max-w-xl">
                        Descubre <strong>Kroco Billar</strong>, el{" "}
                        <strong>software de billar inteligente</strong> que optimiza la administración de tu sala de billar con
                        <strong> tecnologías avanzadas en billar</strong>. Controla partidas, gestiona pagos y mejora la experiencia
                        de juego con herramientas digitales de última generación.
                    </p>
                    <p className="mt-4 text-lg text-center md:text-left text-neutral-700 dark:text-slate-300 max-w-xl">
                        Con nuestro <strong>programa para billares</strong>, lleva tu negocio al siguiente nivel con{" "}
                        <strong>automatización, estadísticas y control en tiempo real</strong>.
                    </p>
                    <div className="mt-8 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
                        <Input
                            placeholder="Ingresa tu correo o número"
                            className="py-3 px-4 rounded-md w-full md:w-64 bg-gray-200 dark:bg-gray-300 text-neutral-900 dark:text-slate-100"
                        />
                        <Button
                            type="primary"
                            className="bg-gradient-to-r from-primary-2 to-secondary-2 px-6 py-3 text-lg font-bold text-white dark:text-slate-100 hover:bg-secondary-1"
                        >
                            Ser Contactado
                        </Button>
                    </div>
                </Col>

                {/* Segunda columna: Imagen representativa */}
                <Col xs={24} md={12} className="flex justify-center items-center h-full w-full">
                    <div className="flex justify-center items-center">
                        <img
                            src={img}
                            alt="Software de billar inteligente"
                            className="h-auto max-w-full rounded-lg shadow-lg dark:shadow-[#1b5d3c]"
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default HeroSection;