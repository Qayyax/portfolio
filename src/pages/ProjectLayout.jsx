import Project from "../components/projects/Project";

export default function ProjectLayout({data}) {
  return (
  <main>
      <section>
        <h1>Projects</h1>
        <p>A gallery of some of my frontend projects</p>
      </section>
      <Project data={data} />
    </main>
  )
}
