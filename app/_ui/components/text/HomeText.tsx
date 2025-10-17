import Link from "next/link";
import { dotGothic16, doto } from "@/app/_ui/fonts";

export default async function HomeText() {
  const randomQuoteRequest = await fetch("https://zenquotes.io/api/random", {
    next: { revalidate: 3600 },
  });
  const quote = await randomQuoteRequest.json();
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
            My_space
          </Link>{" "}
          for my interests, books, anime list, apps I like...
        </p>
        <p className="font-mono">
          You can also join my{" "}
          <a
            className={linkClasses}
            href="https://qayyax.substack.com/"
            target="_blank"
          >
            newsletter
          </a>{" "}
          to stay informed about what I am up to, I post art, daily journal, as
          well as tech content.
        </p>
      </div>

      <div className="mt-5  font-normal space-y-3">
        <p>Daily Quote (it changes everyday):</p>
        <p className="italic">
          &ldquo;{quote[0]?.q}&rdquo; &mdash;{" "}
          <span className={`font-extrabold ${doto.className}`}>
            {quote[0]?.a}
          </span>
        </p>
      </div>
    </div>
  );
}
