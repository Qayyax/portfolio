import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/_ui/layout/navbar";
import { dotGothic16 } from "./_ui/fonts";
import Footer from "./_ui/layout/footer";

export const metadata: Metadata = {
  title: "Qayyax",
  description:
    "Running, drawing, photography, cycling, film, and language learning — a log of my interests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dotGothic16.className} font-mono antialiased flex flex-col min-h-dvh`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
