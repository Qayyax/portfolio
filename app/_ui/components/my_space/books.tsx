import { doto } from "../../fonts";

export default function Books() {
  const favouriteBooks = [
    ["Feel Good Productivity", "Ali Abdaal"],
    ["The Slight Edge", "Jeff Olson"],
    [
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      "James Clear",
    ],
    ["Unfuck Yourself", "Gary John Bishop"],
    ["The 4-Hour Workweek", "Tim Ferriss"],
    ["Million Dollar Weekend", "Noah Kagan"],
    ["The Millionaire Fastlane", "M. J. DeMarco"],
    ["Show Your Work!", "Austin Kleon"],
    [
      "The Defining Decade: Why Your Twenties Matter--And How to Make the Most of Them Now",
      "Meg Jay",
    ],
    [
      "How to Not Die Alone: The Surprising Science That Will Help You Find Love",
      "Logan Ury",
    ],
    [
      "The Deep Magic of Daily Consistency (The audio book is nice)",
      "Robin Sharma",
    ],
    ["Rewire the Loop", "Zach Apple"],
    ["The 5 Second Rule", "Mel Robbins"],
    ["The Fine Art of Small Talk", "Debra Fine"],
  ];
  return (
    <div className="border-2 border-purple-400 dark:border-purple-200 rounded-xl p-2 px-3">
      <ul>
        {favouriteBooks.map((book) => (
          <li key={book[0]}>
            <p>
              <span className={`${doto.className}`}>{"->"}</span> {book[0]} :{" "}
              <span className={`${doto.className}`}>{book[1]}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
