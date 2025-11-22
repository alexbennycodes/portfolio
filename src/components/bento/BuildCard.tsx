
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Package, FileCode, Image as ImageIcon, File, CheckCircle2, Loader2 } from 'lucide-react';

const BuildCard: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="md:col-span-1 bg-surface border border-white/10 p-4 flex flex-col justify-between group hover:bg-white/5 transition-colors relative overflow-hidden h-full"
    >
      <BuildSimulation />
    </motion.div>
  );
};

const ARTIFACTS = [
  { name: 'index.html', size: '1.2kb', type: 'html' },
  { name: 'main.8f2a.js', size: '142kb', type: 'js' },
  { name: 'styles.x92b.css', size: '24kb', type: 'css' },
  { name: 'vendor.a1b2.js', size: '850kb', type: 'js' },
  { name: 'logo.svg', size: '4kb', type: 'svg' },
  { name: 'hero-bg.webp', size: '45kb', type: 'img' },
  { name: 'manifest.json', size: '0.5kb', type: 'json' },
];

const BuildSimulation = () => {
  const [files, setFiles] = useState<Array<{ id: number, name: string, size: string, type: string, status: 'pending' | 'done' }>>([]);
  const [status, setStatus] = useState<'IDLE' | 'BUILDING' | 'DONE'>('IDLE');
  const scrollRef = useRef<HTMLDivElement>(null);

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  useEffect(() => {
    let mounted = true;

    const run = async () => {
      while (mounted) {
        // IDLE State
        setStatus('IDLE');
        setFiles([]);
        await sleep(1500);
        if (!mounted) break;

        // BUILDING State
        setStatus('BUILDING');

        for (let i = 0; i < ARTIFACTS.length; i++) {
          if (!mounted) break;

          // Add pending file (Skeleton)
          const artifact = ARTIFACTS[i];
          setFiles(prev => [...prev, { ...artifact, id: i, status: 'pending' }]);

          // Simulate compile time
          await sleep(Math.random() * 300 + 300);
          if (!mounted) break;

          // Mark as done (Reveal)
          setFiles(prev => prev.map(f => f.id === i ? { ...f, status: 'done' } : f));

          await sleep(200);
        }

        if (!mounted) break;

        // DONE State
        setStatus('DONE');
        await sleep(3000);
      }
    };
    run();
    return () => { mounted = false; };
  }, []);

  // Auto-scroll to bottom when files change with smooth behavior
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [files]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'js': return <FileCode className="w-3.5 h-3.5 text-yellow-400" />;
      case 'css': return <FileCode className="w-3.5 h-3.5 text-blue-400" />;
      case 'html': return <FileCode className="w-3.5 h-3.5 text-orange-400" />;
      case 'img':
      case 'svg': return <ImageIcon className="w-3.5 h-3.5 text-purple-400" />;
      default: return <File className="w-3.5 h-3.5 text-zinc-400" />;
    }
  };

  return (
    <div className="flex flex-col h-full w-full justify-between select-none">
      {/* Header */}
      <div className="flex justify-between items-center mb-2 border-b border-white/5 pb-2">
        <div className="flex items-center gap-2">
          <Package className={`w-4 h-4 ${status === 'DONE' ? 'text-green-400' : 'text-pink-400'}`} />
          <h3 className="text-sm font-bold text-white tracking-wide uppercase">Build</h3>
        </div>
        <div className={`flex items-center gap-1.5 text-[9px] font-mono px-1.5 py-0.5 rounded border ${status === 'DONE'
          ? 'bg-green-500/10 border-green-500/20 text-green-400'
          : status === 'BUILDING'
            ? 'bg-pink-500/10 border-pink-500/20 text-pink-400'
            : 'bg-zinc-800 border-zinc-700 text-zinc-500'
          }`}>
          {status === 'BUILDING' && <Loader2 className="w-2 h-2 animate-spin" />}
          {status === 'DONE' && <CheckCircle2 className="w-2 h-2" />}
          {status === 'IDLE' ? 'IDLE' : status === 'DONE' ? 'SUCCESS' : 'BUILDING'}
        </div>
      </div>

      {/* File List (Scrollable) */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-hidden flex flex-col gap-2 relative"
      >
        {/* Empty State Hint */}
        {files.length === 0 && status === 'IDLE' && (
          <div className="absolute inset-0 flex items-center justify-center text-[10px] text-zinc-600 font-mono">
            Waiting for build...
          </div>
        )}

        {files.map((file) => (
          <div key={file.id} className="flex items-center justify-between h-6 w-full shrink-0">
            {file.status === 'pending' ? (
              // Skeleton State
              <div className="flex items-center justify-between w-full animate-pulse">
                <div className="flex items-center gap-2 w-2/3">
                  <div className="w-3.5 h-3.5 rounded bg-white/10" />
                  <div className="h-3 rounded bg-white/10 w-24" />
                </div>
                <div className="w-8 h-3 rounded bg-white/5" />
              </div>
            ) : (
              // Done State
              <motion.div
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center justify-between w-full"
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  {getIcon(file.type)}
                  <span className="text-[11px] text-zinc-300 font-mono truncate max-w-[100px]">{file.name}</span>
                </div>
                <span className="text-[10px] text-zinc-600 font-mono shrink-0">{file.size}</span>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mt-3">
        <motion.div
          className={`h-full ${status === 'DONE' ? 'bg-green-500' : 'bg-gradient-to-r from-pink-500 to-purple-500'}`}
          animate={{
            width: status === 'IDLE' ? 0 : status === 'DONE' ? '100%' : `${(files.length / ARTIFACTS.length) * 100}%`
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  )
};

export default BuildCard;
