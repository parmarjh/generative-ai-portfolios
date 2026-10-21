import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { SkillsMatrix } from './components/SkillsMatrix'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Achievements } from './components/Achievements'
import { Projects } from './components/Projects'
import { ArticlesSection } from './components/ArticlesSection'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { AgentSimulator } from './components/AgentSimulator'
import { X } from 'lucide-react'
import './App.css'

function App() {
  const [activeModalProjectId, setActiveModalProjectId] = useState<string | null>(null)
  const [showSimulatorModal, setShowSimulatorModal] = useState<boolean>(false)

  const handleSelectProjectFromSimulator = (projectId: string) => {
    setActiveModalProjectId(projectId)
    setShowSimulatorModal(false)
    // Smooth scroll down to portfolio section
    const elem = document.getElementById('portfolio')
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleClearActiveModalProject = () => {
    setActiveModalProjectId(null)
  }

  return (
    <div className="portfolio-body">
      {/* Background Ambient Grid */}
      <div className="ambient-background" />

      {/* Main Sidebar / Top Navbar */}
      <Navbar />

      {/* Main Content Wrapper matching Atique Ahmed proforma */}
      <main className="wrapper" id="wrapper">
        {/* 1. Home Section */}
        <Hero onOpenSimulator={() => setShowSimulatorModal(true)} />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Skills Matrix Section */}
        <SkillsMatrix />

        {/* 4. Experience Timeline Section */}
        <Experience />

        {/* 5. Education Section */}
        <Education />

        {/* 6. Achievements Section */}
        <Achievements />

        {/* 7. Portfolio Section */}
        <Projects
          activeModalProjectId={activeModalProjectId}
          onClearActiveModalProject={handleClearActiveModalProject}
        />

        {/* 8. Blog / Publications Section */}
        <ArticlesSection />

        {/* 9. Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </main>

      {/* Interactive Agent Copilot Modal */}
      {showSimulatorModal && (
        <div className="agent-modal-backdrop" onClick={() => setShowSimulatorModal(false)}>
          <div className="agent-modal-container" onClick={(e) => e.stopPropagation()}>
            <button
              className="agent-modal-close-btn"
              onClick={() => setShowSimulatorModal(false)}
              aria-label="Close Agent Copilot"
            >
              <X size={20} />
            </button>
            <AgentSimulator onSelectProject={handleSelectProjectFromSimulator} />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
