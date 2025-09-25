import imgYo from "../assets/yo.jpg";
import cv from "../assets/CV - Mateo Nerli.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const highlights = [
  "Automatizacion de flujos con Microsoft Dynamics 365 y Power Platform",
  "Arquitecturas escalables con .NET, Node y React",
  "Bases de datos relacionales: MySQL, PostgreSQL, SQL Server y SQLite",
  "Metodologias agiles, liderazgo tecnico y foco en la calidad",
];

const personalInfo = [
  { label: "Nacimiento", value: "03/06/2003" },
  { label: "Localidad", value: "San Nicolas de los Arroyos, Buenos Aires" },
  { label: "Nacionalidad", value: "Argentina" },
  { label: "Telefono", value: "+54 336 451 2460", link: "tel:+543364512460" },
  {
    label: "Email",
    value: "mnerli2003@gmail.com",
    link: "mailto:mnerli2003@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mateo-nerli",
    link: "https://www.linkedin.com/in/mateo-nerli",
  },
  {
    label: "GitHub",
    value: "github.com/MateoNerli",
    link: "https://github.com/MateoNerli",
  },
];

export const SobreMi = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  return (
    <section className="overflow-hidden bg-[#27292a] px-6 py-16 text-white">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 items-center">
        <div data-aos="fade-right" className="w-full max-w-[360px]">
          <img
            src={imgYo}
            alt="Mateo Nerli"
            className="w-full rounded-3xl shadow-2xl border-4 border-[#1e2326]"
          />
        </div>
        <div data-aos="fade-left" className="flex-1" id="sobre-mi">
          <header className="mb-6 text-center lg:text-left">
            <p className="text-sm uppercase tracking-[0.3rem] text-blue-300 mb-2">
              Sobre mi
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Mateo Nerli | Full Stack Developer
            </h2>
            <p className="text-lg text-gray-300 mt-3">
              Proactivo, organizado y orientado a aportar valor rapido a equipos
              multidisciplinarios. Disfruto iterar con usuarios y negocio para
              entregar soluciones robustas que se integran con los sistemas
              existentes.
            </p>
          </header>

          <p className="text-base text-gray-200 leading-relaxed">
            Desde 2024 trabajo en Humanware desarrollando sistemas para sitemas
            financieros y educativos con Microsoft Dynamics 365, PowerApps, .NET
            y React, creando automatizaciones y paneles que reducen tiempos
            operativos. Previamente forme parte de Logiports construyendo
            herramientas con React, C# y Node que mejoraron la logistica
            portuaria. Estoy listo para dar el siguiente paso profesional,
            asumir mayores responsabilidades y seguir aprendiendo de mentores
            experimentados.
          </p>

          <p className="mt-5 text-base text-gray-300">
            Dedicacion constante a formacion en tecnologias modernas como
            Next.js, Azure DevOps y practicas DevOps, junto con ingles nivel B2,
            me permiten integrarme sin friccion a equipos globales.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="bg-[#1e2326] border border-[#32383c] rounded-xl px-4 py-3 text-sm text-gray-200"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {personalInfo.map(({ label, value, link }) => (
              <div
                key={label}
                className="bg-[#1e2326] rounded-lg px-4 py-3 border border-[#32383c]"
              >
                <p className="text-xs uppercase tracking-wide text-blue-300">
                  {label}
                </p>
                {link ? (
                  <a
                    href={link}
                    className="text-sm font-semibold text-white hover:text-[#32adff] break-words"
                    rel="noopener noreferrer"
                    target={link.startsWith("http") ? "_blank" : undefined}
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-white">{value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href={cv}
              download="CV - Mateo Nerli"
              className="bg-[#32adff] text-black px-6 py-3 rounded-full font-semibold uppercase tracking-wide text-sm hover:bg-[#5bc1ff] transition-all duration-300"
            >
              Descargar CV
            </a>
            <a
              href="https://www.linkedin.com/in/mateo-nerli"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#32adff] text-[#32adff] px-6 py-3 rounded-full font-semibold uppercase tracking-wide text-sm hover:bg-[#32adff] hover:text-black transition-all duration-300"
            >
              Conectar en LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
