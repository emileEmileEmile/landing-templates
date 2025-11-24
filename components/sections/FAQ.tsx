'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "You get full access to all features for 14 days, completely free. No credit card required to start. After the trial, you can choose to upgrade to a paid plan or continue with our free tier."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes! You can cancel your subscription at any time from your account settings. There are no cancellation fees, and you'll continue to have access until the end of your billing period."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for Enterprise plans. All payments are processed securely through Stripe."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use bank-level encryption (AES-256) to protect your data. We're SOC 2 Type II certified and fully GDPR compliant. Your data is backed up daily and stored in secure data centers."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at the start of your next billing cycle."
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes! Save 20% when you choose annual billing. For example, the Pro plan is $29/month when billed monthly, or $23/month when billed annually ($276/year)."
  },
  {
    question: "What kind of support do you provide?",
    answer: "Free plans get community support, Pro plans get email support with 24-hour response time, and Enterprise plans get priority support with dedicated account managers and phone support."
  },
  {
    question: "Can I import my existing data?",
    answer: "Yes! We provide easy import tools for all major formats (CSV, Excel, JSON). Our team can also help with bulk migrations for Enterprise customers at no additional cost."
  }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-purple-600 transition-colors"
      >
        <span className="text-lg font-semibold text-slate-900 pr-8">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-600 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our platform and billing.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a 
            href="#contact" 
            className="text-purple-600 hover:text-purple-700 font-semibold"
          >
            Contact our support team →
          </a>
        </motion.div>
      </div>
    </section>
  );
}