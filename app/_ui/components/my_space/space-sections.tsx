import { doto } from "../../fonts";

type Props = {
  number: string;
  header: string;
  children: React.ReactNode;
  last?: boolean;
};

export default function Section({ number, header, children, last }: Props) {
  return (
    <section
      id={header.toLowerCase().replaceAll(" ", "-")}
      className={`py-12 flex flex-col gap-6 ${!last ? "border-b-2 border-purple-500/20" : ""}`}
    >
      <div className="flex items-center gap-3">
        <span className="text-purple-500 font-mono text-xs font-bold">{"// "}{number}</span>
        <h2 className={`text-2xl font-extrabold ${doto.className}`}>{header.toUpperCase()}</h2>
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
      </div>
      {children}
    </section>
  );
}
