type Props = { tag: string };

export default function ProjectTag({ tag }: Props) {
  return (
    <span className="text-xs font-mono border border-purple-500/50 rounded-md px-2 py-0.5 text-purple-500">
      {tag}
    </span>
  );
}
