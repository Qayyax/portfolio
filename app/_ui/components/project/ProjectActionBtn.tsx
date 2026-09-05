import { doto } from "../../fonts";
import { ProjectAction } from "@/type";
import Link from "next/link";

export default function ProjectActionBtn({ type, link }: ProjectAction) {
  const label = type === "live-site" ? "live site" : type;
  const style = `${doto.className} text-sm font-extrabold text-white bg-purple-600 border-2 border-purple-400 rounded-xl px-4 py-2 hover:bg-purple-500 hover:border-purple-300 transition-colors`;

  return type === "code" || type === "live-site" ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className={style}>
      {label}
    </a>
  ) : (
    <Link href={link} className={style}>
      {label}
    </Link>
  );
}
