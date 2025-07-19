import { ReferralBtnType } from "@/type";
import ReferralBtn from "./referral-btn";

type Props = {
  title: string;
  description: string;
  code: ReferralBtnType;
};

export default function ReferralCard({ title, description, code }: Props) {
  return (
    <div className="flex items-center justify-between gap-2 py-2 px-1 border-2 border-purple-400 dark:border-purple-200 rounded-xl">
      {/* title */}
      <p className="flex-1">{title}</p>
      {/* description */}
      <div className="border-l-2 border-r-2 border-dashed pr-2 flex-1">
        &nbsp;
      </div>
      {/* <p className="hidden md:block">{description}</p> */}
      {/* code */}
      <div className=" flex-1 flex justify-end ">
        <ReferralBtn type={code.type} link={code.link} code={code.code} />
      </div>
    </div>
  );
}
