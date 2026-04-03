'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { Scale, Dumbbell, Stethoscope, Laptop } from 'lucide-react';

const services = [
  {
    icon: <Scale className="w-8 h-8" />,
    title: 'Weight Loss Programs',
    desc: 'Sustainable fat loss without starving. Enjoy the foods you love while reaching your goal weight.',
    color: 'from-orange-400 to-red-500',
    bg: 'bg-orange-50'
  },
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: 'Muscle Gain Plans',
    desc: 'Optimized macro-nutrient splits to fuel your workouts and maximize lean muscle growth.',
    color: 'from-blue-400 to-indigo-500',
    bg: 'bg-blue-50'
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: 'Medical Diet Plans',
    desc: 'Specialized nutrition for PCOS, Diabetes, Thyroid, and other clinical conditions.',
    color: 'from-[#4CAF50] to-teal-500',
    bg: 'bg-green-50'
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    title: 'Online Consultations',
    desc: 'Expert guidance from anywhere in the world. Regular check-ins and plan adjustments.',
    color: 'from-purple-400 to-pink-500',
    bg: 'bg-purple-50'
  }
];

function ServiceCard({ service, idx }: { service: any, idx: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

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
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-2xl transition-shadow group relative overflow-hidden cursor-pointer"
    >
      <div 
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="relative z-10"
      >
        <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-6 text-gray-800 group-hover:text-white relative overflow-hidden transition-colors duration-300`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
          <div className="relative z-10">
            {service.icon}
          </div>
        </div>
        
        <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
        <p className="text-gray-600 leading-relaxed">{service.desc}</p>
        
        <div className="mt-6 flex items-center text-sm font-semibold text-gray-900 group-hover:text-[#4CAF50] transition-colors">
          Learn more 
          <motion.span 
            className="ml-2 inline-block"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            →
          </motion.span>
        </div>
      </div>
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 rounded-bl-full -z-10 transition-transform group-hover:scale-110`} />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F5F5F5]" style={{ perspective: '1500px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-[#4CAF50] tracking-wider uppercase mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Comprehensive Nutrition Solutions
          </h3>
          <p className="text-lg text-gray-600">
            Whether you want to lose weight, build muscle, or manage a health condition, 
            we have a specialized program designed just for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
