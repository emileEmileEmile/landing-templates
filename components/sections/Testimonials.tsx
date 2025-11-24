'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content: "This platform transformed how we build products. We shipped our MVP in just 2 weeks instead of 3 months. Absolutely game-changing!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Product Manager at Innovation Labs",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    content: "The best investment we've made this year. The ROI was visible within the first month. Our team productivity increased by 300%.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Founder of StartupXYZ",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    content: "I was skeptical at first, but this platform exceeded all expectations. The support team is incredible and the features are exactly what we needed.",
    rating: 5
  }
];

export default function Testimonials() {
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
            Loved by thousands of users
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-shadow duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-bold text-slate-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}