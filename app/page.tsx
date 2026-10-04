'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Database,
  Download,
  GitBranch,
  Network,
  Mail,
  Menu,
  Play,
  Sparkles,
  X,
} from 'lucide-react'

const projects = [
  {
    index: '01',
    title: 'RideStream',
    subtitle: 'Uber data platform',
    description: 'A real-time and batch lakehouse that unifies Event Hubs streams with 2,000+ ride records, then turns them into trusted dimensional models.',
    stack: ['Azure Data Factory', 'Event Hubs', 'Databricks', 'PySpark', 'Delta Lake'],
    href: 'https://github.com/letstalk-avii/RideStream-Uber-Data-Platform',
    tone: 'acid',
  },
  {
    index: '02',
    title: 'DataForge',
    subtitle: 'Commerce data platform',
    description: 'A CDC-first pipeline moving 300K+ retail records from PostgreSQL into a layered Databricks lakehouse with Airflow and dbt orchestration.',
    stack: ['Airflow', 'Databricks', 'dbt', 'PostgreSQL', 'CDC'],
    href: 'https://github.com/letstalk-avii/dataforge-commerce-platform',
    tone: 'violet',
  },
  {
    index: '03',
    title: 'RAG Study Assistant',
    subtitle: 'Searchable learning, grounded answers',
    description: 'An AI pipeline that transcribes educational videos, creates BGE-M3 embeddings, and retrieves source-backed context for question answering.',
    stack: ['Python', 'BGE-M3', 'Vector Search', 'LLM APIs', 'FFmpeg'],
    href: 'https://github.com/letstalk-avii/rag-ai-study-assistant',
    tone: 'coral',
  },
]

