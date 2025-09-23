import { Pags } from "../utils/proyectsInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Proyects = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true
    });
  }, []);

  return (
    <section className="bg-[#27292a] py-16">
      <div className="px-6 mx-auto max-w-screen-xl">
        <header className="text-center">
          <p className="text-sm uppercase tracking-[0.3rem] text-blue-300">Portafolio</p>
          <h1 className="text-3xl sm:text-4xl text-gray-100 font-semibold pb-4 border-b-2 inline-block">
            Proyectos destacados
          </h1>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-sm sm:text-base">
            Seleccion de proyectos personales y profesionales donde combine analisis funcional,
            arquitectura y desarrollo para entregar soluciones listas para produccion.
          </p>
        </header>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {Pags.map((project) => (
            <article
              data-aos="zoom-in"
              className="flex flex-col bg-[#1f2326] border border-[#2c3438] rounded-3xl overflow-hidden hover:border-[#32adff] transition-colors duration-300"
              key={project.title}
            >
              {project.img ? (
                <a href={project.href} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.img}
                    alt={`Captura del proyecto ${project.title}`}
                    className="w-full h-48 object-cover"
                  />
                </a>
              ) : null}
              <div className="flex-1 flex flex-col p-6">
                <div className="flex items-center gap-3 mb-3 text-gray-300 text-sm">
                  {project.icon?.map((icon, index) => (
                    <FontAwesomeIcon key={`${project.title}-icon-${index}`} icon={icon} className="text-xl" />
                  ))}
                </div>
                <h3 className="text-xl text-white font-semibold border-b border-[#353b3f] pb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mt-3 leading-relaxed flex-1">
                  {project.desc}
                </p>
                {project.stack?.length ? (
                  <ul className="flex flex-wrap gap-2 mt-4">
                    {project.stack.map((tech) => (
                      <li
                        key={`${project.title}-${tech}`}
                        className="text-xs uppercase tracking-wide bg-[#2b3135] text-[#9fcdf8] px-3 py-1 rounded-full"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="flex justify-center gap-4 p-4 border-t border-[#2c3438]">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#9fcdf8] hover:text-white transition-colors"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                    <span className="text-sm font-semibold uppercase tracking-wide">Codigo</span>
                  </a>
                ) : null}
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#32adff] hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="text-2xl" />
                  <span className="text-sm font-semibold uppercase tracking-wide">Ver demo</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
