import { doto } from "../../fonts";

export default function Books() {
  const favouriteBooks = [
    ["Feel Good Productivity", "Ali Abdaal", "https://www.amazon.ca/Feel-Good-Productivity-More-What-Matters/dp/1250865034?crid=2BFLP6P8M1OUP&dib=eyJ2IjoiMSJ9.3zJv5Pn8Vi2RfyaIJCZtCP24h5E19xZJIeKpGP14Citb07vdqoiQxF2SEmtNBuQcpN6FlznIJWa7gBUMpAhRTpi9vnyAv0GUXB4-MFkF716VNRZa_5nlc80Br1tG5wIVbZ_Vw3beE8PsU3ifGlF51q6Tp1-XKxgnn_I4a2QtjFUl50TMV6y0ly4YvepiiapIGPZOIwhCQFQuQsxi0LAZxYCtlnXe407Wu1t6R_2kKu-ecBjoYxx2CHNTN-NY-y7AxZf0aG0rctp1NIbHGF2XXedJQf6cISljcOGHrA-biOw.JnsDko"],
    ["The Slight Edge", "Jeff Olson", "https://www.amazon.ca/Slight-Edge-Turning-Disciplines-Happiness/dp/1626340463"],
    ["Atomic Habits", "James Clear", "https://www.amazon.ca/Atomic-Habits-Proven-Build-Break/dp/0735211299"],
    ["Unfuck Yourself", "Gary John Bishop", "https://www.amazon.ca/Unfu-Yourself-Your-Head-into/dp/0062803832"],
    ["The 4-Hour Workweek", "Tim Ferriss", "https://www.amazon.ca/4-Hour-Workweek-Expanded-Updated-Cutting-Edge/dp/0307465357"],
    ["Million Dollar Weekend", "Noah Kagan", "https://www.amazon.ca/Million-Dollar-Weekend-Surprisingly-7-Figure/dp/1529146186"],
    ["The Millionaire Fastlane", "M. J. DeMarco", "https://www.amazon.ca/Millionaire-Fastlane-Crack-Wealth-Lifetime/dp/0984358102"],
    ["Show Your Work!", "Austin Kleon", "https://www.amazon.ca/Show-Your-Work-Creativity-Discovered/dp/076117897X"],
    ["The Defining Decade", "Meg Jay", "https://www.amazon.ca/Defining-Decade-Your-Twenties-Matter/dp/1538754231"],
    ["How to Not Die Alone", "Logan Ury", "https://www.amazon.ca/How-Not-Die-Alone-Surprising/dp/1982120630"],
    ["The Deep Magic of Daily Consistency", "Robin Sharma", "https://www.amazon.ca/Deep-Magic-Daily-Consistency-Greatness/dp/B0G6G88XTV"],
    ["Rewire the Loop", "Zach Apple", ""],
    ["The 5 Second Rule", "Mel Robbins", "https://www.amazon.ca/Second-Rule-Transform-Confidence-Everyday/dp/1682612384"],
    ["The Fine Art of Small Talk", "Debra Fine", "https://www.amazon.ca/Fine-Art-Small-Talk-Conversation/dp/0349436177"],
    ["Can't Hurt Me", "David Goggins", "https://www.amazon.ca/Cant-Hurt-Me-Master-Your/dp/1544512279"],
  ];

  return (
    <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-800 border-2 border-purple-500/30 rounded-2xl overflow-hidden">
      {favouriteBooks.map(([title, author, link]) => (
        <div key={title} className="flex items-center justify-between gap-4 px-4 py-3 hover:bg-purple-500/5 transition-colors">
          <div>
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-purple-500 transition-colors">
                {title}
              </a>
            ) : (
              <span className="text-sm">{title}</span>
            )}
          </div>
          <span className={`text-xs text-purple-500 shrink-0 ${doto.className}`}>{author}</span>
        </div>
      ))}
    </div>
  );
}
