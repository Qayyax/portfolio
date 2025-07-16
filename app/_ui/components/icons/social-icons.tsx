import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  to: string;
};

export default function SocialIcon({ icon: Icon, to }: Props) {
  return (
    <a href={to} target="_blank">
      <Icon className="text-2xl" />
    </a>
  );
}
