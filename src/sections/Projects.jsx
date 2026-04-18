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
              className="group flex flex-col bg-slate-800/50 rounded-2xl border border-white/5 overflow-hidden hover:border-white/10 transition-all h-full"
            >
              <div className="w-full h-48 bg-slate-900 relative overflow-hidden flex items-center justify-center border-b border-white/5">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1 bg-white/5 text-slate-300 rounded-full border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                    <Code size={18} /> Code
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                    <ExternalLink size={18} /> Live Demo
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
