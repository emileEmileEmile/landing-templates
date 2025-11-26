'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for trying out our platform",
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "Community support",
      "1GB storage",
      "Basic integrations"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: "29",
    description: "For professionals and growing teams",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "50GB storage",
      "All integrations",
      "Custom domain",
      "Team collaboration",
      "API access"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "99",
    description: "For large organizations with advanced needs",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "Advanced security",
      "SSO authentication",
      "Audit logs"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 md:py-24 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-2 md:mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Choose the perfect plan for your needs. Always know what you will pay.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'md:-mt-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-0.5 md:px-4 md:py-1 rounded-full text-xs md:text-sm font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <Card className={`p-4 md:p-8 h-full flex flex-col ${
                plan.popular 
                  ? 'border-2 border-purple-500 shadow-2xl' 
                  : 'border-2 hover:border-purple-200'
              } transition-all duration-300`}>
                <div className="mb-3 md:mb-6">
                  <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-1 md:mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs md:text-base text-gray-600">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-4 md:mb-8">
                  <div className="flex items-baseline">
                    <span className="text-3xl md:text-5xl font-bold text-slate-900">
                      ${plan.price}
                    </span>
                    <span className="text-xs md:text-base text-gray-600 ml-1 md:ml-2">
                      /month
                    </span>
                  </div>
                </div>

                <Button 
                  size="default"
                  className={`w-full mb-4 md:mb-8 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white' 
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  {plan.cta}
                </Button>

                <div className="space-y-2 md:space-y-4 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2 md:gap-3">
                      <div className="mt-0.5">
                        <Check className="w-3.5 h-3.5 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                      </div>
                      <span className="text-xs md:text-base text-gray-700 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-6 md:mt-12"
        >
          <p className="text-xs md:text-base text-gray-600">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}