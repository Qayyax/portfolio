"use client";

import Image from "next/image";
import { useRef, useState, type PointerEvent } from "react";
import { FaPlay, FaYoutube } from "react-icons/fa6";
import { YOUTUBE_URL } from "@/app/_data_exports/socials";
import type { Video } from "@/app/_lib/youtube";

const MAX_TILT_DEGREES = 6;

export default function Player({ video }: { video?: Video }) {
  const ref = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  const tilt = (event: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || playing || event.pointerType === "touch") return;
    const box = el.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width;
    const y = (event.clientY - box.top) / box.height;
    el.style.setProperty("--tilt-x", `${(0.5 - y) * MAX_TILT_DEGREES * 2}deg`);
    el.style.setProperty("--tilt-y", `${(x - 0.5) * MAX_TILT_DEGREES * 2}deg`);
    el.style.setProperty("--glare-x", `${x * 100}%`);
    el.style.setProperty("--glare-y", `${y * 100}%`);
  };

  const settle = () => {
    ref.current?.style.setProperty("--tilt-x", "0deg");
    ref.current?.style.setProperty("--tilt-y", "0deg");
  };

  if (!video) {
    return (
      <div className="player">
        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="player-screen player-fallback"
        >
          <FaYoutube aria-hidden /> Watch on YouTube
        </a>
      </div>
    );
  }

  return (
    <div className="player" ref={ref} onPointerMove={tilt} onPointerLeave={settle}>
      <div className="player-ambient" aria-hidden>
        <Image src={video.thumb} alt="" fill sizes="50vw" quality={30} priority />
      </div>
      <div className="player-screen">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button type="button" onClick={() => { settle(); setPlaying(true); }} aria-label={`Play ${video.title}`}>
            <Image
              src={video.thumb}
              alt=""
              fill
              priority
              sizes="(max-width: 900px) 100vw, 60vw"
            />
            <span className="player-glare" aria-hidden />
            <span className="player-corners" aria-hidden />
            <span className="player-play" aria-hidden>
              <FaPlay />
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
