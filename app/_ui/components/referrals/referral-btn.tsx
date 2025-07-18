type Props = {
  type: "code" | "link";
  link?: string;
  code?: string;
};

// TODO:
// - [] tool tip
// - [] prop for tool tip
export default function ReferralBtn({ type, link, code }: Props) {
  return type === "code" ? (
    <button>{code}</button>
  ) : (
    <a href={link} target="_blank">
      {code}
    </a>
  );
}
