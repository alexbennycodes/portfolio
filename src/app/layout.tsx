import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const inter = Raleway({ subsets: ["latin"] });

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
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn(inter.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
