import React from 'react'
import { SOCIAL_LINKS } from '../data/socials'
import { Sparkles, Github, Terminal } from 'lucide-react'

export const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo" aria-label="Jatinkumar Parmar Portfolio Home">
          <span className="logo-badge">JP</span>
          <div className="logo-text-group">
            <span className="logo-name">Jatinkumar Parmar</span>
            <span className="logo-subtitle">Generative AI & ML</span>
          </div>
        </a>

        <nav className="navbar-nav" aria-label="Main Navigation">
          <a href="#projects" className="nav-link">Production Systems</a>
          <a href="#architecture-inspector" className="nav-link">AI Architecture</a>
          <a href="#skills" className="nav-link">Tech Matrix</a>
          <a href="#publications" className="nav-link">Articles & Media</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div className="navbar-actions">
          <a
            href="https://github.com/parmarjh/generative-ai-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="repo-pill-btn cyan-glow-hover"
            aria-label="View source repository on GitHub"
          >
            <Github size={16} />
            <span className="repo-pill-text">Star on GitHub</span>
            <span className="repo-pill-badge">v1.0</span>
          </a>

          <div className="navbar-socials" aria-label="Social Profiles">
            {SOCIAL_LINKS.slice(0, 3).map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="social-icon-btn cyan-glow-hover"
                  title={link.name}
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}
