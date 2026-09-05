import { ReferralBtnType } from "@/type";
import ReferralBtn from "./referral-btn";
import { doto } from "../../fonts";

type Props = {
  title: string;
  description: string;
  code: ReferralBtnType;
};

export default function ReferralCard({ title, description, code }: Props) {
  return (
    <div className="flex items-center justify-between gap-4 border-2 border-purple-500 rounded-2xl p-4 bg-purple-500/5 hover:bg-purple-500/10 transition-colors">
      <div className="flex flex-col gap-1 min-w-0">
        <p className={`font-extrabold text-sm ${doto.className}`}>{title}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <ReferralBtn type={code.type} link={code.link} code={code.code} />
    </div>
  );
}
