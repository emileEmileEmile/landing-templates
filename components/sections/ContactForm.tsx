'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission (in real use, this would call your API)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setLoading(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
            Get in touch
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto px-2">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-6">Contact Information</h3>
            <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-8">
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold mb-1">Email</h4>
                  <p className="text-xs md:text-base text-gray-400">support@saasplatform.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold mb-1">Phone</h4>
                  <p className="text-xs md:text-base text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold mb-1">Office</h4>
                  <p className="text-xs md:text-base text-gray-400">
                    123 Business St.<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-4 md:p-8 bg-slate-800 border-slate-700">
              {submitted ? (
                <div className="text-center py-8 md:py-12">
                  <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-green-500 mx-auto mb-3 md:mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-sm md:text-base text-gray-400">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs md:text-sm font-medium mb-1 md:mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-500 h-9 md:h-10 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm font-medium mb-1 md:mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-500 h-9 md:h-10 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs md:text-sm font-medium mb-1 md:mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="How can we help?"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-500 h-9 md:h-10 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs md:text-sm font-medium mb-1 md:mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={3}
                      placeholder="Tell us more about your project..."
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-500 text-sm resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="default"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}