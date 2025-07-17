import Link from "next/link";
import { doto } from "../../fonts";

type Props = {
  type: "code" | "challenge" | "live-site";
  link: string;
};

export default function ProjectActionBtn({ type, link }: Props) {
  const style = `${doto.className} text-sm  border-2 border-purple-600 rounded-md px-2`;
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
