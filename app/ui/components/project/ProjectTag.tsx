type Props = {
  tag: string;
};

export default function ProjectTag({ tag }: Props) {
  // this would take a props of a string
  // it would then render a button looking tag
  // maybe I would put a shadow there or something to make it glow
  // I stil don't know if I want it to be on the same line as the title
  // I am liking this mono font style though, it fits the font type
  return (
    <div className=" font-mono text-sm border-2  border-purple-600 rounded-md px-2">
      {tag}
    </div>
  );
}
