import React, { useState } from 'react'
import { Sparkles, ArrowRight, Copy, Check, Terminal, ExternalLink, Bot, Layers, Zap } from 'lucide-react'
import confetti from 'canvas-confetti'

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText('parmarjatin4911@gmail.com')
    setCopied(true)

    // Trigger celebratory confetti burst
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#00f2fe', '#4facfe', '#8a2be2', '#10b981']
    })

    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow-orb hero-glow-left" />
      <div className="hero-glow-orb hero-glow-right" />

      <div className="hero-content">
        <div className="hero-status-pill">
          <span className="status-dot-pulse" />
          <span className="status-text">Available for Generative AI & Machine Learning Opportunities</span>
          <span className="status-badge">2026 Ready</span>
        </div>

        <h1 className="hero-title">
          Architecting <span className="text-gradient-cyan">Generative AI</span>, Autonomous Agents & <span className="text-gradient-violet">Vision Intelligence</span>
        </h1>

        <p className="hero-subtitle">
          I am <strong>Jatinkumar Parmar</strong> — a Generative AI & Machine Learning Engineer specialized in <strong>Model Context Protocol (MCP)</strong> multi-agent workflows, enterprise RAG pipelines, spatial-temporal computer vision, and high-throughput cloud streaming systems.
        </p>

        <div className="hero-cta-group">
          <a href="#projects" className="btn-primary-glow">
            <span>Explore 8 Production Systems</span>
            <ArrowRight size={18} />
          </a>

          <a href="#architecture-inspector" className="btn-secondary-glass">
            <Bot size={18} className="btn-icon-cyan" />
            <span>Interactive AI Inspector</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="btn-tertiary-copy cyan-glow-hover"
            aria-label="Copy Jatinkumar Parmar email address"
          >
            {copied ? (
              <>
                <Check size={16} className="text-emerald" />
                <span className="text-emerald">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>parmarjatin4911@gmail.com</span>
              </>
            )}
          </button>
        </div>

        {/* Highlight Stats Bar */}
        <div className="hero-stats-grid">
          <div className="stat-card">
            <div className="stat-icon-wrapper cyan">
              <Zap size={20} />
            </div>
            <div className="stat-data">
              <span className="stat-number">8+</span>
              <span className="stat-label">Full-Stack AI Systems</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper violet">
              <Layers size={20} />
            </div>
            <div className="stat-data">
              <span className="stat-number">98.4%</span>
              <span className="stat-label">Computer Vision Accuracy</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper emerald">
              <Terminal size={20} />
            </div>
            <div className="stat-data">
              <span className="stat-number">MCP v1</span>
              <span className="stat-label">Native Protocol Agents</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-wrapper blue">
              <Sparkles size={20} />
            </div>
            <div className="stat-data">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Events/Sec Streamed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
