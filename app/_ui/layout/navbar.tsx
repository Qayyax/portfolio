import Link from "next/link";
import DesktopNav from "./desktop-nav";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        background: "rgba(240,237,230,0.92)",
        backdropFilter: "blur(6px)",
        borderColor: "var(--color-line)",
      }}
    >
      <div className="max-w-[920px] mx-auto px-7 flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-[1.05rem] font-semibold tracking-[0.01em]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          TIFE<span style={{ color: "var(--color-rust)" }}>.</span>OLATUNJI
        </Link>
        <DesktopNav />
      </div>
    </nav>
  );
}
