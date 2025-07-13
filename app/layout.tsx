import type { Metadata } from "next";
import { DotGothic16 } from "next/font/google";
import "./globals.css";
import { doto } from "./_ui/fonts";
import MobileLeft from "./_ui/layout/mobile-nav-right";
import DesktopNav from "./_ui/layout/desktop-nav";

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
        <nav className="flex justify-between items-center border-b-4 border-b-purple-500 p-3 sticky top-0 dark:bg-black bg-white">
          <h3
            className={`flex gap-2 font-extrabold text-2xl ${doto.className}`}
          >
            Tife<span className="hidden md:block">Olatunji</span>
          </h3>
          <div>
            {/* putting nav routes here for desktop and tab */}
            {/* Time to work on the desktop version */}
            <MobileLeft />
            <DesktopNav />
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
