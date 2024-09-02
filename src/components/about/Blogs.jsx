import { DarkModeContext } from "../DarkModeProvider"
import { useContext } from "react"
import BlogCard from "./BlogCard"

export default function Blogs({ data }) {
  const { isDarkMode } = useContext(DarkModeContext)
  const bgColor = isDarkMode ? "bg-[#201330]" : "bg-white"
  const h1Color = isDarkMode ? "text-white" : "text-[#201330]"

  return (
    <section
      className={`flex flex-col py-3 md:py-4 items-center justify-center md:items-start gap-y-14 md:gap-y-16 ${bgColor} px-7`}
    >
      <h2 className={`${h1Color} text-[1.5em] md:text-[2.25em]`}>Blog Posts</h2>
      <div
        className="flex flex-col gap-y-8 md:gap-y-15 items-center justify-center"
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