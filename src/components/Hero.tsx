import React, { useState } from 'react'
import {
  Sparkles,
  Bot,
  Copy,
  Check,
  Download,
  ArrowRight,
  Sun,
  Moon,
  ExternalLink
} from 'lucide-react'
import confetti from 'canvas-confetti'
import { SOCIAL_LINKS } from '../data/socials'
import { Github, Linkedin, HuggingFace, Youtube } from './Icons'

interface HeroProps {
  onOpenSimulator?: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenSimulator }) => {
  const [copied, setCopied] = useState(false)
  const [isLightMode, setIsLightMode] = useState(false)

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText('parmarjatin4911@gmail.com')
    setCopied(true)
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#8a2be2', '#00f2fe', '#8e24aa', '#10b981']
    })
    setTimeout(() => setCopied(false), 2500)
  }

  const toggleTheme = () => {
    const nextMode = !isLightMode
    setIsLightMode(nextMode)
    if (nextMode) {
      document.documentElement.classList.add('light-theme')
    } else {
      document.documentElement.classList.remove('light-theme')
    }
  }

  return (
    <section className="home page page-current" id="home">
      <div className="container-fluid">
        <div className="row d-flex align-items-center justify-content-between hero-row">
          {/* Hero Left: Bio, Pulse Title, CTA Buttons */}
          <div className="col-lg-12 col-xl-7 hero-intro-col">
            <h1 className="h5 hero-name">
              <span>Jatinkumar Parmar</span>
            </h1>

            <h2 className="pulse animated slower infinite hero-designation">
              Generative AI & Machine Learning Engineer | <span>Agentic AI Architect</span> |{' '}
              <span>Forward Deployed AI Specialist</span>
            </h2>

            <p className="lead hero-lead">
              I'm a <strong>Generative AI & Machine Learning Engineer</strong> specialized in building scalable, production-ready AI platforms. With <strong>4+ years</strong> of focused experience spanning <strong>Model Context Protocol (MCP)</strong> multi-agent architectures, enterprise hybrid RAG with reciprocal reranking, and edge-deployed <strong>Computer Vision</strong> models (MediaPipe 3D gesture tracking and video anomaly LRCNs).
            </p>

            <p className="hero-lead-secondary">
              Operating in a <strong>forward deployed</strong> model — bridging cutting-edge AI research with production infrastructure on <strong>Google Cloud BigQuery</strong>, <strong>AWS</strong>, and modern client applications to deliver measured reliability and business value.
            </p>

            <div className="user-btn">
              <a href="#contact" className="btn btn-brand mr-3">
                Hire Me
              </a>
              <a href="#portfolio" className="btn btn-brand-border mr-3">
                My Portfolio
              </a>
              {onOpenSimulator && (
                <button
                  onClick={onOpenSimulator}
                  className="btn btn-ai-sim"
                  title="Interact with AI Copilot"
                >
                  <Bot size={16} className="mr-1" />
                  <span>Agent Copilot</span>
                </button>
              )}
            </div>

            <div className="quick-actions-bar mt-4">
              <button
                onClick={handleCopyEmail}
                className="btn-copy-chip"
                aria-label="Copy Email"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald" />
                    <span className="text-emerald">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>parmarjatin4911@gmail.com</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Hero Right: Floating Pill Bar & Avatar Card */}
          <div className="col-lg-12 col-xl-5 mb-xl-0 text-center my-details hero-avatar-col">
            {/* Top Pill / Switch */}
            <div className="socialbtns-design">
              <ul className="list-inline socialbtns single-line">
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/jhparmar"
                    className="list-inline-link socialbtns-color"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </li>

                <li className="list-inline-item">
                  <a
                    href="https://github.com/parmarjh"
                    className="list-inline-link socialbtns-color"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <Github size={18} />
                  </a>
                </li>

                <li className="list-inline-item">
                  <a
                    href="https://huggingface.co/jhparmar"
                    className="list-inline-link socialbtns-color"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Hugging Face"
                  >
                    <HuggingFace size={18} />
                  </a>
                </li>

                <li className="list-inline-item">
                  <a
                    href="https://jhparmar.medium.com"
                    className="list-inline-link socialbtns-color"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Medium Publications"
                  >
                    <span className="text-icon-sm">M</span>
                  </a>
                </li>

                <li className="list-inline-item">
                  <a
                    href="https://dev.to/jhparmar"
                    className="list-inline-link socialbtns-color"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Dev.to Posts"
                  >
                    <span className="text-icon-sm">DEV</span>
                  </a>
                </li>

                <li className="list-inline-item">
                  <a
                    href="https://www.youtube.com/channel/UCSLMS3odjPxesH02jnhWMnA"
                    className="list-inline-link socialbtns-color"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="YouTube Channel"
                  >
                    <Youtube size={18} />
                  </a>
                </li>

                {/* Theme Toggle Switch */}
                <li className="style-li">
                  <label className="switch" title="Toggle Dark/Light Mode">
                    <input
                      type="checkbox"
                      id="togBtn"
                      checked={!isLightMode}
                      onChange={toggleTheme}
                    />
                    <div className="slider round">
                      <span className="on">DARK</span>
                      <span className="off">LIGHT</span>
                    </div>
                  </label>
                </li>
              </ul>
            </div>

            {/* Profile Visual Card */}
            <div className="hero-profile-badge-card mt-4">
              <div className="avatar-frame">
                <div className="avatar-monogram">JP</div>
              </div>
              <div className="avatar-meta mt-3">
                <div className="live-status-indicator">
                  <span className="status-ping" />
                  <span className="status-title">Open for GenAI Engineering Roles</span>
                </div>
                <div className="avatar-location">Surat, Gujarat, India (GMT+5:30)</div>
              </div>

              <div className="avatar-quick-stats mt-3">
                <div className="avatar-stat-pill">
                  <span className="asp-val">100%</span>
                  <span className="asp-lbl">MCP v1 Spec</span>
                </div>
                <div className="avatar-stat-pill">
                  <span className="asp-val">98.4%</span>
                  <span className="asp-lbl">Vision Accuracy</span>
                </div>
                <div className="avatar-stat-pill">
                  <span className="asp-val">&lt;40ms</span>
                  <span className="asp-lbl">Edge Latency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
