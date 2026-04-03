'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Heart, Activity, Dumbbell } from 'lucide-react';

const organs = [
  {
    id: 'brain',
    name: 'Brain',
    icon: <Brain className="w-5 h-5" />,
    position: { top: '15%', left: '50%' },
    function: 'The command center of your body, requiring constant energy and protection against oxidative stress.',
    nutrients: ['Omega-3s', 'Antioxidants', 'B Vitamins'],
    color: 'bg-purple-500',
    textColor: 'text-purple-500',
    shadow: 'shadow-purple-500/50',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
  },
  {
    id: 'heart',
    name: 'Heart',
    icon: <Heart className="w-5 h-5" />,
    position: { top: '32%', left: '54%' },
    function: 'Pumps oxygen-rich blood throughout your body, relying on healthy fats and minerals to maintain rhythm.',
    nutrients: ['Fiber', 'Healthy Fats', 'Magnesium'],
    color: 'bg-red-500',
    textColor: 'text-red-500',
    shadow: 'shadow-red-500/50',
    badgeColor: 'bg-red-50 text-red-700 border-red-200'
  },
  {
    id: 'gut',
    name: 'Gut & Digestion',
    icon: <Activity className="w-5 h-5" />,
    position: { top: '48%', left: '50%' },
    function: 'The foundation of your immune system and nutrient absorption, heavily influenced by your microbiome.',
    nutrients: ['Probiotics', 'Prebiotics', 'Fiber'],
    color: 'bg-amber-500',
    textColor: 'text-amber-500',
    shadow: 'shadow-amber-500/50',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
  },
  {
    id: 'muscles',
    name: 'Muscles',
    icon: <Dumbbell className="w-5 h-5" />,
    position: { top: '40%', left: '32%' },
    function: 'Drives movement and metabolism. Requires adequate protein and hydration for repair and growth.',
    nutrients: ['Protein', 'Amino Acids', 'Electrolytes'],
    color: 'bg-blue-500',
    textColor: 'text-blue-500',
    shadow: 'shadow-blue-500/50',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
  }
];

export default function HumanBodyInteractive() {
  const [activeOrgan, setActiveOrgan] = useState<string | null>(null);

  return (
    <div className="relative w-full aspect-[3/4] max-w-md mx-auto bg-gradient-to-b from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-inner border border-gray-200 group">
      {/* 3D-like Abstract Human Body SVG */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <svg viewBox="0 0 200 400" className="w-full h-full drop-shadow-2xl transition-transform duration-700 group-hover:scale-105" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path 
            d="M100 20 C115 20, 125 35, 125 55 C125 75, 110 85, 100 85 C90 85, 75 75, 75 55 C75 35, 85 20, 100 20 Z M65 95 C85 90, 115 90, 135 95 C155 100, 165 120, 165 150 C165 180, 150 200, 140 200 L130 200 L130 350 C130 370, 115 380, 105 380 C95 380, 95 370, 95 350 L95 220 L105 220 L105 350 C105 370, 95 380, 85 380 C75 380, 70 370, 70 350 L70 200 L60 200 C50 200, 35 180, 35 150 C35 120, 45 100, 65 95 Z" 
            fill="url(#bodyGradient)" 
            className="text-slate-300 transition-all duration-500"
            filter="url(#glow)"
          />
        </svg>
      </div>

      {/* Glowing background effect based on active organ */}
      <AnimatePresence>
        {activeOrgan && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 opacity-20 blur-3xl ${organs.find(o => o.id === activeOrgan)?.color}`}
          />
        )}
      </AnimatePresence>

      {/* Hotspots */}
      {organs.map((organ) => (
        <div 
          key={organ.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ top: organ.position.top, left: organ.position.left }}
          onMouseEnter={() => setActiveOrgan(organ.id)}
          onMouseLeave={() => setActiveOrgan(null)}
          onClick={() => setActiveOrgan(activeOrgan === organ.id ? null : organ.id)}
        >
          <motion.button
            whileHover={{ scale: 1.15 }}
            className={`relative w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 border border-white/50 ${activeOrgan === organ.id ? 'ring-4 ring-white/80 scale-110' : ''}`}
          >
            <div className={`absolute inset-0 rounded-full opacity-30 animate-ping ${organ.color}`} style={{ animationDuration: '3s' }} />
            <div className={`transition-colors duration-300 ${activeOrgan === organ.id ? organ.textColor : 'text-gray-500'}`}>
              {organ.icon}
            </div>
          </motion.button>
          
          {/* Tooltip */}
          <AnimatePresence>
            {activeOrgan === organ.id && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-white/50 pointer-events-none z-20"
              >
                <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/95 rotate-45 border-t border-l border-white/50`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`p-1.5 rounded-lg bg-gray-50 ${organ.textColor}`}>
                      {organ.icon}
                    </div>
                    <h4 className={`font-heading font-bold text-lg ${organ.textColor}`}>{organ.name}</h4>
                  </div>
                  
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {organ.function}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-gray-900 uppercase tracking-wider">Key Nutrients</p>
                    <div className="flex flex-wrap gap-2">
                      {organ.nutrients.map((nutrient, idx) => (
                        <span 
                          key={idx} 
                          className={`text-xs font-medium px-2.5 py-1 rounded-full border ${organ.badgeColor}`}
                        >
                          {nutrient}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
      
      <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none z-0">
        <motion.p 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-sm font-medium text-gray-500 bg-white/80 inline-block px-5 py-2 rounded-full backdrop-blur-md shadow-sm border border-white/50"
        >
          Hover to explore nutritional impact
        </motion.p>
      </div>
    </div>
  );
}
