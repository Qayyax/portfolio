export default function Iframe() {
  // want to check if there is live-stream, if yes, then it shows it at the top
  // else it shows a funny cat video or something
  // white border around , or purple
  const live_stream = (
    <div>
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/live_stream?channel=${process.env.YOUTUBE_ID}`}
      ></iframe>
    </div>
  );
}
