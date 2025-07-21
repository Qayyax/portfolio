import { doto } from "../../fonts";

type Props = {
  header: string;
  children: React.ReactNode;
};

// TODO:
// - [] desktop vs mobile view (centering)

export default function Section({ header, children }: Props) {
  return (
    <section className="font-mono flex flex-col items-center justify-center p-2 gap-2 border-2 border-purple-400 dark:border-purple-200 rounded-2xl">
      <h3 className={`font-extrabold text-2xl ${doto.className}`}>{header}</h3>
      {children}
    </section>
  );
}
