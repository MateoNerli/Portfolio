import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { footerNav } from "../utils/footerNav";

export const Footer = () => {
  return (
    <div className="bg-[#252a2e] text-[#fff] py-8 text-center relative">
      <div className="mb-8">
        <a
          href="#"
          className="border-2 border-white hover:border-blue-500 hover:bg-blue-500 rounded-full p-2 inline-block transition-all duration-300"
        >
          <FontAwesomeIcon
            icon={faAnglesUp}
            className="text-white hover:text-white text-2xl transition-all duration-300"
          />
        </a>
      </div>
      <div className="flex justify-center space-x-4">
        {footerNav.map((nav) => (
          <a
            href={nav.link}
            key={nav.id}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={nav.name}
            className="flex items-center space-x-2 text-[#fff] hover:text-blue-500 transition-all duration-300"
          >
            <FontAwesomeIcon icon={nav.icon} className="text-4xl" />
          </a>
        ))}
      </div>
    </div>
  );
};
