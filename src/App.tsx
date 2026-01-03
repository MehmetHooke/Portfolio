import Hero from "./components/Hero"
import FeaturedProjects from "./components/FeaturedProjects"
import Skills from "./components/Skills"
import About from "./components/About"
import Contact from "./components/Contact"
import TechMarquee from "./components/TechMarquee"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      
      <div className="relative z-10">
        <Hero />
        <TechMarquee />
        <About />
        <FeaturedProjects />
        <Skills />
        <Contact />
        <Footer/>
      </div>
    </main>
  )
}

export default App
