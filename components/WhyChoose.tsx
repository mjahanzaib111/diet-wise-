'use client';

import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import Image from 'next/image';

export default function WhyChoose() {
  const reasons = [
    '100% Personalized Nutrition Plans',
    'No Restrictive or Fad Diets',
    'Weekly Progress Monitoring',
    '24/7 WhatsApp Support',
    'Grocery Shopping Guides',
    'Restaurant Survival Guides',
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              Why Choose DietWise?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We don&apos;t just hand you a meal plan and wish you luck. We provide a comprehensive ecosystem of support, education, and accountability to ensure you reach your goals.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-green-100 p-1 rounded-full">
                    <Check className="w-4 h-4 text-[#4CAF50]" />
                  </div>
                  <span className="text-gray-700 font-medium">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg">
                  <Image src="https://picsum.photos/seed/food1/400/500" alt="Healthy Food" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="relative rounded-3xl overflow-hidden aspect-square shadow-lg">
                  <Image src="https://picsum.photos/seed/food2/400/400" alt="Healthy Food" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative rounded-3xl overflow-hidden aspect-square shadow-lg">
                  <Image src="https://picsum.photos/seed/food3/400/400" alt="Healthy Food" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg">
                  <Image src="https://picsum.photos/seed/food4/400/500" alt="Healthy Food" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
            
            {/* Center badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-2xl flex flex-col items-center justify-center w-32 h-32"
            >
              <span className="text-3xl font-bold text-[#4CAF50]">100%</span>
              <span className="text-xs font-bold text-gray-900 text-center uppercase tracking-wider mt-1">Success<br/>Rate</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
