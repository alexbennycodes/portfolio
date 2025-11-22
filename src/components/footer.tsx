import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 text-center text-white/30 text-sm tracking-wide">
      <p>© {new Date().getFullYear()} Alex Benny. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
