import { motion } from 'framer-motion'
import { Server, Smartphone } from 'lucide-react'
import { useInView } from '../hooks/useInView'

export const Architecture = () => {
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
          Architecture: Node vs. Cloud
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-cyan-900/20 to-blue-900/10 backdrop-blur-sm border-2 border-leaflet-cyan/40 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-leaflet-cyan/20 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-leaflet-cyan" />
              </div>
              <h3 className="text-3xl font-bold text-leaflet-cyan">
                The Local Node (Offline)
              </h3>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              The brain of the operation. Runs a quantized Small LLM (e.g., Llama 2-8B)
              directly on the client device.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-leaflet-cyan rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300">Handles all logical reasoning and NLP tasks</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-leaflet-cyan rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300">Executes tool calls & system commands</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-leaflet-cyan rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300">Manages local SQLite + pgvector databases</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-leaflet-cyan rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300">Generates the dynamic Prompt User Interface</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-gradient-to-br from-purple-900/20 to-pink-900/10 backdrop-blur-sm border-2 border-purple-500/40 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Server className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold text-purple-400">
                The Sync Server (Online)
              </h3>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              A lightweight, dumb relay backend written in Go/Rust. Contains absolutely
              zero processing logic.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300">Routes End-to-End Encrypted private chats</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300">Distributes public feed posts efficiently</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300">Handles basic user discovery & authentication</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300">Requires minimal, cost-effective infrastructure</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 right-8 text-xs text-gray-600">
        leaflet.ai
      </div>
    </section>
  )
}
