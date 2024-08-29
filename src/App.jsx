import DarkModeProvider from "./components/DarkModeProvider"
import Header from "./components/Header"
import Home from "./components/home/Home"
import Project from "./components/projects/Project"
import projectData from "./data/projects.json"

function App() {

  return (
    <>
      <DarkModeProvider>
        <Header />
        <Home data={projectData} />
        <Project data={projectData} />
      </DarkModeProvider>
    </>
  )
}

export default App
