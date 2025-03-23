import MobileLeft from "@/app/ui/layout/mobile-nav-right";

export default function Home() {
  return (
    <>
      <nav className="flex justify-between">
        <h3 className="flex gap-1 font-extrabold text-2xl">
          Tife <span className="hidden md:block">Olatunji</span>
        </h3>
        {/* putting darkmode and hamburger here for mobile*/}
        {/* putting darkmode and nav routes here for desktop and tab*/}
        <div>
          <MobileLeft />
        </div>
      </nav>
      <main></main>
    </>
  );
}
