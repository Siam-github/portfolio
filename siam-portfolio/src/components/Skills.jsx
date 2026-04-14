
export default function Skills(){
  const skills = ["CMOS","STA","LTSpice","Python","AutoCAD"];
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="flex gap-3 mt-4 flex-wrap">
        {skills.map(s=><span className="bg-gray-200 px-3 py-1 rounded">{s}</span>)}
      </div>
    </section>
  )
}