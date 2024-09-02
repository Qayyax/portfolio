import { DarkModeContext } from "../DarkModeProvider"
import { useContext } from "react"
import BlogCard from "./BlogCard"

export default function Blogs({ data }) {
  const { isDarkMode } = useContext(DarkModeContext)
  const bgColor = isDarkMode ? "bg-[#201330]" : "bg-white"
  const h1Color = isDarkMode ? "text-white" : "text-[#201330]"

  return (
    <section
      className={`flex flex-col items-center justify-center md:items-start ${bgColor}`}
    >
      <h2 className={h1Color}>Blogs</h2>
      <div
        className="flex flex-col gap-y-8 md:gap-y-15"
      >
        {data.map((item, key) => (
          <BlogCard
            key={key}
            image={item.image}
            title={item.title}
            excerpt={item.excerpt}
            slug={item.slug}
          />
        ))}
      </div>

    </section>
  )
}
