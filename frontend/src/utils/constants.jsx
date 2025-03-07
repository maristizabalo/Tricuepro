import { HomeOutlined, AppstoreAddOutlined, PhoneOutlined, FileAddOutlined, QuestionCircleOutlined, DesktopOutlined, ClockCircleOutlined, ToolOutlined, ShoppingCartOutlined, VideoCameraOutlined, CustomerServiceOutlined } from '@ant-design/icons';

export const navItems = [
  { label: "Inicio", href: "inicio", icon: <HomeOutlined /> },
  { label: "Solicitar demo", href: "solicitar-demo", icon: <FileAddOutlined /> },
  { label: "Soporte", href: "soporte", icon: <QuestionCircleOutlined /> },
  { label: "Servicio POS", href: "servicio-pos", icon: <AppstoreAddOutlined /> },
  { label: "Contáctanos", href: "contactanos", icon: <PhoneOutlined /> }
];

export const features = [
  {
    icon: <DesktopOutlined />,
    text: "Software de Billar Inteligente",
    description:
      "Kroco Billar es un software avanzado diseñado para la gestión eficiente de salas de billar. Controla cada mesa en tiempo real y optimiza la administración del negocio con tecnología de vanguardia.",
  },
  {
    icon: <ClockCircleOutlined />,
    text: "Control de Mesas en Tiempo Real",
    description:
      "Gestiona el uso de cada mesa con precisión. Monitorea el tiempo de juego, controla reservas y maximiza la rentabilidad de tu sala de billar con herramientas automatizadas.",
  },
  {
    icon: <ShoppingCartOutlined />,
    text: "Sistema POS Integrado",
    description:
      "Facilita la venta de bebidas, snacks y accesorios con un sistema de punto de venta (POS) totalmente integrado, mejorando la experiencia de los clientes y agilizando la facturación.",
  },
  {
    icon: <VideoCameraOutlined />,
    text: "Repetición de Jugadas",
    description:
      "Lleva el billar al siguiente nivel con un sistema de repetición de jugadas en pantallas, permitiendo a los jugadores analizar y mejorar su técnica.",
  },
  {
    icon: <CustomerServiceOutlined />,
    text: "Soporte Técnico 24/7",
    description:
      "Nuestro equipo de soporte está disponible las 24 horas, los 7 días de la semana, para garantizar el funcionamiento continuo del software y resolver cualquier problema técnico.",
  },
  {
    icon: <ToolOutlined />,
    text: "Mantenimiento y Actualizaciones",
    description:
      "Kroco Billar se mantiene en constante evolución con actualizaciones automáticas que mejoran la estabilidad, seguridad y funciones innovadoras para una mejor experiencia.",
  },
];