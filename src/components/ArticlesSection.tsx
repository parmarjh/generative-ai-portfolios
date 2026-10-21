import React, { useState } from 'react'
import { BookOpen, ExternalLink, ArrowRight, User, Clock, FileText } from 'lucide-react'

export const ArticlesSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all')

  const articles = [
    {
      id: 'mcp-agent',
      category: 'agents',
      title: 'Building Autonomous Application Agents with Model Context Protocol (MCP)',
      platform: 'Medium & Dev.to',
      author: 'Jatinkumar',
      date: 'Recent',
      readTime: '7 min read',
      excerpt:
        'A comprehensive technical deep dive into designing a production MCP agent. Explores bidirectional JSON-RPC 2.0 tool invocation, direct pre-signed S3 binary streaming, and idempotent audit session handling.',
      tags: ['Model Context Protocol', 'Python', 'AWS S3', 'Multi-Agent'],
      url: 'https://jhparmar.medium.com'
    },
    {
      id: 'mediapipe-cv',
      category: 'vision',
      title: 'Real-Time Sign Language Translation with MediaPipe and React 19',
      platform: 'Medium & Dev.to',
      author: 'Jatinkumar',
      date: 'Recent',
      readTime: '6 min read',
      excerpt:
        'How to bypass heavy server-side video uploads by normalizing 21 3D spatial hand coordinates in the browser and classifying gestures with sub-40ms latency.',
      tags: ['MediaPipe', 'PyTorch', 'React 19', 'Edge Vision'],
      url: 'https://jhparmar.medium.com'
    },
    {
      id: 'azure-rag',
      category: 'genai',
      title: 'Architecting Zero-Hallucination Enterprise RAG with Hybrid Reranking',
      platform: 'Medium & Dev.to',
      author: 'Jatinkumar',
      date: 'Recent',
      readTime: '9 min read',
      excerpt:
        'Overcoming semantic vector blindness using Reciprocal Rank Fusion (RRF) between BM25 indices and dense embeddings, topped with cross-encoder neural rerankers and strict citation offset checking.',
      tags: ['Azure OpenAI', 'RAG', 'Vector DB', 'LangChain'],
      url: 'https://jhparmar.medium.com'
    },
    {
      id: 'urban-twin',
      category: 'systems',
      title: 'High-Throughput Urban Digital Twins: Streaming Telemetry to Google BigQuery',
      platform: 'Medium & Dev.to',
      author: 'Jatinkumar',
      date: 'Recent',
      readTime: '8 min read',
      excerpt:
        'Designing a municipal simulation backbone ingesting 10,000+ IoT telemetry records per second into Google Cloud BigQuery with spatial H3 indexing and spatio-temporal bottleneck forecasting.',
      tags: ['Google BigQuery', 'IoT Telemetry', 'Digital Twin', 'Cloud ML'],
      url: 'https://jhparmar.medium.com'
    }
  ]

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'agents', label: 'Agentic Systems & MCP' },
    { id: 'genai', label: 'Generative AI & RAG' },
    { id: 'vision', label: 'Computer Vision' },
    { id: 'systems', label: 'Cloud & Telemetry' }
  ]

  const filteredArticles =
    selectedFilter === 'all'
      ? articles
      : articles.filter((a) => a.category === selectedFilter)

  return (
    <section className="blog page py-100" id="blog">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="sec-t">
              <h2>
                Latest <span>Publications</span>
              </h2>
            </div>
          </div>

          <div className="col-12">
            <p className="blog-section-intro">
              Bridging academic machine learning research with scalable enterprise engineering through published guides and open architecture analyses.
            </p>
          </div>

          <div className="col-12">
            <ul className="list-inline blog-filter-btn mb-35">
              {filters.map((f) => (
                <li
                  key={f.id}
                  onClick={() => setSelectedFilter(f.id)}
                  className={`list-inline-item ${selectedFilter === f.id ? 'active' : ''}`}
                >
                  {f.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="row">
          {filteredArticles.map((art) => (
            <div key={art.id} className="col-md-6 col-lg-6 mb-4 blog-filter-item">
              <div className="blog-item">
                <div className="blog-header-meta">
                  <div className="blog-date">
                    <span className="blog-admin">
                      <User size={13} className="mr-1 inline-icon" />
                      {art.author}
                    </span>
                    <span className="blog-time">
                      <Clock size={13} className="mr-1 inline-icon" />
                      {art.readTime}
                    </span>
                    <span className="blog-platform-tag">{art.platform}</span>
                  </div>
                </div>

                <div className="blog-text">
                  <a href={art.url} target="_blank" rel="noopener noreferrer">
                    <h3 className="inlineblogstyle">{art.title}</h3>
                  </a>
                  <p>{art.excerpt}</p>

                  <div className="blog-card-footer mt-3">
                    <div className="blog-tags">
                      {art.tags.map((t, idx) => (
                        <span key={idx} className="blog-chip">
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={art.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blog-read-more-link"
                    >
                      <span>Read Publication</span>
                      <ArrowRight size={14} className="ml-1 inline-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
