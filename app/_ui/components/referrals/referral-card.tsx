import { ReferralBtnType } from "@/type";
import ReferralBtn from "./referral-btn";

type Props = {
  title: string;
  description: string;
  code: ReferralBtnType;
};

export default function ReferralCard({ title, description, code }: Props) {
  return (
    <div className="relative group">
      <div className=" grid grid-cols-3 items-center justify-between gap-2 py-2 px-1 border-2 border-purple-400 dark:border-purple-200 rounded-xl divide-x-3 divide-dashed divide-black dark:divide-white">
        {/* title */}
        <p>{title}</p>
        {/* description */}
        <div>&nbsp;</div>

        {/* Referral code */}
        <div className=" flex justify-end ">
          <ReferralBtn type={code.type} link={code.link} code={code.code} />
        </div>
      </div>

      {/* Tooltip */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 z-10 ">
        {description}
      </div>
    </div>
  );
}
