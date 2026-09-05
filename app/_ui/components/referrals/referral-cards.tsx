import { referrals } from "@/app/_data_exports/referrals";
import ReferralCard from "./referral-card";
import { ReferralBtnType } from "@/type";
import { doto } from "../../fonts";

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
      <p className={`text-sm text-gray-700 dark:text-gray-300 mt-2 ${doto.className}`}>
        Want me to join your referral program?{" "}
        <a href="mailto:qayyax@gmail.com" className="text-purple-500 hover:underline">
          Email me.
        </a>
      </p>
    </div>
  );
}
