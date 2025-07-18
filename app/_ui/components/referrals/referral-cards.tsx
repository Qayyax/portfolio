import { referrals } from "@/app/_data_exports/referrals";
import ReferralCard from "./referral-card";
import { ReferralBtnType } from "@/type";

export default function ReferralCards() {
  return (
    <div className="flex flex-col gap-3">
      {referrals.map((item) => (
        <ReferralCard
          key={item.title}
          title={item.title}
          description={item.description}
          code={item.code as ReferralBtnType}
        />
      ))}

      <p className="mt-2">
        Want me to join your referral program,{" "}
        <a href="mailto:qayyax@gmail.com" target="_blank">
          email me
        </a>
      </p>
    </div>
  );
}
