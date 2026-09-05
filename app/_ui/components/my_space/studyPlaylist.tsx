export default function StudyPlaylist() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border-2 border-purple-400 dark:border-purple-200">
      <iframe
        className="w-full"
        height="280"
        src="https://www.youtube.com/embed/videoseries?si=mrcqV6eEKXkbB1M4&amp;list=PLzpuyqzbbuVSTSxc0rnDPOmZozBnkWLnn"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
