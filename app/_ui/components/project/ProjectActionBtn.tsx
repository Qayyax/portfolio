import Link from "next/link";
import { doto } from "../../fonts";
import { ProjectAction } from "@/type";

export default function ProjectActionBtn({ type, link }: ProjectAction) {
  const style = `${doto.className} text-sm  border-2 border-purple-600 rounded-md px-2 hover:bg-purple-300 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-purple-300 active:dark:text-black hover:dark:text-black`;
  return (
    <>
      {type === "code" || type === "live-site" ? (
        <a href={link} target="_blank" className={style}>
          {type}
        </a>
      ) : (
        <Link href={link} className={style}>
          {type}
        </Link>
      )}
    </>
  );
}
