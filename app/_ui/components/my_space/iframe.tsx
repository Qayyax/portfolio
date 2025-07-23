export default async function Iframe() {
  // want to check if there is live-stream, if yes, then it shows it at the top
  // else it shows a funny cat video or something
  // white border around , or purple
  const live_stream_request = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API}&part=snippet&channelId=${process.env.YOUTUBE_ID}&eventType=live&type=video`,
  );
  const live_stream_data = await live_stream_request.json();
  // if stream data items.length is 0 or pageInfo.totalResults == 0
  // show iframe of a music
  // else
  // show iframe of livestream with a fixed size

  const live_stream_frame = (
    <div>
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/live_stream?channel=${process.env.YOUTUBE_ID}`}
      ></iframe>
    </div>
  );
}

// {
//     "kind": "youtube#searchListResponse",
//     "etag": "5p1baufI2T-ld8emX5w5fVpj7kE",
//     "regionCode": "CA",
//     "pageInfo": {
//         "totalResults": 0,
//         "resultsPerPage": 0
//     },
//     "items": []
// }
//
// {
//     "kind": "youtube#searchListResponse",
//     "etag": "RRctz-INbAaBSv1c3l01iG55qSc",
//     "regionCode": "CA",
//     "pageInfo": {
//         "totalResults": 1,
//         "resultsPerPage": 1
//     },
//     "items": [
//         {
//             "kind": "youtube#searchResult",
//             "etag": "K7VJkwP7_Pd7pfCOliDM8Bqwwys",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "aAKsbsjnILw"
//             },
//             "snippet": {
//                 "publishedAt": "2025-07-23T22:08:31Z",
//                 "channelId": "UCWw7LOewY4cPH4JAoN6rUTA",
//                 "title": "Test stream - testing youtube API",
//                 "description": "",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/aAKsbsjnILw/default_live.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/aAKsbsjnILw/mqdefault_live.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/aAKsbsjnILw/hqdefault_live.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "TifeLogs",
//                 "liveBroadcastContent": "live",
//                 "publishTime": "2025-07-23T22:08:31Z"
//             }
//         }
//     ]
// }
