import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/_ui/layout/navbar";
import { dotGothic16 } from "./_ui/fonts";
import Footer from "./_ui/layout/footer";

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
        <Footer />
      </body>
    </html>
  );
}
