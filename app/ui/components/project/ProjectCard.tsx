import Image from "next/image";
import ProjectTags from "./ProjectTags";

type Props = {
  name: string; // name of the project duhhhh
  description: string; // short description of the project
  challenges: string; // short story of the challenges faced
  tags: string[]; // technologies used in the project
  image: string; // src of the image
};

export default function ProjectCard({
  name,
  description,
  challenges,
  tags,
  image,
}: Props) {
  // Here would be the project card,
  // it takes a prop of type project
  // type project would include
  // - Project name
  // - Project description
  // - Challenges - like what I faced when working on the project
  // - Project tags: string[] eg ([react, typeScript, python])
  // The tag would be on the tag component
  // - Images, for now I set the fall back image to be blur, I don't know if it works
  return (
    <div>
      {/*image div goes here*/}
      {/* blurDataURL - you can add this as well to the Image properties */}
      <Image
        src={image}
        alt={`Image for ${name}`}
        width={200}
        height={200}
        placeholder="blur"
      />
      {/*title (with tags) component goes here*/}
      <div>
        {/* here would be display flex with space between*/}
        <p>{name}</p>
        <ProjectTags tags={tags} />
      </div>
      {/* description goes here*/}
      {/* I want it to be like a soft color text, not as white as the title */}
      <p>{description}</p>
      {/* challenges goes here*/}
      <p>{challenges}</p>
    </div>
  );
}
