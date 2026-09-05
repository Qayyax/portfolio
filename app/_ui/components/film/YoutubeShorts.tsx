type YouTubeSearchResponse = {
  items: YouTubeSearchResult[];
};

type YouTubeSearchResult = {
  id: { videoId?: string };
  snippet: { title: string };
};

export default async function YoutubeShorts() {
  try {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API}&part=snippet&channelId=${process.env.YOUTUBE_ID}&type=video&videoDuration=short&maxResults=4&order=date`,
      { next: { revalidate: 3600 } },
    );
    const data: YouTubeSearchResponse = await res.json();
    const items = data.items?.filter((v) => v.id.videoId) ?? [];

    if (items.length === 0) return null;

    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {items.slice(0, 4).map((v) => (
          <div key={v.id.videoId} className="flex flex-col gap-2">
            <div className="relative overflow-hidden rounded-xl border-2 border-purple-500/30" style={{ aspectRatio: "9/16" }}>
              <iframe
                src={`https://www.youtube.com/embed/${v.id.videoId}`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-xs font-mono text-gray-500 leading-snug line-clamp-2">{v.snippet.title}</p>
          </div>
        ))}
      </div>
    );
  } catch {
    return null;
  }
}
