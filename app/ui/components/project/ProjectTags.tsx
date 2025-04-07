import ProjectTag from "@/app/ui/components/project/ProjectTag";

type Props = {
  tags: string[];
};

export default function ProjectTags({ tags }: Props) {
  // this part would take a props of string[] *
  // which would be the tags of the projects built
  // this would then map the tags on the ProjectTag component *
  // which would take a string as a props
  return (
    <div className="inline-flex font-extrabold gap-2 border-2 border-white flex-wrap">
      {tags && tags.length > 0 ? (
        tags.map((tag, i) => (
          // Styling needed soon
          <ProjectTag key={i} tag={tag} />
        ))
      ) : (
        <ProjectTag tag="N/A" />
      )}
    </div>
  );
}
