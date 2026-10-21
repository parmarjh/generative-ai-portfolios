import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AgentSimulator } from './components/AgentSimulator'
import { Projects } from './components/Projects'
import { SkillsMatrix } from './components/SkillsMatrix'
import { ArticlesSection } from './components/ArticlesSection'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  const [activeModalProjectId, setActiveModalProjectId] = useState<string | null>(null)

  const handleSelectProjectFromSimulator = (projectId: string) => {
    setActiveModalProjectId(projectId)
    // Smooth scroll down to projects section
    const elem = document.getElementById('projects')
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleClearActiveModalProject = () => {
    setActiveModalProjectId(null)
  }

  return (
    <div className="app-layout">
      {/* Background Ambient Mesh Grid */}
      <div className="ambient-background" />

      <Navbar />

      <main className="main-content">
        <Hero />
        
        <AgentSimulator onSelectProject={handleSelectProjectFromSimulator} />

        <Projects
          activeModalProjectId={activeModalProjectId}
          onClearActiveModalProject={handleClearActiveModalProject}
        />

        <SkillsMatrix />

        <ArticlesSection />

        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
