'use client'

import { motion } from 'framer-motion'
import { 
  ClipboardList, 
  Clock, 
  UserPlus, 
  FileText,
  BarChart,
  Shield
} from 'lucide-react'

const features = [
  {
    name: 'Digital Patient Records',
    description: 'Maintain comprehensive digital records with easy access and updates.',
    icon: ClipboardList,
  },
  {
    name: 'Real-time Monitoring',
    description: 'Track patient vitals and progress in real-time with instant notifications.',
    icon: Clock,
  },
  {
    name: 'Staff Management',
    description: 'Efficiently manage medical staff schedules and assignments.',
    icon: UserPlus,
  },
  {
    name: 'Automated Reports',
    description: 'Generate detailed reports and analytics with a single click.',
    icon: FileText,
  },
  {
    name: 'Analytics Dashboard',
    description: 'Comprehensive analytics for better decision making and resource allocation.',
    icon: BarChart,
  },
  {
    name: 'Secure Data',
    description: 'Enterprise-grade security for all your sensitive medical data.',
    icon: Shield,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Healthcare
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to manage your healthcare facility efficiently and provide better patient care.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              variants={item}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.name}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 