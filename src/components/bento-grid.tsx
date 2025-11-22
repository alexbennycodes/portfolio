'use client'

import React, { Suspense, lazy, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Define imports map for prefetching
const cardImports = {
  TechStackCard: () => import('./bento/TechStackCard'),
  BuildCard: () => import('./bento/BuildCard'),
  StatusCard: () => import('./bento/StatusCard'),
  CodeCard: () => import('./bento/CodeCard'),
  ArchitectureCard: () => import('./bento/ArchitectureCard'),
  ResponsiveCard: () => import('./bento/ResponsiveCard'),
  PerformanceCard: () => import('./bento/PerformanceCard'),
  InteractionCard: () => import('./bento/InteractionCard'),
};

const TechStackCard = lazy(cardImports.TechStackCard);
const BuildCard = lazy(cardImports.BuildCard);
const StatusCard = lazy(cardImports.StatusCard);
const CodeCard = lazy(cardImports.CodeCard);
const ArchitectureCard = lazy(cardImports.ArchitectureCard);
const ResponsiveCard = lazy(cardImports.ResponsiveCard);
const PerformanceCard = lazy(cardImports.PerformanceCard);
const InteractionCard = lazy(cardImports.InteractionCard);

const CardLoader = ({ className }: { className?: string }) => (
  <div className={cn(`w-full h-full min-h-[220px] bg-white/5 animate-pulse border border-white/10`, className)} />
);

const BentoGrid: React.FC = () => {
  // Prefetch components when browser is idle
  useEffect(() => {
    const prefetchCards = () => {
      const imports = Object.values(cardImports);
      imports.forEach((importFn) => {
        try {
          importFn();
        } catch (e) {
          // Ignore prefetch errors
        }
      });
    };

    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          prefetchCards();
        });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(prefetchCards, 2000);
      }
    }
  }, []);

  return (
    <section id="expertise" className="py-32 relative min-h-screen">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <motion.div className="flex items-center gap-3 w-full justify-center" initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            {/* <svg
              fill="white"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>

              <g id="SVGRepo_iconCarrier">
                <path d="M30.531 15.47l-14.001-14c-0.136-0.136-0.323-0.22-0.53-0.22s-0.395 0.084-0.53 0.22l-14 14c-0.136 0.136-0.22 0.323-0.22 0.53s0.084 0.395 0.22 0.53l14 14.001c0.136 0.135 0.323 0.219 0.53 0.219s0.394-0.084 0.53-0.219l14.001-14.001c0.135-0.136 0.218-0.323 0.218-0.53s-0.083-0.394-0.218-0.53l0 0zM16 28.939l-12.939-12.939 12.939-12.939 12.939 12.939z"></path>
              </g>
            </svg> */}
            <h2 className="text-4xl lg:text-5xl tracking-tight font-title italic">
              Expertise
            </h2>
          </motion.div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
          <Suspense fallback={<CardLoader className='md:col-span-2' />}>
            {/* 1. Tech Stack (2x1) */}
            <TechStackCard delay={0} />
          </Suspense>

          <Suspense fallback={<CardLoader className='md:col-span-1' />}>
            {/* 2. Build Process (1x1) */}
            <BuildCard delay={0.02} />
          </Suspense>

          <Suspense fallback={<CardLoader className='md:col-span-1' />}>
            {/* 3. Status (1x1) */}
            <StatusCard delay={0.04} />
          </Suspense>

          <Suspense fallback={<CardLoader className='md:col-span-1 md:row-span-2' />}>
            {/* 4. Code Mastery (1x2) - Vertical */}
            <CodeCard delay={0.06} />
          </Suspense>

          <Suspense fallback={<CardLoader className='md:col-span-2' />}>
            {/* 5. System Architecture (2x1) */}
            <ArchitectureCard delay={0.08} />
          </Suspense>

          <Suspense fallback={<CardLoader className='md:col-span-1' />}>
            {/* 6. Responsive Design (1x1) */}
            <ResponsiveCard delay={0.1} />
          </Suspense>

          <Suspense fallback={<CardLoader className='md:col-span-1' />}>
            {/* 8. Interaction Lab (1x1) - Moved to end */}
            <InteractionCard delay={0.12} />
          </Suspense>

          <Suspense fallback={<CardLoader className='md:col-span-2' />}>
            {/* 7. Performance (2x1) - Moved here for better spacing */}
            <PerformanceCard delay={0.15} />
          </Suspense>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
