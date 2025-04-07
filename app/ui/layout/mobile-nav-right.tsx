import Hamburger from "@/app/ui/components/nav/Hamburger";

export default function MobileLeft() {
  return (
    <div className="flex md:hidden gap-x-3 items-center">
      <Hamburger />
    </div>
  );
}
