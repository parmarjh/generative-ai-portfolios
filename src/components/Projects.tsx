import React, { useState } from 'react'
import { PROJECTS_DATA, type Project } from '../data/projects'
import { ArrowUpRight, Cpu, Layers, CheckCircle2, Sparkles } from 'lucide-react'
import { Github } from './Icons'
import { ProjectModal } from './ProjectModal'

interface ProjectsProps {
  activeModalProjectId?: string | null
  onClearActiveModalProject?: () => void
}

export const Projects: React.FC<ProjectsProps> = ({
  activeModalProjectId,
  onClearActiveModalProject
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [modalProject, setModalProject] = useState<Project | null>(null)

  // Sync external request from simulator
  React.useEffect(() => {
    if (activeModalProjectId) {
      const found = PROJECTS_DATA.find((p) => p.id === activeModalProjectId)
      if (found) {
        setModalProject(found)
      }
    }
  }, [activeModalProjectId])

  const handleCloseModal = () => {
    setModalProject(null)
    if (onClearActiveModalProject) {
      onClearActiveModalProject()
    }
  }

  const filteredProjects =
    selectedCategory === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory)

  const categories = [
    { id: 'all', label: 'All', count: PROJECTS_DATA.length },
    {
      id: 'agents',
      label: 'GenAI & Agents',
      count: PROJECTS_DATA.filter((p) => p.category === 'agents').length
    },
    {
      id: 'genai',
      label: 'RAG & LLMs',
      count: PROJECTS_DATA.filter((p) => p.category === 'genai').length
    },
    {
      id: 'vision',
      label: 'Computer Vision',
      count: PROJECTS_DATA.filter((p) => p.category === 'vision').length
    },
    {
      id: 'systems',
      label: 'Urban & Health Systems',
      count: PROJECTS_DATA.filter((p) => p.category === 'systems').length
    }
  ]

  return (
    <section className="portfolio page py-100" id="portfolio">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="sec-t">
              <h2>
                Recent <span>Work</span>
              </h2>
            </div>
          </div>

          <div className="col-12">
            <p className="portfolio-section-intro">
              Production Generative AI, Autonomous MCP Agents, and Spatial-Temporal Deep Learning Systems engineered with strict latency, zero-hallucination guardrails, and cloud scale.
            </p>
          </div>

          <div className="col-12">
            <ul className="list-inline filter-btn mb-35">
              {categories.map((cat) => (
                <li
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`list-inline-item ${selectedCategory === cat.id ? 'active' : ''}`}
                >
                  {cat.label} ({cat.count})
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="row projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-lg-6 col-xl-6 mb-4 filter-item">
              <article className={`project-card ${project.featured ? 'is-featured' : ''}`}>
                {project.featured && (
                  <div className="featured-ribbon">
                    <Sparkles size={12} />
                    <span>Featured System</span>
                  </div>
                )}

                <div className="project-card-top">
                  <div className="badge-row">
                    <span className="project-category-tag">{project.categoryLabel}</span>
                    <span className="project-badge">{project.badge}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-tagline">{project.tagline}</p>

                  {/* Metrics Row */}
                  <div className="project-card-metrics">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="metric-pill">
                        <span className="metric-val">{m.value}</span>
                        <span className="metric-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="project-highlights-list">
                    {project.highlights.map((h, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={14} className="text-cyan check-icon" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-card-bottom">
                  {/* Tags */}
                  <div className="project-tags">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span key={idx} className="tag-badge">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="tag-badge-more">+{project.tags.length - 4}</span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="project-actions-row">
                    <button
                      onClick={() => setModalProject(project)}
                      className="btn-inspect-architecture cyan-glow-hover"
                      aria-label={`Inspect architecture for ${project.title}`}
                    >
                      <Cpu size={15} />
                      <span>Inspect Pipeline</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project-github"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                      <ArrowUpRight size={14} className="arrow-icon" />
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Deep Dive Modal */}
      <ProjectModal project={modalProject} onClose={handleCloseModal} />
    </section>
  )
}
