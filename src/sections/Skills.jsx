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
            <div className="space-y-6">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + sIdx * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
