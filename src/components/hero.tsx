import React from "react";
import { SparklesCore } from "@/components/sparkles";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="pb-24 flex flex-col items-center justify-center container max-w-5xl overflow-x-hidden min-h-screen max-w-screen">
      <div className="absolute w-[15vw] h-full mix-blend-screen -rotate-[55deg] left-[7vw] -top-1/3 rounded-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={25}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <svg
        className={cn(
          "pointer-events-none absolute z-[1]  h-[169%] lw-[138%] -top-[100vh] -left-[65vw] hidden lg:block"
        )}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3787 2842"
        fill="none"
      >
        <g filter="url(#filter)">
          <ellipse
            cx="1924.71"
            cy="273.501"
            rx="1924.71"
            ry="273.501"
            transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
            fill={"white"}
            fillOpacity="0.21"
          ></ellipse>
        </g>
        <defs>
          <filter
            id="filter"
            x="0.860352"
            y="0.838989"
            width="3785.16"
            height="2840.26"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="151"
              result="effect1_foregroundBlur_1065_8"
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg>
      <div className="w-full">
        <h1 className="text-5xl lg:text-[95px] cormorant-garamond-light-italic tracking-tight font-light">
          Alex Benny
        </h1>
        <h2 className="text-3xl leading-8 lg:text-7xl mt-5 lg:mt-10 cormorant-garamond tracking-tight font-light text-white/80">
          Software{" "}
          <span className="inline-flex gap-2 lg:gap-3 items-center lg:items-end">
            <span className="font-normal text-white italic">Engineer</span> with{" "}
            <span className="h-5 w-5 lg:h-14 lg:w-12">
              <svg
                fill="currentColor"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                opacity={0.8}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>arrow-down</title>{" "}
                  <path d="M26.531 19.469c-0.136-0.136-0.324-0.22-0.531-0.22s-0.395 0.084-0.531 0.22v0l-8.719 8.721v-26.189c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 26.188l-8.72-8.72c-0.136-0.134-0.322-0.218-0.528-0.218-0.415 0-0.751 0.336-0.751 0.751 0 0.207 0.083 0.394 0.218 0.529l10 10c0.026 0.026 0.065 0.017 0.093 0.038 0.052 0.040 0.088 0.098 0.15 0.124 0.085 0.035 0.184 0.056 0.287 0.057h0c0.207 0 0.394-0.084 0.53-0.219l10.001-10c0.135-0.136 0.218-0.324 0.218-0.531s-0.083-0.395-0.218-0.531l0 0z"></path>{" "}
                </g>
              </svg>
            </span>
          </span>
          <br />
          over{" "}
          <span className="text-white lg:text-[100px] leading-[8px]">
            2
          </span>{" "}
          year of Industry <span className="italic">experience</span>
        </h2>
        <p className="mt-5 lg:mt-12 text-sm lg:text-xl font-extralight lg:tracking-wider">
          {`I'm a developer who builds user-friendly applications.  I love turning complex problems into clean, efficient code.  I'm always learning new technologies and frameworks to stay ahead of the curve.  If you're looking for someone who's passionate about creating great software`}
        </p>
      </div>
    </section>
  );
};

export default Hero;
