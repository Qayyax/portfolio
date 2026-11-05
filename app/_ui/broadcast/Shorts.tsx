"use client";

import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import type { Video } from "@/app/_lib/youtube";
import ShortCard from "./ShortCard";

export default function Shorts({ videos }: { videos: Video[] }) {
  const rail = useRef<HTMLDivElement>(null);

  const slide = (direction: 1 | -1) => {
    const el = rail.current;
    if (el) el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section id="shorts" className="section section-bleed">
      <div className="section-head reveal">
        <h2>Shorts</h2>
        <div className="rail-controls">
          <button type="button" onClick={() => slide(-1)} aria-label="Previous Shorts">
            <FaArrowLeft aria-hidden />
          </button>
          <button type="button" onClick={() => slide(1)} aria-label="Next Shorts">
            <FaArrowRight aria-hidden />
          </button>
        </div>
      </div>
      <div ref={rail} className="rail">
        {videos.map((video) => (
          <ShortCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}
