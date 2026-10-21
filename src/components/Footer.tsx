import React from 'react'
import { SOCIAL_LINKS } from '../data/socials'
import { Github, Heart, Sparkles, Terminal } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
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

          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <div className="footer-links">
              <a href="#hero" className="footer-link">Home</a>
              <a href="#projects" className="footer-link">Production Systems</a>
              <a href="#architecture-inspector" className="footer-link">Architecture Inspector</a>
              <a href="#skills" className="footer-link">Tech Competencies</a>
              <a href="#publications" className="footer-link">Publications</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>

          <div className="footer-connect">
            <h4 className="footer-col-title">Connect & Follow</h4>
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
                    className="footer-social-btn cyan-glow-hover"
                    title={link.name}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                )
              })}
            </div>

            <div className="footer-repo-link">
              <a
                href="https://github.com/parmarjh/generative-ai-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-repo-anchor cyan-glow-hover"
              >
                <Github size={14} />
                <span>github.com/parmarjh/generative-ai-portfolio</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Jatinkumar Parmar. Engineered with React 19, TypeScript, and Vite.
          </p>
          <div className="footer-tech-badges">
            <span className="footer-mini-badge">Model Context Protocol</span>
            <span className="footer-mini-badge">Spatial-Temporal Vision</span>
            <span className="footer-mini-badge">Production RAG</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