const skills = [
  ['Languages', 'Python · SQL · PySpark · PostgreSQL · MySQL'],
  ['Data systems', 'ETL / ELT · CDC · Medallion · SCD 1/2 · Star schema'],
  ['Cloud & big data', 'ADF · Databricks · ADLS Gen2 · Event Hubs · Spark'],
  ['Backend & tools', 'FastAPI · Flask · Airflow · dbt · Docker · Power BI'],
  ['AI / GenAI', 'RAG · Embeddings · Vector search · Prompt engineering'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="portfolio-shell" id="top">
      <nav className="topbar page-width" aria-label="Main navigation">
        <a className="wordmark" href="#top" onClick={() => setMenuOpen(false)}><span>AK</span> DATA WITH AVINASH</a>
        <button type="button" className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="main-nav-menu" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}</button>
        <div id="main-nav-menu" className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          {['Work', 'About', 'Stack', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <a className="resume-link" href="/data/Avinash_Kamble_Resume-4-0b231e.docx" download><Download size={14} /> Resume</a>
        </div>
      </nav>

      <section className="hero page-width">
        <div className="hero-meta"><span className="live-dot" /> OPEN TO DATA ENGINEERING INTERNSHIPS <span className="meta-rule" /></div>
        <div className="hero-grid">
          <div>
            <h1>Data<br /><span>made</span><br />useful.</h1>
            <p className="hero-note"><strong>Avinash Kamble</strong> — Information Technology undergraduate engineering reliable data systems across Azure, Databricks, and Python.</p>
            <div className="hero-actions"><a className="solid-button" href="#work">See selected work <ArrowUpRight size={16} /></a><a className="outline-button" href="mailto:letstalk.avii@gmail.com">Let&apos;s connect <Mail size={16} /></a></div>
          </div>
          <div className="hero-visual" aria-label="Animated data system visualization">
            <div className="visual-stamp">SYSTEM<br /><strong>AK / 01</strong></div>
            <div className="signal signal-one" /><div className="signal signal-two" /><div className="signal signal-three" />
            <div className="visual-core"><Database size={28} /><span>TRUSTED<br />DATA FLOW</span><b>98.6</b><small>quality index</small></div>
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="visual-label label-left">RAW INPUT <i /></div><div className="visual-label label-right"><i /> CURATED OUTPUT</div>
          </div>
        </div>
        <div className="hero-footer"><span>MUMBAI, INDIA</span><span>SCROLL TO EXPLORE ↓</span><span>2024 — 2028</span></div>
      </section>

      <section className="intro-band" id="about"><div className="page-width intro-grid"><p className="section-index">/ 01 — PROFILE</p><div><h2>Building the invisible layer that makes products <em>feel intelligent.</em></h2><p className="body-copy">I work at the intersection of software, data, and curiosity. My focus is turning messy inputs into dependable, analytics-ready systems — from streaming pipelines to grounded AI assistants.</p><div className="profile-facts"><span><b>EDUCATION</b>B.E. Information Technology<br />VCET, Mumbai</span><span><b>ACHIEVEMENT</b>200+ SQL &amp; DSA problems<br />State-level Buildathon finalist</span></div></div></div></section>

      <section className="work-section page-width" id="work"><div className="section-heading"><div><p className="section-index">/ 02 — SELECTED WORK</p><h2>Systems in motion.</h2></div><span className="heading-aside">03 PROJECTS<br />END TO END</span></div><div className="project-stack">{projects.map((project) => <article className={`project-card ${project.tone}`} key={project.index}><div className="project-top"><span className="project-number">{project.index}</span><span>{project.subtitle}</span><a className="project-github" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}><GitBranch size={17} /></a></div><div className="project-content"><div className="project-main"><div className="project-kicker">CASE STUDY / DATA ENGINEERING</div><h3>{project.title}</h3><p>{project.description}</p><a className="project-cta" href={project.href} target="_blank" rel="noreferrer">Explore build <ArrowUpRight size={15} /></a></div><div className="project-side"><span>BUILT WITH</span>{project.stack.map((tag) => <b key={tag}>{tag}</b>)}</div></div><div className="project-bar"><span>DATA IN</span><i /><span>INSIGHT OUT</span></div></article>)}</div></section>

      <section className="stack-section" id="stack"><div className="page-width"><div className="section-heading"><div><p className="section-index">/ 03 — THE TOOLKIT</p><h2>My working<br /><em>vocabulary.</em></h2></div><Sparkles className="sparkle" size={32} /></div><div className="skills-list">{skills.map(([title, items], i) => <div className="skill-line" key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{items}</p></div>)}</div></div></section>

      <section className="journey-section page-width"><div className="journey-copy"><p className="section-index">/ 04 — IN PROGRESS</p><h2>Still learning.<br /><em>Already shipping.</em></h2><p className="body-copy">Currently pursuing my B.E. in Information Technology at Vidyavardhini&apos;s College of Engineering and Technology, expected 2028.</p></div><div className="journey-card"><Play size={18} fill="currentColor" /><span>NOW PLAYING</span><strong>Growing into data engineering</strong><small>Building projects, learning distributed systems, and sharing the process.</small><div className="progress"><i /></div><div className="journey-card-footer"><span>VCET / MUMBAI</span><span>07:00 — 2028</span></div></div></section>

      <section className="resume-section page-width" id="resume"><div className="resume-copy"><p className="section-index">/ 05 — THE RESUME</p><h2>A closer look at<br /><em>the work.</em></h2><p className="body-copy">A concise snapshot of my education, systems work, technical toolkit, and the direction I&apos;m building toward.</p><a className="resume-download" href="/data/Avinash_Kamble_Resume-4-0b231e.docx" download><Download size={16} /> Download resume <ArrowUpRight size={15} /></a></div><div className="resume-preview"><div className="resume-preview-top"><span>AVINASH KAMBLE</span><span>CV / 2026</span></div><div className="resume-monogram">AK</div><div className="resume-preview-bottom"><strong>Information Technology<br />&amp; Data Engineering</strong><span>Mumbai, India<br />Open to opportunities</span></div></div></section>

      <section className="contact-section" id="contact"><div className="page-width contact-inner"><p className="section-index">/ 05 — SAY HELLO</p><h2>Let&apos;s make<br /><em>data useful.</em></h2><a className="contact-email" href="mailto:letstalk.avii@gmail.com">letstalk.avii@gmail.com <ArrowUpRight /></a><div className="contact-socials"><a href="https://github.com/letstalk-avii" target="_blank" rel="noreferrer"><GitBranch size={17} /> GitHub</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Network size={17} /> LinkedIn</a><a href="mailto:letstalk.avii@gmail.com"><Mail size={17} /> Email</a></div></div></section>
      <footer className="footer page-width"><span>© 2026 AVINASH KAMBLE</span><span>BUILT WITH PYTHON, CURIOSITY &amp; CLEAN DATA</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  )
}
