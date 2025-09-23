import { useState } from "react";

import Swal from "sweetalert2";
import { Maps } from "./maps";
import { InfoContact } from "./infoContact";

export const Contact = () => {
  const initialState = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: ""
  };

  const [form, setForm] = useState(initialState);

  const [errors, setErrors] = useState({
    nombre: false,
    apellido: false,
    email: false,
    telefono: false,
    mensaje: false
  });

  const handleBlur = (field) => {
    setErrors((prev) => ({ ...prev, [field]: !form[field] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((value) => !value)) {
      setErrors({
        nombre: !form.nombre,
        apellido: !form.apellido,
        email: !form.email,
        telefono: !form.telefono,
        mensaje: !form.mensaje
      });
      return;
    }
    Swal.fire({
      icon: "success",
      title: "Mensaje enviado con exito",
      text: "En breve nos pondremos en contacto contigo"
    }).then(() => {
      setForm(initialState);
    });

    fetch("https://formspree.io/f/xzbndzjn", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then((res) => res.json());
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
                      id="nombre"
                      name="nombre"
                      className={`w-full p-2 mt-1 border-2 ${
                        errors.nombre ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-200`}
                      value={form.nombre}
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
                      id="apellido"
                      name="apellido"
                      className={`w-full p-2 mt-1 border-2 ${
                        errors.apellido ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-200`}
                      value={form.apellido}
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
                      id="email"
                      name="email"
                      className={`w-full p-2 mt-1 border-2 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-200`}
                      value={form.email}
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
                      id="telefono"
                      name="telefono"
                      className={`w-full p-2 mt-1 border-2 ${
                        errors.telefono ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-200`}
                      value={form.telefono}
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
                    id="mensaje"
                    name="mensaje"
                    className={`w-full p-2 mt-1 border-2 ${
                      errors.mensaje ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-200`}
                    rows="4"
                    value={form.mensaje}
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
                    <span className="z-10 text-sm sm:text-base font-semibold uppercase tracking-widest">
                      Enviar
                    </span>
                  </button>
                </div>
              </form>
            </div>

            <div className="flex flex-col">
              <InfoContact />
              <Maps />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
