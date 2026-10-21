import React from 'react'
import { SOCIAL_LINKS } from '../data/socials'
import { Github } from './Icons'

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container-fluid footer-container">
        <div className="row footer-top">
          <div className="col-md-5 mb-4 mb-md-0 footer-brand">
            <div className="footer-brand-title">
              <span className="footer-logo-badge">JP</span>
              <h3 className="footer-name">Jatinkumar Parmar</h3>
            </div>
            <p className="footer-tagline">
              Generative AI, Autonomous Agent Protocols & Machine Learning Engineer
            </p>
            <p className="footer-location">
              Surat, Gujarat, India • Available for Global Roles
            </p>
          </div>

          <div className="col-md-3 mb-4 mb-md-0 footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <div className="footer-links">
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About Me</a>
              <a href="#skills" className="footer-link">Skills</a>
              <a href="#experience" className="footer-link">Experience</a>
              <a href="#education" className="footer-link">Education</a>
              <a href="#achivements" className="footer-link">Achievements</a>
              <a href="#portfolio" className="footer-link">Portfolio</a>
              <a href="#blog" className="footer-link">Blog</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>

          <div className="col-md-4 footer-connect">
            <h4 className="footer-col-title">Connect &amp; Follow</h4>
            <div className="footer-social-icons">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="footer-social-btn"
                    title={link.name}
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                )
              })}
            </div>

            <div className="footer-repo-link mt-3">
              <a
                href="https://github.com/parmarjh/generative-ai-portfolios"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-repo-anchor"
              >
                <Github size={14} />
                <span>github.com/parmarjh/generative-ai-portfolios</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom mt-4 pt-3">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Jatinkumar Parmar. Engineered with React 19 &amp; TypeScript.
          </p>
          <div className="footer-tech-badges">
            <span className="footer-mini-badge">Model Context Protocol</span>
            <span className="footer-mini-badge">Spatial-Temporal Vision</span>
            <span className="footer-mini-badge">Enterprise RAG</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
