import Image from "next/image";
import ProjectTags from "./ProjectTags";
import { Project } from "@/type";
import { doto } from "../../fonts";

export default function ProjectCard({ name, description, tags, image, code, liveSite }: Project) {
  const hasSeperateCode = code && liveSite && code !== liveSite;

  return (
    <div className="border-2 border-purple-500/30 rounded-2xl overflow-hidden hover:border-purple-500/60 transition-colors">
      <a href={liveSite || code} target="_blank" rel="noopener noreferrer">
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          <Image
            src={image}
            alt={`Image for ${name}`}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="https://cdn.pixabay.com/photo/2024/04/10/22/52/autumn-8688876_1280.jpg"
          />
        </div>
      </a>
      <div className="p-4 flex flex-col items-center gap-2 text-center">
        <a href={liveSite || code} target="_blank" rel="noopener noreferrer">
          <h5 className={`font-extrabold text-lg hover:text-purple-500 transition-colors ${doto.className}`}>{name}</h5>
        </a>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
          {hasSeperateCode && (
            <>
              {" — "}
              <a href={code} target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
                view code
              </a>
            </>
          )}
        </p>
        <ProjectTags tags={tags} />
      </div>
    </div>
  );
}
