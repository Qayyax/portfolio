import { doto } from "../../fonts";

export default function Anime() {
  const favouriteAnime = [
    "One Piece",
    "Jujutsu Kaisen",
    "Demon Slayer",
    "Naruto",
    "Bleach",
    "Hunter x Hunter",
    "Sakamoto Days",
    "Attack on Titans",
    "That Time I Got Reincarnated as a Slime",
    "Solo Leveling",
  ];
  return (
    <div className="border-2 border-purple-400 dark:border-purple-200 rounded-xl p-2 px-3">
      <ul>
        {favouriteAnime.map((anime) => (
          <li key={anime}>
            <span className={`${doto.className}`}>{"->"}</span> {anime}
          </li>
        ))}
      </ul>
    </div>
  );
}
