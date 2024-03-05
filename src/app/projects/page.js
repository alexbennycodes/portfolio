"use client";

import Curve from "@/components/Curve";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Coming Soon",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Coming Soon",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Coming Soon",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Coming Soon",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Coming Soon",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Coming Soon",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Coming Soon",
    id: 7,
  },
];

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 bg-transparent backdrop-blur-3xl rounded-md border border-white/10"
    >
      <div className="grain opacity-25"></div>
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="p-8 text-6xl font-black uppercase text-white pointer-events-none text-center">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default function About() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0.75%", "-65%"]);

  return (
    <Curve>
      <div
        className="h-screen relative w-full overflow-auto z-10"
        ref={targetRef}
      >
        <section className="relative h-[300vh]">
          <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
            <div
              className="pointer-events-none absolute inset-x-0 transform-gpu overflow-hidden blur-3xl bottom-24"
              aria-hidden="true"
            >
              <div
                className="relative right-[-60vw] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#0be881] to-[#05c46b]  opacity-30 sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              ></div>
            </div>
            <motion.h1
              initial="initial"
              animate="enter"
              className="text-7xl font-semibold text-[#0be881] container mx-auto"
            >
              Projects
            </motion.h1>
            <div className="flex mt-14">
              <motion.div style={{ x }} className="flex gap-4">
                {cards.map((card) => {
                  return <Card card={card} key={card.id} />;
                })}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Curve>
  );
}
