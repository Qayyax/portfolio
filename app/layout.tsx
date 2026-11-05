import type { Metadata } from "next";
import "./globals.css";
import { monoton, righteous, vt323 } from "./_ui/fonts";

export const metadata: Metadata = {
  title: "TifeLogs",
  description: "Daily gym logs, Shorts and the weekly training plan from Tife Olatunji.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${monoton.variable} ${righteous.variable} ${vt323.variable}`}>
      <body>{children}</body>
    </html>
  );
}
