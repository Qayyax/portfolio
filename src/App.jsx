import DarkModeProvider from "./components/DarkModeProvider"
import Footer from "./components/Footer"
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
        <Footer />
      </DarkModeProvider>
    </>
  )
}

export default App
