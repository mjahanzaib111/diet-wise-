'use client';

import { motion } from 'motion/react';
import { MessageSquare, ClipboardList, TrendingUp, Trophy } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: '1. Initial Consultation',
    desc: 'We discuss your goals, medical history, lifestyle, and dietary preferences.',
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: '2. Personalized Plan',
    desc: 'Receive a custom nutrition and lifestyle plan tailored specifically to you.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: '3. Progress Tracking',
    desc: 'Weekly check-ins to monitor progress, adjust the plan, and keep you motivated.',
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: '4. Achieve Results',
    desc: 'Hit your targets, build sustainable habits, and transform your life.',
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-[#4CAF50] tracking-wider uppercase mb-3">The Process</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Your Journey to Better Health
          </h3>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -translate-y-1/2 z-0" />
          <motion.div 
            className="hidden md:block absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#4CAF50] to-teal-400 -translate-y-1/2 z-0 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="grid md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.3 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-white rounded-full border-4 border-gray-100 flex items-center justify-center mb-6 shadow-xl transition-colors duration-300 group-hover:border-[#4CAF50] group-hover:text-[#4CAF50]">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
