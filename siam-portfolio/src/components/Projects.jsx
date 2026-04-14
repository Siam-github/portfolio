
import data from "../data/projects";
export default function Projects(){
  return (
    <section id="projects" className="py-16 px-6">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {data.map(p=>(
          <div key={p.id} className="border p-4 rounded">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}