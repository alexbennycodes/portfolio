
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Zap, Cpu, Layout, Server, Globe, Hand } from 'lucide-react';

const TechStackCard: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="md:col-span-2 bg-surface hover:bg-white/5 transition-colors border border-white/10 p-6 flex flex-col justify-center overflow-hidden group hover:border-white/20 transition-colors relative"
    >
      <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
        <Cpu size={16} className="text-blue-400" />
        <h3 className="text-sm font-bold text-white tracking-wide uppercase">Tech Stack</h3>
      </div>

      <TechStackAnimation />
    </motion.div>
  );
};

const TechStackAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [cursorState, setCursorState] = useState({ x: 60, y: 60, active: false });

  const items = [
    { name: "React", icon: <Code className="w-5 h-5" />, color: "text-blue-400", bg: "bg-blue-500/10 backdrop-blur-sm", border: "border-blue-500/20" },
    { name: "Next.js", icon: <Zap className="w-5 h-5" />, color: "text-white", bg: "bg-zinc-800/50 backdrop-blur-sm", border: "border-white/20" },
    { name: "TypeScript", icon: <Cpu className="w-5 h-5" />, color: "text-blue-300", bg: "bg-blue-400/10 backdrop-blur-sm", border: "border-blue-400/20" },
    { name: "Tailwind", icon: <Layout className="w-5 h-5" />, color: "text-cyan-400", bg: "bg-cyan-500/10 backdrop-blur-sm", border: "border-cyan-500/20" },
    { name: "Svelte", icon: <Server className="w-5 h-5" />, color: "text-orange-400", bg: "bg-orange-500/10 backdrop-blur-sm", border: "border-orange-500/20" }
  ];

  const indexRef = useRef(currentIndex);
  useEffect(() => { indexRef.current = currentIndex; }, [currentIndex]);

  useEffect(() => {
    let mounted = true;
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const loop = async () => {
      await sleep(1000);

      while (mounted) {
        const currentIdx = indexRef.current;
        const isEven = currentIdx % 2 === 0;
        const direction = isEven ? 1 : -1;
        const dragDistance = 180;

        setCursorState({ x: 0, y: 0, active: false });
        await sleep(800);
        if (!mounted) break;

        setIsDragging(true);
        setCursorState({ x: 0, y: 0, active: true });
        await sleep(250);
        if (!mounted) break;

        setDragX(direction * dragDistance);
        setCursorState({ x: direction * dragDistance, y: 20, active: true });
        await sleep(1000);
        if (!mounted) break;

        setIsDragging(false);
        setCurrentIndex(prev => (prev + 1) % items.length);
        setDragX(0);

        setCursorState({ x: direction * (dragDistance + 50), y: 30, active: false });
        await sleep(500);
        if (!mounted) break;

        setCursorState({ x: 60, y: 60, active: false });
        await sleep(1000);
      }
    };

    loop();
    return () => { mounted = false; };
  }, []);

  const activeIndices = [currentIndex % items.length, (currentIndex + 1) % items.length, (currentIndex + 2) % items.length];

  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
      <AnimatePresence mode="popLayout">
        {activeIndices.map((index, i) => {
          const item = items[index];
          const offset = i;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.name}
              className={`absolute w-64 p-4 border backdrop-blur-lg flex items-center gap-4 shadow-xl transition-colors ${item.bg} ${item.border}`}
              initial={{ opacity: 0, scale: 0.9, y: 20, zIndex: 0 }}
              animate={{
                opacity: offset === 0 ? 1 : 1 - (offset * 0.2),
                scale: offset === 0 ? 1 : 1 - (offset * 0.05),
                x: offset === 0 ? dragX : (index % 2 === 0 ? 10 : -10),
                y: offset === 0 ? 0 : offset * 10,
                rotate: offset === 0 ? dragX * 0.05 : (index % 2 === 0 ? 2 : -2),
                zIndex: 3 - offset,
                transition: {
                  type: "tween",
                  ease: [0.2, 0.8, 0.2, 1],
                  duration: offset === 0 && isDragging ? 1.0 : 0.6,
                }
              }}
              exit={{
                opacity: 0,
                x: isEven ? 200 : -200,
                rotate: isEven ? 20 : -20,
                scale: 0.8,
                transition: { duration: 0.3 }
              }}
            >
              <div className={`p-2 bg-white/10 ${item.color}`}>
                {item.icon}
              </div>
              <div>
                <div className={`font-bold text-base ${item.color}`}>{item.name}</div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-mono">Core Technology</div>
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>

      <motion.div
        className="absolute z-50 pointer-events-none drop-shadow-2xl"
        animate={{
          x: cursorState.x,
          y: cursorState.y,
          scale: cursorState.active ? 0.9 : 1
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Hand className="text-black fill-white" size={18} strokeWidth={1.5} />
        {cursorState.active && (
          <motion.div
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="absolute -inset-2 bg-white/30 rounded-full -z-10"
          />
        )}
      </motion.div>
    </div>
  );
};

export default TechStackCard;
