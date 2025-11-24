'use client';

import { motion } from 'framer-motion';

const companies = [
  'TechCorp',
  'InnovateLabs',
  'DataFlow',
  'CloudBase',
  'StartupHub',
  'DevTools',
  'AIVentures',
  'CodeMasters'
];

export default function SocialProof() {
  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-600 mb-8 font-medium"
        >
          Trusted by 10,000+ companies worldwide
        </motion.p>

        <div className="relative overflow-hidden">
          {/* Gradient masks on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling logos */}
          <motion.div
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex gap-12 items-center"
          >
            {/* Render companies twice for seamless loop */}
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-gray-400 font-bold text-xl opacity-50 hover:opacity-100 transition-opacity"
              >
                {company}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}