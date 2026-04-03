'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import FloatingElements from './FloatingElements';
import { ArrowRight, Activity } from 'lucide-react';

function DashboardMockup() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 20 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        perspective: 1000,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
      className="mt-16 mx-auto max-w-4xl relative cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#F5F5F5] via-transparent to-transparent z-10 pointer-events-none" />
      <div 
        style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
        className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl p-6 md:p-8 transform-gpu"
      >
        <div 
          style={{ transform: "translateZ(30px)" }}
          className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4CAF50] to-teal-400 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              JD
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900">John&apos;s Progress</h3>
              <p className="text-sm text-gray-500">Week 4 of 12</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-[#4CAF50]">-4.2 kg</div>
            <p className="text-sm text-gray-500">Total Lost</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Calories', value: '1,850', target: '2,000', color: 'bg-blue-500' },
            { label: 'Protein', value: '140g', target: '160g', color: 'bg-green-500' },
            { label: 'Water', value: '2.1L', target: '3.0L', color: 'bg-cyan-500' },
          ].map((stat, i) => (
            <div 
              key={i} 
              style={{ transform: `translateZ(${20 + i * 10}px)` }}
              className="bg-gray-50 rounded-2xl p-4 text-left shadow-sm border border-gray-100"
            >
              <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
              <p className="text-xl font-bold text-gray-900 mb-3">{stat.value}</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ duration: 1.5, delay: 0.8 + (i * 0.2) }}
                  className={`h-2 rounded-full ${stat.color}`} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-white to-[#F5F5F5]" style={{ perspective: '2000px' }}>
      <FloatingElements />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-[#4CAF50] text-sm font-medium mb-8 shadow-sm">
            <Activity className="w-4 h-4" />
            <span>Personalized Nutrition Plans</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-gray-900 tracking-tight mb-6 max-w-4xl leading-tight">
            Transform Your Health with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CAF50] to-teal-500">Smart Nutrition</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Personalized Diet Plans • Expert Guidance • Real Results. 
            Achieve your dream body and optimal health with our science-backed approach.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4CAF50] text-white rounded-full text-lg font-semibold overflow-hidden transition-all hover:scale-105 shadow-xl shadow-[#4CAF50]/30"
            >
              <span className="relative z-10">Book Consultation</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#45a049] to-[#3d8b40] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 rounded-full text-lg font-semibold border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        <DashboardMockup />
      </div>
    </section>
  );
}
