import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profileImage from "./assets/franco.jpeg";
import cvFile from "./assets/CV Franco Nerli 2025 (1).pdf";

const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "perfil", label: "Perfil" },
  { id: "proyectos", label: "Casos" },
  { id: "experiencia", label: "Experiencia" },
  { id: "skills", label: "Skills" },
  { id: "educacion", label: "Educacion" },
  { id: "contacto", label: "Contacto" },
];

const statCards = [
  {
    value: "2",
    label: "entornos reales",
    note: "negocio propio + proyecto tecnico",
  },
  {
    value: "360",
    label: "vision operativa",
    note: "logistica, marketing, finanzas y procesos",
  },
  {
    value: "BI",
    label: "mentalidad analitica",
    note: "datos para ordenar decisiones",
  },
];

const pillars = [
  {
    title: "Operacion y negocio",
    text: "Experiencia administrando un e-commerce propio con foco en ventas, logistica, finanzas y coordinacion diaria.",
  },
  {
    title: "Procesos y eficiencia",
    text: "Base de Ingenieria Industrial aplicada a mejora continua, orden operativo y seguimiento de indicadores.",
  },
  {
    title: "Analisis y herramientas",
    text: "Uso de Microsoft 365, Power BI y SAP para estructurar informacion y facilitar decisiones.",
  },
];

const projects = [
  {
    title: "Operacion integral de e-commerce",
    type: "Caso de negocio",
    problem:
      "Un negocio digital necesita coordinar ventas, entregas, costos y comunicacion sin perder control operativo.",
    solution:
      "Lidere la operacion diaria de punta a punta: gestion comercial, seguimiento logistico, control financiero y acciones de marketing digital.",
    tools: ["Microsoft 365", "Gestion comercial", "Logistica", "Finanzas"],
    impact:
      "Desarrollo de criterio de negocio, capacidad para resolver desajustes operativos y mayor orden en la ejecucion diaria.",
  },
  {
    title: "Optimización de procesos en energia solar",
    type: "Proyecto tecnico",
    problem:
      "Los proyectos tecnicos requieren seguimiento claro, procesos consistentes y reportes confiables para detectar desvíos.",
    solution:
      "Participe en el analisis operativo, la organizacion de informacion tecnica y el armado de reportes para mejorar visibilidad y eficiencia.",
    tools: [
      "Microsoft 365",
      "Reportes tecnicos",
      "Analisis de procesos",
      "Documentacion",
    ],
    impact:
      "Aporte a una operacion mas estructurada, mejor trazabilidad de la informacion y enfoque en mejora continua.",
  },
];

const timeline = [
  {
    period: "Actualidad",
    title: "Gestion de emprendimiento propio",
    place: "E-commerce",
    description:
      "Coordinacion integral de un negocio digital con responsabilidad sobre operacion, seguimiento comercial, logistica, finanzas y marketing.",
    bullets: [
      "Toma de decisiones en contexto real, con recursos limitados y foco en ejecucion.",
      "Vision completa del negocio: desde demanda y entrega hasta control economico.",
      "Desarrollo de autonomia, criterio y capacidad para priorizar.",
    ],
  },
  {
    period: "Experiencia previa",
    title: "Pasantia en proyecto de energia solar",
    place: "Entorno tecnico",
    description:
      "Participacion en tareas de optimizacion de procesos y generacion de reportes para mejorar la lectura operativa del proyecto.",
    bullets: [
      "Analisis de informacion y seguimiento de procesos tecnicos.",
      "Apoyo a la organizacion de reportes y visibilidad del proyecto.",
      "Contacto con un entorno orientado a eficiencia y mejora continua.",
    ],
  },
];

