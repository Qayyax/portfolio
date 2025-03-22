import type { Metadata } from "next";
import { Doto } from "next/font/google";
import "./globals.css";

const doto = Doto({
  subsets: ["latin"],
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
      <body className={` ${doto.className} antialiased`}>{children}</body>
    </html>
  );
}
