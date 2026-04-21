import { motion } from "framer-motion"
import SectionWrapper from "../components/SectionWrapper"
import { ExternalLink, Code } from "lucide-react"
import FloatingElement from "../components/FloatingElement"

const projects = [
  {
    title: "Dashboard Builder (Halleyx)",
    description: "A highly interactive, drag-and-drop dashboard builder application. Allows users to create dynamic data visualizations and configure responsive layouts with complex filtering options.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Recharts"],
    image: "/dashboard_builder_1776521807361.png",
    github: "https://github.com/Mathan123678",
    live: "#"
  },
  {
    title: "Gesture-Based Women Safety App",
    description: "A real-time Android mobile application that detects specific gestures to trigger SOS alerts. It tracks GPS location accurately and syncs data instantaneously using Firebase.",
    tech: ["Android/Java", "Firebase", "Google Maps API", "Sensors"],
    image: "/gesture_safety_app_1776521824050.png",
    github: "https://github.com/Mathan123678",
    live: "#"
  },
  {
    title: "IoT Gas Leak Detection System",
    description: "An integrated hardware and software solution that monitors air quality and detects dangerous gas leaks, sending real-time warnings to a connected mobile application.",
    tech: ["C++", "Arduino/ESP8266", "React Native", "Node.js"],
    image: "/iot_gas_leak_1776521988299.png",
    github: "https://github.com/Mathan123678",
    live: "#"
  }
]

export default function Projects() {
  return (
    <SectionWrapper id="projects" title="Featured Projects" subtitle="Some of the recent work I've put into production.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <FloatingElement key={idx} delay={idx * 0.4} yOffset={10} duration={6 + (idx % 3)}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col p-8 bg-slate-800/30 rounded-3xl border border-blue-500/10 hover:border-blue-500/30 hover:bg-slate-800/50 transition-all h-full relative overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-600/10 transition-colors" />
              
              <div className="flex flex-col flex-grow relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-blue-50 mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="h-1 w-12 bg-blue-500/50 rounded-full group-hover:w-20 transition-all duration-500" />
                </div>

                <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-blue-500/5 text-slate-400 rounded-lg border border-blue-500/10 group-hover:border-blue-500/20 group-hover:text-blue-100 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    <Code size={18} className="text-blue-500" /> Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={18} className="text-cyan-500" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </FloatingElement>
        ))}
      </div>
    </SectionWrapper>
  )
}
