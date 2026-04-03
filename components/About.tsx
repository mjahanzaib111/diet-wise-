'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { CheckCircle2, ShieldCheck, HeartPulse } from 'lucide-react';
import HumanBodyInteractive from './HumanBodyInteractive';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  const features = [
    { icon: <ShieldCheck className="w-6 h-6 text-[#4CAF50]" />, title: 'Science-Based', desc: 'No fads, just proven nutritional science.' },
    { icon: <HeartPulse className="w-6 h-6 text-[#4CAF50]" />, title: 'Personalized Care', desc: 'Plans tailored to your unique body and goals.' },
    { icon: <CheckCircle2 className="w-6 h-6 text-[#4CAF50]" />, title: 'Sustainable Results', desc: 'Build healthy habits that last a lifetime.' },
  ];

  return (
    <section id="about" ref={containerRef} className="py-24 bg-white relative overflow-hidden" style={{ perspective: '1000px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            style={{ y: y1, rotateY: rotate }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <HumanBodyInteractive />
            
            {/* Floating Experience Badge */}
            <motion.div 
              style={{ y: y2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 lg:-right-12 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-gray-100 z-20"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#4CAF50] text-white p-3 rounded-full shadow-lg shadow-green-500/30">
                  <span className="font-bold text-xl">10+</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Years Experience</p>
                  <p className="text-sm text-gray-600">Helping 5000+ clients</p>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-100 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-[#4CAF50] tracking-wider uppercase mb-3">About DietWise</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">
              We don&apos;t just change diets. <br/> We change lives.
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At DietWise, we believe that nutrition is not a one-size-fits-all approach. 
              Our team of certified dietitians and nutrition experts work closely with you 
              to understand your body, lifestyle, and goals to create a roadmap to optimal health.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1 bg-green-50 p-2 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
