import { motion } from 'framer-motion'
import { Leaf } from 'lucide-react'
import { useInView } from '../hooks/useInView'

export const ReadyToPrompt = () => {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-leaflet-dark via-blue-900/10 to-leaflet-dark" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-8"
          >
            Ready to <span className="gradient-text">Prompt</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 mb-12"
          >
            Thank you for your time. The floor is open for questions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center justify-center gap-3 text-leaflet-cyan"
          >
            <Leaf className="w-6 h-6" />
            <span className="text-lg font-semibold uppercase tracking-wider">
              LEAFLET.DIGITAL • LIVE DEMO READY
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="px-10 py-5 bg-leaflet-cyan text-leaflet-dark font-bold text-lg rounded-lg hover:bg-cyan-400 transition-all transform hover:scale-105 shadow-lg shadow-leaflet-cyan/20"
            >
              Schedule Demo
            </a>
            <a
              href="#"
              className="px-10 py-5 border-2 border-leaflet-cyan text-leaflet-cyan font-bold text-lg rounded-lg hover:bg-leaflet-cyan/10 transition-all"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-leaflet-cyan/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  )
}
