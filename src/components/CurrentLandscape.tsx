import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export const CurrentLandscape = () => {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="w-16 h-1 bg-leaflet-cyan mx-auto mb-8" />

          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            The Current Landscape
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
            App fatigue, cluttered interfaces, and an absolute loss of
            personal data privacy.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 right-8 text-xs text-gray-600">
        leaflet.ai
      </div>
    </section>
  )
}
