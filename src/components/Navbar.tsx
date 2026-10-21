import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Github, Linkedin, Youtube, HuggingFace } from './Icons'

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Achivements', href: '#achivements' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i]
        const el = document.querySelector(item.href)
        if (el && el instanceof HTMLElement) {
          if (el.offsetTop <= scrollPosition) {
            setActiveSection(item.href.replace('#', ''))
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  const toggleMobileNav = () => {
    setMobileOpen(!mobileOpen)
  }

  const closeMobileNav = () => {
    setMobileOpen(false)
  }

  return (
    <header className={`header ${mobileOpen ? 'nav-open' : ''}`} id="header">
      {/* Brand logo for desktop sidebar & mobile bar */}
      <div className="header-brand-container">
        <a href="#home" className="header-brand-link" onClick={closeMobileNav}>
          <div className="brand-logo-circle">JP</div>
          <div className="brand-titles">
            <span className="brand-name">Jatinkumar</span>
            <span className="brand-title">Generative AI</span>
          </div>
        </a>

        {/* Mobile Hamburger toggle button */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          onClick={toggleMobileNav}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Main navigation list */}
      <nav className={`navbar p-0 ${mobileOpen ? 'mobile-visible' : ''}`}>
        <div className={`navbar-collapse ${mobileOpen ? 'show' : ''}`} id="navmobile">
          <ul className="navbar-nav mr-auto flex-column">
            {navItems.map((item) => {
              const secId = item.href.replace('#', '')
              const isActive = activeSection === secId

              return (
                <li key={item.href} className="nav-item">
                  <a
                    href={item.href}
                    onClick={closeMobileNav}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>

      {/* Header contact & socials for desktop sidebar */}
      <div className="contact d-none d-lg-block">
        <div className="contact-item">
          <h5>Social</h5>
          <ul className="list-inline sidebar-social-list">
            <li className="list-inline-item">
              <a
                href="https://github.com/parmarjh"
                className="list-inline-link"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <Github size={16} />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.linkedin.com/in/jhparmar"
                className="list-inline-link"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://huggingface.co/jhparmar"
                className="list-inline-link"
                target="_blank"
                rel="noopener noreferrer"
                title="Hugging Face"
              >
                <HuggingFace size={16} />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.youtube.com/channel/UCSLMS3odjPxesH02jnhWMnA"
                className="list-inline-link"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
              >
                <Youtube size={16} />
              </a>
            </li>
          </ul>
        </div>

        <div className="sidebar-quick-github mt-3">
          <a
            href="https://github.com/parmarjh/generative-ai-portfolios"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-repo-link"
          >
            <span>v1.0 GitHub Repo</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </header>
  )
}
