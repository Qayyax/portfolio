import InterestingApp from "@/app/_ui/components/my_space/interesting-app";

export default function InterestingAppsPage() {
  return (
    <div>
      This is interesting apps page
      {/* section for the apps */}
      <InterestingApp
        name="Loop"
        description="Used to tile your apps on mac"
        platform="MacOS"
        link="https://github.com/MrKai77/Loop"
      />
    </div>
  );
}
