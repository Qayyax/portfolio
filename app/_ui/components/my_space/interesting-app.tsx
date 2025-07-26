import { InterestingAppType } from "@/type";
import { doto } from "../../fonts";

type Props = InterestingAppType;

export default function InterestingApp({
  name,
  platform,
  description,
  link,
}: Props) {
  const border = "border-2 border-purple-400 dark:border-purple-200 rounded-xl";
  const headerBorder =
    "border-x-2 border-purple-400 dark:border-purple-200 px-2 rounded-sm";

  return (
    <div className={`flex flex-col gap-2 p-2  ${border}`}>
      {/* header div */}
      <div
        className={`flex items-center justify-between font-bold tracking-widest px-2 `}
      >
        <p className={headerBorder}>{name}</p>
        <p className={headerBorder}>{platform}</p>
      </div>

      {/* description div */}
      <div
        className={`p-2 font-mono flex flex-col items-start justify-center gap-3`}
      >
        <p>{description}</p>
        <a
          href={link}
          target="_blank"
          className={`self-center border-2 border-purple-400 rounded-xl py-1 px-2 ${doto.className} font-extrabold hover:bg-purple-300 hover:dark:text-black`}
        >
          Check it out
        </a>
      </div>
    </div>
  );
}
