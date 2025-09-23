import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { SkillsData } from "../utils/skills";

export const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true
    });
  }, []);

  return (
    <section className="bg-[#1e2326] py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <header className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.3rem] text-blue-300">Stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Tecnologias y habilidades</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Experiencia end to end: desde el diseno de interfaces accesibles y modernas
            hasta integraciones con servicios empresariales, automatizacion de flujos y despliegues continuos.
          </p>
        </header>

        <div className="space-y-10">
          {SkillsData.map((group) => (
            <div key={group.category}>
              <h3 className="text-xl font-semibold text-white mb-4 border-l-4 border-[#32adff] pl-4">
                {group.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {group.items.map((skill) => (
                  <article
                    key={skill.name}
                    data-aos="zoom-in"
                    className="flex items-center gap-4 bg-[#23282c] border border-[#2f3539] rounded-xl px-4 py-3 hover:border-[#32adff] transition-colors duration-300"
                  >
                    {skill.icon ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        width={56}
                        height={56}
                        className="rounded-full shrink-0 shadow-lg"
                      />
                    ) : (
                      <span className="w-14 h-14 shrink-0 rounded-full bg-[#32adff]/20 border border-[#32adff] text-[#32adff] font-bold flex items-center justify-center text-base">
                        {skill.name.substring(0, 2).toUpperCase()}
                      </span>
                    )}
                    <div>
                      <p className="text-white font-semibold text-base">{skill.name}</p>
                      {skill.note ? (
                        <span className="text-xs text-gray-400">{skill.note}</span>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
