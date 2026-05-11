import { useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { CVModalProvider } from './context/CVModalContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CVModal from './components/CVModal'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import ScrollToTop from './components/ScrollToTop'

// Cycles green → blue → green every 60s with a smooth 2s transition.
function useThemeCycle() {
  useEffect(() => {
    const root = document.documentElement
    let isBlue = false

    const applyTheme = () => {
      isBlue = !isBlue
      root.setAttribute('data-transitioning', '')
      if (isBlue) {
        root.setAttribute('data-theme', 'blue')
      } else {
        root.removeAttribute('data-theme')
      }
      setTimeout(() => root.removeAttribute('data-transitioning'), 2200)
    }

    const timer = setInterval(applyTheme, 60000)
    return () => clearInterval(timer)
  }, [])
}

export default function App() {
  useThemeCycle()

  return (
    <LanguageProvider>
      <CVModalProvider>
        <Router>
          <ScrollToTop />
          <div className="noise-overlay" />
          <Navbar />
          <main>
            <Routes>
              <Route path="/"         element={<Home />}     />
              <Route path="/resume"   element={<Resume />}   />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
          <Footer />
          {/* CV download modal — rendered at root level so it overlays everything */}
          <CVModal />
        </Router>
      </CVModalProvider>
    </LanguageProvider>
  )
}
