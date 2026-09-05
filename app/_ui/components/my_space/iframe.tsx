type YouTubeSearchResponse = {
  kind: "youtube#searchListResponse";
  etag: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YouTubeSearchResult[];
};

type YouTubeSearchResult = {
  kind: "youtube#searchResult";
  etag: string;
  id: {
    kind: "youtube#video" | "youtube#channel" | "youtube#playlist";
    videoId?: string;
    channelId?: string;
    playlistId?: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: Thumbnail;
      medium: Thumbnail;
      high: Thumbnail;
    };
    channelTitle: string;
    liveBroadcastContent: "none" | "upcoming" | "live";
    publishTime: string;
  };
};

type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

export default async function Iframe() {
  const EMBED_URL = "https://www.youtube.com/embed/";

  try {
    const liveStreamRequest = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API}&part=snippet&channelId=${process.env.YOUTUBE_ID}&eventType=live&type=video`,
      { cache: "no-store" },
    );
    const liveStreamData: YouTubeSearchResponse = await liveStreamRequest.json();
    const tifeYoutubeRequest = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API}&part=snippet&channelId=${process.env.YOUTUBE_ID}&type=video&maxResults=20&videoEmbeddable=true`,
      { next: { revalidate: 3600 } },
    );
    const tifeYoutubeData: YouTubeSearchResponse =
      await tifeYoutubeRequest.json();

    // if stream data items.length is 0 or pageInfo.totalResults == 0
    // show iframe of a any video from qayyax or TifeLogs
    // else
    // show iframe of livestream with a fixed size
    //
    const liveItems = liveStreamData?.items;
    const videoItems = tifeYoutubeData?.items;

    const isLive = liveItems && liveItems.length > 0;

    let videoID: string | undefined;
    let videoTitle: string;

    if (isLive) {
      videoID = liveItems[0].id.videoId;
      videoTitle = "🔴" + liveItems[0].snippet.title;
    } else if (videoItems && videoItems.length > 0) {
      const randNum = Math.floor(Math.random() * videoItems.length);
      videoID = videoItems[randNum].id.videoId;
      videoTitle = videoItems[randNum].snippet.title;
    } else {
      return <IframeFallback />;
    }

    const videoSource = `${EMBED_URL}${videoID}`;
    return (
      <div className="flex flex-col gap-3 w-full">
        <p className="font-bold font-mono border-2 border-purple-400 dark:border-purple-200 rounded-2xl p-1 text-center text-sm truncate">
          {videoTitle}
        </p>
        <div className="border-2 border-purple-400 dark:border-purple-200 rounded-2xl p-1 overflow-hidden w-full">
          <iframe
            className="w-full"
            height="240"
            src={videoSource}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  } catch {
    return <IframeFallback />;
  }
}

function IframeFallback() {
  return (
    <div className="flex items-center justify-center border-2 border-purple-400 dark:border-purple-200 rounded-2xl p-4 h-[240px] w-[350px]">
      <p className="font-mono text-center text-sm">
        Video unavailable right now. Check back later!
      </p>
    </div>
  );
}
