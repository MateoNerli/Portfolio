import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const InfoContact = () => {
  return (
    <div className="p-10 bg-gray-700">
      <h3 className="text-2xl font-semibold text-blue-400 mb-4">Informacion</h3>
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <span className="w-8 h-8 flex justify-center items-center text-black bg-blue-400 rounded-full">
            <FontAwesomeIcon icon={faMapPin} />
          </span>
          <p className="text-white ml-4">
            Buenos Aires, San Nicolas de los Arroyos
          </p>
        </div>
        <div className="flex items-center mb-2">
          <span className="w-8 h-8 flex justify-center items-center text-black bg-blue-400 rounded-full">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <a href="mailto:mnerli2003@gmail.com" className="text-white ml-4">
            mnerli2003@gmail.com
          </a>
        </div>
        <div className="flex items-center">
          <span className="w-8 h-8 flex justify-center items-center text-black bg-blue-400 rounded-full">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <a href="tel:+543364512460" className="text-white ml-4">
            +54 3364512460
          </a>
        </div>
      </div>
      <ul className="flex">
        <li className="mr-4">
          <a
            href="https://www.facebook.com/mateo.nerli/"
            className="text-black text-2xl transition duration-300 hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li className="mr-4">
          <a
            href="https://twitter.com/mateonerli4"
            className="text-black text-2xl transition duration-300 hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className="mr-4">
          <a
            href="https://www.linkedin.com/in/mateo-nerli-39661a270/"
            className="text-black text-2xl transition duration-300 hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/mateo.nerli/"
            className="text-black text-2xl transition duration-300 hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </div>
  );
};
