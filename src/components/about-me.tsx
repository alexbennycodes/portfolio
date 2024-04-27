import React from "react";

const SKILLS = [
  "TypeScript",
  "CSS",
  "React.js, Next.js",
  "React Native",
  "Redux",
  "Node.js, Express.js",
  "PostgreSQL",
  "Prisma",
];

const AboutMe = () => {
  return (
    <section className="container max-w-5xl">
      <div className="flex-1  relative">
        <div className="relative flex flex-col items-start h-full">
          <div className="flex items-center gap-3">
            <svg
              fill="white"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>

              <g id="SVGRepo_iconCarrier">
                <path d="M30.531 15.47l-14.001-14c-0.136-0.136-0.323-0.22-0.53-0.22s-0.395 0.084-0.53 0.22l-14 14c-0.136 0.136-0.22 0.323-0.22 0.53s0.084 0.395 0.22 0.53l14 14.001c0.136 0.135 0.323 0.219 0.53 0.219s0.394-0.084 0.53-0.219l14.001-14.001c0.135-0.136 0.218-0.323 0.218-0.53s-0.083-0.394-0.218-0.53l0 0zM16 28.939l-12.939-12.939 12.939-12.939 12.939 12.939z"></path>
              </g>
            </svg>
            <h2 className="text-4xl lg:text-5xl tracking-tight font-title italic">
              Skills
            </h2>
          </div>
          <div className="border bg-primary-foreground border-white/10 border-dashed p-8 sm:py-12 mt-12">
            <p className="space-y-4 tracking-wider leading-relaxed text-gray-200/60 font-medium text-sm">
              I constantly learn new and exciting concepts in computer science
              and web development. I try applying these concepts to solve
              real-world problems. A few technologies I enjoy working with:
            </p>
            <ul className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-7 font-medium">
              {SKILLS.map((skill: string) => (
                <li className="flex items-center gap-3 group" key={skill}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M5 12l14 0"></path>
                    <path d="M13 18l6 -6"></path>
                    <path d="M13 6l6 6"></path>
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
