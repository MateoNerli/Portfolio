import { useState } from "react";
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
import Swal from "sweetalert2";

export const Contact = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [errors, setErrors] = useState({
    nombre: false,
    email: false,
    mensaje: false,
  });

  const handleBlur = (field) => {
    setErrors({ ...errors, [field]: !form[field] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.nombre ||
      !form.apellido ||
      !form.email ||
      !form.telefono ||
      !form.mensaje
    ) {
      setErrors({
        nombre: !form.nombre,
        apellido: !form.apellido,
        email: !form.email,
        telefono: !form.telefono,
        mensaje: !form.mensaje,
      });
      return;
    }
    Swal.fire({
      icon: "success",
      title: "Mensaje enviado con éxito",
      text: "En breve nos pondremos en contacto con usted",
    }).then(() => {
      setForm({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        mensaje: "",
      });
    });

    fetch("https://formspree.io/f/xzbndzjn", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        Accept: "application/json",
      },
    }).then((res) => res.json());
    // .then((res) => {
    //   // console.log(res);
    // });
  };

  return (
    <section id="contacto" className="bg-[#27292a] overflow-hidden">
      <div className="container mx-auto overflow-hidden">
        <div className="relative w-full px-10 p-[20px] mx-auto">
          <div className="text-center mb-6 text-white pb-4 ">
            <h2 className="text-3xl text-gray-100 font-semibold pb-4 border-b-2">
              Contactanos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="p-10 bg-gray-700">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                Envianos un mensaje
              </h3>
              <form
                action="https://formspree.io/f/xzbndzjn"
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col mb-4">
                    <label
                      htmlFor="nombre"
                      name="Nombre"
                      className="text-white mb-1"
                    >
                      Nombre
                    </label>
                    <input
                      name="nombre"
                      className={`w-full p-2 mt-1 border-2 ${
                        errors.nombre ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-200`}
                      onBlur={() => handleBlur("nombre")}
                      onChange={(e) =>
                        setForm({ ...form, nombre: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label
                      htmlFor="apellido"
                      name="Apellido"
                      className="text-white mb-1"
                    >
                      Apellido
                    </label>
                    <input
                      name="apellido"
                      className={`w-full p-2 mt-1 border-2 ${
                        errors.apellido ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-200`}
                      onBlur={() => handleBlur("apellido")}
                      onChange={(e) =>
                        setForm({ ...form, apellido: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col mb-4">
                    <label
                      htmlFor="email"
                      name="Email"
                      className="text-white mb-1"
                    >
                      Email
                    </label>
                    <input
                      name="email"
                      className={`w-full p-2 mt-1 border-2 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-200`}
                      onBlur={() => handleBlur("email")}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col mb-4">
                    <label
                      htmlFor="telefono"
                      name="Telefono"
                      className="text-white mb-1"
                    >
                      Telefono
                    </label>
                    <input
                      name="telefono"
                      className={`w-full p-2 mt-1 border-2 ${
                        errors.telefono ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-200`}
                      onBlur={() => handleBlur("telefono")}
                      onChange={(e) =>
                        setForm({ ...form, telefono: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="mensaje" className="text-white mb-1">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    className={`w-full p-2 mt-1 border-2 ${
                      errors.mensaje ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-200`}
                    rows="4"
                    onBlur={() => handleBlur("mensaje")}
                    onChange={(e) =>
                      setForm({ ...form, mensaje: e.target.value })
                    }
                  ></textarea>
                </div>
                <div>
                  <button className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-full rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
                    <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                    <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                    <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                    <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                    <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                    <input type="submit" value="Enviar" className="z-10" />
                  </button>
                </div>
              </form>
            </div>

            <div className="felx flex-col">
              <div className="p-10 bg-gray-700">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                  Informacion
                </h3>
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
                    <a
                      href="mailto:mnerli2003@gmail.com"
                      className="text-white ml-4"
                    >
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

              <div className="p-1 w-full h-[300px] md:h-[450px] flex flex-col">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.464789763558!2d-58.57338368476974!3d-34.61546198044836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaea670d5dc9%3A0x2198c0c4e022b4a2!2sObelisco!5e0!3m2!1ses-419!2sar!4v1638829341506!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
