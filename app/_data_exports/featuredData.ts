type FeaturedData = {
  name: string;
  description: string;
  tags: string[];
  image: string;
  code: string;
  liveSite: string;
};
// type shooter
// Vim
// Job listing analyze
const featuredData: FeaturedData[] = [
  {
    name: "NeoVim Config",
    description: "My NeoVim configuration",
    tags: ["Lua", "MD", "LazyVim"],
    image:
      "https://pbs.twimg.com/media/GvtMKvkWoAA5lwx?format=jpg&name=4096x4096",
    code: "https://github.com/Qayyax/lazy-vim-config",
    liveSite: "https://github.com/Qayyax/lazy-vim-config",
  },
  {
    name: "TypeShooter",
    description: "A typing game where words fall from the sky",
    tags: ["Phaser3 js", "TypeScript", "random-words"],
    image:
      "https://images.unsplash.com/photo-1489257900339-13e688fb85fd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    code: "https://github.com/Qayyax/TypeShooter",
    liveSite: "https://typeshooter.netlify.app/",
  },
  {
    name: "Job Listing Analyser",
    description:
      "Scrapes Job openings and analyzes the required skills for jobs",
    tags: ["Python", "Pandas", "BeautifulSoup", "Matplotlib", "Wordcloud"],
    image:
      "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    code: "https://github.com/Qayyax/job_listing_analyzer",
    liveSite: "https://github.com/Qayyax/job_listing_analyzer",
  },
];

export default featuredData;
