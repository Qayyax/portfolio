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
  // want to check if there is live-stream, if yes, then it shows it at the top
  // else it shows a funny cat video or something
  // white border around , or purple
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
  const EMBED_URL = "https://www.youtube.com/embed/";

  const getVideoDetails = () => {
    if (
      liveStreamData?.pageInfo?.totalResults === 0 ||
      liveStreamData?.items.length === 0
    ) {
      // math.random of a video from tife logs
      const randNum = Math.floor(Math.random() * tifeYoutubeData?.items.length);
      const videoID = tifeYoutubeData?.items[randNum].id.videoId;
      const videoTitle = tifeYoutubeData?.items[randNum].snippet.title;
      return { videoID, videoTitle };
    } else {
      const videoID = liveStreamData?.items[0].id.videoId;
      const videoTitle = "🔴" + liveStreamData?.items[0].snippet.title;
      return { videoID, videoTitle };
    }
  };

  const { videoID, videoTitle } = getVideoDetails();
  const videoSource = `${EMBED_URL}${videoID}`;
  console.log("VideoID:", videoID);
  console.log("VideoTitle:", videoTitle);
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="font-bold font-mono border-2 border-purple-400 dark:border-purple-200 rounded-lg p-1">
        {videoTitle}
      </p>
      <div className="border-2 border-purple-400 dark:border-purple-200 rounded-lg p-1">
        <iframe
          height="240"
          src={videoSource}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
