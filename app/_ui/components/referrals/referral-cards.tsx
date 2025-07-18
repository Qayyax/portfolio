import { referrals } from "@/app/_data_exports/referrals";
import ReferralCard from "./referral-card";
import { ReferralBtnType } from "@/type";

export default function ReferralCards() {
  return (
    <div>
      {referrals.map((item) => (
        <ReferralCard
          title={item.title}
          description={item.description}
          code={item.code as ReferralBtnType}
        />
      ))}
    </div>
  );
}
