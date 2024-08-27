import ImageCard from "./components/home/ImageCard"
import Project from "./components/projects/Project"
import projectData from "./data/projects.json"

function App() {

  return (
    <>
      <h1>Work in Progress</h1>
      <Project data={projectData} />
      <div
        className="flex items-center justify-center my-4"
      >
        <ImageCard />
      </div>
    </>
  )
}

export default App
