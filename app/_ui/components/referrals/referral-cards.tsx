import { referrals } from "@/app/_data_exports/referrals";
import ReferralCard from "./referral-card";
import { ReferralBtnType } from "@/type";
import { doto } from "../../fonts";

export default function ReferralCards() {
  const linkClasses = `text-purple-400 text-lg cursor-pointer ${doto.className} font-extrabold`;
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

      <p className="my-2 italic">
        Want me to join your referral program,{" "}
        <a
          href="mailto:qayyax@gmail.com"
          target="_blank"
          className={linkClasses}
        >
          email me
        </a>
      </p>
    </div>
  );
}
