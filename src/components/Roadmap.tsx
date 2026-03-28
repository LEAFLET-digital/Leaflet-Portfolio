import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const phases = [
  {
    number: 1,
    title: 'Phase 1',
    description: 'Local Prompting Core & Dynamic UI Generation',
  },
  {
    number: 2,
    title: 'Phase 2',
    description: 'Agentic Tool Wiring & On-Device RAG Integration',
  },
  {
    number: 3,
    title: 'Phase 3',
    description: 'P2P Server Sync & Encrypted Social Graph',
  },
  {
    number: 4,
    title: 'Phase 4',
    description: 'Polished MVP Hackathon Pitch & Public Beta Launch',
  },
]

export const Roadmap = () => {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-20"
        >
          Development Roadmap
        </motion.h2>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-leaflet-cyan/20 via-leaflet-cyan/50 to-leaflet-cyan/20 -translate-y-1/2 hidden md:block" />

          <div className="grid md:grid-cols-4 gap-8 md:gap-4">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative"
              >
                <div className={`text-center ${index % 2 === 0 ? 'md:mb-32' : 'md:mt-32'}`}>
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-leaflet-cyan flex items-center justify-center relative z-10 border-4 border-leaflet-dark">
                      <span className="text-2xl font-bold text-leaflet-dark">
                        {phase.number}
                      </span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 backdrop-blur-sm border border-leaflet-cyan/30 rounded-xl p-6 hover:border-leaflet-cyan/50 transition-all">
                    <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-8 text-xs text-gray-600">
        leaflet.ai
      </div>
    </section>
  )
}
