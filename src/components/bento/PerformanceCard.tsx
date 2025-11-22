
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

const PerformanceCard: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="md:col-span-2 bg-surface hover:bg-white/5 transition-all ease-in-out duration-500 border border-white/10 p-5 flex flex-col relative group"
        >
            <div className="flex justify-between items-start z-10 mb-1">
                <div className="flex items-center gap-2">
                    <Zap size={16} className="text-emerald-400" />
                    <h3 className="text-sm font-bold text-white tracking-wide uppercase">Performance</h3>
                </div>
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500/20" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 flex-1 min-h-0 pt-2">
                <div className="relative z-10 mt-1">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                        {/* Spinning outer ring with tick marks */}
                        <motion.div
                            className="absolute inset-[-4px] rounded-full border border-dashed border-emerald-500/30"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 12, ease: "linear", repeat: Infinity }}
                        />

                        {/* Inner Progress Circle */}
                        <svg className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                            <circle cx="48" cy="48" r="40" stroke="#064e3b" strokeWidth="4" fill="none" className="opacity-50" />
                            <motion.circle
                                cx="48" cy="48" r="40"
                                stroke="#10b981" strokeWidth="4" fill="none"
                                strokeDasharray="251.2"
                                strokeDashoffset="251.2"
                                animate={{ strokeDashoffset: 5 }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                strokeLinecap="round"
                            />
                        </svg>

                        {/* Central Score */}
                        <div className="flex flex-col items-center justify-center">
                            <motion.span
                                className="text-3xl font-bold text-white tracking-tighter"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Counter from={0} to={98} />
                            </motion.span>
                        </div>
                    </div>
                </div>

                {/* Web Vitals Graph */}
                <div className="flex-1 h-full min-w-0 flex flex-col justify-center pl-2">
                    <div className="flex justify-between items-end mb-3">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Core Vitals</span>
                        <span className="text-[10px] font-mono text-emerald-400">All Good</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center gap-3">
                        <WebVitalsRow label="LCP" value="1.2s" score={92} />
                        <WebVitalsRow label="INP" value="48ms" score={96} />
                        <WebVitalsRow label="CLS" value="0.02" score={99} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Counter = ({ from, to }: { from: number, to: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (!isInView) return;
        const node = nodeRef.current;
        const controls = animate(from, to, {
            duration: 2.5,
            ease: "circOut",
            onUpdate(value) {
                if (node) node.textContent = Math.round(value).toString();
            }
        });
        return () => controls.stop();
    }, [isInView, from, to]);

    return <span ref={nodeRef}>{from}</span>;
};

const WebVitalsRow = ({ label, value, score }: { label: string, value: string, score: number }) => {
    return (
        <div className="flex items-center gap-3">
            <div className="w-8 text-[10px] font-bold text-zinc-400 font-mono">{label}</div>
            <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden relative">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${score}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    className="h-full bg-emerald-500 rounded-full relative"
                >
                    <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/50 shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
                </motion.div>
            </div>
            <div className="w-10 text-right text-[10px] font-mono text-zinc-300">{value}</div>
        </div>
    );
};

export default PerformanceCard;
