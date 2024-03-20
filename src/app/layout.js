import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alex Benny",
  description:
    "Front-end developer specializing in crafting user-centric interfaces",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
