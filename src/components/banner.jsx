import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

export const Banner = () => {
  return (
    <>
      <div
        className="relative flex justify-center items-center text-center h-screen bg-center bg-cover"
        style={{ backgroundImage: "url('/fondo.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-[1200px]  mx-auto 0 h-full w-full flex flex-col justify-center items-center text-white">
          <p className="bienvenida text-5xl mb-7 p-5 tracking-wider ">
            Bienvenidos
          </p>
          <h2 className="text-2xl my-6 text-center">
            Soy{" "}
            <span className="text-[#32adff] text-3xl font-bold">
              Mateo Nerli
            </span>
            , Desarrollador Full Stack JR
          </h2>
          <p className="descripcion text-lg px-8">
            Soy un apasionado Desarrollador Full Stack Junior con experiencia en
            la creación de aplicaciones web interactivas. Me siento cómodo
            trabajando tanto en la parte del front-end como en el back-end y
            aplicaciones de consola. He participado en proyectos desafiantes
            donde he tenido la oportunidad de colaborar con equipos y aprender
            de cada experiencia.
          </p>
          <div className="mt-5 flex space-x-4  justify-center algin-center">
            <a
              href="https://www.linkedin.com/in/mateo-nerli/"
              className="text-2xl hover:text-[#32adff] m-[10px] w-[40px] h-[40px] rounded-full bg-current flex justify-center items-center "
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="text-black" />
            </a>
            <a
              href="https://github.com/MateoNerli"
              className="text-2xl hover:text-[#32adff] m-[10px] w-[40px] h-[40px] rounded-full bg-current flex justify-center items-center"
            >
              <FontAwesomeIcon icon={faGithub} className="text-black" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
