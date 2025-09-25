import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <section
      className="relative flex justify-center items-center text-center h-screen bg-center bg-cover"
      style={{ backgroundImage: "url('/fondo.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 w-full flex flex-col justify-center items-center text-white">
        <p className="uppercase tracking-[0.35rem] text-sm sm:text-base text-blue-300 mb-4">
          Desarrollador Full Stack
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Hola, soy <span className="text-[#32adff]">Mateo Nerli</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl max-w-3xl text-gray-200">
          Construyo productos digitales end to end con React, Next.js, .NET y Node.
          Me enfoco en darle forma a ideas complejas, automatizar procesos y crear
          experiencias fluidas que ayudan a las empresas a escalar.
        </p>
        <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-2xl">
          Actualmente desarrollo soluciones para sistemas financieros y educativos en Humanware y trabaje en
          Logiports optimizando operaciones portuarias. Busco nuevos desafios
          donde seguir creciendo y aportar impacto desde la tecnologia.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/proyects"
            className="bg-[#32adff] text-black px-6 py-3 rounded-full font-semibold tracking-wide uppercase text-sm hover:bg-[#5bc1ff] transition-all duration-300"
          >
            Ver Proyectos
          </Link>
          <a
            href="mailto:mnerli2003@gmail.com"
            className="border border-[#32adff] text-[#32adff] px-6 py-3 rounded-full font-semibold tracking-wide uppercase text-sm hover:bg-[#32adff] hover:text-black transition-all duration-300"
          >
            Hablemos
          </a>
        </div>
        <div className="mt-7 flex space-x-5 justify-center">
          <a
            href="https://www.linkedin.com/in/mateo-nerli"
            className="w-[44px] h-[44px] rounded-full bg-white/90 flex justify-center items-center hover:bg-[#32adff] transition-all"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="text-black text-xl" />
          </a>
          <a
            href="https://github.com/MateoNerli"
            className="w-[44px] h-[44px] rounded-full bg-white/90 flex justify-center items-center hover:bg-[#32adff] transition-all"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="text-black text-xl" />
          </a>
        </div>
      </div>
    </section>
  );
};
