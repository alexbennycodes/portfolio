import Navbar from "@/components/navbar";
import { Bricolage_Grotesque, Caveat, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const title = Bricolage_Grotesque({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-title",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const zeyada = Caveat({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-cursive",
});

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
      <body className={cn(title.variable, inter.variable, zeyada.variable)}>
        <Navbar />
        <>{children}</>
      </body>
    </html>
  );
}
