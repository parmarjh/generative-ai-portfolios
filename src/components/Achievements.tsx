import React from 'react'
import { Trophy, Calendar, ExternalLink } from 'lucide-react'
import { ACHIEVEMENTS } from '../data/resumeData'

export const Achievements: React.FC = () => {
  return (
    <section className="achivements page py-100" id="achivements">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-12 col-xl-11">
            <div className="sec-t">
              <h2>
                My <span>Achivements</span> &amp; <span>Certifications</span>
              </h2>
            </div>
          </div>

          <div className="col-12" />

          <div className="col-lg-12 col-xl-11">
            <div className="sub-head">
              <h4>
                <Trophy size={18} className="mr-2 inline-icon" />
                Achievements &amp; Community Contributions
              </h4>
              <p>
                Active commitment to open science, developer education, algorithmic problem solving, and technical architecture writing across global communities.
              </p>
            </div>
          </div>

          <div className="col-12" />

          <div className="col-lg-12 col-xl-11">
            <ul className="list-unstyled">
              {ACHIEVEMENTS.map((item) => (
                <li key={item.id} className="edu-item">
                  <h5>
                    <span>{item.title} – </span>
                    {item.subtitle}
                  </h5>
                  <span className="calendar">
                    <Calendar size={13} className="mr-2 inline-calendar" />
                    {item.period}
                  </span>
                  <p>{item.description}</p>
                  <p className="inlineblack">
                    Link :{' '}
                    <span className="inlinestyle">
                      <a
                        href={item.linkUrl}
                        className="textunderline inline-flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>{item.linkText}</span>
                        <ExternalLink size={12} />
                      </a>
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
