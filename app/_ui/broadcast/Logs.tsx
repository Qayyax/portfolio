"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { YOUTUBE_URL } from "@/app/_data_exports/socials";
import { formatDate, type Video } from "@/app/_lib/youtube";

const FOLLOW_EASE = 0.14;

function splitTitle(title: string) {
  const match = title.match(/^Daily Gym Log #(\d+):\s*(.+)$/i);
  return match ? { number: `#${match[1]}`, name: match[2] } : { number: "", name: title };
}

export default function Logs({ videos }: { videos: Video[] }) {
  const preview = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const isPreviewing = active !== null;

  // The preview eases toward the pointer rather than sticking to it.
  useEffect(() => {
    if (!isPreviewing) return;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;
    let placed = false;

    const onMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (!placed) {
        placed = true;
        current.x = target.x;
        current.y = target.y;
      }
    };
    const follow = () => {
      current.x += (target.x - current.x) * FOLLOW_EASE;
      current.y += (target.y - current.y) * FOLLOW_EASE;
      preview.current?.style.setProperty("translate", `${current.x}px ${current.y}px`);
      frame = requestAnimationFrame(follow);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(follow);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, [isPreviewing]);

  return (
    <section id="logs" className="section">
      <div className="section-head reveal">
        <h2>Logs</h2>
        <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="text-link">
          All videos
        </a>
      </div>

      <ol className="logs" onPointerLeave={() => setActive(null)}>
        {videos.map((video) => {
          const { number, name } = splitTitle(video.title);
          return (
            <li key={video.id} className="reveal">
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                onPointerEnter={(event) => {
                  if (event.pointerType !== "touch") setActive(video.id);
                }}
              >
                <span className="log-number">{number}</span>
                <span className="log-title">{name}</span>
                <span className="log-facts">
                  {video.duration} / {formatDate(video.publishedAt)}
                </span>
                <span className="log-thumb" aria-hidden>
                  <Image src={video.thumb} alt="" fill sizes="120px" />
                </span>
              </a>
            </li>
          );
        })}
      </ol>

      <div ref={preview} className="log-preview" data-visible={isPreviewing} aria-hidden>
        {videos.map((video) => (
          <div key={video.id} data-active={active === video.id}>
            <Image src={video.thumb} alt="" fill sizes="340px" />
          </div>
        ))}
      </div>
    </section>
  );
}
