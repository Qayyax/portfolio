type Props = {
  tag: string;
};

export default function ProjectTag({ tag }: Props) {
  // this would take a props of a string
  // it would then render a button looking tag
  // Styling needs work
  return <div className="">{tag}</div>;
}
