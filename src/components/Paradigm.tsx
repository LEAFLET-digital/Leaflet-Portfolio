import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const features = [
  {
    title: 'Prompt User Interface (PUI)',
    description: 'Replace endless scrolling and rigid menus with a single, intelligent prompt bar.',
  },
  {
    title: '100% Local Inference',
    description: 'Powered entirely by a Small Local LLM running directly on your smartphone processor.',
  },
  {
    title: 'Agentic Execution',
    description: "The AI doesn't just chat; it calls tools, creates files, and organizes notes autonomously.",
  },
  {
    title: 'Absolute Privacy',
    description: 'Your personal context, local chat history, and queries never leave your device.',
  },
]

export const Paradigm = () => {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-12">
              The <span className="gradient-text">Leaflet</span> Paradigm
            </h2>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex gap-4"
                >
                  <ChevronRight className="w-6 h-6 text-leaflet-cyan flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-leaflet-cyan/20 overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDIxNywgMjU1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
              
              <div className="relative h-full flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-leaflet-cyan/20 to-blue-500/20 flex items-center justify-center animate-float">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-leaflet-cyan to-blue-500 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 italic">
                    Neural network visualization
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 right-8 text-xs text-gray-600">
        leaflet.digital
      </div>
    </section>
  )
}
