import { useState } from "react";
import logo from "../assets/icono.png";
import { navigation } from "../utils/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from "react-router-hash-link";

export const Navbar = () => {
  const [state, setState] = useState(false);

  return (
    <nav className="bg-[#212529] w-full border-b md:border-0 md:static">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <div className="transform transition-all hover:scale-125">
            <img
              src={logo}
              width={70}
              height={40}
              alt="Logo"
              style={{ filter: "invert(100%)" }}
            />
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-200 outline-none p-2 rounded-md focus:border-gray-400 focus:border text-3xl"
              onClick={() => setState(!state)}
            >
              {state ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col justify-center items-center space-y-8 md:flex-row md:space-x-6 md:space-y-0 md:items-start">
            {navigation.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.url}
                  className="font-sans text-gray-300 hover:text-white text-lg font-medium border-b border-transparent hover:border-[#32adff] transition duration-300 ease-in-out "
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
