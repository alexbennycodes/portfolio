"use client";

import React, { MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SparklesCore } from "@/components/sparkles";
import Link from "next/link";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY, currentTarget }: MouseEvent) => {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const springConfig = { stiffness: 50, damping: 20 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const translateLargeX = useTransform(springX, [0, 1], [-20, 20]);
  const translateLargeY = useTransform(springY, [0, 1], [-20, 20]);
  const translateSmallX = useTransform(springX, [0, 1], [20, -20]);
  const translateSmallY = useTransform(springY, [0, 1], [20, -20]);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="container relative z-20 flex flex-col items-center justify-center max-w-6xl mx-auto px-4">
        {/* Sparkles and Gradient - Unchanged logic, just positioning tweaks if needed */}
        <div className="absolute w-[20vw] h-[40vh] mix-blend-screen left-[7vw] -top-1/3 pointer-events-none">
          <motion.div
            style={{ x: translateLargeX, y: translateLargeY }}
            className="h-full w-full absolute top-0 bg-gradient-radial rounded-full from-amber-500/10 to-red-500/10 -z-10 blur-3xl fade-in slide-in-from-top-10 duration-1000 delay-500 mix-blend-screen pointer-events-none"
          ></motion.div>
        </div>

        {/* Secondary Gradient Blob for Balance */}
        <motion.div
          style={{ x: translateSmallX, y: translateSmallY }}
          className="absolute w-[20vw] h-[40vh] right-[5vw] top-[10vh] bg-purple-500/10 rounded-full blur-3xl -z-10 fade-in duration-1000 delay-500 mix-blend-screen pointer-events-none"
        ></motion.div>

        {/* Content */}
        <div className="w-full flex flex-col items-start lg:items-center text-left lg:text-center z-30">
          <motion.h1
            className="text-7xl lg:text-[100px] font-title-light-italic tracking-tight font-light text-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out cursor-default"
            whileHover={{ scale: 1.02, textShadow: "0 0 30px rgba(255,255,255,0.2)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Alex Benny
          </motion.h1>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-4 lg:mt-6 font-sans tracking-tight font-normal text-muted-foreground max-w-4xl animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200 fill-mode-backwards ease-out">
            Software Engineer with <motion.span
              className="text-foreground font-medium inline-block cursor-default"
              whileHover={{ scale: 1.05, color: "#ffffff" }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >3 years</motion.span> of industry experience
          </h2>

          <p className="mt-6 lg:mt-10 text-lg lg:text-xl text-muted-foreground/80 leading-relaxed max-w-2xl text-balance animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300 fill-mode-backwards ease-out">
            I build user-friendly applications by turning complex problems into clean, efficient code. Always learning new technologies to stay ahead of the curve.
          </p>

          <div className="mt-10 lg:mt-14 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-backwards ease-out">
            <Link
              href="mailto:alexbenny2811@gmail.com"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-foreground px-8 font-medium text-background transition-all duration-300 hover:bg-foreground/90 hover:scale-105 hover:ring-2 hover:ring-foreground/20 hover:ring-offset-2 hover:ring-offset-background"
            >
              <span className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="relative">Let's connect</span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce duration-2000 z-30 text-muted-foreground/50">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <rect x="5" y="2" width="14" height="20" rx="7" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 6V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