const skillGroups = [
  {
    title: "Herramientas",
    items: ["Microsoft 365", "Power BI", "SAP", "Excel avanzado"],
  },
  {
    title: "Capacidad analitica",
    items: [
      "Analisis de procesos",
      "Reportes operativos",
      "Seguimiento de indicadores",
      "Documentacion",
    ],
  },
  {
    title: "Operacion",
    items: [
      "Logistica",
      "Coordinacion comercial",
      "Gestion financiera",
      "Mejora continua",
    ],
  },
  {
    title: "Competencias",
    items: [
      "Pensamiento analitico",
      "Proactividad",
      "Adaptabilidad",
      "Liderazgo operativo",
      "Trabajo en equipo",
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

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
      { rootMargin: "-35% 0px -45% 0px", threshold: 0.12 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="nav container">
          <a href="#inicio" className="brand" onClick={closeMenu}>
            Franco Nerli
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
            <a
              href={cvFile}
              className="button button-ghost"
              download
              onClick={closeMenu}
            >
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
            transition={{ duration: 0.45 }}
            className="hero-copy"
          >
            <p className="eyebrow">Ingenieria Industrial + Operaciones</p>
            <h1>
              Soy Ingeniero Industrial y estoy buscando una oportunidad para
              aportar en operaciones, procesos y mejora continua.
            </h1>
            <p className="lead">
              Soy Franco Nerli, de San Nicolas de los Arroyos, Buenos Aires.
              Tengo experiencia en e-commerce, logistica, finanzas y
              optimizacion de procesos, y busco sumarme a una empresa donde
              pueda ordenar operaciones, analizar informacion y generar mejoras
              concretas.
            </p>
            <div className="hero-actions">
              <a href="#proyectos" className="button button-primary">
                Ver casos
              </a>
              <a href={cvFile} className="button button-ghost" download>
                Descargar CV
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="hero-panel"
          >
            <img src={profileImage} alt="Franco Nerli" className="hero-photo" />
            <div className="hero-panel-header">
              <p className="hero-panel-kicker">Perfil para reclutadores</p>
              <h2>Lo que puedo aportar desde el primer dia</h2>
            </div>
            <div className="hero-grid">
              {statCards.map((card) => (
                <article key={card.label} className="metric-card">
                  <strong>{card.value}</strong>
                  <span>{card.label}</span>
                  <p>{card.note}</p>
                </article>
              ))}
            </div>
            <div className="mini-signal">
              <span>Ubicacion</span>
              <strong>San Nicolas de los Arroyos, Buenos Aires</strong>
            </div>
            <div className="mini-signal">
              <span>Objetivo</span>
              <strong>Operaciones, procesos, analisis o mejora continua</strong>
            </div>
          </motion.aside>
        </section>

        <section id="perfil" className="container section">
          <div className="section-heading">
            <p className="eyebrow">Perfil</p>
            <h2>
              Combino criterio de negocio, base tecnica y capacidad de ejecucion
            </h2>
          </div>
          <p className="about-text">
            Soy estudiante de Ingenieria Industrial en UTN y ya tuve experiencia
            real gestionando un emprendimiento propio, ocupandome de e-commerce,
            marketing digital, logistica y finanzas. Tambien participe en un
            proyecto de energia solar enfocado en eficiencia, reportes tecnicos
            y mejora de procesos. Me interesa incorporarme a una empresa donde
            pueda seguir creciendo en roles de operaciones, analisis, procesos o
            mejora continua.
          </p>
          <div className="pillars-grid">
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                className="pillar-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="proyectos" className="container section">
          <div className="section-heading">
            <p className="eyebrow">Casos</p>
            <h2>Experiencia presentada como proyectos con impacto</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="project-card case-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <div className="case-topline">
                  <span>{project.type}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <div className="case-block">
                    <h4>Problema</h4>
                    <p>{project.problem}</p>
                  </div>
                  <div className="case-block">
                    <h4>Solucion</h4>
                    <p>{project.solution}</p>
                  </div>
                  <ul className="tag-list">
                    {project.tools.map((tool) => (
                      <li key={`${project.title}-${tool}`}>{tool}</li>
                    ))}
                  </ul>
                  <div className="impact-box">
                    <span>Impacto</span>
                    <p>{project.impact}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experiencia" className="container section">
          <div className="section-heading">
            <p className="eyebrow">Experiencia</p>
            <h2>
              Tengo una trayectoria inicial, pero ya trabaje con responsabilidad
              real
            </h2>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.article
                key={item.title}
                className="timeline-item"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <div className="timeline-point" />
                <p className="timeline-period">{item.period}</p>
                <h3>
                  {item.title} <span>{item.place}</span>
                </h3>
                <p>{item.description}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={`${item.title}-${bullet}`}>{bullet}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="container section">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Herramientas y capacidades para aportar rapido</h2>
          </div>
          <div className="skills-layout">
            {skillGroups.map((group) => (
              <article key={group.title} className="skills-group">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={`${group.title}-${item}`}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="educacion" className="container section">
          <div className="section-heading">
            <p className="eyebrow">Educacion</p>
            <h2>
              Mi formacion esta orientada a procesos, productividad y mejora
              continua
            </h2>
          </div>
          <article className="education-card education-card-wide">
            <p className="timeline-period">Universidad Tecnologica Nacional</p>
            <h3>Ingenieria Industrial</h3>
            <p>
              Estoy cursando Ingenieria Industrial en UTN, con una formacion
              enfocada en analisis de procesos, productividad, organizacion
              operativa, mejora continua y toma de decisiones basada en
              informacion.
            </p>
          </article>
        </section>

        <section id="contacto" className="container section">
          <div className="contact-panel">
            <div>
              <p className="eyebrow">Contacto</p>
              <h2>
                Si buscas un perfil analitico, adaptable y con ganas de
                trabajar, me gustaria conversar.
              </h2>
              <p>
                Estoy buscando una oportunidad para desarrollarme
                profesionalmente en areas de operaciones, analisis, procesos,
                sustentabilidad o mejora continua, aportando compromiso, orden y
                capacidad para aprender rapido.
              </p>
            </div>
            <div className="contact-actions">
              <a
                href="mailto:franconerli25@gmail.com"
                className="button button-primary"
              >
                Enviar email
              </a>
              <a href={cvFile} className="button button-ghost" download>
                Descargar CV
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>Franco Nerli</p>
          <p>
            Ingenieria Industrial | Operaciones | Analisis de procesos | Mejora
            continua
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
