import React from 'react'
import { GraduationCap, Calendar, ExternalLink } from 'lucide-react'
import { EDUCATIONS } from '../data/resumeData'

export const Education: React.FC = () => {
  return (
    <section className="education page py-100" id="education">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-12 col-xl-11">
            <div className="sec-t">
              <h2>
                Best <span>Education</span>
              </h2>
            </div>
          </div>

          <div className="col-12" />

          <div className="col-lg-12 col-xl-11">
            <div className="sub-head">
              <h4>
                <GraduationCap size={18} className="mr-2 inline-icon" />
                Educational Background & Continuous Learning
              </h4>
              <p>
                Strong foundational education in Computer Science and Engineering, supplemented by continuous specialized certifications in Generative AI, Deep Learning, and Cloud Architecture.
              </p>
            </div>
          </div>

          <div className="col-12" />

          <div className="col-lg-12 col-xl-11">
            <ul className="list-unstyled">
              {EDUCATIONS.map((item) => (
                <li key={item.id} className="edu-item">
                  <h5>
                    <span>{item.degree} – </span>
                    {item.institution}
                  </h5>
                  <span className="calendar">
                    <Calendar size={13} className="mr-2 inline-calendar" />
                    {item.period}
                  </span>
                  <p>
                    Graduated with <span className="inlinestyle">{item.grade}</span>. {item.description}
                  </p>
                  {item.certificateUrl && (
                    <p className="inlineblack">
                      Verification & Details :{' '}
                      <span className="inlinestyle">
                        <a
                          href={item.certificateUrl}
                          className="textunderline inline-flex items-center gap-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>View academic details and GitHub verification</span>
                          <ExternalLink size={12} />
                        </a>
                      </span>
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
