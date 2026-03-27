import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export const Closing = () => {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent" />
      
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-leaflet-dark/80 via-leaflet-dark/60 to-leaflet-dark/80" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Redefining Social Interaction
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl text-leaflet-cyan italic leading-relaxed"
          >
            "It's not just an app; it's a personal AI node in a decentralized social web."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-10 py-5 bg-leaflet-cyan text-leaflet-dark font-bold text-lg rounded-lg hover:bg-cyan-400 transition-all transform hover:scale-105 shadow-lg shadow-leaflet-cyan/20">
              Join the Beta
            </button>
            <button className="px-10 py-5 border-2 border-leaflet-cyan text-leaflet-cyan font-bold text-lg rounded-lg hover:bg-leaflet-cyan/10 transition-all">
              View Documentation
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 text-xs text-gray-600">
        leaflet.digital
      </div>
    </section>
  )
}
