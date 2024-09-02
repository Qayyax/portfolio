import { useContext } from "react";
import { DarkModeContext } from "../components/DarkModeProvider";
import BlogPost from "../components/about/markDowns/BlogPost";

export default function BlogLayout({ data }) {
  const { isDarkMode } = useContext(DarkModeContext)
  const bgColor = isDarkMode ? "bg-[#201330]" : "bg-white"
  return (
    <section className={`flex flex-col items-center justify-center ${bgColor} py-3 px-2`}>
      <BlogPost data={data} />
    </section>
  )
}
