import MobileLeft from "@/app/ui/layout/mobile-nav-right";
import HomeText from "./ui/components/text/HomeText";

export default function Home() {
  return (
    <>
      <nav className="flex justify-between items-center border-b-2 border-b-purple-500 p-3 sticky">
        <h3 className="flex gap-1 font-extrabold text-2xl">
          Tife <span className="hidden md:block">Olatunji</span>
        </h3>
        <div>
          {/* putting darkmode and hamburger here for mobile*/}
          {/* putting darkmode and nav routes here for desktop and tab*/}
          <MobileLeft />
        </div>
      </nav>
      <main>
        {/* Here would have the main text */}
        {/* text component goes here */}
        <HomeText />
      </main>
    </>
  );
}
