
import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { MousePointerClick } from 'lucide-react';
import confetti from 'canvas-confetti';

const InteractionCard: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
   const [clickCount, setClickCount] = useState(0);
   const canvasRef = useRef<HTMLCanvasElement>(null);

   const handleClick = () => {
      setClickCount(prev => prev + 1);

      const myConfetti = confetti.create(canvasRef.current!, {
         resize: true,
         useWorker: true
      });

      myConfetti({
         particleCount: 100,
         spread: 70,
         origin: { x: 0.5, y: 0.5 },
         colors: ['#fbbf24', '#d97706', '#f59e0b'], // Amber/Yellow shades
         disableForReducedMotion: true,
         zIndex: 1000,
      });
   };

   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ delay }}
         className="md:col-span-1 bg-surface hover:bg-white/5 transition-all ease-in-out duration-500 border border-white/10 p-6 flex flex-col justify-between group relative overflow-hidden h-full select-none"
      >
         <div className="flex justify-between items-start z-10">
            <div className="flex items-center gap-2">
               <MousePointerClick size={16} className="text-amber-400" />
               <h3 className="text-sm font-bold text-white tracking-wide uppercase">Interaction</h3>
            </div>
            <div className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-1 border border-amber-500/20">
               CLICKS: {clickCount}
            </div>
         </div>

         <div className="flex-1 flex items-center justify-center relative z-10">
            <motion.button
               whileHover={{ scale: 1.05, rotate: -2 }}
               whileTap={{ scale: 0.85, rotate: 2 }}
               onClick={handleClick}
               className="relative group/btn z-10"
            >
               <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-yellow-600 blur opacity-40 group-hover/btn:opacity-75 transition duration-200"></div>
               <div className="relative px-6 py-3 bg-amber-500 border border-amber-400 flex items-center gap-2 text-sm font-black text-black shadow-xl transition-colors">
                  <MousePointerClick size={16} className="text-black" />
                  <span>Click Me</span>
               </div>
            </motion.button>
         </div>

         {/* Confetti Canvas */}
         <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
         />

         {/* Background Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.05)_1px,transparent_1px)] bg-[size:16px_16px] z-0 opacity-10" />
      </motion.div>
   );
};

export default InteractionCard;
