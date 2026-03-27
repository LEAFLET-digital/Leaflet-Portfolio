import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const features = [
  {
    title: 'Dedicated NPUs',
    description: 'Current SoCs feature massive Neural Processing Units capable of running LLMs seamlessly.',
  },
  {
    title: 'Efficient Quantization',
    description: 'Techniques like 4-bit and 8-bit quantization allow highly capable models to run within 4GB to 8GB of RAM constraints.',
  },
  {
    title: 'Edge Tooling Ecosystem',
    description: 'Frameworks like MLC LLM and Llama.cpp provide native, optimized bindings for iOS and Android environments.',
  },
]

export const TechnicalViability = () => {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-8"
        >
          Why Now? <span className="gradient-text">Technical Viability</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl text-gray-300 mb-16 max-w-3xl"
        >
          Modern flagship phones are AI powerhouses, making complex local-first 
          architectures possible today.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <ChevronRight className="w-6 h-6 text-leaflet-cyan flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl border-2 border-leaflet-cyan/30 overflow-hidden bg-gradient-to-br from-blue-900/30 to-cyan-900/20">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
                alt="Circuit board with AI processing"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-leaflet-dark via-transparent to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 right-8 text-xs text-gray-600">
        leaflet.digital
      </div>
    </section>
  )
}
