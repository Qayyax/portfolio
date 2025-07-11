import { NavProperty } from "@/type";
import Link from "next/link";

type Props = NavProperty;

export default function DesktopNavBtn({ title, to }: Props) {
  // here would be the component for desktop navigation
  // But I also want to reuse it for Seemore button
  // I think it would take the same props as the mobile one
  // so I would need to make the type global or something
  // Styling next on this
  return <Link href={to}>{title}</Link>;
}
