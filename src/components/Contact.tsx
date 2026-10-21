import React, { useState } from 'react'
import { Mail, Phone, MapPin, Copy, Check, ExternalLink, MessageSquare, Sparkles } from 'lucide-react'
import { SOCIAL_LINKS } from '../data/socials'
import confetti from 'canvas-confetti'

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('parmarjatin4911@gmail.com')
    setCopied(true)

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#00f2fe', '#4facfe', '#8a2be2', '#10b981']
    })

    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="section-contact">
      <div className="contact-container">
        <div className="section-header">
          <div className="section-badge cyan">
            <MessageSquare size={14} />
            <span>Direct Outreach</span>
          </div>
          <h2 className="section-title">Let's Build the Future of AI Together</h2>
          <p className="section-subtitle">
            Whether discussing Model Context Protocol agents, high-precision RAG deployments, or full-time AI engineering roles — I am always excited to connect.
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-primary-box">
            <div className="email-display-group">
              <span className="email-label">Primary Communication Channel</span>
              <span className="email-address">parmarjatin4911@gmail.com</span>
            </div>

            <div className="contact-action-buttons">
              <button
                onClick={handleCopyEmail}
                className="btn-copy-email cyan-glow-hover"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={18} className="text-emerald" />
                    <span className="text-emerald">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>

              <a
                href="mailto:parmarjatin4911@gmail.com?subject=Generative%20AI%20Engineering%20Inquiry"
                className="btn-mailto-primary"
                aria-label="Launch email client to contact Jatinkumar Parmar"
              >
                <Mail size={18} />
                <span>Launch Mail Client</span>
              </a>
            </div>

            <div className="contact-meta-strip">
              <div className="contact-meta-item">
                <MapPin size={16} className="text-cyan" />
                <span>Surat, Gujarat, India (Remote & Relocation Open)</span>
              </div>
              <div className="contact-meta-item">
                <Phone size={16} className="text-emerald" />
                <span>+91-70166-81896</span>
              </div>
            </div>
          </div>

          <div className="connect-section">
            <h3 className="connect-heading">Technical Ecosystem Profiles</h3>
            <p className="connect-subtext">Follow my repositories, benchmark models, and engineering publications</p>

            <div className="connect-links-grid">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="connect-link-item cyan-glow-hover"
                  >
                    <div className="connect-icon-wrapper">
                      <Icon size={22} className="connect-icon" aria-hidden="true" />
                    </div>
                    <div className="connect-link-info">
                      <span className="connect-label">{link.name}</span>
                      <span className="connect-handle">{link.handle}</span>
                    </div>
                    <ExternalLink size={14} className="connect-external-icon" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
