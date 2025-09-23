import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { experienceData } from "../utils/experience";

export const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true
    });
  }, []);

  return (
    <section id="experiencia" className="bg-[#1b1e20] text-white py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <header className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3rem] text-blue-300">Experiencia</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Proyectos e impacto profesional</h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-sm sm:text-base">
            Experiencia laboral consolidando soluciones de negocio completas: desde el analisis funcional hasta el despliegue, documentacion y soporte a usuarios.
          </p>
        </header>
        <div className="space-y-8">
          {experienceData.map((job) => (
            <article
              key={job.company}
              data-aos="fade-up"
              className="relative overflow-hidden rounded-3xl border border-[#2c3236] bg-gradient-to-br from-[#21272a] to-[#1b1f22] p-8 shadow-lg"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div>
                  <p className="text-sm uppercase tracking-wide text-blue-300">{job.period}</p>
                  <h3 className="mt-2 text-2xl font-bold">{job.company}</h3>
                  <p className="text-base text-gray-300 font-medium">{job.role}</p>
                  <p className="mt-4 text-gray-200 text-sm sm:text-base leading-relaxed">
                    {job.description}
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <h4 className="text-sm uppercase tracking-wide text-gray-400 mb-3">Logros clave</h4>
                  <ul className="space-y-2 text-gray-200 text-sm sm:text-base">
                    {job.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2 bg-[#23292d] border border-[#30363a] rounded-xl px-4 py-3"
                      >
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#32adff]"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
