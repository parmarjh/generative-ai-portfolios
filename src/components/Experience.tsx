import React from 'react'
import { Clock, Calendar } from 'lucide-react'
import { EXPERIENCES } from '../data/resumeData'

export const Experience: React.FC = () => {
  // Split experiences into two balanced columns
  const mid = Math.ceil(EXPERIENCES.length / 2)
  const leftColumn = EXPERIENCES.slice(0, mid)
  const rightColumn = EXPERIENCES.slice(mid)

  return (
    <section className="experience page py-100" id="experience">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-12 col-xl-11">
            <div className="sec-t">
              <h2>
                My <span>Experience</span>
              </h2>
            </div>
          </div>

          <div className="col-12" />

          <div className="col-lg-12 col-xl-11">
            <div className="sub-head">
              <h4>
                <Clock size={18} className="mr-2 inline-icon" />
                Personal Experience & Systems Engineering
              </h4>
              <p>
                A proven track record of architecting, fine-tuning, and putting production AI systems into active operation. From designing multi-agent tool-calling engines to low-latency computer vision edge solutions, I focus on reproducible engineering rigor and measured system impact.
              </p>
            </div>
          </div>

          <div className="col-12" />

          {/* Left Column */}
          <div className="col-lg-12 col-xl-5 mb-5 mb-xl-0">
            <ul className="list-unstyled">
              {leftColumn.map((item) => (
                <li key={item.id} className="expe-item">
                  <h5>
                    <span>{item.role} – </span>
                    {item.company}
                  </h5>
                  <span className="calendar">
                    <Calendar size={13} className="mr-2 inline-calendar" />
                    {item.period}
                  </span>
                  <p>{item.description}</p>
                  <span className="inlineblack">{item.techCategory}</span>
                  <div className="mt-1">
                    {item.technologies.map((tech, idx) => (
                      <div key={idx} className="inlinestyle">
                        {tech}
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="col-lg-12 col-xl-5 offset-xl-1">
            <ul className="list-unstyled">
              {rightColumn.map((item) => (
                <li key={item.id} className="expe-item">
                  <h5>
                    <span>{item.role} – </span>
                    {item.company}
                  </h5>
                  <span className="calendar">
                    <Calendar size={13} className="mr-2 inline-calendar" />
                    {item.period}
                  </span>
                  <p>{item.description}</p>
                  <span className="inlineblack">{item.techCategory}</span>
                  <div className="mt-1">
                    {item.technologies.map((tech, idx) => (
                      <div key={idx} className="inlinestyle">
                        {tech}
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
