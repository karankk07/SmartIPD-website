'use client'

import { motion } from 'framer-motion'

const stats = [
  { id: 1, name: 'Healthcare Providers', value: '500+' },
  { id: 2, name: 'Patient Records', value: '1M+' },
  { id: 3, name: 'Success Rate', value: '99.9%' },
  { id: 4, name: 'Patient Satisfaction', value: '98%' },
]

export default function Stats() {
  return (
    <section className="py-24 bg-blue-600">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Healthcare Leaders
          </h2>
          <p className="text-xl text-blue-100">
            Our platform has helped healthcare providers deliver better patient care through digital transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-blue-100">
                {stat.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 