"use client";

import { motion } from "framer-motion";

const slideDown = {
  initial: {
    y: -300,
  },
  enter: {
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
  },
};

export const slideUp = {
  initial: {
    y: 100,
  },
  enter: () => ({
    y: 0,
    transition: { duration: 0.5 },
  }),
};

export default function About() {
  return (
    <>
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

      <div className="mx-auto overflow-auto max-h-full absolute inset-0 py-32 md:py-40">
        <div className="container px-5 mx-auto">
          <motion.h1
            initial="initial"
            animate="enter"
            variants={slideDown}
            className="text-5xl md:text-7xl font-bold text-primary tracking-tighter font-title"
          >
            About
          </motion.h1>
          <div className="space-y-5  mt-8 md:mt-14 text-xl md:text-3xl">
            <motion.p
              initial="initial"
              animate="enter"
              variants={slideUp}
              custom={1}
            >
              With 2 years of experience under my belt, I&apos;m a passionate
              front-end developer specializing in crafting user-centric
              interfaces. React and its related libraries are my tools of
              choice, allowing me to translate ideas into interactive and
              visually stunning experiences.
            </motion.p>
            <motion.p
              initial="initial"
              animate="enter"
              variants={slideUp}
              custom={2}
            >
              From pixel-perfect layouts to seamless cross-device adaptation, I
              bridge the gap between design and development. I thrive on
              collaboration and clear communication, turning complex projects
              into successful realities.
            </motion.p>
            <motion.p
              initial="initial"
              animate="enter"
              variants={slideUp}
              custom={3}
            >
              Beyond coding, I&apos;m always exploring new design trends,
              tinkering with side projects, and staying up-to-date on the latest
              tech advancements.
            </motion.p>
            <motion.p
              initial="initial"
              animate="enter"
              variants={slideUp}
              custom={3}
            >
              PS: I know how to center a div. 🌝
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}
