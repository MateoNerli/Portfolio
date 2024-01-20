import imgYo from "../assets/yo.jpg";
import cv from "../assets/CV - Mateo Nerli.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const SobreMi = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="overflow-hidden bg-[#27292a] m-[auto] p-[10px] p-[15px] text-white flex justify-center">
        <div className="max-w-[1200px] flex justify-center algin-center flex-wrap">
          <div className="hidden">
            <div>
              <div className="text-center mb-[20px]" id="sobre-mi">
                <div className="text-3xl font-Righteous mb-[25px] text-center text-white relative border-b-2">
                  <p className="text-3xl font-sans mb-[25px] text-center text-white p-[1rem] relative">
                    Sobre Mi
                  </p>
                </div>
                <h2 className="text-3xl font-bold m-[20px] m-[0] tracking-wider">
                  Hola, Soy <span className="text-[#66c7ff]">Mateo Nerli</span>
                </h2>
                <h3 className="text-lg">Futuro programador</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            className="p-[30px] max-w-[400px] text-center"
          >
            <img
              src={imgYo}
              alt="Mateo Nerli"
              className="w-full rounded-3xl shadow-lg"
            />
          </div>
          <div data-aos="fade-left" className="m-[30px] flex-1">
            <div className="text-center mb-[20px]">
              <p className="text-3xl font-sans mb-[25px] text-center text-white p-[1rem] relative">
                Sobre Mi
              </p>
              <h2 className="text-3xl font-bold m-[20px] m-[0] tracking-wider">
                Hola, Soy <span className="text-[#66c7ff]">Mateo Nerli</span>
              </h2>
              <h3 className="text-lg font-medium uppercase mb-[20px] tracking-wider">
                Futuro programador
              </h3>
            </div>

            <div>
              <p className="text-2x1 mb-[20px] ">
                Soy una persona proactiva, organizada y responsable. Tengo una
                gran pasión por la programacion al cual le dedico una gran
                mayoria de mi tiempo. Me encuentro en busqueda de nuevos
                desafios en una empresa que me permita potenciar mi desarrollo
                profesional y pueda aplicar todos mis conocimientos.
              </p>
              <p className="text-2x1 mb-[20px]">
                Durante mi tiempo libre me gusta juntarme con mis amigos, ir al
                gimnasio y ir a hacer deportes al aire libre.
              </p>
              <div className="flex justify-center algin-center">
                <a
                  href={cv}
                  download="CV - Mateo Nerli"
                  className="bg-[#66c7ff] text-grey-600 px-[20px] py-[10px] rounded-full font-bold uppercase text-sm tracking-wider hover:bg-[#2f8cc2] hover:text-white transition duration-300 ease-in-out"
                >
                  Descargar CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
