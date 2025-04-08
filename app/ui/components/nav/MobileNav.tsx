// would take props that has the name of the nav and the link it would navigate to
// Styling I guess, on hover maybe??

import Link from "next/link";

type Props = {
  title: string; // would be the name of the nav
  to: string; // would be where the Link would point to
};

export default function obileNav({ title, to }: Props) {
  // todo: - styling this shit
  return <Link href={to}>{title}</Link>;
}
