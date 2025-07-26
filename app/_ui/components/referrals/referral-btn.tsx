"use client";
import { ReferralBtnType } from "@/type";
import { doto } from "../../fonts";

export default function ReferralBtn({ type, link, code }: ReferralBtnType) {
  const style = `${doto.className}  font-extrabold border-2 border-purple-600 rounded-md px-2 hover:bg-purple-300 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500  hover:dark:text-black`;

  const copyToClipBoard = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      alert(`Copied ${code} to clipboard`);
    }
  };

  return type === "code" ? (
    <button className={style} onClick={copyToClipBoard}>
      {code}
    </button>
  ) : (
    <a href={link} target="_blank" className={style}>
      {code}
    </a>
  );
}
