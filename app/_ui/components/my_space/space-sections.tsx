import { doto } from "../../fonts";

type Props = {
  header: string;
  children: React.ReactNode;
};

export default function Section({ header, children }: Props) {
  return (
    <section
      id={header.toLowerCase().replaceAll(" ", "-")}
      className="flex flex-col gap-4 border-2 border-purple-500/25 rounded-lg p-5"
    >
      <div className="flex items-center gap-3">
        <h3 className={`font-extrabold text-xl ${doto.className}`}>{header}</h3>
        <div className="flex-1 h-px bg-purple-500/20" />
      </div>
      {children}
    </section>
  );
}
