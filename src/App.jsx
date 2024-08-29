import DarkModeProvider from "./components/DarkModeProvider"
import DarkModeToggle from "./components/DarkModeToggle"
import Hamburger from "./components/Hamburger"
import Home from "./components/home/Home"
import Project from "./components/projects/Project"
import projectData from "./data/projects.json"

function App() {

  return (
    <>
      <DarkModeProvider>
        <div className="w-full bg-red pt-4 flex items-center justify-end">
          <DarkModeToggle />
          <Hamburger />
        </div>
        <Home data={projectData} />
        <Project data={projectData} />
      </DarkModeProvider>
    </>
  )
}

export default App
