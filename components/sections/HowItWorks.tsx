'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { UserPlus, Zap, Rocket } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your account in seconds. No credit card required for the free trial.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: "02",
    icon: Zap,
    title: "Configure",
    description: "Customize your workspace with our intuitive setup wizard. Get up and running in minutes.",
    color: "from-purple-500 to-pink-500"
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch",
    description: "Go live and start seeing results immediately. Scale as you grow with our flexible plans.",
    color: "from-orange-500 to-red-500"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in three simple steps. No technical knowledge required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Connection Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-200 to-transparent z-0" />
                )}

                <Card className="relative p-8 text-center h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-purple-200 z-10 bg-white">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-lg">
            Ready to get started? It only takes a few minutes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}