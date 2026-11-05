"use client";

import Image from "next/image";
import { useState } from "react";
import { FaPlay } from "react-icons/fa6";
import type { Video } from "@/app/_lib/youtube";

type Props = {
  video: Video;
  compact?: boolean;
};

export default function ShortCard({ video, compact = false }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className={compact ? "short short-compact" : "short"}>
      <div className="short-screen">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button type="button" onClick={() => setPlaying(true)} aria-label={`Play ${video.title}`}>
            <Image src={video.thumb} alt="" fill sizes={compact ? "180px" : "280px"} />
            <span className="short-play" aria-hidden>
              <FaPlay />
            </span>
          </button>
        )}
      </div>
      {!compact && <p>{video.title}</p>}
    </article>
  );
}
