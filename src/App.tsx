
import './App.css'

const skills = [
  {
    category: 'BACKEND DEVELOPMENT',
    items: ['Go', 'PHP', 'Laravel', 'CodeIgniter', 'Node.js', 'Express.js'],
  },
  {
    category: 'FRONTEND DEVELOPMENT',
    items: ['React', 'TypeScript', 'JavaScript', 'Vue.js', 'HTML', 'CSS'],
  },
  {
    category: 'DATABASE & TOOLS',
    items: ['MySQL', 'Redis', 'REST API', 'Docker', 'Git', 'Linux'],
  },
]

const experiences = [
  {
    period: '2021 — PRESENT',
    role: 'Full Stack Developer',
    company: 'PT Mitracomm Ekasarana',
    description:
      'Developing and maintaining business applications, backend services, and web-based systems. Working across frontend and backend development, API integration, database management, and system improvements.',
    technologies: ['Go', 'PHP', 'Laravel', 'Node.js', 'React', 'Vue.js', 'MySQL'],
  },
  {
    period: '2019 — 2021',
    role: 'Product Development',
    company: 'PT Graha Informatika Nusantara',
    description:
      'Contributed to the development of internal business applications, including document management, HRIS, and other web-based systems. Worked on frontend implementation and API integration.',
    technologies: ['PHP', 'CodeIgniter', 'JavaScript', 'MySQL', 'REST API'],
  },
]

const projects = [
  {
    number: '01',
    name: 'DANQIVA',
    type: 'FINTECH · PERSONAL PROJECT',
    description:
      'A digital wallet platform designed to simulate real-world financial operations, including wallet management, transaction processing, and authentication.',
    stack: ['Go', 'React', 'MySQL', 'Redis', 'Docker'],
    status: 'LIVE PROJECT',
    mark: 'D',
    url: 'https://www.budy-rachman.site/danqiva',
  },
  {
    number: '02',
    name: 'HELPDESK AI',
    type: 'HELPDESK · PERSONAL PROJECT',
    description:
      'A helpdesk and ticket management platform designed to organize support requests, streamline issue tracking, and improve service workflows.',
    stack: ['Node.js', 'React', 'MySQL', 'REST API'],
    status: 'IN DEVELOPMENT',
    mark: 'H',
  },
  {
    number: '03',
    name: 'SERVIXA',
    type: 'FLEET MANAGEMENT · PERSONAL PROJECT',
    description:
      'A fleet and field service management system for handling service requests, work orders, technician assignments, scheduling, and service progress.',
    stack: ['Go', 'React', 'MySQL', 'REST API'],
    status: 'IN DEVELOPMENT',
    mark: 'S',
  },
]

