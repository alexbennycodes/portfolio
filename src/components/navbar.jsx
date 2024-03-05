import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between text-white container gap-4 mx-auto px-4 py-2 rounded-lg w-[95%] inset-x-0 z-10 absolute top-8">
      <div className="flex gap-2 items-center py-2">
        <Link
          className="flex items-center space-x-2 flex-shrink-0 relative z-50"
          href="/"
        >
          <div className="hover:scale-110 duration-200 transition-all ease-in-out text-[#0be881]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 732.65 521.65"
              width={46}
              height={46}
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
      <div className="flex absolute right-0 top-1/2 -translate-y-1/2 py-2 space-x-6 text-3xl md:text-[1vw] items-center justify-center px-6 font-medium overflow-hidden uppercase">
        <Link
          className="relative group bg-transparent hover:text-[#0be881] transition duration-200"
          href="/about"
        >
          About
        </Link>
        <Link
          className="relative group bg-transparent hover:text-[#0be881] transition duration-200"
          href="/projects"
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
