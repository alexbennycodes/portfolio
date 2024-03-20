"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const links = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <nav role="navigation" className="lg:hidden">
        <div className="flex flex-col z-10 select-none">
          <input
            type="checkbox"
            className="flex w-7 h-[32px] absolute cursor-pointer opacity-0 z-30 peer"
            checked={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          />
          <span className="flex w-7 h-[3px] mb-[6.5px] relative bg-white rounded z-30 origin-top-left duration-500 transition-all peer-checked:rotate-45 peer-checked:translate-[-3px, -1px] peer-checked:bg-white"></span>
          <span className="flex w-7 h-[3px] mb-[6.5px] relative bg-white rounded z-30 origin-[5px 0] duration-500 transition-all peer-checked:opacity-0 peer-checked:bg-white"></span>
          <span className="flex w-7 h-[3px] mb-[6.5px] relative bg-white rounded z-30 duration-500 transition-all origin-bottom-left peer-checked:opacity-100 peer-checked:-rotate-45 peer-checked:bg-white"></span>
          <div className="fixed top-[0px] right-0 h-screen  w-screen bg-black/40 backdrop-blur-md origin-center translate-x-[120vw] transform duration-500 peer-checked:transform-none z-20"></div>
          <ul className="fixed top-0 right-0 md:w-[350px] w-[75%] h-screen shadow-sm shadow-white/40 p-[50px] bg-primary origin-center translate-x-[120vw] transform duration-500 peer-checked:translate-x-[7%] flex flex-col items-end pr-[40px] pt-[75px] z-20">
            {links.map((link, i) => (
              <li
                className="py-5  text-white text-3xl font-medium capitalize"
                key={i}
              >
                <button
                  onClick={() => {
                    router.push(link.href);
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-white  gap-4 mx-auto p-4 md:py-8 rounded-lg w-[95%] inset-x-0 z-20 top-0 fixed backdrop-blur-md">
      <div className="flex gap-2 items-center py-2">
        <Link
          className="flex items-center space-x-2 flex-shrink-0 relative z-10"
          href="/"
        >
          <div className="duration-500 transition-all ease-in-out hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 732.65 521.65"
              width={42}
              height={42}
              fill="currentColor"
            >
              <path
                d="M686.1,291.66a127.68,127.68,0,0,0-67.71-29.58l-5.63-.69c0-.15,0-.31,0-.46.32-.06.64-.14,1-.17a122.73,122.73,0,0,0,18.47-3,130.57,130.57,0,0,0,98.23-151.3,126,126,0,0,0-36.49-68.62C668.66,13.12,638.23.17,602.84.11Q453.47-.18,304.12,0c-.59,0-1.17,0-1.75,0a1.85,1.85,0,0,0-2,1.16c-.24.52-.57,1-.86,1.51L61.25,415.35,1.42,519c-.44.76-.83,1.55-1.42,2.65H601.56a133.69,133.69,0,0,0,30-3.36c65.89-15.15,112-79.68,98.87-151C724.78,336.86,709.75,311.62,686.1,291.66ZM230.77,385.19l-.11-.26c0-.08-.08-.17,0-.23a11.62,11.62,0,0,1,.53-1.13q33.63-58.18,67.27-116.37c.07-.13.27-.19.53-.36l68.33,118.35Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div className="lg:flex absolute right-0 top-1/2 -translate-y-1/2 py-2 space-x-6 text-xl  items-center justify-center px-6 font-medium overflow-hidden uppercase hidden">
        <Link
          className="relative group bg-transparent hover:text-primary transition duration-200"
          href="/about"
        >
          About
        </Link>
        <Link
          className="relative group bg-transparent hover:text-primary transition duration-200"
          href="/projects"
        >
          Projects
        </Link>
      </div>
      <MobileNav />
    </div>
  );
};

export default Navbar;
