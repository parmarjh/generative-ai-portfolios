import React, { useState } from 'react'
import { AGENT_PROMPTS, type AgentPromptOption } from '../data/agentKnowledge'
import { Bot, Send, Sparkles, CheckCircle, Code, Layers, ArrowRight } from 'lucide-react'

interface AgentSimulatorProps {
  onSelectProject?: (projectId: string) => void
}

export const AgentSimulator: React.FC<AgentSimulatorProps> = ({ onSelectProject }) => {
  const [selectedPrompt, setSelectedPrompt] = useState<AgentPromptOption>(AGENT_PROMPTS[0])
  const [customInput, setCustomInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSelectChip = (prompt: AgentPromptOption) => {
    setIsTyping(true)
    setSelectedPrompt(prompt)
    setTimeout(() => {
      setIsTyping(false)
    }, 280)
  }

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!customInput.trim()) return

    // Simple keyword matching against available prompts
    const lower = customInput.toLowerCase()
    let matched = AGENT_PROMPTS[0]

    if (lower.includes('rag') || lower.includes('retrieval') || lower.includes('hallucin') || lower.includes('vector')) {
      matched = AGENT_PROMPTS[1] // RAG
    } else if (lower.includes('sign') || lower.includes('vision') || lower.includes('mediapipe') || lower.includes('gesture')) {
      matched = AGENT_PROMPTS[2] // SignTranslate
    } else if (lower.includes('stack') || lower.includes('tool') || lower.includes('skill') || lower.includes('experien')) {
      matched = AGENT_PROMPTS[3] // Tech stack
    } else {
      matched = AGENT_PROMPTS[0] // MCP agent
    }

    setIsTyping(true)
    setSelectedPrompt(matched)
    setCustomInput('')
    setTimeout(() => {
      setIsTyping(false)
    }, 320)
  }

  return (
    <section id="architecture-inspector" className="section-simulator">
      <div className="section-header">
        <div className="section-badge cyan">
          <Bot size={14} />
          <span>Interactive Assistant</span>
        </div>
        <h2 className="section-title">Virtual AI & Architecture Inspector</h2>
        <p className="section-subtitle">
          Query my engineering paradigms, architecture patterns, and design decisions in real-time.
        </p>
      </div>

      <div className="simulator-shell">
        <div className="simulator-header-bar">
          <div className="terminal-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="terminal-title">
            <Bot size={14} className="text-cyan" />
            <span>jatinkumar-agent-v1.0.mcp [JSON-RPC ACTIVE]</span>
          </div>
          <div className="terminal-status">
            <span className="live-indicator" />
            <span>Online</span>
          </div>
        </div>

        {/* Prompt Chips */}
        <div className="prompt-chips-wrapper">
          <span className="prompt-chips-label">Suggested Architecture Inquiries:</span>
          <div className="prompt-chips-list">
            {AGENT_PROMPTS.map((prompt) => (
              <button
                key={prompt.id}
                onClick={() => handleSelectChip(prompt)}
                className={`prompt-chip ${selectedPrompt.id === prompt.id ? 'active' : ''}`}
              >
                <Sparkles size={13} />
                <span>{prompt.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Console / Output Screen */}
        <div className="simulator-screen">
          <div className="chat-message user-message">
            <div className="message-avatar user">You</div>
            <div className="message-bubble user">
              <p>{selectedPrompt.query}</p>
            </div>
          </div>

          <div className="chat-message agent-message">
            <div className="message-avatar agent">
              <Bot size={18} />
            </div>

            <div className="message-bubble agent">
              {isTyping ? (
                <div className="typing-indicator">
                  <span />
                  <span />
                  <span />
                </div>
              ) : (
                <div className="agent-response-content">
                  <div className="response-header">
                    <h4 className="response-title">{selectedPrompt.response.title}</h4>
                    <span className="response-tag">Verified Production Architecture</span>
                  </div>

                  <p className="response-summary">{selectedPrompt.response.summary}</p>

                  <div className="response-highlights">
                    <h5 className="highlights-title">Engineering Innovations:</h5>
                    <ul className="highlights-list">
                      {selectedPrompt.response.keyHighlights.map((highlight, idx) => (
                        <li key={idx}>
                          <CheckCircle size={14} className="text-emerald" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="response-stack">
                    <span className="stack-label">Core Technologies:</span>
                    <div className="stack-tags">
                      {selectedPrompt.response.stack.map((item, idx) => (
                        <span key={idx} className="stack-badge">{item}</span>
                      ))}
                    </div>
                  </div>

                  {onSelectProject && (
                    <button
                      onClick={() => onSelectProject(selectedPrompt.response.recommendedProject)}
                      className="inspect-related-btn cyan-glow-hover"
                    >
                      <span>Inspect Deep Pipeline for this Project</span>
                      <ArrowRight size={14} />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleCustomSubmit} className="simulator-input-form">
          <div className="input-group">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Ask about MCP, RAG architectures, MediaPipe vision, or tech stack..."
              className="terminal-input"
            />
            <button type="submit" className="terminal-send-btn" aria-label="Send query">
              <Send size={16} />
              <span>Ask Agent</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
