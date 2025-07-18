import { ReferralBtnType } from "@/type";
import ReferralBtn from "./referral-btn";

type Props = {
  title: string;
  description: string;
  code: ReferralBtnType;
};

export default function ReferralCard({ title, description, code }: Props) {
  return (
    <div className="flex items-center justify-between gap-2">
      {/* title */}
      <p>{title}</p>
      {/* description */}
      <p className="hidden md:block">{description}</p>
      {/* code */}
      <ReferralBtn type={code.type} link={code.link} code={code.code} />
    </div>
  );
}
