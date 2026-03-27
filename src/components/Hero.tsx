import { motion } from 'framer-motion'
import { Leaf } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />
      
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-leaflet-cyan to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <Leaf className="w-6 h-6 text-leaflet-cyan" />
            <span className="text-gray-400 uppercase tracking-widest text-sm font-medium">
              Leaflet.Digital Presents
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-8"
          >
            Leaflet <span className="gradient-text">Studio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A localized, prompt-driven social network where ultimate privacy
            meets agentic AI capability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex justify-center gap-4"
          >
            <button className="px-8 py-4 bg-leaflet-cyan text-leaflet-dark font-semibold rounded-lg hover:bg-cyan-400 transition-all transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-leaflet-cyan text-leaflet-cyan font-semibold rounded-lg hover:bg-leaflet-cyan/10 transition-all">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-leaflet-cyan/50 to-transparent" />
    </section>
  )
}
