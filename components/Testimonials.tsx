'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Lost 15kg in 4 months',
    content: 'DietWise completely changed my relationship with food. The plan was so easy to follow, and I never felt like I was starving. The weekly check-ins kept me accountable.',
    image: 'https://picsum.photos/seed/sarah/150/150'
  },
  {
    name: 'Michael Chen',
    role: 'Muscle Gain Program',
    content: 'As a hardgainer, I struggled to put on muscle. The customized macro plan and meal timing strategies helped me gain 8kg of lean mass in 6 months.',
    image: 'https://picsum.photos/seed/michael/150/150'
  },
  {
    name: 'Emma Thompson',
    role: 'PCOS Management',
    content: 'Finally, a dietitian who understands PCOS! My energy levels are up, my symptoms have drastically reduced, and I feel like myself again.',
    image: 'https://picsum.photos/seed/emma/150/150'
  }
];

export default function Testimonials() {
  return (
    <section id="results" className="py-24 bg-[#F5F5F5] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-96 bg-[#4CAF50]/5 -skew-y-6 origin-top-left -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-[#4CAF50] tracking-wider uppercase mb-3">Real Results</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Don&apos;t Just Take Our Word For It
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-100 rotate-180" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-8 relative z-10 italic">
                &quot;{testimonial.content}&quot;
              </p>
              
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-[#4CAF50] font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
