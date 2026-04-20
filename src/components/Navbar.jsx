import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download } from "lucide-react"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-blue-500/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500/20 to-blue-600/20 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M4 20V6l8 8 8-8v14" />
            </svg>
          </div>
          <span className="text-2xl font-heading font-bold text-blue-50 tracking-tight hidden sm:block">
            Mathan<span className="text-blue-500">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
            className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="/resume.pdf"
          download="Mathan_Resume.pdf"
          className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
        >
          <Download size={16} /> Resume
        </a>
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-50 text-sm font-medium transition-all border border-blue-500/20"
          >
            Work
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-b border-white/10 shadow-2xl py-6 px-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download="Mathan_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-300 hover:text-blue-400 flex items-center gap-2"
            >
              <Download size={20} /> Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
