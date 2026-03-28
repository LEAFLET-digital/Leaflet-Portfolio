import { motion } from 'framer-motion'
import { Pen, Search, Cpu } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const features = [
  {
    icon: Pen,
    title: 'Create & Chat',
    description: '"Draft a post about my hackathon project" or "Message Joe to meet at 5 PM." The local LLM handles the formatting and internal routing entirely via natural language.',
  },
  {
    icon: Search,
    title: 'Semantic Search',
    description: '"Find the meme I saw last week about coding." Leaflet Studio uses local vector embeddings to find exact context and meaning, rather than relying on strict exact-match keywords.',
  },
  {
    icon: Cpu,
    title: 'Agentic Tools',
    description: '"Summarize this article and save it to my notes." The small LLM calls built-in OS tools to act on your behalf, manipulating local databases without an internet connection.',
  },
]

export const Features = () => {
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
          One Bar to Rule Them All
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-blue-900/20 to-cyan-900/10 backdrop-blur-sm border border-leaflet-cyan/20 rounded-2xl p-8 hover:border-leaflet-cyan/40 transition-all group"
            >
              <div className="w-16 h-16 rounded-xl bg-leaflet-cyan/10 flex items-center justify-center mb-6 group-hover:bg-leaflet-cyan/20 transition-all">
                <feature.icon className="w-8 h-8 text-leaflet-cyan" />
              </div>

              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 right-8 text-xs text-gray-600">
        leaflet.ai
      </div>
    </section>
  )
}
