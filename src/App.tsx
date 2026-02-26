import { Routes, Route } from "react-router-dom"

import Hero from "./components/Hero"
import FeaturedProjects from "./components/FeaturedProjects"
import Skills from "./components/Skills"
import About from "./components/About"
import Contact from "./components/Contact"
import TechMarquee from "./components/TechMarquee"
import Footer from "./components/Footer"

import PrivacyPolicy from "./pages/PrivacyPolicy"

// Ana sayfa layout’unu ayrı component yaptık
function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="relative z-10">
        <Hero />
        <TechMarquee />
        <About />
        <FeaturedProjects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  )
}

export default App