export type Video = {
  id: string;
  title: string;
  publishedAt: string;
  duration: string;
  thumb: string;
};

export type ChannelFeed = {
  long: Video[];
  shorts: Video[];
};

type PlaylistResponse = {
  items?: { contentDetails: { videoId: string } }[];
};

type Thumb = { url: string };

type VideosResponse = {
  items?: {
    id: string;
    snippet: {
      title: string;
      publishedAt: string;
      liveBroadcastContent: string;
      thumbnails: { maxres?: Thumb; standard?: Thumb; high?: Thumb; medium?: Thumb };
    };
    contentDetails: { duration: string };
  }[];
};

const API = "https://www.googleapis.com/youtube/v3";
const REVALIDATE_SECONDS = 600;
// YouTube Shorts can run up to 3 minutes; the channel's full logs are far longer.
const SHORT_MAX_SECONDS = 180;

async function youtube<T>(path: string, params: Record<string, string>): Promise<T> {
  const query = new URLSearchParams({ ...params, key: process.env.YOUTUBE_API ?? "" });
  const res = await fetch(`${API}/${path}?${query}`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) throw new Error(`YouTube ${path} responded ${res.status}`);
  return res.json();
}

function toSeconds(iso: string) {
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  const [hours, minutes, seconds] = [match?.[1], match?.[2], match?.[3]].map(Number);
  return (hours || 0) * 3600 + (minutes || 0) * 60 + (seconds || 0);
}

function toClock(total: number) {
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = String(total % 60).padStart(2, "0");
  return hours
    ? `${hours}:${String(minutes).padStart(2, "0")}:${seconds}`
    : `${minutes}:${seconds}`;
}

/** Newest uploads, split into full videos and Shorts. Empty if YouTube is unreachable. */
export async function getChannelFeed(): Promise<ChannelFeed> {
  const channelId = process.env.YOUTUBE_ID;
  if (!channelId || !process.env.YOUTUBE_API) return { long: [], shorts: [] };

  try {
    const uploads = await youtube<PlaylistResponse>("playlistItems", {
      part: "contentDetails",
      playlistId: `UU${channelId.slice(2)}`,
      maxResults: "50",
    });
    const ids = uploads.items?.map((item) => item.contentDetails.videoId) ?? [];
    if (ids.length === 0) return { long: [], shorts: [] };

    const details = await youtube<VideosResponse>("videos", {
      part: "snippet,contentDetails",
      id: ids.join(","),
    });

    const feed: ChannelFeed = { long: [], shorts: [] };
    const videos = (details.items ?? [])
      .filter((video) => video.snippet.liveBroadcastContent === "none")
      .sort((a, b) => b.snippet.publishedAt.localeCompare(a.snippet.publishedAt));

    for (const video of videos) {
      const { maxres, standard, high, medium } = video.snippet.thumbnails;
      const seconds = toSeconds(video.contentDetails.duration);
      (seconds <= SHORT_MAX_SECONDS ? feed.shorts : feed.long).push({
        id: video.id,
        title: video.snippet.title,
        publishedAt: video.snippet.publishedAt,
        duration: toClock(seconds),
        thumb: (maxres ?? standard ?? high ?? medium)?.url ?? "",
      });
    }
    return feed;
  } catch (error) {
    console.error("Could not load YouTube feed", error instanceof Error ? error.message : error);
    return { long: [], shorts: [] };
  }
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-CA", {
    month: "short",
    day: "numeric",
    timeZone: "America/Toronto",
  });
}
