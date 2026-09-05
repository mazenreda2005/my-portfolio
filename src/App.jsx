import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'

import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Certifications from './components/sections/Certifications'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import CyberFocus from './components/sections/CyberFocus'
import CareerGoals from './components/sections/CareerGoals'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-base font-sans text-ink selection:bg-signal">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Experience />
        <Education />
        <CyberFocus />
        <CareerGoals />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
