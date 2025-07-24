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
  );
  const liveStreamData: YouTubeSearchResponse = await liveStreamRequest.json();
  const tifeYoutubeRequest = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API}&part=snippet&channelId=${process.env.YOUTUBE_ID}&type=video&maxResults=20&videoEmbeddable=true`,
  );
  const tifeYoutubeData: YouTubeSearchResponse =
    await tifeYoutubeRequest.json();

  // if stream data items.length is 0 or pageInfo.totalResults == 0
  // show iframe of a any video from qayyax or TifeLogs
  // else
  // show iframe of livestream with a fixed size
  //
  const EMBED_URL = "https://www.youtube.com/embed/";
  const EMBEDED_PARAMS = `?autoplay=1&mute=1`;

  const getVideoId = () => {
    if (
      liveStreamData?.pageInfo?.totalResults === 0 ||
      liveStreamData?.items.length === 0
    ) {
      // math.random of a video from tife logs
      const randNum = Math.floor(Math.random() * tifeYoutubeData?.items.length);
      const videoID = tifeYoutubeData?.items[randNum].id.videoId;
      return videoID;
    } else {
      const videoId = liveStreamData?.items[0].id.videoId;
      return videoId;
    }
  };

  const videoId = getVideoId();
  const videoSource = `${EMBED_URL}${videoId}${EMBEDED_PARAMS}`;
  return (
    <div>
      <iframe width="100%" height="315" src={videoSource}></iframe>
    </div>
  );
}
