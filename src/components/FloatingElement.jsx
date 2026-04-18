import { motion } from "framer-motion"

export default function FloatingElement({ children, delay = 0, yOffset = 15, duration = 5, className = "" }) {
  return (
    <motion.div
      animate={{
        y: [0, -yOffset, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={className}
      whileHover={{ y: 0, scale: 1.02 }}
    >
      {children}
    </motion.div>
  )
}
