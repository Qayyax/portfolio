import Link from "next/link";
import { dotGothic16, doto } from "@/app/ui/fonts";

export default function HomeText() {
  const linkClasses = `text-purple-400 text-lg cursor-pointer ${doto.className} font-extrabold`;
  return (
    <div className="font-extrabold flex flex-col items-start justify-center gap-1 p-4">
      <h1 className="text-xl">Hi, I am Tife.</h1>
      <div
        className={`${dotGothic16.className} tracking-wide flex flex-col gap-y-1`}
      >
        <p>
          I am a fullstack developer with a master&apos;s degree in big data
          analytics. Currently, I am working on improving my coding career. I
          can build websites and apps. You can{" "}
          <a href="mailto:qayyax@gmail.com" className={linkClasses}>
            {/* on hover the color should glow more or something*/}
            contact me
          </a>
          .
        </p>
        <p>
          I love art, anime, tech, and games. Check out{" "}
          <Link href="/my_space" className={linkClasses}>
            {/* on hover the color should glow more or something*/}
            My_space{" "}
          </Link>
          for my interests and blog posts.
        </p>
        <p>
          I have a store that is coming soon. Join my{" "}
          <a className={linkClasses}>newsletter</a> to stay informed about it. I
          promise not to spam you with emails.
        </p>
      </div>
    </div>
  );
}
