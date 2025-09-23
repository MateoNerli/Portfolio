import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faEnvelope,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

export const InfoContact = () => {
  return (
    <div className="p-10 bg-gray-700">
      <h3 className="text-2xl font-semibold text-blue-400 mb-4">Informacion</h3>
      <div className="mb-6 space-y-3">
        <div className="flex items-center">
          <span className="w-8 h-8 flex justify-center items-center text-black bg-blue-400 rounded-full">
            <FontAwesomeIcon icon={faMapPin} />
          </span>
          <p className="text-white ml-4">
            San Nicolas de los Arroyos, Buenos Aires
          </p>
        </div>
        <div className="flex items-center">
          <span className="w-8 h-8 flex justify-center items-center text-black bg-blue-400 rounded-full">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <a href="mailto:mnerli2003@gmail.com" className="text-white ml-4 hover:text-blue-200">
            mnerli2003@gmail.com
          </a>
        </div>
        <div className="flex items-center">
          <span className="w-8 h-8 flex justify-center items-center text-black bg-blue-400 rounded-full">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <a href="tel:+543364512460" className="text-white ml-4 hover:text-blue-200">
            +54 336 451 2460
          </a>
        </div>
      </div>
      <p className="text-gray-200 text-sm mb-4">
        Disponible para roles full stack, remoto o hibrido. Respondo dentro de las 24 hs.
      </p>
      <ul className="flex flex-wrap gap-4">
        <li>
          <a
            href="https://www.linkedin.com/in/mateo-nerli"
            className="text-black text-2xl transition duration-300 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MateoNerli"
            className="text-black text-2xl transition duration-300 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/3364512460"
            className="text-black text-2xl transition duration-300 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </li>
        <li>
          <a
            href="mailto:mnerli2003@gmail.com"
            className="text-black text-2xl transition duration-300 hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </div>
  );
};
