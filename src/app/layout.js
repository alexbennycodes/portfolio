import Navbar from "@/components/navbar";
import { DM_Sans } from "next/font/google";
import Providers from "./Providers";
import "./globals.css";

const dm_sans = DM_Sans({ subsets: ["latin"] });

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
      <body className={dm_sans.className}>
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
