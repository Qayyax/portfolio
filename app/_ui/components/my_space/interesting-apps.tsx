import { InterestingAppType } from "@/type";
import InterestingApp from "./interesting-app";

type Props = {
  appData: InterestingAppType[];
};
export default function InterestingApps({ appData }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-y-4">
      {appData &&
        appData.map((app) => (
          <InterestingApp
            key={app.name}
            name={app.name}
            description={app.description}
            platform={app.platform}
            link={app.link}
          />
        ))}
    </div>
  );
}
