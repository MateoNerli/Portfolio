import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { SkillsData } from "../utils/skills";

export const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="box-border bg-[#1e2326] ">
      <div className="max-w-[1200px] pt-[20px] mx-auto  ">
        <div className="text-3xl font-sans mb-[25px] text-center text-[#fff] p-[1rem] relative border-b">
          <h2>Skills</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {SkillsData.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-[0.5rem] relative mx-auto hover:border-b-2 hover:border-blue-300"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                width={100}
                height={100}
                className="relative rounded-full flex justify-center items-center transform transition-transform duration-500 hover:scale-110"
              />
              <p className="mt-2 text-white font-semibold text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
