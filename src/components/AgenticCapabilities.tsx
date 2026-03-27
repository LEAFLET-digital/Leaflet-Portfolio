import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const capabilities = [
  {
    title: 'Generative Content',
    description: 'Describe your vision; Leaflet Studio generates custom media and text formatting instantly using powerful on-device models.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
  },
  {
    title: 'Deep Context',
    description: 'Retrieve any post, message, or file rapidly using natural language queries powered by local RAG pipelines.',
    icon: '🔍',
  },
  {
    title: 'In-House Tools',
    description: 'Manage files, take notes, and interact with your personal data securely and completely offline.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
  },
]

export const AgenticCapabilities = () => {
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
          Agentic Capabilities
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-blue-900/20 to-cyan-900/10 backdrop-blur-sm border border-leaflet-cyan/20 rounded-2xl overflow-hidden hover:border-leaflet-cyan/40 transition-all group"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-900/40 to-cyan-900/20 flex items-center justify-center overflow-hidden">
                {capability.image ? (
                  <img 
                    src={capability.image} 
                    alt={capability.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-8xl">{capability.icon}</div>
                )}
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{capability.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 right-8 text-xs text-gray-600">
        leaflet.digital
      </div>
    </section>
  )
}
