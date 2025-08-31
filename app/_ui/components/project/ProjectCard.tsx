import Image from "next/image";
import ProjectTags from "./ProjectTags";
import { Project } from "@/type";
import ProjectActionBtn from "./ProjectActionBtn";

export default function ProjectCard({
  name,
  description,
  tags,
  image,
  code,
  liveSite,
}: Project) {
  return (
    <div className="border-2 border-purple-500 dark:border-purple-200 rounded-3xl p-2 flex flex-col items-start gap-2 max-w-[325px]  shadow-sm shadow-purple-500/50 dark:shadow-purple-200/50">
      <Image
        src={image}
        alt={`Image for ${name}`}
        width={325}
        height={200}
        placeholder="blur"
        blurDataURL="https://cdn.pixabay.com/photo/2024/04/10/22/52/autumn-8688876_1280.jpg"
        className="rounded-2xl self-center"
      />

      <div className="flex flex-col gap-2">
        <h5 className="font-extrabold text-xl">{name}</h5>
        <ProjectTags tags={tags} />
      </div>

      <p>{description}</p>

      <div className="flex gap-2 font-bold flex-wrap  w-full justify-between px-2">
        <ProjectActionBtn type="code" link={code} />
        <ProjectActionBtn type="live-site" link={liveSite} />
      </div>
    </div>
  );
}
