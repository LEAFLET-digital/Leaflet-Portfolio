import { motion } from 'framer-motion'
import { Shield, Lock } from 'lucide-react'
import { useInView } from '../hooks/useInView'

export const Security = () => {
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
          Uncompromising Security
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="text-9xl font-bold mb-4">
              100<span className="text-leaflet-cyan">%</span>
            </div>
            <div className="text-3xl font-semibold mb-8">On-Device Privacy</div>

            <div className="flex items-center gap-4 text-leaflet-cyan">
              <Shield className="w-12 h-12" />
              <Lock className="w-12 h-12" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Privacy By Design</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Your chat data, local notes, and system prompts are stored locally
                in an encrypted edge database.
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-lg leading-relaxed">
                The cloud is strictly a dumb relay—used exclusively for routing
                encrypted messages and syncing public posts. Zero data mining.
                Zero server-side AI processing.
              </p>
            </div>

            <div className="pt-6 border-t border-leaflet-cyan/20">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-leaflet-cyan rounded-full mt-2" />
                <p className="text-gray-300">
                  <strong>End-to-end encryption</strong> for all communications
                </p>
              </div>
              <div className="flex items-start gap-4 mt-4">
                <div className="w-2 h-2 bg-leaflet-cyan rounded-full mt-2" />
                <p className="text-gray-300">
                  <strong>Local-first architecture</strong> ensures data sovereignty
                </p>
              </div>
              <div className="flex items-start gap-4 mt-4">
                <div className="w-2 h-2 bg-leaflet-cyan rounded-full mt-2" />
                <p className="text-gray-300">
                  <strong>Zero telemetry</strong> or tracking of user behavior
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 right-8 text-xs text-gray-600">
        leaflet.ai
      </div>
    </section>
  )
}
