import React, { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Send,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react'
import { SOCIAL_LINKS } from '../data/socials'
import confetti from 'canvas-confetti'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Trigger mailto with prefilled parameters
    const subject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
    )
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:parmarjatin4911@gmail.com?subject=${subject}&body=${body}`

    setSubmitted(true)
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#8a2be2', '#00f2fe', '#8e24aa', '#10b981']
    })

    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText('parmarjatin4911@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section className="contact page py-100" id="contact">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-12 col-xl-11">
            <div className="sec-t">
              <h2>
                Get In <span>Touch</span>
              </h2>
            </div>
          </div>

          <div className="col-12" />

          <div className="col-lg-12 col-xl-11">
            <div className="sub-head">
              <h4>
                <Mail size={18} className="mr-2 inline-icon" />
                Feel free to drop me a line
              </h4>
              <p>
                Email me with any questions, project inquiries, or AI engineering opportunities. I am always happy to discuss Model Context Protocol agents, enterprise RAG architectures, or schedule an interview.
              </p>
            </div>
          </div>

          <div className="col-12" />

          {/* Left Column: Contact details & Social icons */}
          <div className="col-md-4 col-xl-4 mb-5 mb-md-0">
            <ul className="list-unstyled contact-details-list">
              <li className="contact-item">
                <h5>Location</h5>
                <p className="mb-1">
                  Surat, Gujarat, India
                  <br />
                  Open to Remote & Global Relocation
                </p>
                <a
                  href="https://maps.google.com/maps?q=Surat,+Gujarat,+India"
                  className="more-link map"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </li>

              <li className="contact-item">
                <h5>Direct Phone</h5>
                <p>+91-70166-81896</p>
              </li>

              <li className="contact-item">
                <h5>Direct Email</h5>
                <a
                  className="more-link mail-link"
                  href="mailto:parmarjatin4911@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  parmarjatin4911@gmail.com
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="copy-chip-inline ml-2"
                  title="Copy email address"
                >
                  {copied ? (
                    <span className="text-emerald inline-flex items-center gap-1">
                      <Check size={12} /> Copied!
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1">
                      <Copy size={12} /> Copy
                    </span>
                  )}
                </button>
              </li>

              <li className="contact-item">
                <h5>Technical Profiles</h5>
                <ul className="list-inline mt-3 socialbtns contact-social-row">
                  {SOCIAL_LINKS.map((link) => {
                    const Icon = link.icon
                    return (
                      <li key={link.id} className="list-inline-item">
                        <a
                          href={link.url}
                          className="list-inline-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          title={link.name}
                        >
                          <Icon size={16} />
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </li>
            </ul>
          </div>

          {/* Right Column: Contact Form */}
          <div className="col-md-7 col-xl-7 offset-md-1">
            <form className="contact_form" onSubmit={handleSubmit}>
              {submitted && (
                <div className="alert alert-success contact_msg" role="alert">
                  <CheckCircle2 size={16} className="inline-icon mr-2" />
                  Your message was drafted successfully! Launching your mail client...
                </div>
              )}

              <div className="contact_input_area">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 mb-3">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject / Opportunity Role"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 mb-4">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control text-area"
                        rows={5}
                        placeholder="Your Message, Project Requirements, or Role Specifications..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-brand form-submit-btn">
                      <Send size={16} className="mr-2 inline-icon" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
