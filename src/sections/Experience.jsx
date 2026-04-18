import { motion } from "framer-motion"
import SectionWrapper from "../components/SectionWrapper"
import { Briefcase } from "lucide-react"

export default function Experience() {
  return (
    <SectionWrapper id="experience" title="Experience" subtitle="My professional journey and career growth.">
      <div className="max-w-3xl mx-auto">
        <div className="relative border-l border-slate-700 ml-3 md:ml-6 pl-8 md:pl-12 py-4 space-y-12">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[45px] md:-left-[61px] top-1 h-12 w-12 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center shadow-xl">
              <Briefcase size={20} className="text-blue-400" />
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.04] transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Mobile App Developer Intern</h3>
                  <p className="text-lg text-blue-400 font-medium">Career Ladder Software Training Institute</p>
                </div>
                <span className="text-slate-500 font-medium mt-2 md:mt-0 bg-slate-800 px-4 py-1 rounded-full text-sm inline-block w-fit">2023 - Present</span>
              </div>
              
              <ul className="space-y-3 text-slate-400 list-disc ml-4 marker:text-blue-500">
                <li>Collaborated with a team of developers to build and optimize Android applications using Java and XML.</li>
                <li>Implemented real-time features using Firebase FireStore and Cloud Messaging.</li>
                <li>Participated in UI/UX redesigns, resulting in a 20% improvement in user retention and engagement.</li>
                <li>Ensured code quality and performance by conducting rigorous unit testing and debugging.</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  )
}
