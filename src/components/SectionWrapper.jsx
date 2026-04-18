import { motion } from "framer-motion"

export default function SectionWrapper({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 inline-block">
            {title}
            <span className="text-blue-500">.</span>
            <div className="h-1 w-1/3 bg-gradient-to-r from-blue-500 to-purple-500 mt-2 rounded-full"></div>
          </h2>
          {subtitle && <p className="text-slate-400 text-lg max-w-2xl mt-4">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  )
}
