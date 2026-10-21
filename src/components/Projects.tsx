import React, { useState } from 'react'
import { PROJECTS_DATA, type Project } from '../data/projects'
import {
  ArrowUpRight,
  Cpu,
  CheckCircle2,
  Sparkles,
  Search,
  ExternalLink,
  Code2
} from 'lucide-react'
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
  const [searchQuery, setSearchQuery] = useState<string>('')
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

  // Filter projects by category and search query
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory =
      selectedCategory === 'all' || project.category === selectedCategory

    const matchesSearch =
      searchQuery.trim() === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )

    return matchesCategory && matchesSearch
  })

  const categories = [
    { id: 'all', label: 'All Projects', count: PROJECTS_DATA.length },
    {
      id: 'agents',
      label: 'Voice & Agents',
      count: PROJECTS_DATA.filter((p) => p.category === 'agents').length
    },
    {
      id: 'vision',
      label: 'Computer Vision',
      count: PROJECTS_DATA.filter((p) => p.category === 'vision').length
    },
    {
      id: 'genai',
      label: 'Generative AI & LLMs',
      count: PROJECTS_DATA.filter((p) => p.category === 'genai').length
    },
    {
      id: 'systems',
      label: 'Urban & Systems',
      count: PROJECTS_DATA.filter((p) => p.category === 'systems').length
    }
  ]

  return (
    <section className="portfolio page py-100" id="portfolio">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="sec-t d-flex justify-content-between align-items-center flex-wrap gap-3">
              <h2>
                Recent <span>Work</span>
              </h2>

              <a
                href="https://github.com/parmarjh?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-all-repos-badge"
                title="Browse all 100+ repositories on GitHub"
              >
                <Github size={15} />
                <span>100+ Repositories on GitHub</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="col-12">
            <p className="portfolio-section-intro">
              Production Generative AI, Autonomous MCP Agents, Real-Time Voice Intelligence, and Edge Computer Vision systems sourced directly from my active GitHub codebases.
            </p>
          </div>

          {/* Search bar & Category Filter bar */}
          <div className="col-12 mb-4">
            <div className="portfolio-controls-row">
              <ul className="list-inline filter-btn mb-0">
                {categories.map((cat) => (
                  <li
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`list-inline-item ${
                      selectedCategory === cat.id ? 'active' : ''
                    }`}
                  >
                    {cat.label} ({cat.count})
                  </li>
                ))}
              </ul>

              <div className="portfolio-search-box">
                <Search size={16} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search projects by keyword, tech, or framework..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="portfolio-search-input"
                  aria-label="Search projects"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="clear-search-btn"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="row projects-grid">
          {filteredProjects.length === 0 ? (
            <div className="col-12 text-center py-5">
              <p className="no-projects-text">
                No projects matched your search "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="btn btn-brand mt-2"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="col-lg-6 col-xl-6 mb-4 filter-item"
              >
                <article
                  className={`project-card ${
                    project.featured ? 'is-featured' : ''
                  }`}
                >
                  {project.featured && (
                    <div className="featured-ribbon">
                      <Sparkles size={12} />
                      <span>Featured</span>
                    </div>
                  )}

                  <div className="project-card-top">
                    <div className="badge-row">
                      <span className="project-category-tag">
                        {project.categoryLabel}
                      </span>
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
                          <CheckCircle2
                            size={14}
                            className="text-cyan check-icon"
                          />
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
                        <span className="tag-badge-more">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="project-actions-row">
                      <button
                        onClick={() => setModalProject(project)}
                        className="btn-inspect-architecture cyan-glow-hover"
                        aria-label={`Inspect pipeline for ${project.title}`}
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
            ))
          )}
        </div>

        {/* Bottom Banner to Browse 100+ Repositories */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="all-repos-cta-banner">
              <div className="cta-banner-content">
                <Code2 size={28} className="cta-banner-icon" />
                <div className="cta-banner-text">
                  <h4>Want to explore more of my open-source code?</h4>
                  <p>
                    Browse all 100+ repositories spanning Machine Learning, LLM agents, Deep Learning, and Computer Vision directly on GitHub.
                  </p>
                </div>
              </div>
              <a
                href="https://github.com/parmarjh?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-brand"
              >
                <span>View All 100+ Repositories</span>
                <ArrowUpRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Deep Dive Modal */}
      <ProjectModal project={modalProject} onClose={handleCloseModal} />
    </section>
  )
}
