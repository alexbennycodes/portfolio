"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="max-h-screen overflow-hidden">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center container max-w-6xl h-screen pb-16 lg:pb-24"
      >
        <div className="relative text-left text-white">
          <p className="flex flex-col self-start tracking-tight leading-none text-2xl md:text-5xl flex-nowrap font-cursive">
            <span>Hi, I&apos;m Alex</span>
          </p>

          <h1 className="text-4xl md:text-7xl lg:text-[125px] tracking-tighter font-extrabold font-title text-white relative mt-3 md:mt-5">
            Where Ideas are Forged into Reality
          </h1>
        </div>
      </motion.div>
      <div className="h-3/4 bg-gradient-to-b from-black to-transparent fixed top-0 left-0 right-0 -z-10"></div>
      <div className="home-gradient fixed inset-0 -z-20 opacity-60"></div>
    </div>
  );
}
