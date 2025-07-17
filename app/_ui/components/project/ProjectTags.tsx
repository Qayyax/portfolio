import ProjectTag from "@/app/_ui/components/project/ProjectTag";

type Props = {
  tags: string[];
};

export default function ProjectTags({ tags }: Props) {
  return (
    <div className="flex font-bold gap-2 flex-wrap">
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
