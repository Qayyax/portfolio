import HomeText from "./_ui/components/text/HomeText";
import ProjectCard from "./_ui/components/project/ProjectCard";
import { doto } from "./_ui/fonts";
import ReferralCards from "./_ui/components/referrals/referral-cards";
import featuredData from "./_data_exports/featuredData";

// You need to check the next.config.ts to change the remote patters of the images configuration
// Maybe when you make the API endpoint for the images

// TODO:
// - [] Add featured blog

export default function Home() {
  return (
    <>
      <main>
        <HomeText />
      </main>

      <section className="font-mono flex flex-col items-center justify-center px-3 gap-2">
        {/* Here would be the featured project section */}
        <h3 className={`font-extrabold text-2xl ${doto.className}`}>
          Featured Pages
        </h3>
        <div className="flex flex-col md:flex-row md:justify-around items-center justify-center gap-2 md:w-full">
          {featuredData.map((data) => (
            <ProjectCard
              key={data.code}
              name={data.name}
              description={data.description}
              tags={data.tags}
              image={data.image}
              code={data.code}
              liveSite={data.liveSite}
            />
          ))}
        </div>
        {/* Referal links component */}
        <h3 className={`font-extrabold text-2xl ${doto.className} my-3`}>
          Referral Links
        </h3>
        <ReferralCards />
      </section>
    </>
  );
}
