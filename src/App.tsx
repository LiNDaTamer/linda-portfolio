import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import PageTransition from './components/PageTransition'

import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'
import MoreWork from './pages/MoreWork'
import KuhCaseStudy from './pages/case-studies/KuhCaseStudy'
import BasmaCaseStudy from './pages/case-studies/BasmaCaseStudy'
import WedeliverCaseStudy from './pages/case-studies/WedeliverCaseStudy'
import ProjectPlaceholder from './pages/case-studies/ProjectPlaceholder'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
        <Route path="/work/more" element={<PageTransition><MoreWork /></PageTransition>} />
        <Route path="/work/kuh-e-clinic" element={<PageTransition><KuhCaseStudy /></PageTransition>} />
        <Route path="/work/basma" element={<PageTransition><BasmaCaseStudy /></PageTransition>} />
        <Route path="/work/wedeliver" element={<PageTransition><WedeliverCaseStudy /></PageTransition>} />
        <Route path="/work/:slug" element={<PageTransition><ProjectPlaceholder /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <div className="cursor-none-desktop relative">
      <CustomCursor />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  )
}
