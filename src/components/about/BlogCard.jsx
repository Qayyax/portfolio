import { Link } from "react-router-dom"
import { DarkModeContext } from "../DarkModeProvider"
import { useContext } from "react"

export default function BlogCard({ image, title, excerpt, slug }) {
  const { isDarkMode } = useContext(DarkModeContext)
  const h1Color = isDarkMode ? "text-white" : "text-[#201330]"

  return (
    <Link
      className="flex flex-col gap-y-4 md:flex-row md:items-center md:gap-x-14 px-2"
      to={`/about/${slug}`}
    >
      <img
        src={image}
        alt="picture of a blog"
        className="rounded-[30px] w-[320px] h-[160px] lg:w-[560px] lg:h-[320px]"
      />
      <div>
        <h2
          className={`text-[1.5em] md:text-[2em] ${h1Color}`}
        >
          {title}
        </h2>
        <p
          className={`md:text-[1.5em] text-[#6B6B6B]`}
        >
          {excerpt}
        </p>
      </div>
    </Link>
  )
}
