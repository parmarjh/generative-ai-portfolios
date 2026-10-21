import React from 'react'
import { User, Briefcase, Clock, Award, ShieldCheck, Download, BookOpen } from 'lucide-react'

export const About: React.FC = () => {
  return (
    <section className="about page py-100" id="about">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-xl-11">
            <div className="sec-t">
              <h2>
                About <span>me</span>
              </h2>
            </div>
          </div>

          <div className="col-lg-12 col-xl-11">
            <div className="sub-head">
              <h4>
                <User size={18} className="mr-2 inline-icon" />
                Personal Info
              </h4>
              <p>
                I am a <strong>Generative AI & Machine Learning Engineer</strong> based in Surat, Gujarat, India, with over <strong>4+ years</strong> of dedicated experience designing, fine-tuning, and deploying production AI systems. My core engineering expertise centers on <strong>Autonomous Multi-Agent Systems</strong> adhering to the <strong>Model Context Protocol (MCP)</strong>, <strong>Zero-Hallucination Enterprise RAG</strong> with hybrid reranking, and <strong>Edge Computer Vision</strong> with sub-40ms spatial-temporal neural networks.
              </p>
              <p className="mt-2">
                I work effectively both as an individual contributor and as a technical lead, building high-throughput data backbones on Google Cloud BigQuery and AWS, fine-tuning open-source LLMs via LoRA/QLoRA, and delivering production-grade architectures that solve tangible enterprise problems with measurable reliability and speed.
              </p>
            </div>
          </div>

          <div className="col-12" />

          {/* Biographical details 2 columns */}
          <div className="col-md-5 col-xl-5 mb-4 mb-md-0">
            <div className="abut-info">
              <ul className="list-unstyled">
                <li>
                  <span className="f_name">First Name</span> : Jatinkumar
                </li>
                <li>
                  <span className="l_name">Last Name</span> : Parmar
                </li>
                <li>
                  <span className="b_date">Location</span> : Surat, Gujarat, India
                </li>
                <li>
                  <span className="natonality">Nationality</span> : Indian
                </li>
                <li>
                  <span className="freelance">Role</span> : GenAI & ML Engineer
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-xl-5 offset-md-1">
            <div className="abut-info">
              <ul className="list-unstyled">
                <li>
                  <span className="a_p_number">Phone</span> : +91-70166-81896
                </li>
                <li>
                  <span className="a_email">Email</span> : parmarjatin4911@gmail.com
                </li>
                <li>
                  <span className="a_languages">Spoken</span> : English – Hindi – Gujarati
                </li>
                <li>
                  <span className="a_address">Specialization</span> : Agentic AI, MCP & Vision
                </li>
                <li>
                  <span className="freelance">Availability</span> : Open for Full-Time Roles
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-12 col-xl-11 mt-40 user-action-btns">
            <a
              className="btn btn-brand mr-3"
              href="mailto:parmarjatin4911@gmail.com?subject=Job%20Opportunity%20-%20Generative%20AI%20Engineer&body=Hi%20Jatinkumar,%0A%0AWe%20reviewed%20your%20portfolio%20and%20would%20love%20to%20connect%20regarding%20an%20AI%20role.%0A%0ABest%20regards,"
            >
              <Download size={16} className="btn-icon" />
              <span>Contact / Hire Me</span>
            </a>
            <a className="btn btn-brand-border my_blog" href="#blog">
              <BookOpen size={16} className="btn-icon" />
              <span>My Technical Articles</span>
            </a>
          </div>

          <div className="col-12" />

          {/* Stats Counters */}
          <div className="col-lg-12 col-xl-11 mt-70">
            <ul className="list-inline stats-counter-row d-flex justify-content-start text-center flex-wrap flex-sm-nowrap">
              <li className="list-inline-item project">
                <Briefcase className="stat-icon" />
                <h4 className="count-up">8+</h4>
                <h5>Production Systems</h5>
              </li>
              <li className="list-inline-item project">
                <Clock className="stat-icon" />
                <h4 className="count-up">4+</h4>
                <h5>Years ML Experience</h5>
              </li>
              <li className="list-inline-item project">
                <Award className="stat-icon" />
                <h4 className="count-up">98.4%</h4>
                <h5>CV Model Accuracy</h5>
              </li>
              <li className="list-inline-item project">
                <ShieldCheck className="stat-icon" />
                <h4 className="count-up">100%</h4>
                <h5>MCP Protocol Compliance</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
