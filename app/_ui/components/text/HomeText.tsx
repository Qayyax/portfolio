import Link from "next/link";
import { dotGothic16, doto } from "@/app/_ui/fonts";

export default function HomeText() {
  const linkClasses = `text-purple-700 dark:text-purple-400 text-lg cursor-pointer ${doto.className} font-extrabold rounded-xl hover:px-2 transition-shadow duration-300 hover:shadow-[0_0_10px_rgba(168,85,247,0.8)] focus:shadow-[0_0_10px_rgba(168,85,247,0.8)]`;
  return (
    <div className="font-extrabold font-mono flex flex-col items-start justify-center gap-1 p-4">
      <h1 className={`text-xl font-mono`}>Hi, I am Tife.</h1>
      <div
        className={`${dotGothic16.className} tracking-wide flex flex-col gap-y-2`}
      >
        <p className="font-mono">
          I am a fullstack developer with a master&apos;s degree in big data
          analytics. I am working on improving my coding career. I build
          websites and mobile apps. You can{" "}
          <a
            href="mailto:qayyax@gmail.com"
            target="_blank"
            className={linkClasses}
          >
            contact me
          </a>
          .
        </p>
        <p className="font-mono">
          I love art, anime, tech, and games. Check out{" "}
          <Link href="/my_space" className={linkClasses}>
            {/* on hover the color should glow more or something*/}
            My_space
          </Link>{" "}
          for my interests and blog posts.
        </p>
        <p className="font-mono">
          I have a store that is coming soon. Join my{" "}
          <a
            className={linkClasses}
            href="https://mailchi.mp/f40e0b3d432e/tifes-newsletter"
            target="_blank"
          >
            newsletter
          </a>{" "}
          to stay informed about it. I promise not to spam you with emails.
        </p>
      </div>
    </div>
  );
}
