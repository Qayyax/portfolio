type Props = {
  tag: string;
};

export default function ProjectTag({ tag }: Props) {
  // maybe I would put a shadow there or something to make it glow
  // I stil don't know if I want it to be on the same line as the title
  // I can also use this outline-color property - check tailwind docs
  // https://tailwindcss.com/docs/outline-color
  return (
    <div className="font-mono text-sm  border-2 border-purple-600 rounded-md px-2">
      {tag}
    </div>
  );
}
