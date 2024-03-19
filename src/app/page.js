"use client";

import Curve from "@/components/Curve";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const slideUp = {
  initial: {
    y: 300,
  },
  enter: {
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.75 },
  },
};

const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.75 },
  },
};

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <Curve>
      <div
        className="pointer-events-none absolute inset-x-0 transform-gpu overflow-hidden blur-3xl sm:-top-40"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0be881] to-[#05c46b] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <motion.main
        initial="initial"
        animate="enter"
        className="relative h-full flex overflow-hidden z-10"
        variants={slideUp}
      >
        <div className="absolute -bottom-1">
          <div ref={slider} className="relative whitespace-nowrap">
            <h1
              ref={firstText}
              className="relative text-[#0be881] text-[100px] md:text-[12vw] font-medium pr-[50px]"
            >
              Frontend Developer -
            </h1>
            <h1
              ref={secondText}
              className="absolute text-[#0be881] text-[100px] md:text-[12vw] font-medium pr-[50px] left-full top-0"
            >
              Frontend Developer -
            </h1>
          </div>
        </div>
        <motion.div
          data-scroll
          data-scroll-speed={0.1}
          className="absolute top-[45%] right-[20%] text-white space-y-3"
          initial="initial"
          animate="enter"
          variants={opacity}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </svg>
          <h2 className="text-4xl lg:text-5xl tracking-wide">Alex Benny</h2>
          <div className="text-[#0be881] flex gap-5 items-center">
            <Link
              href="https://github.com/alexbennycodes"
              target="_blank"
              className="hover:text-white duration-500 transition-all ease-in-out"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.9992 5.95846C21.0087 6.565 20.9333 7.32649 20.8658 7.8807C20.8395 8.09686 20.8037 8.27676 20.7653 8.42453C21.6227 10.01 22 11.9174 22 14C22 16.4684 20.8127 18.501 18.9638 19.8871C17.1319 21.2605 14.6606 22 12 22C9.33939 22 6.86809 21.2605 5.0362 19.8871C3.18727 18.501 2 16.4684 2 14C2 11.9174 2.37732 10.01 3.23472 8.42452C3.19631 8.27676 3.16055 8.09685 3.13422 7.8807C3.06673 7.32649 2.99133 6.565 3.00081 5.95846C3.01149 5.27506 3.10082 4.5917 3.19988 3.91379C3.24569 3.60028 3.31843 3.30547 3.65883 3.11917C4.00655 2.92886 4.37274 2.99981 4.73398 3.1021C5.95247 3.44713 7.09487 3.93108 8.16803 4.51287C9.2995 4.17287 10.5783 4 12 4C13.4217 4 14.7005 4.17287 15.832 4.51287C16.9051 3.93108 18.0475 3.44713 19.266 3.1021C19.6273 2.99981 19.9935 2.92886 20.3412 3.11917C20.6816 3.30547 20.7543 3.60028 20.8001 3.91379C20.8992 4.5917 20.9885 5.27506 20.9992 5.95846ZM20 14C20 12.3128 19.6122 10 17.5 10C16.5478 10 15.6474 10.2502 14.7474 10.5004C13.8482 10.7502 12.9495 11 12 11C11.0505 11 10.1518 10.7502 9.25263 10.5004C8.35261 10.2502 7.45216 10 6.5 10C4.39379 10 4 12.3197 4 14C4 15.7636 4.82745 17.231 6.23588 18.2869C7.66135 19.3556 9.69005 20 12 20C14.3099 20 16.3386 19.3555 17.7641 18.2869C19.1726 17.231 20 15.7636 20 14ZM10 14.5C10 15.8807 9.32843 17 8.5 17C7.67157 17 7 15.8807 7 14.5C7 13.1193 7.67157 12 8.5 12C9.32843 12 10 13.1193 10 14.5ZM15.5 17C16.3284 17 17 15.8807 17 14.5C17 13.1193 16.3284 12 15.5 12C14.6716 12 14 13.1193 14 14.5C14 15.8807 14.6716 17 15.5 17Z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/in/alex-benny28"
              target="_blank"
              className="hover:text-white duration-500 transition-all ease-in-out"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  stroke="none"
                />
              </svg>
            </Link>
            <Link
              href="https://twitter.com/AlexBennyTwts"
              target="_blank"
              className="hover:text-white duration-500 transition-all ease-in-out"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
              >
                <path
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z"
                  stroke="none"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </motion.main>
    </Curve>
  );
}
