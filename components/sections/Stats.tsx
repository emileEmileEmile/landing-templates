'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface StatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix = '', prefix = '', label, duration = 2 }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Intl.NumberFormat('en-US').format(
          Math.floor(latest)
        )}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div
        ref={ref}
        className="text-4xl md:text-5xl font-bold text-white mb-2"
      >
        0
      </div>
      <p className="text-gray-400 text-sm md:text-base">{label}</p>
    </motion.div>
  );
}

export default function Stats() {
    const stats = [
        {
          value: 10000,
          suffix: '+',
          prefix: '',
          label: 'Active Users',
        },
        {
          value: 99.9,
          suffix: '%',
          prefix: '',
          label: 'Uptime',
        },
        {
          value: 50,
          suffix: '+',
          prefix: '',
          label: 'Countries',
        },
        {
          value: 24,
          suffix: '/7',
          prefix: '',
          label: 'Support',
        },
      ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-slate-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}