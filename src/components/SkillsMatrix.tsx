import React from 'react'
import { Award, MessageSquare, Users, Star } from 'lucide-react'

export const SkillsMatrix: React.FC = () => {
  return (
    <section className="skills page py-100" id="skills">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-xl-11">
            <div className="sec-t">
              <h2>
                My <span>Skills</span>
              </h2>
            </div>
          </div>

          <div className="col-12" />

          <div className="col-lg-12 col-xl-11">
            <div className="sub-head">
              <h4>
                <Award size={18} className="mr-2 inline-icon" />
                Technical & Architectural Competencies
              </h4>
              <p>
                Hands-on engineering across Generative AI, autonomous agents, deep learning computer vision, and cloud data platforms — focused on building resilient systems that execute with sub-second latency and zero hallucination in production.
              </p>
            </div>
          </div>

          <div className="col-12" />

          {/* Left Column */}
          <div className="col-md-5">
            <div className="skills-groups mt-4">
              <h5 className="mb-3 matrix-heading">Core AI & Machine Learning</h5>
              <table className="skills-matrix">
                <tbody>
                  <tr>
                    <th>Agentic AI & MCP</th>
                    <td>
                      <span className="chip">Model Context Protocol (MCP)</span>
                      <span className="chip">Multi-Agent Systems (MAS)</span>
                      <span className="chip">Agent Orchestration</span>
                      <span className="chip">Tool Calling</span>
                      <span className="chip">LangChain</span>
                      <span className="chip">DSPy</span>
                      <span className="chip">Guardrails & RBAC</span>
                      <span className="chip">Agent Memory</span>
                      <span className="chip">Human-in-the-Loop</span>
                    </td>
                  </tr>
                  <tr>
                    <th>RAG & LLMs</th>
                    <td>
                      <span className="chip">Hybrid Retrieval</span>
                      <span className="chip">BM25 + Dense Fusion</span>
                      <span className="chip">Reciprocal Rank Fusion (RRF)</span>
                      <span className="chip">Cross-Encoder Reranking</span>
                      <span className="chip">Citation Verification</span>
                      <span className="chip">Azure OpenAI</span>
                      <span className="chip">LoRA / QLoRA</span>
                      <span className="chip">Hugging Face Transformers</span>
                    </td>
                  </tr>
                  <tr>
                    <th>Computer Vision</th>
                    <td>
                      <span className="chip">PyTorch</span>
                      <span className="chip">MediaPipe 3D Tracking</span>
                      <span className="chip">Spatial-Temporal LRCN</span>
                      <span className="chip">YOLOv8 Pose Estimation</span>
                      <span className="chip">OpenCV</span>
                      <span className="chip">Video Anomaly Detection</span>
                      <span className="chip">Edge AI (Jetson)</span>
                    </td>
                  </tr>
                  <tr>
                    <th>Languages</th>
                    <td>
                      <span className="chip">Python 3.11+</span>
                      <span className="chip">TypeScript</span>
                      <span className="chip">JavaScript (ES6+)</span>
                      <span className="chip">C++</span>
                      <span className="chip">SQL</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-5 offset-md-1">
            <div className="skills-groups mt-4">
              <h5 className="mb-3 matrix-heading">Cloud, Data & Engineering</h5>
              <table className="skills-matrix">
                <tbody>
                  <tr>
                    <th>Cloud Platforms</th>
                    <td>
                      <span className="chip">Google Cloud BigQuery</span>
                      <span className="chip">Cloud Pub/Sub</span>
                      <span className="chip">AWS S3 Pre-signed Streaming</span>
                      <span className="chip">AWS EC2</span>
                      <span className="chip">Docker Containers</span>
                      <span className="chip">Serverless</span>
                    </td>
                  </tr>
                  <tr>
                    <th>Data & Vector DBs</th>
                    <td>
                      <span className="chip">BigQuery Streaming</span>
                      <span className="chip">PostgreSQL</span>
                      <span className="chip">Pinecone</span>
                      <span className="chip">FAISS / Chroma</span>
                      <span className="chip">Redis Cache</span>
                      <span className="chip">H3 Geospatial Indices</span>
                    </td>
                  </tr>
                  <tr>
                    <th>Backend & APIs</th>
                    <td>
                      <span className="chip">FastAPI</span>
                      <span className="chip">RESTful APIs</span>
                      <span className="chip">WebSockets</span>
                      <span className="chip">Pydantic v2</span>
                      <span className="chip">AsyncIO</span>
                      <span className="chip">Microservices</span>
                    </td>
                  </tr>
                  <tr>
                    <th>Frontend & UI</th>
                    <td>
                      <span className="chip">React 19</span>
                      <span className="chip">TypeScript</span>
                      <span className="chip">Vite</span>
                      <span className="chip">Vanilla CSS / Glassmorphism</span>
                      <span className="chip">Canvas 2D / WebGL</span>
                      <span className="chip">Responsive Web</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Communication Skills */}
          <div className="col-lg-12 col-xl-11 mb-20 mt-40">
            <div className="comunicate-skill">
              <div className="sub-head">
                <h4>
                  <MessageSquare size={18} className="mr-2 inline-icon" />
                  Spoken Languages
                </h4>
                <p>
                  Clear technical communication across multicultural environments, presenting complex AI architectural concepts to leadership, engineering teams, and client stakeholders with precision.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-xl-11">
            <ul className="list-inline comunicate-skill-items text-center d-flex justify-content-start flex-wrap flex-sm-nowrap">
              <li className="list-inline-item">
                <h5>English</h5>
                <div className="comu-icon">
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                </div>
              </li>
              <li className="list-inline-item">
                <h5>Hindi</h5>
                <div className="comu-icon">
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                </div>
              </li>
              <li className="list-inline-item">
                <h5>Gujarati</h5>
                <div className="comu-icon">
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                </div>
              </li>
            </ul>
          </div>

          {/* Professional Competencies */}
          <div className="col-lg-12 col-xl-11 mb-20 mt-40">
            <div className="comunicate-skill">
              <div className="sub-head">
                <h4>
                  <Users size={18} className="mr-2 inline-icon" />
                  Engineering & Leadership Strengths
                </h4>
                <p>
                  Demonstrated ability to drive technical vision from research whiteboards to audited production pipelines, leading code reviews, establishing CI/CD standards, and mentoring junior engineers.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-xl-11">
            <ul className="list-inline comunicate-skill-items text-center d-flex justify-content-start flex-wrap flex-sm-nowrap">
              <li className="list-inline-item">
                <h5>System Architecture</h5>
                <div className="comu-icon">
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                </div>
              </li>
              <li className="list-inline-item">
                <h5>Problem Solving</h5>
                <div className="comu-icon">
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                </div>
              </li>
              <li className="list-inline-item">
                <h5>AI Governance & Ethics</h5>
                <div className="comu-icon">
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                </div>
              </li>
              <li className="list-inline-item">
                <h5>Code Quality & Rigor</h5>
                <div className="comu-icon">
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                </div>
              </li>
              <li className="list-inline-item">
                <h5>Continuous Learning</h5>
                <div className="comu-icon">
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                  <Star size={14} className="star-filled" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
