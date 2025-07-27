import { InterestingAppType } from "@/type";
import InterestingApp from "./interesting-app";

type Props = {
  appData: InterestingAppType[];
};
export default function InterestingApps({ appData }: Props) {
  return (
    <div>
      {appData.map((app) => (
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
