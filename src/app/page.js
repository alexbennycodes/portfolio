"use client";

import Curve from "@/components/Curve";
import { Button } from "@/components/moving-border";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Curve>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center container h-screen pb-16 lg:pb-24"
      >
        <Button
          borderRadius="1.75rem"
          className="dark:bg-slate-900 text-whiteborder-slate-800 px-3 md:px-6 py-1 md:py-2 text-sm md:text-lg"
        >
          Alex Benny
        </Button>
        <div className="text-5xl md:text-7xl lg:text-[160px] tracking-tighter font-semibold text-white text-center">
          Where Ideas are Forged into Reality
        </div>
      </motion.div>
      <div className="h-2/3 bg-gradient-to-b from-black to-transparent fixed top-0 left-0 right-0 -z-10"></div>
      <div className="home-gradient fixed inset-0 -z-20"></div>
    </Curve>
  );
}
