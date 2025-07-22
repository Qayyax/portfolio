export default function Iframe() {
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
