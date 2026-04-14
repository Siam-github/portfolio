import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center pt-16">
      <motion.h1 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white"
      >
        Md Masudun Nobi Siam
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 text-xl text-gray-600 dark:text-gray-400"
      >
        VLSI | Physical Design | STA
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link 
          to="/projects"
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 
                     text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
        >
          View My Projects
        </Link>
      </motion.div>
    </section>
  );
}