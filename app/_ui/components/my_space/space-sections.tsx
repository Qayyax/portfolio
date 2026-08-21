import { doto } from "../../fonts";

type Props = {
  header: string;
  children: React.ReactNode;
};

export default function Section({ header, children }: Props) {
  return (
    <section
      id={header.toLowerCase().replaceAll(" ", "-")}
      className="font-mono flex flex-col items-center justify-center p-4 gap-3 border-2 border-purple-400/30 dark:border-purple-200/20 rounded-2xl"
    >
      <h3 className={`font-extrabold text-2xl ${doto.className}`}>{header}</h3>
      {children}
    </section>
  );
}
