import type { Video } from "@/app/_lib/youtube";

export default function Ticker({ videos }: { videos: Video[] }) {
  if (videos.length === 0) return null;

  // Two identical runs let the CSS loop wrap without a visible jump.
  return (
    <div className="ticker">
      {[false, true].map((isCopy) => (
        <div key={String(isCopy)} className="ticker-run" aria-hidden={isCopy}>
          {videos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={isCopy ? -1 : undefined}
            >
              {video.title}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}
