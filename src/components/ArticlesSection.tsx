import React from 'react'
import { BookOpen, ExternalLink, ArrowRight, Video, FileText } from 'lucide-react'

export const ArticlesSection: React.FC = () => {
  const articles = [
    {
      title: 'Building Autonomous Application Agents with Model Context Protocol (MCP)',
      platform: 'Medium & Dev.to',
      date: 'Published',
      readTime: '7 min read',
      excerpt: 'A comprehensive technical deep dive into designing a production MCP agent. Explores bidirectional JSON-RPC 2.0 tool invocation, direct pre-signed S3 binary streaming, and idempotent audit session handling.',
      tags: ['Model Context Protocol', 'Python', 'AWS S3', 'Multi-Agent'],
      url: 'https://jhparmar.medium.com'
    },
    {
      title: 'Real-Time Sign Language Translation with MediaPipe and React 19',
      platform: 'Medium & Dev.to',
      date: 'Published',
      readTime: '6 min read',
      excerpt: 'How to bypass heavy server-side video uploads by normalizing 21 3D spatial hand coordinates in the browser and classifying gestures with sub-40ms latency.',
      tags: ['MediaPipe', 'PyTorch', 'React 19', 'Edge Vision'],
      url: 'https://jhparmar.medium.com'
    },
    {
      title: 'Architecting Zero-Hallucination Enterprise RAG with Hybrid Reranking',
      platform: 'Medium & Dev.to',
      date: 'Published',
      readTime: '9 min read',
      excerpt: 'Overcoming semantic vector blindness using Reciprocal Rank Fusion (RRF) between BM25 indices and dense embeddings, topped with cross-encoder neural rerankers and strict citation offset checking.',
      tags: ['Azure OpenAI', 'RAG', 'Vector DB', 'LangChain'],
      url: 'https://jhparmar.medium.com'
    },
    {
      title: 'High-Throughput Urban Digital Twins: Streaming Telemetry to Google BigQuery',
      platform: 'Medium & Dev.to',
      date: 'Published',
      readTime: '8 min read',
      excerpt: 'Designing a municipal simulation backbone ingesting 10,000+ IoT telemetry records per second into Google Cloud BigQuery with spatial H3 indexing and spatio-temporal bottleneck forecasting.',
      tags: ['Google BigQuery', 'IoT Telemetry', 'Digital Twin', 'Cloud ML'],
      url: 'https://jhparmar.medium.com'
    }
  ]

  return (
    <section id="publications" className="section-publications">
      <div className="section-header">
        <div className="section-badge emerald">
          <BookOpen size={14} />
          <span>Knowledge Sharing</span>
        </div>
        <h2 className="section-title">Technical Publications & Architecture Guides</h2>
        <p className="section-subtitle">
          Bridging research theory with production engineering through open documentation and in-depth guides.
        </p>
      </div>

      <div className="articles-grid">
        {articles.map((art, idx) => (
          <article key={idx} className="article-card cyan-glow-hover">
            <div className="article-meta">
              <span className="article-platform">
                <FileText size={13} />
                <span>{art.platform}</span>
              </span>
              <span className="article-readtime">{art.readTime}</span>
            </div>

            <h3 className="article-title">
              <a href={art.url} target="_blank" rel="noopener noreferrer">
                {art.title}
              </a>
            </h3>

            <p className="article-excerpt">{art.excerpt}</p>

            <div className="article-footer">
              <div className="article-tags">
                {art.tags.map((t, tIdx) => (
                  <span key={tIdx} className="article-tag-badge">{t}</span>
                ))}
              </div>

              <a
                href={art.url}
                target="_blank"
                rel="noopener noreferrer"
                className="article-read-link"
                aria-label={`Read ${art.title}`}
              >
                <span>Read Guide</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
