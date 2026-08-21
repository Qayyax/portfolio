import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/_ui/layout/navbar";
import { fraunces, ibmPlexMono, inter } from "./_ui/fonts";
import Footer from "./_ui/layout/footer";

export const metadata: Metadata = {
  title: "Tife Olatunji — Log",
  description:
    "Nigeria-raised, Toronto-based. Training, art, photography, video, and language learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${ibmPlexMono.variable} ${inter.variable} antialiased flex flex-col min-h-dvh`}
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
