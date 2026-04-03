'use client';

import { motion } from 'motion/react';

const elements = [
  { emoji: '🥑', top: '15%', left: '10%', delay: 0, size: 'text-6xl', z: 50 },
  { emoji: '🍎', top: '25%', right: '15%', delay: 0.5, size: 'text-5xl', z: -20 },
  { emoji: '🥦', bottom: '20%', left: '20%', delay: 1, size: 'text-7xl', z: 100 },
  { emoji: '🥕', bottom: '30%', right: '10%', delay: 1.5, size: 'text-6xl', z: -50 },
  { emoji: '🫐', top: '40%', left: '5%', delay: 2, size: 'text-4xl', z: 30 },
  { emoji: '🥗', top: '60%', right: '5%', delay: 2.5, size: 'text-5xl', z: -10 },
];

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" style={{ perspective: '1000px' }}>
      {elements.map((el, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, rotate: 0, z: el.z }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            z: [el.z, el.z + 20, el.z],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: el.delay,
          }}
          className={`absolute ${el.size} opacity-20 blur-[1px] drop-shadow-2xl`}
          style={{
            top: el.top,
            left: el.left,
            right: el.right,
            bottom: el.bottom,
            transformStyle: 'preserve-3d',
          }}
        >
          {el.emoji}
        </motion.div>
      ))}
      
      {/* Abstract blurred shapes for depth */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4CAF50]/20 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-400/10 rounded-full blur-3xl"
      />
    </div>
  );
}
