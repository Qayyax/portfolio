import { ReferralBtnType } from "@/type";

// TODO:
// - [] tool tip

export default function ReferralBtn({ type, link, code }: ReferralBtnType) {
  return type === "code" ? (
    <button>{code}</button>
  ) : (
    <a href={link} target="_blank">
      {code}
    </a>
  );
}
