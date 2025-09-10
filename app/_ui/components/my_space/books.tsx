import { doto } from "../../fonts";

export default function Books() {
  const favouriteBooks = [["Feel Good Productivity", "Ali Abdaal"]];
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
