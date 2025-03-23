import Link from "next/link";

export default function HomeText() {
  return (
    <section className="font-extrabold flex flex-col items-start justify-center gap-1 p-4">
      <h1 className="text-xl ">Hi, I am Tife.</h1>
      <p>
        I am a fullstack developer with a master&apos;s degree in big data
        analytics. Currently, I am working on improving my coding career. I can
        build websites and apps. You can{" "}
        <a
          href="mailto:qayyax@gmail.com"
          className="text-purple-400 cursor-pointer"
        >
          contact me
        </a>
        .
      </p>
      <p>
        I love art, anime, tech, and games. Check out{" "}
        <Link href="/my_space" className="text-purple-400 cursor-pointer">
          {" "}
          My_space{" "}
        </Link>
        for my interests and blog posts.
      </p>
      <p>
        I have a store that is coming soon. Join my newsletter to stay informed
        about it. I promise not to spam you with emails.
      </p>
    </section>
  );
}
