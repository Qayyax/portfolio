import Project from "./components/projects/Project"
import projectData from "./data/projects.json"

function App() {

  return (
    <>
      <h1>Work in Progress</h1>
      <Project data={projectData} />
    </>
  )
}

export default App
