"use client";
import { ReferralBtnType } from "@/type";
import { doto } from "../../fonts";

export default function ReferralBtn({ type, link, code }: ReferralBtnType) {
  const base = `${doto.className} font-extrabold text-sm border-2 border-purple-500 text-purple-500 rounded-lg px-3 py-1 hover:bg-purple-500 hover:text-white transition-colors cursor-pointer shrink-0`;

  const handleCopy = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      alert(`Copied ${code} to clipboard`);
    }
  };

  return type === "code" ? (
    <button className={base} onClick={handleCopy}>
      {code}
    </button>
  ) : (
    <a href={link} target="_blank" rel="noopener noreferrer" className={base}>
      {code}
    </a>
  );
}
