import secretPass from "../assets/Paginas/secretpas.png";
import vibratta from "../assets/Paginas/vibratta1.png";
import divisor from "../assets/Paginas/divisor.png";
import memorama from "../assets/Paginas/memorama.png";
import sixmotors from "../assets/Paginas/sixmotors.png";
import sixMotorsDash from "../assets/Paginas/sixMotorsDash.png";
import generador from "../assets/Paginas/GeneradorContra.png";
import nexoproapp from "../assets/Paginas/nexoproapp.png";
import controlcocina from "../assets/Paginas/controlcocina.png";
import sistemstockcontrol from "../assets/Paginas/sistemstockcontrol.png";
import barberiaturnos from "../assets/Paginas/barberiaturnos.png";
import {
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faReact,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faDiagramNext,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

export const Pags = [
  {
    title: "Nexo Pro",
    desc: "Plataforma integral para la gestión de eventos, invitados y consumos en un solo sistema. Centraliza la operación y elimina la necesidad de múltiples herramientas.",
    img: nexoproapp,
    icon: [faReact, faDiagramNext, faDatabase],
    stack: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
    href: "https://nexo-pro-app.vercel.app/",
    github: null,
  },
  {
    title: "Turneros para barberías",
    desc: "Sistema de turnos para barberías con gestión de clientes, reservas y notificaciones. Optimiza la organización y mejora la experiencia del cliente.",
    img: barberiaturnos,
    icon: [faReact, faNode, faDatabase],
    stack: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS", "Supabase"],
    href: "https://turnero-barber.vercel.app/",
    github: null,
  },
  {
    title: "Sistema de Stock",
    desc: "Dashboard para gestión de inventario en tiempo real con alertas de reposición, control por sucursales y generación de reportes para toma de decisiones.",
    img: sistemstockcontrol,
    icon: [faReact, faNode, faDatabase],
    stack: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
    href: "https://sistemstockcontrol.vercel.app/",
    github: null,
  },
  {
    title: "Vibratta Ecommerce",
    desc: "Ecommerce completo con catálogo dinámico, filtros por categoría y proceso de compra integrado con pasarelas de pago.",
    img: vibratta,
    icon: [faReact, faSquareJs, faCss3Alt],
    stack: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
    href: "https://vibratta-shop.vercel.app/",
    github: null,
  },
  {
    title: "Secret Pass",
    desc: "Aplicación de gestión de contraseñas con cifrado local, autenticación segura y sincronización entre dispositivos.",
    img: secretPass,
    icon: [faReact, faShieldHalved, faSquareJs],
    stack: ["React", "Auth"],
    href: "https://secret-pass-one.vercel.app/",
    github: null,
  },
  {
    title: "Control Cocina",
    desc: "Sistema para gestión de caja, pedidos e inventario en emprendimientos gastronómicos, con reportes de ventas y control operativo.",
    img: controlcocina,
    icon: [faReact, faShieldHalved, faSquareJs],
    stack: ["React", "Auth"],
    href: "https://secret-pass-one.vercel.app/",
    github: null,
  },
  {
    title: "Divisor de Gastos",
    desc: "Herramienta colaborativa para dividir gastos entre grupos, generar balances automáticos y exportar resultados en PDF.",
    img: divisor,
    icon: [faReact, faSquareJs, faDatabase],
    stack: ["React", "LocalStorage"],
    href: "https://divisor-de-gastos-five.vercel.app/",
    github: null,
  },
  {
    title: "Memorama",
    desc: "Juego interactivo de memoria con contador de movimientos y temporizador, desarrollado en React.",
    img: memorama,
    icon: [faReact, faSquareJs, faCss3Alt],
    stack: ["React", "React Router", "Tailwind"],
    href: "https://memorama-autos.vercel.app/",
    github: "https://github.com/MateoNerli/Memorama-autos",
  },
  {
    title: "SixMotors",
    desc: "Ecommerce full stack de vehículos con autenticación, carrito persistente y panel de administración. Backend en Node.js con base de datos MySQL.",
    img: sixmotors,
    icon: [faHtml5, faCss3Alt, faSquareJs, faNode, faDatabase],
    stack: ["Node", "Express", "MySQL", "JWT"],
    href: "https://sixmotors.onrender.com/",
    github: "https://github.com/MateoNerli/grupo_4_SixMotors",
  },
  {
    title: "SixMotors Dashboard",
    desc: "Panel de visualización de datos para ecommerce con gráficos, filtros y métricas clave de negocio en tiempo real.",
    img: sixMotorsDash,
    icon: [faReact, faSquareJs, faCss3Alt],
    stack: ["React", "React Router", "Tailwind", "Recharts"],
    href: "https://dashboar-six-motors.vercel.app/",
    github: "https://github.com/MateoNerli/DashboarSixMotors",
  },
  {
    title: "Generador de Contraseñas",
    desc: "Herramienta configurable para generar contraseñas seguras con opciones de personalización y lógica basada en hooks.",
    img: generador,
    icon: [faReact, faSquareJs],
    stack: ["React", "Vite", "Tailwind"],
    href: "https://generador-password-ten.vercel.app/",
    github: "https://github.com/MateoNerli/GeneradorPassword",
  },
];
