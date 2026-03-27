import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const sources = [
  {
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop',
    description: 'Futuristic AI brain with glowing neural network',
    source: 'Vecteezy',
    url: 'https://www.vecteezy.com',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop',
    description: 'AI-generated creative content visualization',
    source: 'Unsplash',
    url: 'https://unsplash.com',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop',
    description: 'Data visualization and analytics',
    source: 'Unsplash',
    url: 'https://unsplash.com',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop',
    description: 'Microchip and circuit board technology',
    source: 'Unsplash',
    url: 'https://unsplash.com',
  },
]

export const ImageSources = () => {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-leaflet-dark to-blue-900/10">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          Image Sources
        </motion.h2>

        <div className="space-y-6 max-w-4xl">
          {sources.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex items-center gap-6 p-4 bg-blue-900/10 border border-leaflet-cyan/10 rounded-lg hover:border-leaflet-cyan/30 transition-all group"
            >
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-blue-900/20">
                <img
                  src={item.thumbnail}
                  alt={item.description}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-gray-300 text-sm mb-2 line-clamp-2">
                  {item.description}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-leaflet-cyan hover:text-cyan-400 transition-colors inline-flex items-center gap-2 text-sm font-medium"
                >
                  Source: {item.source}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 text-gray-500 text-sm text-center"
        >
          All images are used for demonstration purposes. Special thanks to the creators and platforms 
          for providing high-quality visual assets.
        </motion.p>
      </div>
    </section>
  )
}
