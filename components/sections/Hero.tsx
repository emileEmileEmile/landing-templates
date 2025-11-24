'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
      
      {/* Floating orbs animation */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Introducing the Future</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Build Your SaaS
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Faster Than Ever
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            The all-in-one platform that helps you ship products 10x faster.
            Join thousands of developers building the next big thing.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-white text-slate-900 hover:bg-gray-100 text-lg px-8 py-6 group"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              Watch Demo
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-gray-400"
          >
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>Lightning Fast</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span>AI-Powered</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}