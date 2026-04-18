import { motion } from "framer-motion"
import SectionWrapper from "../components/SectionWrapper"
import { Code2, Smartphone, Database } from "lucide-react"
import FloatingElement from "../components/FloatingElement"

export default function About() {
  const highlights = [
    {
      icon: <Code2 size={24} className="text-blue-400" />,
      title: "MERN Stack",
      desc: "Architecting scalable web applications with MongoDB, Express, React, and Node.js."
    },
    {
      icon: <Smartphone size={24} className="text-purple-400" />,
      title: "Android Apps",
      desc: "Building native fast and responsive apps using Java, XML, and Firebase."
    },
    {
      icon: <Database size={24} className="text-green-400" />,
      title: "System Design",
      desc: "Integrating IoT sensors, databases, and real-time backend services seamlessly."
    }
  ]

  return (
    <SectionWrapper id="about" title="About Me" subtitle="A quick glimpse into who I am and what I focus on.">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 text-slate-300 text-lg leading-relaxed z-10 relative"
        >
          <p>
            Hello! I'm <span className="text-white font-semibold">Mathan S</span>, a passionate Full Stack and Mobile App Developer based in Tamil Nadu, India.
          </p>
          <p>
            I specialize in crafting high-performance, visually striking digital experiences from the ground up. Whether it's a responsive React frontend, a complex Node.js microservice architecture, or a native Android application with real-time Firebase syncing, I love turning complex problems into elegant solutions.
          </p>
          <p>
            Recently, I interned at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">Career Ladder Software Training Institute</span>, where I honed my skills in mobile app development and real-world project deployment.
          </p>
        </motion.div>

        <div className="grid gap-6 z-10 relative">
          {highlights.map((item, index) => (
            <FloatingElement key={index} delay={index * 0.3} yOffset={8} duration={4 + (index % 2)}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            </FloatingElement>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
