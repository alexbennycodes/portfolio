"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { curve, text, translate } from "./anim";

const routes = {
  "/": "Home",
  "/about": "About",
  "/projects": "Projects",
};

const anim = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

export default function Curve({ children }) {
  const pathname = usePathname();

  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className="fixed h-[calc(100vh_+_600px)] w-screen pointer-events-none left-0 top-0 bg-primary transition-opacity duration-0 ease-linear delay-100 z-[9999]"
      />
      <motion.h1
        className="absolute left-1/2 top-[40%] text-white font-semibold text-7xl z-[9999]  -translate-x-1/2 text-center"
        {...anim(text)}
      >
        {routes[pathname]}
      </motion.h1>
      {dimensions.width != null && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

const SVG = ({ height, width }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg
      {...anim(translate)}
      className="fixed h-[calc(100vh_+_600px)] w-screen pointer-events-none left-0 top-[-300px] z-[9998]"
    >
      <motion.path {...anim(curve(initialPath, targetPath))} fill="#0db2f8" />
    </motion.svg>
  );
};
