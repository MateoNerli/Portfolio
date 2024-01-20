import { Pags } from "../utils/proyectsInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export const Proyects = () => {
  return (
    <div className="bg-[#27292a]">
      <div className="p-[20px] mx-auto px-4 max-w-screen-xl md:px-8">
        <div className="text-center">
          <h1 className="text-3xl text-gray-100 font-semibold border-b">
            Proyectos personales
          </h1>
        </div>
        <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {Pags.map((items, key) => (
            <div
              className="max-w-md mx-auto mt-4 shadow-lg border rounded-md hover:rotate-360 transition-transform duration-300 hover:shadow-sm"
              key={key}
            >
              <div>
                <a href={items.href}>
                  <img
                    src={items.img}
                    alt={items.title}
                    className="w-full h-48 rounded-t-md"
                  />
                </a>
                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                  <div className="flex w-10 h-10 rounded-full">
                    {items.icon.map((icon, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={icon}
                        className="text-2xl pr-[5px] text-gray-100"
                      />
                    ))}
                  </div>
                </div>
                <div className=" ml-4 mr-2 mb-3">
                  <h3 className="text-xl text-gray-100 border-b">
                    {items.title}
                  </h3>
                  <p className="text-gray-200 text-sm mt-1">{items.desc}</p>
                </div>
                <div className="flex justify-center p-[6px]">
                  <a href={items.github}>
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-2xl text-gray-100 hover:text-gray-200 p-[5px]"
                    />
                  </a>
                  <a href={items.href}>
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="text-2xl text-gray-100 hover:text-gray-200 p-[5px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
