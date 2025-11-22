
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const StatusCard: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ delay }}
         className="md:col-span-1 bg-surface hover:bg-white/5 transition-all ease-in-out duration-500 border border-white/10 p-0 flex flex-col overflow-hidden group relative h-full"
      >
         {/* Header */}
         <div className="h-10 px-4 py-2 flex justify-between items-center z-20 relative">
            <div className="flex items-center gap-2">
               <Activity size={16} className="text-rose-400" />
               <h3 className="text-sm font-bold text-white tracking-wide uppercase">Status</h3>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 bg-rose-500/10 border border-rose-500/20">
               <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
               <span className="text-[9px] font-bold text-rose-400">CODING</span>
            </div>
         </div>

         {/* Keyboard Container */}
         <div className="flex-1 flex items-center justify-center bg-[#0c0c0c] relative perspective-[800px] pt-5">
            <KeyboardSimulation />
            {/* Scanline/Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-10" />
         </div>
      </motion.div>
   );
};

const KeyboardSimulation = () => {
   // Simplified 60% layout for visual balance
   const rows = [
      ['esc', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'bk'],
      ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
      ['cap', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'ent'],
      ['sh', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'sh'],
      ['ctrl', 'opt', 'cmd', 'space', 'cmd', 'opt', 'ctrl']
   ];

   const [activeKey, setActiveKey] = useState<string | null>(null);

   useEffect(() => {
      const keys = rows.flat();
      let timeout: NodeJS.Timeout;

      const type = () => {
         // Simulation logic: 15% chance of space, otherwise random key
         const randomKey = Math.random() < 0.15 ? 'space' : keys[Math.floor(Math.random() * keys.length)];

         setActiveKey(randomKey);

         // Key press duration
         setTimeout(() => setActiveKey(null), 100);

         // Typing speed (random interval)
         timeout = setTimeout(type, Math.random() * 120 + 50);
      };

      type();
      return () => clearTimeout(timeout);
   }, []);

   return (
      <div className="flex flex-col gap-1 transform scale-[1.25] rotate-x-12 origin-center">
         {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-1">
               {row.map((key, keyIndex) => {
                  const isActive = activeKey === key;

                  // Key Sizing
                  let width = "w-6";
                  let fontSize = "text-[8px]";
                  let label = key.length === 1 ? key.toUpperCase() : key;

                  if (key === 'space') {
                     width = "w-32";
                     label = "";
                  } else if (['tab', 'bk', 'ent', 'cap', 'sh'].includes(key)) {
                     width = "w-10";
                     fontSize = "text-[6px]";
                     label = key.toUpperCase();
                  } else if (['ctrl', 'opt', 'cmd', 'esc'].includes(key)) {
                     width = "w-8";
                     fontSize = "text-[6px]";
                     label = key.toUpperCase();
                  }

                  return (
                     <motion.div
                        key={`${rowIndex}-${keyIndex}`}
                        animate={{
                           y: isActive ? 1 : 0,
                           backgroundColor: isActive ? '#f43f5e' : '#18181b', // Rose-500
                           borderColor: isActive ? '#f43f5e' : '#27272a',
                           color: isActive ? '#000' : '#52525b',
                           boxShadow: isActive ? '0 0 10px rgba(244, 63, 94, 0.6)' : 'none'
                        }}
                        className={`h-6 border flex items-center justify-center font-sans font-semibold select-none transition-colors duration-75 ${width} ${fontSize}`}
                     >
                        {label}
                     </motion.div>
                  )
               })}
            </div>
         ))}
      </div>
   )
};

export default StatusCard;
