import { ReferralBtnType } from "@/type";
import { doto } from "../../fonts";

// TODO:
// - [] tool tip

export default function ReferralBtn({ type, link, code }: ReferralBtnType) {
  const style = `${doto.className}  font-extrabold border-2 border-purple-600 rounded-md px-2 hover:bg-purple-300 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-purple-300 active:dark:text-black hover:dark:text-black`;

  return type === "code" ? (
    <button className={style}>{code}</button>
  ) : (
    <a href={link} target="_blank" className={style}>
      {code}
    </a>
  );
}
