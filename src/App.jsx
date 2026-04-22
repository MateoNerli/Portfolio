import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Pags } from "./utils/proyectsInfo";
import { experienceData } from "./utils/experience";
import { SkillsData } from "./utils/skills";
import cvFile from "./assets/CV - Mateo Nerli.pdf";
import profileImage from "./assets/yo.jpeg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const navItems = useMemo(
    () => [
      { id: "inicio", label: "Inicio" },
      { id: "sobre-mi", label: "Sobre mi" },
      { id: "experiencia", label: "Experiencia" },
      { id: "proyectos", label: "Proyectos" },
      { id: "skills", label: "Skills" },
      { id: "contacto", label: "Contacto" },
    ],
    [],
  );

  const featuredProjects = useMemo(
    () =>
      Pags.slice(0, 10).map((project) => ({
        ...project,
      })),
    [],
  );

  const stats = [
    { label: "Años desarrollando", value: "2+" },
    { label: "Proyectos implementados", value: "10+" },
    { label: "Enfoque", value: "Full Stack" },
  ];

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: 0.1 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [navItems]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="nav container">
          <a href="#inicio" className="brand" onClick={closeMenu}>
            Mateo Nerli
          </a>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a href={cvFile} className="button button-ghost" download>
              Descargar CV
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero container section">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-copy"
          >
            <p className="eyebrow">Full Stack Developer</p>
            <h1>
              Construyo software que resuelve problemas reales, desarrollando
              soluciones digitales eficientes y escalables, y convirtiendo ideas
              en productos funcionales.
            </h1>
            <p className="lead">
              React, Node.js, C#, .NET, next.js y base de datos para crear
              herramientas internas, dashboards y automatizaciones que mejoran
              la eficiencia operativa.
            </p>
            <div className="hero-actions">
              <a href="#proyectos" className="button button-primary">
                Ver proyectos
              </a>
              <a href="#contacto" className="button button-ghost">
                Contactarme
              </a>
            </div>
          </motion.div>
          <motion.aside
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="hero-panel"
          >
            <img src={profileImage} alt="Mateo Nerli" className="hero-image" />
            <ul>
              {stats.map((stat) => (
                <li key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </motion.aside>
        </section>

        <section id="sobre-mi" className="container section">
          <div className="section-heading">
            <p className="eyebrow">Sobre mi</p>
            <h2>Perfil profesional</h2>
          </div>
          <p className="about-text">
            Soy Mateo Nerli, Full Stack Developer. Diseño y desarrollo
            herramientas internas, dashboards y automatizaciones para equipos
            que necesitan operar con mas velocidad y menos friccion. Me enfoco
            en soluciones escalables, mantenibles y alineadas al negocio.
          </p>
        </section>

        <section id="experiencia" className="container section">
          <div className="section-heading">
            <p className="eyebrow">Experiencia</p>
            <h2>Impacto en entornos productivos</h2>
          </div>
          <div className="timeline">
            {experienceData.map((job, index) => (
              <motion.article
                key={job.company}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="timeline-item"
              >
                <div className="timeline-point" />
                <p className="timeline-period">{job.period}</p>
                <h3>
                  {job.role} <span>@ {job.company}</span>
                </h3>
                <p>{job.description}</p>
                <ul>
                  {job.achievements.map((achievement) => (
                    <li key={`${job.company}-${achievement}`}>{achievement}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="proyectos" className="container section">
          <div className="section-heading">
            <p className="eyebrow">Proyectos</p>
            <h2>Soluciones con foco en negocio y ejecucion</h2>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <>
                <a href={project.href} target="_blank" rel="noreferrer">
                  <motion.article
                    key={project.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: index * 0.07 }}
                    className="project-card"
                  >
                    <img
                      src={project.img}
                      alt={`Vista de ${project.title}`}
                      loading="lazy"
                    />
                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p className="project-challenge">{project.challenge}</p>
                      <p>{project.desc}</p>
                      <ul className="tag-list">
                        {project.stack?.map((tech) => (
                          <li key={`${project.title}-${tech}`}>{tech}</li>
                        ))}
                      </ul>
                      <div className="project-actions">
                        <a href={project.href} target="_blank" rel="noreferrer">
                          Ver demo
                        </a>
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Ver codigo
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </motion.article>
                </a>
              </>
            ))}
          </div>
        </section>

        <section id="skills" className="container section">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Stack principal y herramientas</h2>
          </div>
          <div className="skills-layout">
            {SkillsData.map((group) => (
              <article key={group.category} className="skills-group">
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={`${group.category}-${item.name}`}>{item.name}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contacto" className="container section">
          <div className="contact-panel">
            <div>
              <p className="eyebrow">Contacto</p>
              <h2>Buscas sumar un perfil full stack orientado a impacto?</h2>
              <p>
                Estoy disponible para colaborar en productos, herramientas
                internas y automatizaciones con foco en calidad y resultado.
              </p>
            </div>
            <div className="contact-actions">
              <a
                href="mailto:mnerli2003@gmail.com"
                className="button button-primary"
              >
                Enviar email
              </a>
              <a
                href="https://www.linkedin.com/in/mateo-nerli"
                target="_blank"
                rel="noreferrer"
                className="button button-ghost"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/MateoNerli"
                target="_blank"
                rel="noreferrer"
                className="button button-ghost"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>Mateo Nerli</p>
          <p>Built with React, Tailwind y Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
