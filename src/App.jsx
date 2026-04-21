import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Experience from "./sections/Experience"
import Contact from "./sections/Contact"

import { motion } from "framer-motion"

function App() {
  return (
    <div className="relative w-full overflow-hidden bg-slate-900">
      
      {/* Global Anti-Gravity Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <motion.div
           animate={{ y: [0, -100, 0], x: [0, 50, 0] }}
           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px]"
        />
        <motion.div
           animate={{ y: [0, 120, 0], x: [0, -60, 0] }}
           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 5 }}
           className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-[120px]"
        />
        <motion.div
           animate={{ y: [0, -80, 0], scale: [1, 1.2, 1] }}
           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 10 }}
           className="absolute top-2/3 right-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]"
        />
      </div>

      <Navbar />
      <main className="flex flex-col w-full relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      {/* Simple Footer */}
      <footer className="w-full py-8 text-center border-t border-blue-500/10 mt-12 bg-slate-900/50 relative z-10">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Mathan S. Built with React & Tailwind.
        </p>
      </footer>
    </div>
  )
}

export default App
