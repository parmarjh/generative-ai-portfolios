import React, { useState } from 'react'
import { type Project } from '../data/projects'
import { X, ExternalLink, Copy, Check, GitCommit, Layers, Cpu, Activity } from 'lucide-react'
import { Github } from './Icons'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copiedCode, setCopiedCode] = useState(false)

  if (!project) return null

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick} role="dialog" aria-modal="true">
      <div className="modal-container">
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-info">
            <span className="modal-badge">{project.badge}</span>
            <h3 className="modal-title">{project.title}</h3>
            <p className="modal-tagline">{project.tagline}</p>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body">
          {/* Key Metrics Strip */}
          <div className="modal-metrics-strip">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="modal-metric-card">
                <span className="modal-metric-value">{m.value}</span>
                <span className="modal-metric-label">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Architecture Flow Box */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Cpu size={16} className="text-cyan" />
              <span>Data Flow & System Architecture</span>
            </h4>
            <div className="architecture-box">
              <code>{project.architecture}</code>
            </div>
          </div>

          {/* Step-by-Step Pipeline */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Layers size={16} className="text-violet" />
              <span>Execution Pipeline Stages</span>
            </h4>
            <div className="pipeline-steps-list">
              {project.pipeline.map((step, idx) => (
                <div key={idx} className="pipeline-step-item">
                  <div className="step-number">{idx + 1}</div>
                  <div className="step-content">
                    <h5 className="step-title">{step.title}</h5>
                    <p className="step-detail">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Snippet (if available) */}
          {project.codeSnippet && (
            <div className="modal-section">
              <div className="code-snippet-header">
                <div className="code-file-tag">
                  <GitCommit size={14} className="text-cyan" />
                  <span>{project.codeSnippet.filename}</span>
                </div>
                <button
                  onClick={() => handleCopyCode(project.codeSnippet!.code)}
                  className="copy-code-btn"
                  aria-label="Copy snippet code"
                >
                  {copiedCode ? (
                    <>
                      <Check size={14} className="text-emerald" />
                      <span className="text-emerald">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Snippet</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="code-snippet-pre">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          )}

          {/* Tech Tags */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              <Activity size={16} className="text-cyan" />
              <span>Technology Stack</span>
            </h4>
            <div className="modal-tags-grid">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="modal-tag-badge">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-modal-github cyan-glow-hover"
          >
            <Github size={16} />
            <span>View Source on GitHub</span>
          </a>

          <button onClick={onClose} className="btn-modal-close">
            <span>Dismiss</span>
          </button>
        </div>
      </div>
    </div>
  )
}