function App() {
  return (
    <div className="portfolio">
      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="brand">
          <span className="brand-mark">B.</span>
          <span>
            BUDY RACHMAN<span className="brand-dot" />
          </span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </div>

        <a
          href="#contact"
          className="nav-cta"
        >
          Let's talk <span>↗</span>
        </a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            OPEN TO NEW OPPORTUNITIES
          </div>

          <p className="eyebrow">HELLO, I'M</p>

          <h1>
            Budy
            <br />
            <span>Rachman.</span>
          </h1>

          <p className="hero-description">
            Backend & Full Stack Developer
          </p>

          <p className="hero-subtitle">
            I build reliable software systems and meaningful digital
            experiences, turning complex problems into practical solutions.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              Explore my work <span>↗</span>
            </a>

            <a href="#about" className="button-secondary">
              More about me <span>↓</span>
            </a>
          </div>

          <div className="hero-meta">
            <span>5+ YEARS EXPERIENCE</span>
            <span className="meta-divider" />
            <span>BACKEND & FULL STACK</span>
            <span className="meta-divider" />
            <span>INDONESIA</span>
          </div>
        </div>

        {/* PROFILE VISUAL */}
        {/* <div className="hero-visual">
          <div className="visual-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="visual-card">
            <div className="card-top">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="card-label">PROFILE.TS</span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-purple">const</span> developer = {'{'}
              </p>
              <p className="indent">
                name: <span className="code-green">'Budy Rachman'</span>,
              </p>
              <p className="indent">
                role: <span className="code-green">'Full Stack Developer'</span>,
              </p>
              <p className="indent">
                experience: <span className="code-orange">'5+ years'</span>,
              </p>
              <p className="indent">
                focus: <span className="code-green">'Building solutions'</span>,
              </p>
              <p className="indent">
                learning: <span className="code-green">'Always'</span>
              </p>
              <p>{'}'}</p>
            </div>

            <div className="card-footer">
              <span className="status-dot" />
              Available for new challenges
            </div>
          </div>

          <div className="floating-tag tag-top">
            <span className="tag-icon">⌘</span>
            Backend Engineering
          </div>

          <div className="floating-tag tag-bottom">
            <span className="tag-icon tag-green">✳</span>
            Problem Solver
          </div>

          <span className="visual-index">FIG. 001 — DEVELOPER PROFILE</span>
        </div>

        <div className="hero-bottom">
          <span className="scroll-line" />
          SCROLL TO EXPLORE
        </div> */}
      </section>

      {/* INTRO */}
      <section className="intro-strip">
        <span className="strip-label">MY APPROACH</span>
        <p>
          Building software with <span>purpose</span>, precision, and
          attention to detail.
        </p>
      </section>

      {/* ABOUT */}
      <section className="content-section" id="about">
        <div className="section-heading">
          <span className="section-kicker">01 / ABOUT ME</span>
          <h2>
            More than just
            <br />
            writing code.
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <p>
              I'm a Backend and Full Stack Developer with over five years of
              professional experience building and maintaining web
              applications and business systems.
            </p>

            <p>
              My experience covers backend development, API integration,
              database design, and frontend implementation. I enjoy
              understanding how systems work as a whole and finding practical
              ways to make them better.
            </p>

            <p>
              I'm continuously exploring new technologies, improving my
              engineering skills, and taking on challenges that help me grow
              as a developer.
            </p>
          </div>

          <div className="about-facts">
            <div className="fact">
              <span className="fact-number">5+</span>
              <span className="fact-label">Years of experience</span>
            </div>

            <div className="fact">
              <span className="fact-number">2+</span>
              <span className="fact-label">Companies</span>
            </div>

            <div className="fact">
              <span className="fact-number">3+</span>
              <span className="fact-label">Personal projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="content-section" id="skills">
        <div className="section-heading">
          <span className="section-kicker">02 / TECHNICAL SKILLS</span>
          <h2>
            Tools I use to
            <br />
            build solutions.
          </h2>
          <p className="section-description">
            Technologies and tools I have worked with throughout my
            professional experience and personal projects.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-card" key={group.category}>
              <span className="skill-category">{group.category}</span>

              <div className="skill-list">
                {group.items.map((item) => (
                  <span className="skill-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="content-section" id="experience">
        <div className="section-heading">
          <span className="section-kicker">03 / EXPERIENCE</span>
          <h2>
            Where I've
            <br />
            made an impact.
          </h2>
        </div>

        <div className="experience-list">
          {experiences.map((experience) => (
            <article className="experience-item" key={experience.company}>
              <span className="experience-date">{experience.period}</span>

              <div className="experience-main">
                <h3>{experience.role}</h3>
                <p className="experience-company">{experience.company}</p>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-tags">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="content-section" id="projects">
        <div className="section-heading">
          <span className="section-kicker">04 / SELECTED PROJECTS</span>
          <h2>
            Things I've
            <br />
            been building.
          </h2>
          <p className="section-description">
            A selection of personal projects where I explore real-world
            business logic, system architecture, and modern technologies.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <span className="project-status">{project.status}</span>
              </div>

              <div className="project-art">
                <div className="project-art-line" />
                <span className="project-art-mark">{project.mark}</span>
                <span className="project-art-caption">
                  PROJECT / {project.number}
                </span>
              </div>

              <div className="project-info">
                <span className="project-type">{project.type}</span>
                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-stack">
                  {project.stack.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo <span>↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <span className="section-kicker">05 / GET IN TOUCH</span>

        <h2>
          Have a problem
          <br />
          worth solving?
        </h2>

        <p>
          I'm interested in new opportunities, meaningful collaborations,
          and challenging software projects. Let's connect and build
          something valuable.
        </p>

        <a
          className="nav-cta"
          href="https://wa.me/6289603838682?text=Hi%20Budy%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's talk <span>↗</span>
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <span>© {new Date().getFullYear()} BUDY RACHMAN</span>
        <span>DESIGNED & BUILT WITH PURPOSE.</span>
      </footer>
    </div>
  )
}

export default App
