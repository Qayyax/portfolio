import { doto } from "@/app/_ui/fonts";
import DesktopNav from "./desktop-nav";
import MobileRight from "./mobile-nav-right";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center border-b-4 border-b-purple-500 p-3 sticky top-0 dark:bg-black bg-white">
      <h3 className={`flex gap-2 font-extrabold text-2xl ${doto.className}`}>
        Tife<span className="hidden md:block">Olatunji</span>
      </h3>
      <div>
        {/* putting nav routes here for desktop and tab */}
        <MobileRight />
        <DesktopNav />
      </div>
    </nav>
  );
}
