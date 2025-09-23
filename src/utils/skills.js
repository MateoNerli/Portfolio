import html from "../assets/Skills/HTML5.png";
import css from "../assets/Skills/CSS3.png";
import js from "../assets/Skills/JavaScript.png";
import react from "../assets/Skills/react.png";
import vue from "../assets/Skills/vue.png";
import cSharp from "../assets/Skills/C-Sharp.png";
import git from "../assets/Skills/Git.png";
import github from "../assets/Skills/GitHub.png";
import mySql from "../assets/Skills/MySQL.png";
import node from "../assets/Skills/nodejs.png";
import angular from "../assets/Skills/angular.png";
import python from "../assets/Skills/python.png";
import tailwind from "../assets/Skills/tailwind.png";

export const SkillsData = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "JavaScript", icon: js },
      { name: "React", icon: react },
      { name: "Next.js" },
      { name: "Vue", icon: vue },
      { name: "Angular", icon: angular },
      { name: "TailwindCSS", icon: tailwind }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: node },
      { name: "Express" },
      { name: ".NET", icon: cSharp },
      { name: "C#", icon: cSharp },
      { name: "Python", icon: python },
      { name: "PowerApps" },
      { name: "Microsoft Dynamics 365" }
    ]
  },
  {
    category: "Bases de datos",
    items: [
      { name: "MySQL", icon: mySql },
      { name: "PostgreSQL" },
      { name: "SQL Server" },
      { name: "SQLite" }
    ]
  },
  {
    category: "Herramientas",
    items: [
      { name: "Git", icon: git },
      { name: "GitHub", icon: github },
      { name: "Azure DevOps" },
      { name: "Scrum" },
      { name: "Testing y QA" },
      { name: "Resolucion de problemas" }
    ]
  }
];
