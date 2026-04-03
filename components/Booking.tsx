'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { MessageCircle, Calendar, Send } from 'lucide-react';

function BookingFormCard({ isMounted }: { isMounted: boolean }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="bg-white rounded-3xl p-8 shadow-2xl cursor-pointer"
    >
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-green-100 p-3 rounded-xl">
            <Calendar className="w-6 h-6 text-[#4CAF50]" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Request a Callback</h3>
        </div>
        
        {isMounted ? (
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
                data-lpignore="true"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input 
                type="tel" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent outline-none transition-all"
                placeholder="+1 (555) 000-0000"
                data-lpignore="true"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Goal</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent outline-none transition-all bg-white">
                <option>Weight Loss</option>
                <option>Muscle Gain</option>
                <option>Medical Condition</option>
                <option>General Health</option>
              </select>
            </div>
            <button 
              type="submit"
              className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 mt-4"
            >
              Submit Request
              <Send className="w-5 h-5" />
            </button>
          </form>
        ) : (
          <div className="space-y-4 animate-pulse">
            <div className="h-12 bg-gray-100 rounded-xl w-full" />
            <div className="h-12 bg-gray-100 rounded-xl w-full" />
            <div className="h-12 bg-gray-100 rounded-xl w-full" />
            <div className="h-14 bg-gray-200 rounded-xl w-full mt-4" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Booking() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="booking" className="py-24 bg-[#4CAF50] relative overflow-hidden" style={{ perspective: '1000px' }}>
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] rounded-full bg-white blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Start Your Transformation Today
            </h2>
            <p className="text-green-50 text-lg mb-10 max-w-lg">
              Take the first step towards a healthier, happier you. Book a consultation or reach out to us directly via WhatsApp.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#4CAF50] px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <BookingFormCard isMounted={isMounted} />

        </div>
      </div>
    </section>
  );
}
