"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const cards = [
  {
    url: "/project3.png",
    title: "Resume Rocket",
    liveLink: "https://resume-rocket-one.vercel.app/",
    githubLink: "https://github.com/alexbennycodes/resume-rocket",
    id: 1,
  },
  {
    url: "/project1.png",
    title: "TerraSpark",
    liveLink: "https://terra-spark.vercel.app/",
    githubLink: "https://github.com/alexbennycodes/terra-spark",
    id: 2,
  },
  {
    url: "/project2.jpeg",
    title: "Wordle Clone",
    liveLink: "https://alexbennycodes.github.io/wordle-clone/",
    githubLink: "https://github.com/alexbennycodes/wordle-clone",

    id: 3,
  },
  {
    url: null,
    title: "Coming Soon",
    id: 4,
  },
];

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[300px] md:h-[400px] aspect-[16/9] overflow-hidden bg-neutral-200 bg-transparent backdrop-blur-3xl rounded-md border border-white/10"
    >
      {card.url && (
        <Image alt={card.title} src={card.url} fill className="object-cover" />
      )}
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute bottom-0 w-full z-10 h-3/4 flex flex-col justify-end bg-gradient-to-b from-transparent to-black">
        <div className="p-8 flex items-center gap-3 justify-between">
          <h1 className="text-4xl font-bold tracking-tight text-white pointer-events-none">
            {card.title}
          </h1>
          <div className="flex items-center gap-5">
            {card.liveLink && (
              <Link href={card.liveLink} target="_blank">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="30"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white hover:text-primary"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" stroke="none" />
                  <path
                    d="M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3a2 2 0 00-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8a2 2 0 00-2-2zm0 14H3V8h18v12zM9 10v8l7-4z"
                    stroke="none"
                  />
                </svg>
              </Link>
            )}
            {card.githubLink && (
              <Link href={card.githubLink} target="_blank" className="mt-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 480 512"
                  height="30"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white hover:text-primary"
                >
                  <path
                    d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"
                    stroke="none"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function About() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0.75%", "-85%"]);

  return (
    <div
      className="h-screen relative w-full overflow-auto z-10"
      ref={targetRef}
    >
      <section className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex flex-col pt-32 md:pt-48 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-x-0 transform-gpu overflow-hidden blur-3xl bottom-24"
            aria-hidden="true"
          >
            <div
              className="relative right-[-60vw] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-blue-400 opacity-30 sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
          <motion.h1
            initial="initial"
            animate="enter"
            className="text-5xl md:text-7xl font-bold text-primary ml-16 tracking-tighter font-title"
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
  );
}
