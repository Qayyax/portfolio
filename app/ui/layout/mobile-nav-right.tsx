import DarkMode from "@/app/ui/components/Darkmode";
import Hamburger from "@/app/ui/components/Hamburger";

export default function MobileLeft() {
  return (
    <div className="flex md:hidden gap-x-3 border-2 border-white">
      <DarkMode />
      <Hamburger />
    </div>
  );
}
