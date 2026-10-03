'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  ChevronDown,
  Code2,
  Database,
  Download,
  Mail,
  MapPin,
  Menu,
  Terminal,
  X,
} from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Languages', items: ['Python', 'SQL', 'PySpark', 'Bash'] },
  { icon: Database, title: 'Data engineering', items: ['ETL / ELT', 'Data modeling', 'CDC', 'Lakehouse'] },
  { icon: Terminal, title: 'Cloud & platforms', items: ['Azure Data Factory', 'Databricks', 'Synapse', 'ADLS Gen2'] },
]

const projects = [
  {
    number: '01',
    title: 'Real-time weather pipeline',
    description: 'A resilient ingestion workflow that collects weather data from public APIs, transforms it with Python, and makes it analytics-ready.',
    tags: ['Python', 'PostgreSQL', 'API ingestion'],
    accent: 'lime',
  },
  {
    number: '02',
    title: 'Retail analytics lakehouse',
    description: 'Medallion architecture for raw, refined, and curated retail data with incremental processing and reliable quality checks.',
    tags: ['PySpark', 'Delta Lake', 'Databricks'],
    accent: 'blue',
  },
  {
    number: '03',
    title: 'Data quality monitor',
    description: 'A lightweight monitoring layer that catches schema drift, missing values, and stale datasets before they reach dashboards.',
    tags: ['SQL', 'Power BI', 'Automation'],
    accent: 'orange',
  },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">AK</span>
          <span>AVINASH <b>KAMBLE</b></span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {['About', 'Skills', 'Projects', 'Journey', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </div>
      </nav>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-line" /></div>
          <h1>Building <span>scalable</span><br />data systems.</h1>
          <p className="hero-intro">I&apos;m Avinash — an aspiring data engineer turning messy information into reliable, useful systems with Python, SQL, and Azure.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-ghost" href="#contact">Get in touch <Mail size={16} /></a>
          </div>
          <div className="socials" aria-label="Social links">
            <a href="https://github.com/letstalk-avii" target="_blank" rel="noreferrer"><Code2 size={18} /> GitHub</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Terminal size={18} /> LinkedIn</a>
            <a href="mailto:avinash@example.com"><Mail size={18} /> Email</a>
          </div>
        </div>
        <div className="hero-art" aria-label="Data pipeline visualization">
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="data-card card-top"><span>PIPELINE STATUS</span><strong><i /> ALL SYSTEMS GO</strong></div>
          <div className="data-card card-main"><div className="card-label">DATA FLOW / 001</div><div className="flow-row"><span>RAW</span><div className="flow-line"><i /><i /><i /></div><span>CURATED</span></div><div className="metric"><b>98.6%</b><span>quality score</span></div></div>
          <div className="data-card card-bottom"><span>PROCESSING</span><b>24.8k <small>rows/min</small></b></div>
          <div className="grid-lines" />
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ChevronDown size={16} /></a>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div><p className="section-kicker">01 / ABOUT ME</p><h2>Data-driven.<br /><em>Cloud-powered.</em></h2></div>
          <div className="about-copy"><p className="lead">I enjoy building the quiet infrastructure that makes great products possible.</p><p>With a strong foundation in Python and SQL, I build ETL pipelines, data transformation workflows, and API-based ingestion systems that are clear, testable, and built to grow.</p><p>Currently pursuing B.E. in Information Technology at VCET (2024–2028), while expanding into PySpark, Databricks, and the Azure data ecosystem.</p><blockquote>&ldquo;Write clean code, build reliable systems, and let data drive decisions.&rdquo;</blockquote><div className="location"><MapPin size={16} /> Mumbai, India <span>·</span> Open to remote</div></div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="container"><div className="section-heading"><div><p className="section-kicker">02 / TOOLKIT</p><h2>How I work with data.</h2></div><p>From first ingestion to final insight, I care about the details that make systems dependable.</p></div><div className="skills-grid">{skills.map(({ icon: Icon, title, items }) => <article className="skill-card" key={title}><Icon size={22} /><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="container"><div className="section-heading"><div><p className="section-kicker">03 / SELECTED WORK</p><h2>Things I&apos;ve been building.</h2></div><a className="text-link" href="https://github.com/letstalk-avii" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={16} /></a></div><div className="projects-list">{projects.map((project) => <article className={`project-row ${project.accent}`} key={project.number}><span className="project-number">{project.number}</span><div className="project-info"><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><ArrowUpRight className="project-arrow" size={24} /></article>)}</div></div>
      </section>

      <section className="section journey-section" id="journey"><div className="container journey-grid"><div><p className="section-kicker">04 / THE JOURNEY</p><h2>Always learning.<br /><em>Always shipping.</em></h2></div><div className="timeline"><div className="timeline-item"><span>2024 — 2028</span><div><h3>B.E. Information Technology</h3><p>Vidyavardhini&apos;s College of Engineering &amp; Technology</p></div></div><div className="timeline-item"><span>NOW</span><div><h3>Growing into data engineering</h3><p>Building projects, learning distributed systems, and sharing the process.</p></div></div></div></div></section>

      <section className="contact-section" id="contact"><div className="container contact-inner"><p className="section-kicker">05 / SAY HELLO</p><h2>Have a dataset<br /><em>worth exploring?</em></h2><p>I&apos;m always open to conversations about data, engineering, and interesting problems.</p><a className="button button-primary" href="mailto:avinash@example.com">Start a conversation <ArrowUpRight size={17} /></a></div></section>
      <footer className="footer container"><span>© 2026 Avinash Kamble</span><span>Built with curiosity &amp; clean data</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
