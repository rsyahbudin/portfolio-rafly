import { motion } from "framer-motion";
import { certifications } from "../constants";

const Certifications = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-white"
      >
        Certifications
      </motion.h2>
      <div>
        {certifications.map((cert, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-stone-400">{cert.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4  p-6 rounded-md shadow-md"
            >
              <h3 className="mb-2 font-semibold text-2xl text-white">
                {cert.title} -{" "}
                <span className="text-sm text-stone-400">
                  {cert.institution}
                </span>
              </h3>
              <p className="mb-4 text-stone-400">{cert.description}</p>
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-md bg-stone-500 px-4 py-2 text-sm font-medium text-white hover:bg-stone-600"
              >
                View Certificate (PDF)
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;