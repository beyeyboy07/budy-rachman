
import './App.css'

const skills = [
  { category: 'BACKEND', items: ['Go', 'PHP', 'Laravel', 'CodeIgniter', 'Node.js', 'Express.js'] },
  { category: 'FRONTEND', items: ['React', 'TypeScript', 'JavaScript', 'Vue.js', 'HTML & CSS'] },
  { category: 'DATABASE & TOOLS', items: ['MySQL', 'Redis', 'REST API', 'Docker', 'Git', 'Linux'] },
]

const projects = [
  {
    number: '01',
    name: 'DANQIVA',
    type: 'Digital Wallet & Fintech API',
    description:
      'A digital wallet platform focused on account management, wallet balances, transfers, transaction history, and reliable backend processing.',
    stack: ['Go', 'React', 'MySQL', 'Docker', 'REST API'],
    status: 'PERSONAL PROJECT',
  },
  {
    number: '02',
    name: 'HELPDESK AI',
    type: 'Helpdesk & Ticket Management',
    description:
      'A ticket management system designed to organize support requests, assignments, priorities, comments, and audit trails.',
    stack: ['Nodejs', 'React', 'MySQL', 'REST API'],
    status: 'PERSONAL PROJECT',
  },
  {
    number: '03',
    name: 'SERVIXA',
    type: 'Fleet & Field Service Management',
    description:
      'A service management application concept for coordinating customers, service requests, work orders, technicians, and scheduling.',
    stack: ['Go', 'React', 'MySQL', 'REST API'],
    status: 'PERSONAL PROJECT',
  },
]

function App() {
  return (
    <main className="portfolio">
      <nav className="navbar">
        <a href="#home" className="brand">
          <span className="brand-mark">B</span>
          <span>
            Budy Rachman<span className="brand-dot"></span>
          </span>
        </a>

        <div className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </div>

        <a href="#contact" className="nav-cta">
          Let's talk <span>↗</span>
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            BACKEND & FULL-STACK DEVELOPER
          </div>

          <p className="eyebrow">HELLO, I'M</p>
          <h1>
            Budy
            <br />
            <span>Rachman.</span>
          </h1>

          <p className="hero-description">
            Building systems that solve real problems.
          </p>
          <p className="hero-subtitle">
            I build reliable backend services, business applications, and
            full-stack products.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              Explore Projects <span>↗</span>
            </a>
            <a href="#about" className="button-secondary">
              About Me <span>↓</span>
            </a>
          </div>

          <div className="hero-meta">
            <span>BASED IN INDONESIA</span>
            <span className="meta-divider" />
            <span>5+ YEARS OF EXPERIENCE</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Developer profile illustration">
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
              <span className="card-label">PROFILE.ts</span>
            </div>

            <div className="code-content">
              <p><span className="code-purple">const</span> developer = {'{'}</p>
              <p className="indent">name: <span className="code-green">'Budy Rachman'</span>,</p>
              <p className="indent">role: <span className="code-green">'Full-Stack'</span>,</p>
              <p className="indent">focus: <span className="code-green">'Backend Systems'</span>,</p>
              <p className="indent">experience: <span className="code-orange">'5+ years'</span>,</p>
              <p>{'}'}</p>
            </div>

            <div className="card-footer">
              <span className="status-dot" />
              <span>Ready to build something useful</span>
            </div>
          </div>

          <div className="floating-tag tag-top">
            <span className="tag-icon">⌘</span>
            <span>Clean architecture</span>
          </div>
          <div className="floating-tag tag-bottom">
            <span className="tag-icon tag-green">↗</span>
            <span>Built for reliability</span>
          </div>
          <div className="visual-index">01 / INTRODUCTION</div>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" />
          <span>01 — 05</span>
        </div>
      </section>

      <section className="intro-strip">
        <span className="strip-label">WHAT I DO</span>
        <p>
          Turning complex requirements into{' '}
          <span>reliable software</span>, one system at a time.
        </p>
      </section>

      <section className="content-section" id="about">
        <div className="section-heading">
          <span className="section-kicker">01 / ABOUT ME</span>
          <h2>Engineering with purpose.</h2>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <p>
              I'm a software developer with professional experience building
              web applications, internal business tools, and API integrations.
            </p>
            <p>
              My work spans backend development, database design, API
              integration, and frontend implementation. I value maintainable
              code, practical solutions, and systems that solve real business
              needs.
            </p>
          </div>

          <div className="about-facts">
            <div className="fact">
              <span className="fact-number">05+</span>
              <span className="fact-label">Years of experience</span>
            </div>
            <div className="fact">
              <span className="fact-number">API</span>
              <span className="fact-label">Backend & integrations</span>
            </div>
            <div className="fact">
              <span className="fact-number">Full</span>
              <span className="fact-label">Stack development</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section skills-section" id="skills">
        <div className="section-heading">
          <span className="section-kicker">02 / TECHNICAL SKILLS</span>
          <h2>Tools of the trade.</h2>
          <p className="section-description">
            Technologies I use to build and maintain software applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <article className="skill-card" key={group.category}>
              <span className="skill-category">{group.category}</span>
              <div className="skill-list">
                {group.items.map((skill) => (
                  <span className="skill-chip" key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="experience">
        <div className="section-heading">
          <span className="section-kicker">03 / EXPERIENCE</span>
          <h2>Where I've worked.</h2>
        </div>

        <div className="experience-list">
          <article className="experience-item">
            <div className="experience-date">2021 — PRESENT</div>
            <div className="experience-main">
              <h3>Full Stack Developer</h3>
              <p className="experience-company">PT Mitracomm Ekasarana</p>
              <p className="experience-description">
                Develop and maintain web applications for transaction
                monitoring, voucher management, SMS conversion, and service
                package management.
              </p>
              <div className="experience-tags">
                <span>PHP</span><span>CodeIgniter</span><span>MySQL</span><span>REST API</span>
              </div>
            </div>
          </article>

          <article className="experience-item">
            <div className="experience-date">2019 — 2021</div>
            <div className="experience-main">
              <h3>Product Development</h3>
              <p className="experience-company">PT Graha Informatika Nusantara</p>
              <p className="experience-description">
                Built and maintained web applications for document
                management, HR information systems, performance appraisal
                workflows, and e-commerce.
              </p>
              <div className="experience-tags">
                <span>PHP</span><span>JavaScript</span><span>MySQL</span><span>Web Development</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="content-section projects-section" id="projects">
        <div className="section-heading">
          <span className="section-kicker">04 / SELECTED WORK</span>
          <h2>Projects built to solve problems.</h2>
          <p className="section-description">
            A selection of personal projects exploring backend systems and
            full-stack application development.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <span className="project-status">{project.status}</span>
              </div>

              <div className="project-art" aria-hidden="true">
                <span className="project-art-mark">{project.name.slice(0, 1)}</span>
                <span className="project-art-line" />
                <span className="project-art-caption">SYSTEM / {project.number}</span>
              </div>

              <div className="project-info">
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <span className="section-kicker">05 / GET IN TOUCH</span>
        <h2>Have a problem to solve?</h2>
        <p>
          I'm interested in building useful products and working on meaningful
          software challenges.
        </p>
        <a className="nav-cta" href="https://wa.me/6289603838682?text=Hi%20Budy%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
  target="_blank"
  rel="noopener noreferrer">
          Let's talk <span>↗</span>
        </a>
        <span className="contact-note">
          Add your email address to activate this contact link.
        </span>
      </section>

      <footer>
        <span>© 2026 Budy Rachman</span>
        <span>Designed & built with React</span>
      </footer>
    </main>
  )
}

export default App
