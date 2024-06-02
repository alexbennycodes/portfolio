import React from "react";
import { SparklesCore } from "@/components/sparkles";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative">
      <div className="flex flex-col items-center justify-center container max-w-5xl overflow-x-hidden lg:min-h-screen max-w-screen pt-52 pb-56 lg:pt-6 lg:pb-0">
        <div className="absolute w-[25vw] lg:w-[15vw] h-full mix-blend-screen -rotate-[55deg] left-[7vw] -top-1/3 ">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={25}
            speed={2}
            className="w-full h-full"
            particleColor="#eaeeff"
          />
          <div className="h-full w-full absolute top-0 bg-gradient-radial rounded-full from-white/60 lg:from-white/50 to-transparent z-10 blur-3xl animate-in fade-in-10 slide-in-from-top-10"></div>
        </div>
        <div className="w-full duration-1000 animate-in fade-in-10 slide-in-from-bottom-10">
          <h1 className="text-7xl lg:text-[95px] font-title-light-italic tracking-tight font-light">
            Alex Benny
          </h1>
          <h2 className="text-4xl leading-8 lg:text-7xl mt-5 lg:mt-10 font-title tracking-tight font-light text-gray-300">
            Software{" "}
            <span className="font-normal text-gray-200 italic">Engineer</span>{" "}
            with <br />{" "}
            <span className="text-gray-200 lg:text-[100px] leading-[8px]">
              2
            </span>{" "}
            years of industry{" "}
            <span className="italic text-gray-200">experience</span>
          </h2>
          <p className="mt-5 lg:mt-12 lg:text-xl text-gray-200/60 font-medium lg:tracking-wider text-balance">
            {`I'm a developer who builds user-friendly applications.  I love turning complex problems into clean, efficient code.  I'm always learning new technologies and frameworks to stay ahead of the curve.  If you're looking for someone who's passionate about creating great software.`}
          </p>
          <Link
            href="mailto:alexbenny2811@gmail.com"
            className="relative text-sm lg:text-base inline-flex h-10 lg:h-12 items-center justify-center bg-white px-6 font-medium text-gray-950 transition-colors focus:outline-none focus:ring-0 mt-10 rounded-full group/button"
          >
            <div className="absolute -inset-0.5 -z-10 rounded-full bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur group-hover/button:opacity-100 group-hover/button:blur-md transition-all duration-200 ease-in-out" />
            <svg
              viewBox="-0.5 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              className="mr-2"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M9.00977 21.39H19.0098C20.0706 21.39 21.0881 20.9685 21.8382 20.2184C22.5883 19.4682 23.0098 18.4509 23.0098 17.39V7.39001C23.0098 6.32915 22.5883 5.31167 21.8382 4.56152C21.0881 3.81138 20.0706 3.39001 19.0098 3.39001H7.00977C5.9489 3.39001 4.93148 3.81138 4.18134 4.56152C3.43119 5.31167 3.00977 6.32915 3.00977 7.39001V12.39"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M1.00977 18.39H11.0098"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M1.00977 15.39H5.00977"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M22.209 5.41992C16.599 16.0599 9.39906 16.0499 3.78906 5.41992"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
            {`Let's connect`}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
