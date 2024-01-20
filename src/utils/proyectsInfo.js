import cinehub from "../assets/Paginas/CineHub.png";
import generador from "../assets/Paginas/GeneradorContra.png";
import sixmotors from "../assets/Paginas/sixmotors.png";
import sixMotorsDash from "../assets/Paginas/sixMotorsDash.png";
import reloj from "../assets/Paginas/RelojAjedrez.png";
import renovarte from "../assets/Paginas/Renovarte.png";
import memorama from "../assets/Paginas/Memorama.png";
import mercadoLiebre from "../assets/Paginas/mercadoLiebre.png";
import {
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faReact,
  faNode,
  faVuejs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

export const Pags = [
  {
    title: "SixMotors",
    desc: "Esta es una pagina que se realizo como proyecto final para el curso de digital House donde se uso node, con express, la pagina se basa en un ecommerce donde se pueden agregar productos al carrito, te podes loguar, tiene una base de datos hecha en mysql donde despues fue subida a clevercloud, la web fue subida a render y tiene un sistema de cargar pedidos y los adminisatadores tiene algunas opciones que los usuarios comunes no tienen ",
    img: sixmotors,
    icon: [faHtml5, faCss3Alt, faSquareJs, faNode],
    href: "https://sixmotors.onrender.com/",
    github: "https://github.com/MateoNerli/grupo_4_SixMotors",
  },
  {
    title: "SixMotors Dashboard",
    desc: "Esta web esta relacionada al proyecto final del curso de digital house donde mostramos los productos que hay en el sitio, los usuarios, las ventas, etc, utilizamos react, y es una single page aplicaction donde se puede ver todo lo que se necesita para poder administrar el sitio, para los estilos se utilizo TailwindCss, y para el manejo de las rutas se utilizo react-router-dom",
    img: sixMotorsDash,
    icon: [faHtml5, faCss3Alt, faSquareJs, faReact],
    href: "https://dashboar-six-motors.vercel.app/",
    github: "https://github.com/MateoNerli/DashboarSixMotors",
  },
  {
    title: "CineHub",
    desc: "Esta fue una pagina relacionanda a peliculas y series,que se diseño como proyecto final para la materia de laboratorio en la facultad, se utilizo una api depeliculas, para poder mostrarlas en la pagina, se utilizo un sistema de login, para poder acceder a la pagina, y poder guardar las peliculas, y poder verlas en otro momento.",
    img: cinehub,
    icon: [faHtml5, faCss3Alt, faSquareJs],
    href: "https://proyecto-labo-84dy8ej1b-cirojsch.vercel.app/",
    github: "https://github.com/CiroJSCH/Proyecto-Labo-III",
  },
  {
    title: "Generador de contraseñas",
    desc: " La página web que se presenta a continuación ha sido diseñada como proyecto para la facultad, la pagina consiste en un generador de contraseñas, en el cual se puede elegir el largo de la contraseña, y si se desea que tenga numeros, letras, y caracteres especiales. Esta hecho con react.",
    img: generador,
    icon: [faHtml5, faCss3Alt, faSquareJs, faReact],
    href: "https://generador-password-ten.vercel.app/",
    github: "https://github.com/MateoNerli/GeneradorPassword",
  },
  {
    title: "Reloj de ajedrez",
    desc: " La página web que se presenta a continuación ha sido diseñada como proyecto para la facultad, la pagina consiste en un reloj de ajedrez, en el cual se puede elegir el tiempo que se desea jugar, y se puede pausar, y reanudar el tiempo. Ademas se coloca el incremento y los nombres de los jugadores. esta hecho con react.",
    img: reloj,
    icon: [faHtml5, faCss3Alt, faSquareJs, faReact],
    href: "https://reloj-ajedrez.vercel.app",
    github: "https://github.com/MateoNerli/RelojAjedrez",
  },
  {
    title: "Renovarte",
    desc: " La página web que se presenta a continuación ha sido diseñada como un proyecto para el curso de codo a codo, la pagina consiste en una pagina de muebles, en la cual se puede ver los productos. Esta hecho con vue. El backend esta hecho con python, y flask aqui creamos una api de usuarios y de productos. Donde se  pueden registrar los difrentes usuarios y crear disfrentes productos, y hay una vista para administradores, donde se pueden ver los usuarios, y los productos, y se pueden eliminar y editar.",
    img: renovarte,
    icon: [faHtml5, faCss3Alt, faSquareJs, faVuejs, faPython],
    href: "https://proyecto-tpo.vercel.app/",
    github: "https://github.com/MateoNerli/Proyecto-TPO",
  },
  {
    title: "Memorama",
    desc: "La página web que se presenta a continuación ha sido diseñada como proyecto para la facultad, la pagina consiste en el juego memorama, en el cual se debe encontrar las parejas de marcas de autos, para poder ganar el juego.",
    img: memorama,
    icon: [faHtml5, faCss3Alt, faSquareJs, faReact],
    href: "https://memorama-autos.vercel.app/",
    github: "https://github.com/MateoNerli/Memorama-auto",
  },
  {
    title: "Mercado Liebre",
    desc: "La página web que se presenta a continuación ha sido diseñada para el curso de Digital House en el cual se utilizo node y express para poder crear un servidor, y poder recrear la pagina de mercado libre. Donde se muestran los productos, tiene un login y un register.",
    img: mercadoLiebre,
    icon: [faHtml5, faCss3Alt, faSquareJs, faNode],
    href: "https://mercado-liebre-dh-202k.onrender.com/",
    github: "https://github.com/MateoNerli/Mercado-liebre.DH",
  },
];
