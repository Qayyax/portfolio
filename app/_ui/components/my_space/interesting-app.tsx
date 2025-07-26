// This is the component for interesting apps
type Props = {
  name: string;
  platform: string;
  description: string;
};
export default function InterestingApp({ name, platform, description }: Props) {
  const border = "border-2 border-purple-400 dark:border-purple-200 rounded-xl";
  return (
    <div className={`flex flex-col gap-2 p-2 ${border}`}>
      {/* header div */}
      <div className={`flex items-center justify-between font-extrabold `}>
        <p>{name}</p>
        <p>{platform}</p>
      </div>

      {/* description div */}
      <div className={`${border} p-2 font-mono`}>
        <p>{description}</p>
      </div>
    </div>
  );
}
