
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, animate, MotionValue } from 'framer-motion';
import { Smartphone, Tablet, Monitor } from 'lucide-react';

const ResponsiveCard: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const width = useMotionValue(200);
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  useEffect(() => {
    const controls = animate(width, [200, 85, 200], {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.5, 1]
    });

    const unsubscribe = width.on('change', (latest) => {
      if (typeof latest === 'number') {
        if (latest > 160) setActiveDevice('desktop');
        else if (latest > 115) setActiveDevice('tablet');
        else setActiveDevice('mobile');
      }
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="md:col-span-1 bg-surface hover:bg-white/5 transition-all ease-in-out duration-500 border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden group h-full"
    >
      {/* Label Section */}
      <div className="z-20 relative flex flex-col h-full justify-between pointer-events-none">
        <div className="flex justify-between items-start w-full">
          <div className="flex items-center gap-2">
            <Monitor size={16} className="text-amber-400" />
            <h3 className="text-sm font-bold text-white tracking-wide uppercase">Responsive</h3>
          </div>


        </div>

        {/* Device Icons Indicator */}
        <div className="flex gap-2 bg-white/5 px-2 py-1 rounded-full border border-white/5 backdrop-blur-sm w-fit">
          <Monitor size={12} className={`transition-colors duration-300 ${activeDevice === 'desktop' ? 'text-amber-400' : 'text-zinc-600'}`} />
          <Tablet size={12} className={`transition-colors duration-300 ${activeDevice === 'tablet' ? 'text-amber-400' : 'text-zinc-600'}`} />
          <Smartphone size={12} className={`transition-colors duration-300 ${activeDevice === 'mobile' ? 'text-amber-400' : 'text-zinc-600'}`} />
        </div>
      </div>

      {/* Simulation Container */}
      <div className="absolute -bottom-10 right-0 w-[180px] h-[140px] z-10">
        <ResponsiveSimulation width={width} />
      </div>

      {/* Vignette / Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10 pointer-events-none" />
    </motion.div>
  );
};

const ResponsiveSimulation = ({ width }: { width: MotionValue<number> }) => {
  return (
    <motion.div
      style={{ width }}
      className="absolute -bottom-4 -right-4 h-56 border border-zinc-800 bg-zinc-900 shadow-2xl flex flex-col overflow-hidden group"
    >
      {/* Browser Chrome */}
      <div className="h-5 bg-zinc-800/50 border-b borde-zinc-800 flex items-center px-2 py-1 gap-1.5">
        <div className="w-1 h-1 rounded-full bg-red-600/50" />
        <div className="w-1 h-1 rounded-full bg-yellow-600/50" />
        <div className="w-1 h-1 rounded-full bg-green-600/50" />
        {/* URL Bar simulation */}
        <div className="ml-1 h-2 flex-1 bg-zinc-800 rounded-sm opacity-50" />
      </div>

      {/* Website Content - Using Flex wrap for responsive behavior */}
      <div className="p-3 flex flex-wrap content-start gap-2 overflow-hidden">
        {/* Hero Section */}
        <motion.div
          className="w-full h-10 bg-gradient-to-br from-amber-500/20 to-amber-500/5 border border-amber-500/20 mb-1 relative overflow-hidden"
          layout
        >
          {/* Abstract shimmer/content in hero */}
          <div className="absolute top-2 left-2 w-1/3 h-1 bg-amber-500/30" />
          <div className="absolute top-4 left-2 w-1/4 h-1 bg-amber-500/20" />
        </motion.div>

        {/* Grid Cards - Use flex-grow and min-width to force wrapping */}
        {[1, 2, 3, 4, 5, 6].map(i => (
          <motion.div
            key={i}
            className="flex-grow basis-[50px] h-12 bg-zinc-800/50 border border-zinc-700/50 relative group-hover:border-amber-500/20 transition-colors"
            layout
            transition={{ type: 'spring', stiffness: 700, damping: 35 }}
          >
            <div className="absolute top-2 left-2 w-6 h-1 bg-zinc-700" />
            <div className="absolute bottom-2 right-2 w-2 h-2 bg-zinc-700 rounded-sm" />
          </motion.div>
        ))}
      </div>

      {/* Resize Handles (Visual Only) */}
      <div className="absolute top-1/2 -right-0.5 -translate-y-1/2 h-8 w-1 bg-amber-500 rounded-l" />
      <div className="absolute top-1/2 -left-0.5 -translate-y-1/2 h-8 w-1 bg-amber-500 rounded-r" />
    </motion.div>
  );
};

export default ResponsiveCard;
