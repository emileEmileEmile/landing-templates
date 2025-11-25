'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  Zap, 
  Shield, 
  Sparkles, 
  Rocket, 
  Users, 
  BarChart3 
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance that delivers content at blazing speeds. Your users will love the experience.",
    color: "text-yellow-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and security protocols. Your data is protected with industry-leading standards.",
    color: "text-green-500"
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Leverage cutting-edge AI to automate tasks and deliver intelligent insights in real-time.",
    color: "text-purple-500"
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description: "Go from idea to production in minutes, not weeks. Ship features faster than ever before.",
    color: "text-blue-500"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built for teams of all sizes. Invite members, assign roles, and work together seamlessly.",
    color: "text-pink-500"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Gain deep insights into your product performance with beautiful, actionable dashboards.",
    color: "text-orange-500"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you build, launch, and scale your SaaS product.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 md:p-8 h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-purple-200">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}