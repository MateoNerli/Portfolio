import stockControl from "../assets/Paginas/stockControlDrink.svg";
import secretPass from "../assets/Paginas/secretPass.svg";
import vibratta from "../assets/Paginas/vibratta.svg";
import divisor from "../assets/Paginas/divisorGastos.svg";
import memorama from "../assets/Paginas/memorama.png";
import sixmotors from "../assets/Paginas/sixmotors.png";
import sixMotorsDash from "../assets/Paginas/sixMotorsDash.png";
import generador from "../assets/Paginas/GeneradorContra.png";
import {
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faReact,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

export const Pags = [
  {
    title: "StockControlDrink",
    desc: "Dashboard para bares que controla inventario en tiempo real con alertas de reposicion, roles por sucursal y reportes descargables.",
    img: stockControl,
    icon: [faReact, faNode, faDatabase],
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    href: "https://stockcontroldrink.vercel.app/",
    github: null,
  },
  {
    title: "Vibratta Sex Shop",
    desc: "Ecommerce responsive con catalogo dinamico, filtros por categoria y flujo de checkout integrado a pasarelas de pago.",
    img: vibratta,
    icon: [faReact, faSquareJs, faCss3Alt],
    stack: ["Next.js", "TailwindCSS"],
    href: "https://vibratta-sexshop.vercel.app/",
    github: null,
  },
  {
    title: "Secret Pass",
    desc: "Aplicacion para generar y almacenar contrasenas seguras con cifrado local, autenticacion y sincronizacion multi dispositivo.",
    img: secretPass,
    icon: [faReact, faShieldHalved, faSquareJs],
    stack: ["React", "Auth"],
    href: "https://secret-pass-one.vercel.app/",
    github: null,
  },
  {
    title: "Divisor de gastos",
    desc: "Herramienta colaborativa para dividir gastos de viajes o equipos, genera balances, exporta PDF y envia resenas automaticas.",
    img: divisor,
    icon: [faReact, faSquareJs, faDatabase],
    stack: ["React", "LocalStorage"],
    href: "https://divisor-de-gastos-five.vercel.app/",
    github: null,
  },
  {
    title: "Memorama",
    desc: "Juego de memoria con cartas que se voltean al hacer clic, incluye temporizador y contador de movimientos. Implementado con React.",
    img: memorama,
    icon: [faReact, faSquareJs, faCss3Alt],
    stack: ["React", "React Router", "Tailwind"],
    href: "https://memorama-autos.vercel.app/",
    github: "https://github.com/MateoNerli/Memorama-autos",
  },
  {
    title: "SixMotors",
    desc: "Ecommerce de autos con autenticacion, carrito persistente y panel de administracion. Desarrollo full stack con Node, Express y MySQL desplegado en Render.",
    img: sixmotors,
    icon: [faHtml5, faCss3Alt, faSquareJs, faNode, faDatabase],
    stack: ["Node", "Express", "MySQL", "JWT"],
    href: "https://sixmotors.onrender.com/",
    github: "https://github.com/MateoNerli/grupo_4_SixMotors",
  },
  {
    title: "SixMotors Dashboard",
    desc: "Panel de monitoreo en React para visualizar ventas, usuarios y catalogo del ecommerce. Disenado como SPA con graficos, filtros y TailwindCSS.",
    img: sixMotorsDash,
    icon: [faReact, faSquareJs, faCss3Alt],
    stack: ["React", "React Router", "Tailwind", "Recharts"],
    href: "https://dashboar-six-motors.vercel.app/",
    github: "https://github.com/MateoNerli/DashboarSixMotors",
  },
  {
    title: "Generador de contrasenas",
    desc: "Generador configurable que permite definir longitud, uso de simbolos y exportar contrasenas seguras. Implementado con React y hooks personalizados.",
    img: generador,
    icon: [faReact, faSquareJs],
    stack: ["React", "Vite", "Tailwind"],
    href: "https://generador-password-ten.vercel.app/",
    github: "https://github.com/MateoNerli/GeneradorPassword",
  },
];
