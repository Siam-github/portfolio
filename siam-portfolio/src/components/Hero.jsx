
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center">
      <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} className="text-5xl font-bold">
        Md Masudun Nobi Siam
      </motion.h1>
      <p className="mt-4">VLSI | Physical Design | STA</p>
      <a href="#projects" className="mt-6 bg-accent text-white px-6 py-2 rounded">View Projects</a>
    </section>
  );
}
