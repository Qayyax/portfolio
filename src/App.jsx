import { Route, Routes } from "react-router-dom"
import DarkModeProvider from "./components/DarkModeProvider"
import Home from "./components/home/Home"
import projectData from "./data/projects.json"
import blogData from "./data/blogs.json"
import MainLayout from "./pages/MainLayout"
import ProjectLayout from "./pages/ProjectLayout"
import AboutMeLayout from "./pages/AboutMeLayout"
import BlogLayout from "./pages/BlogLayout"

function App() {
  return (
    <>
      <DarkModeProvider>
        <Routes>
          <Route element={<MainLayout />} >
            <Route path="/" element={<Home data={projectData} />} />
            <Route path="/project" element={<ProjectLayout data={projectData} />} />
            <Route path="/about" element={<AboutMeLayout data={blogData} />} />
            <Route path="/about/:blogID" element={<BlogLayout data={blogData} />} />
            <Route path="*" element={<Home data={projectData} />} />
          </Route>
        </Routes>
      </DarkModeProvider>
    </>
  )
}

export default App
