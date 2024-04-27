import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

interface ProjectProps {
  url: string;
  title: string;
  liveLink: string;
  githubLink: string;
  id: number;
}

const PROJECTS = [
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
];

const Projects = () => {
  return (
    <section className="container mx-auto my-48 max-w-5xl">
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
          Projects
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 max-w-6xl mx-auto mt-12 gap-8">
        {PROJECTS.map((project: ProjectProps) => (
          <div
            key={project.id}
            className="flex flex-col relative overflow-hidden shadow-md hover:shadow-xl ease-in-out group bg-primary-foreground border border-white/10 border-dashed transition-all duration-300"
          >
            <div className="p-8 sm:py-12 relative z-20 h-full flex flex-col">
              <div className="flex flex-col sm:flex-row gap-3 justify-between">
                <h3 className="text-4xl font-semibold">{project.title}</h3>
              </div>
              <p className="prose text-gray-200/60 font-medium text-sm my-8 leading-[1.8] tracking-wide drop-shadow text-balance">
                Developed a resume analysis tool utilizing Next.js and Hugging
                Face API, powered by the Mistral AI model. Enables users to
                upload their resumes for a comprehensive overview, including
                score assessment, strengths, weaknesses, and targeted job
                suggestions.
              </p>
              <div className="flex justify-between mt-auto">
                <Button
                  asChild
                  className="rounded-full shadow-xl shadow-black/20 group/button"
                >
                  <Link href={project.liveLink} target="_blank">
                    Live{" "}
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
                      className="w-4 h-4 group-hover/button:translate-x-px group-hover/button:-translate-y-px transition-transform duration-200 ease-in-out ml-1"
                    >
                      <path d="M17 7l-10 10"></path>
                      <path d="M8 7l9 0l0 9"></path>
                    </svg>
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full shadow-xl shadow-black/20 group/button"
                >
                  <Link href={project.githubLink} target="_blank">
                    Github
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
                      className="w-4 h-4 group-hover/button:translate-x-px group-hover/button:-translate-y-px transition-transform duration-200 ease-in-out ml-1"
                    >
                      <path d="M17 7l-10 10"></path>
                      <path d="M8 7l9 0l0 9"></path>
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative group-hover:scale-110 transition-all duration-300 ease-in-out">
              <div className="bg-gradient-to-b from-primary-foreground group-hover:from-blue-950/20 transition-all duration-300 ease-in-out to-transparent h-[50px] absolute top-0 w-full z-10" />
              <div className="h-[250px] w-full relative">
                <Image
                  fill
                  src={project.url}
                  alt={project.title}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
