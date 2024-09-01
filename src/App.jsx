import { Route, Routes } from "react-router-dom"
import DarkModeProvider from "./components/DarkModeProvider"
import Home from "./components/home/Home"
import projectData from "./data/projects.json"
import MainLayout from "./pages/MainLayout"
import ProjectLayout from "./pages/ProjectLayout"
import AboutMeLayout from "./pages/AboutMeLayout"

function App() {
  return (
    <>
      <DarkModeProvider>
        <Routes>
          <Route element={<MainLayout />} >
            <Route path="/" element={<Home data={projectData} />} />
            <Route path="/project" element={<ProjectLayout data={projectData} />} />
            <Route path="/about" element={<AboutMeLayout />} />
            <Route path="*" element={<Home data={projectData} />} />
          </Route>
        </Routes>
      </DarkModeProvider>
    </>
  )
}

export default App
