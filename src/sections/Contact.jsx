import { motion } from "framer-motion"
import SectionWrapper from "../components/SectionWrapper"
import { Mail, User, Code, Send } from "lucide-react"

export default function Contact() {
  return (
    <SectionWrapper id="contact" title="Get In Touch" subtitle="Have a project in mind or looking to hire? I'd love to chat.">
      <div className="grid lg:grid-cols-2 gap-16">
        
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="space-y-8"
        >
          <p className="text-lg text-slate-400 leading-relaxed max-w-md">
            I am actively looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>

          <div className="space-y-6">
            <a href="mailto:mathansmathan27@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-white group transition-colors">
              <div className="h-12 w-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all">
                <Mail size={20} className="group-hover:text-blue-400 transition-colors" />
              </div>
              <span className="text-lg font-medium">mathansmathan27@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/mathan-s-336ab2329/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white group transition-colors">
              <div className="h-12 w-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all">
                <User size={20} className="group-hover:text-blue-400 transition-colors" />
              </div>
              <span className="text-lg font-medium">LinkedIn Profile</span>
            </a>
            <a href="https://github.com/Mathan123678" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white group transition-colors">
              <div className="h-12 w-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all">
                <Code size={20} className="group-hover:text-blue-400 transition-colors" />
              </div>
              <span className="text-lg font-medium">GitHub Profile</span>
            </a>
          </div>
        </motion.div>

        <form
           action="mailto:mathansmathan27@gmail.com"
           method="POST"
           encType="text/plain"
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="bg-slate-800/30 border border-white/5 p-8 rounded-2xl flex flex-col gap-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-400">Your Name</label>
              <input type="text" id="name" name="name" className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-400">Your Email</label>
              <input type="email" id="email" name="email" className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all" placeholder="john@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-400">Message</label>
            <textarea id="message" name="message" rows="5" className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none" placeholder="How can I help you?"></textarea>
          </div>
          <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98] transition-all">
            Send Message <Send size={18} />
          </button>
        </form>

      </div>
    </SectionWrapper>
  )
}
