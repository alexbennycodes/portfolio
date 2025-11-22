import type { Metadata, Viewport } from "next";
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
  title: "Alex Benny | Software Engineer",
  description:
    "Software Engineer with 3 years of industry experience. I build user-friendly applications by turning complex problems into clean, efficient code.",
  keywords: ["Software Engineer", "Web Developer", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Alex Benny" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={cn(outfit.variable, cormorant.variable, "font-sans antialiased")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
