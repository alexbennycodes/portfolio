
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Server, Cpu, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const ArchitectureCard: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="md:col-span-2 bg-surface hover:bg-white/5 transition-colors border border-white/10 relative overflow-hidden group flex flex-col h-full min-h-[180px]"
        >
            {/* Header */}
            <div className="flex justify-between items-start px-5 pt-5 pb-1 z-20 shrink-0">
                <div className="flex items-center gap-2">
                    <Server size={16} className="text-sky-400" />
                    <h3 className="text-sm font-bold text-white tracking-wide uppercase">Orchestration</h3>
                </div>
                <StatusBadge />
            </div>

            {/* Content - removed fixed min-h to prevent overflow */}
            <div className="flex-1 w-full relative px-5 pb-4 flex gap-4 min-h-0">
                {/* Metrics Column */}
                <div className="w-1/3 flex flex-col justify-center z-10 py-1">
                    <MetricsDisplay />
                </div>

                {/* Grid Visualization */}
                <div className="flex-1 relative z-10 h-full">
                    <InstancesGrid />
                </div>
            </div>
        </motion.div>
    );
};

// --- Sub-Components ---

const StatusBadge = () => {
    return (
        <div className="flex items-center gap-1.5 px-2 py-1 bg-sky-500/10 border border-sky-500/20 rounded backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-[9px] font-bold text-sky-300">AUTO-SCALING</span>
        </div>
    );
};

const MetricsDisplay = () => {
    const [metrics, setMetrics] = useState({ rps: 840, cpu: 24 });
    const [trend, setTrend] = useState<'up' | 'down'>('up');

    useEffect(() => {
        const interval = setInterval(() => {
            setMetrics(prev => {
                const newRps = prev.rps + (Math.random() > 0.5 ? 50 : -30);
                const newCpu = Math.min(Math.max(newRps / 50, 10), 95); // Correlate CPU with RPS

                setTrend(newRps > prev.rps ? 'up' : 'down');

                return {
                    rps: Math.max(800, Math.min(newRps, 4000)),
                    cpu: Math.floor(newCpu)
                };
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col justify-between h-full max-h-[120px] font-mono">
            <div>
                <div className="text-[10px] text-zinc-500 mb-1">REQUESTS / SEC</div>
                <div className="text-xl font-bold text-white flex items-end gap-2 leading-none">
                    {metrics.rps}
                    <span className={`text-xs mb-0.5 flex items-center ${trend === 'up' ? 'text-green-400' : 'text-orange-400'}`}>
                        {trend === 'up' ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                    </span>
                </div>
                {/* Mini Graph Line */}
                <div className="flex items-end gap-0.5 h-4 mt-1.5 opacity-50">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-1 bg-sky-500"
                            animate={{ height: `${Math.random() * 100}%` }}
                            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                        />
                    ))}
                </div>
            </div>

            <div>
                <div className="text-[10px] text-zinc-500 mb-1 flex items-center gap-1">
                    <Cpu size={10} /> AVG LOAD
                </div>
                <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                    <motion.div
                        className={`h-full ${metrics.cpu > 80 ? 'bg-orange-500' : 'bg-sky-500'}`}
                        animate={{ width: `${metrics.cpu}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
                <div className="text-[10px] text-right mt-1 text-zinc-400">{metrics.cpu}%</div>
            </div>
        </div>
    );
};

const InstancesGrid = () => {
    // Simulation Loop for scaling instances
    const [activeCount, setActiveCount] = useState(4);

    useEffect(() => {
        let direction = 1;
        const interval = setInterval(() => {
            setActiveCount(prev => {
                if (prev >= 12) direction = -1;
                if (prev <= 3) direction = 1;
                // Sometimes jump
                const change = Math.random() > 0.7 ? 2 : 1;
                return prev + (direction * change);
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full p-2 grid grid-cols-4 gap-2 content-center relative">
            {/* Grid Header */}
            <div className="absolute -top-4 right-0 text-[9px] font-mono text-zinc-500">
                INSTANCES: {activeCount} / 12
            </div>

            {Array.from({ length: 12 }).map((_, i) => {
                const isActive = i < activeCount;
                return (
                    <InstanceNode key={i} isActive={isActive} index={i} />
                );
            })}
        </div>
    );
};

const InstanceNode = ({ isActive, index }: { isActive: boolean, index: number }) => {
    return (
        <div className="aspect-square relative">
            {/* Placeholder / Empty Slot */}
            <div className="absolute inset-0 border border-white/5" />

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                        className="absolute inset-0 bg-zinc-900 border border-sky-500/30 overflow-hidden shadow-[0_0_10px_rgba(14,165,233,0.1)]"
                    >
                        {/* Code Lines Simulation */}
                        <div className="p-1.5 space-y-0.5 mt-0.5">
                            <motion.div
                                className="h-[2px] bg-sky-500/40 w-3/4"
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{ duration: 1.5 + Math.random(), repeat: Infinity }}
                            />
                            <motion.div
                                className="h-[2px] bg-sky-500/20 w-1/2"
                                animate={{ opacity: [0.2, 0.8, 0.2] }}
                                transition={{ duration: 2 + Math.random(), repeat: Infinity }}
                            />
                            <div className="h-[2px] bg-sky-500/20 w-full" />
                        </div>

                        {/* Scanning Line */}
                        <motion.div
                            className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-transparent via-sky-500/10 to-transparent transform -translate-y-full"
                            animate={{ translateY: ['-100%', '200%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: index * 0.2 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ArchitectureCard;
