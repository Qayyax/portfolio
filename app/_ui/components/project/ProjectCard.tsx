import Image from "next/image";
import ProjectTags from "./ProjectTags";
import { Project } from "@/type";
import ProjectActionBtn from "./ProjectActionBtn";

//TODO:
//- [] action buttons (code, challenge, live-site)
//- [] code open leads to github code
//- [] challenge opens a modal of the challenge faced or opens the projects/id/challenge
//- [] livesite leads to the actual website

export default function ProjectCard({
  name,
  description,
  tags,
  image,
  code,
  challenge,
  liveSite,
}: Project) {
  return (
    <div className="border-2 border-purple-500 dark:border-purple-200 rounded-3xl p-2 flex flex-col items-start gap-2 max-w-[325px] backdrop-blur-2xl bg-black/5 dark:bg-white/5 shadow-sm shadow-purple-500/50 dark:shadow-purple-200/50">
      {/*image div goes here*/}
      {/* for the image, make it glow or something */}
      {/* though you know we are going for a retro vibe */}
      {/* placeholder image shoul dhave a glass feel to it maybe */}
      <Image
        src={image}
        alt={`Image for ${name}`}
        width={325}
        height={200}
        placeholder="blur"
        blurDataURL="https://cdn.pixabay.com/photo/2024/04/10/22/52/autumn-8688876_1280.jpg"
        className="rounded-xl self-center"
      />

      {/*title (with tags) component goes here*/}
      {/* I am thinking I put like a glowing border here */}
      {/* Not really glowing though, remember it is a retro theme */}
      <div className="flex flex-col gap-2">
        {/* here would be display flex with space between*/}
        <h5 className="font-extrabold text-xl">{name}</h5>
        <ProjectTags tags={tags} />
      </div>

      {/* description goes here*/}
      {/* I want it to be like a soft color text, not as white as the title */}
      <p>{description}</p>

      {/* Project action links goes here*/}
      <div className="flex gap-2 font-bold flex-wrap  w-full justify-between px-2">
        <ProjectActionBtn type="code" link={code} />
        <ProjectActionBtn type="challenge" link={challenge} />
        <ProjectActionBtn type="live-site" link={liveSite} />
      </div>
    </div>
  );
}
