import { motion } from "framer-motion"
import { ArrowRight, Download, Mail } from "lucide-react"
import mathanImg from "../assets/mathan.png"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Anti-Gravity Background Orbs */}
      <motion.div
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 60, 0],
          x: [0, -40, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-sm font-medium text-blue-200">Available for new opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
            >
              Hi, I'm Mathan S
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Full Stack Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              I build scalable MERN stack web applications and real-time Android mobile products with a focus on premium UI and performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold border border-blue-500/20 hover:bg-blue-500/10 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                Contact Me <Mail size={18} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-6 mt-8"
            >
              <a href="https://github.com/Mathan123678" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors hover:scale-110 active:scale-95" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"/><path d="M12 18v-4"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/mathan-s-336ab2329/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors hover:scale-110 active:scale-95" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="mailto:mathansmathan27@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors hover:scale-110 active:scale-95" aria-label="Email">
                <Mail size={28} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-3xl border-2 border-blue-500/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-[-10px] rounded-3xl border border-blue-500/10 animate-[spin_15s_linear_infinite_reverse]" />
              
              <div className="absolute inset-0 rounded-3xl overflow-hidden border-4 border-blue-500/10 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500">
                <img 
                  src={mathanImg} 
                  alt="Mathan S" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Floating tech icons or badges can be added here if needed */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 backdrop-blur-md"
              >
                <div className="text-2xl">🚀</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
