import { Doto, DotGothic16, Fraunces, IBM_Plex_Mono, Inter } from "next/font/google";

export const dotGothic16 = DotGothic16({
  subsets: ["latin"],
  weight: ["400"],
});

export const doto = Doto({
  subsets: ["latin"],
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
});

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-plex",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});
