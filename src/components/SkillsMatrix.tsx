import React from 'react'
import { TECH_SKILLS } from '../data/projects'
import { BrainCircuit, Eye, Database, Code, CheckCircle } from 'lucide-react'

export const SkillsMatrix: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Generative AI')) return <BrainCircuit size={22} className="text-cyan" />
    if (category.includes('Computer Vision')) return <Eye size={22} className="text-violet" />
    if (category.includes('Data Engineering')) return <Database size={22} className="text-emerald" />
    return <Code size={22} className="text-blue" />
  }

  return (
    <section id="skills" className="section-skills">
      <div className="section-header">
        <div className="section-badge cyan">
          <BrainCircuit size={14} />
          <span>Core Capabilities</span>
        </div>
        <h2 className="section-title">Technical Architecture & Competencies</h2>
        <p className="section-subtitle">
          Proven proficiency across cutting-edge Generative AI paradigms, deep vision models, and robust cloud data foundations.
        </p>
      </div>

      <div className="skills-grid">
        {TECH_SKILLS.map((domain, idx) => (
          <div key={idx} className="skill-domain-card">
            <div className="domain-header">
              <div className="domain-icon-wrapper">
                {getCategoryIcon(domain.category)}
              </div>
              <h3 className="domain-title">{domain.category}</h3>
            </div>

            <div className="domain-skills-list">
              {domain.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item cyan-glow-hover">
                  <CheckCircle size={14} className="skill-check" />
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
