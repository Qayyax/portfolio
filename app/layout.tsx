import type { Metadata } from "next";
import { DotGothic16 } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_ui/layout/navbar-component";

const dotGothic16 = DotGothic16({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Qayyax",
  description:
    "Qayyax portfolio website, which also contains his store and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* I wonder why the font-mono doesn't apply directly to all the children, maybe cause of the font style */}
      <body className={` ${dotGothic16.className} font-mono antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
