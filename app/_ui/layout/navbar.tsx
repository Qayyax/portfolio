import { doto } from "@/app/_ui/fonts";
import DesktopNav from "./desktop-nav";
import MobileRight from "./mobile-nav-right";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center border-b-4 border-b-purple-500 p-3 sticky top-0  backdrop-blur-[5px] bg-white/5 dark:bg-black/5">
      <h3 className={` font-extrabold text-2xl ${doto.className}`}>
        <Link href="/" className="flex gap-2">
          Tife
          <span className="hidden md:block">Olatunji</span>
        </Link>
      </h3>
      <div>
        {/* putting nav routes here for desktop and tab */}
        <MobileRight />
        <DesktopNav />
      </div>
    </nav>
  );
}
