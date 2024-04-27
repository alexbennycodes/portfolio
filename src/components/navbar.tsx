import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-7 w-full z-30 animate-in fade-in-10 slide-in-from-top-10 duration-1000">
      <div className="container max-w-5xl flex items-center justify-between">
        <div className="w-fit p-4 rounded-full bg-primary-foreground shadow-xl border border-white/10 border-dashed relative">
          <div className="h-5 w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 732.65 521.65"
              width="100%"
              height="100%"
              fill="currentColor"
            >
              <path
                d="M686.1,291.66a127.68,127.68,0,0,0-67.71-29.58l-5.63-.69c0-.15,0-.31,0-.46.32-.06.64-.14,1-.17a122.73,122.73,0,0,0,18.47-3,130.57,130.57,0,0,0,98.23-151.3,126,126,0,0,0-36.49-68.62C668.66,13.12,638.23.17,602.84.11Q453.47-.18,304.12,0c-.59,0-1.17,0-1.75,0a1.85,1.85,0,0,0-2,1.16c-.24.52-.57,1-.86,1.51L61.25,415.35,1.42,519c-.44.76-.83,1.55-1.42,2.65H601.56a133.69,133.69,0,0,0,30-3.36c65.89-15.15,112-79.68,98.87-151C724.78,336.86,709.75,311.62,686.1,291.66ZM230.77,385.19l-.11-.26c0-.08-.08-.17,0-.23a11.62,11.62,0,0,1,.53-1.13q33.63-58.18,67.27-116.37c.07-.13.27-.19.53-.36l68.33,118.35Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <div className="w-fit py-4 px-6 rounded-full bg-primary-foreground shadow-xl border border-white/10 border-dashed relative flex gap-5">
          <Link
            href="https://github.com/alexbennycodes"
            className="h-5 w-5 hover:scale-110 transition-all duration-200"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 496 512"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/alex-benny28/"
            className="h-5 w-5 hover:scale-110 transition-all duration-200"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
            </svg>
          </Link>
          <Link
            href="https://twitter.com/AlexBennyTwts"
            target="_blank"
            className="h-5 w-5 hover:scale-110 transition-all duration-200"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="100%"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
