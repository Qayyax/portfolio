import { ReferralBtnType } from "@/type";
import ReferralBtn from "./referral-btn";

type Props = {
  title: string;
  description: string;
  code: ReferralBtnType;
};

export default function ReferralCard({ title, description, code }: Props) {
  return (
    <div>
      {/* title */}
      <p>{title}</p>
      {/* description */}
      <p>{description}</p>
      {/* code */}
      <ReferralBtn type={code.type} link={code.link} code={code.code} />
    </div>
  );
}
