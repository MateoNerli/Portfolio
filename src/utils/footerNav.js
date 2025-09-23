import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import cv from "../assets/CV - Mateo Nerli.pdf";

export const footerNav = [
  {
    id: 1,
    name: "Github",
    link: "https://github.com/MateoNerli",
    icon: faGithub
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mateo-nerli",
    icon: faLinkedin
  },
  {
    id: 3,
    name: "Email",
    link: "mailto:mnerli2003@gmail.com",
    icon: faEnvelope
  },
  {
    id: 4,
    name: "WhatsApp",
    link: "https://wa.me/3364512460",
    icon: faWhatsapp
  },
  {
    id: 5,
    name: "Descargar CV",
    link: cv,
    icon: faFileArrowDown
  }
];
