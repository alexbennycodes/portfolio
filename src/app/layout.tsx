import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Alex Benny",
  description:
    "I'm a developer who builds user-friendly applications. I love turning complex problems into clean, efficient code. I'm always learning new technologies and frameworks to stay ahead of the curve. If you're looking for someone who's passionate about creating great software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(outfit.variable, cormorant.variable, "font-sans antialiased")}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
