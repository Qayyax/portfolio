// would take props that has the name of the nav and the link it would navigate to
// Styling I guess, on hover maybe??

import Link from "next/link";
import { NavProperty } from "@/type";

type Props = NavProperty;

export default function obileNav({ title, to }: Props) {
  return <Link href={to}>{title}</Link>;
}
