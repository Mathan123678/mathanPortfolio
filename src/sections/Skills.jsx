import { motion } from "framer-motion"
import SectionWrapper from "../components/SectionWrapper"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript/ES6+", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Framer Motion", level: 75 },
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "RESTful APIs", level: 90 },
      { name: "Firebase", level: 85 },
    ]
  },
  {
    title: "Mobile & Tools",
    skills: [
      { name: "Android (Java/XML)", level: 85 },
      { name: "Git & GitHub", level: 90 },
      { name: "Postman API", level: 85 },
      { name: "Vite & Webpack", level: 80 },
      { name: "Figma (UI/UX)", level: 75 },
    ]
  }
]

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="My Skills" subtitle="Technologies and tools I use to build scalable products.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/5"
          >
            <h3 className="text-xl font-bold text-white mb-6 tracking-wide">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIdx) => (
                <motion.span
                  key={sIdx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 + sIdx * 0.05 }}
                  className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-slate-300 font-medium hover:bg-white/10 hover:text-white hover:border-blue-500/30 transition-all cursor-default"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
