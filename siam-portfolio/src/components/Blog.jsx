
import ReactMarkdown from "react-markdown";
export default function Blog(){
  const md = "# Blog\nLearning VLSI";
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold">Blog</h2>
      <ReactMarkdown>{md}</ReactMarkdown>
    </section>
  )
}