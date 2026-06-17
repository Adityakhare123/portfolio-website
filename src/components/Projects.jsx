import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="command-label">PROJECT_DIRECTORY</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight tracking-[-0.06em] md:text-6xl">
              Selected builds.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-zinc-500">
            Real projects across AI, OCR, computer vision, data pipelines, and frontend development.
          </p>
        </div>

        <div className="mt-12 grid gap-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ x: 8 }}
              className="terminal-card grid gap-6 p-6 md:grid-cols-[0.18fr_1fr_0.28fr]"
            >
              <div>
                <p className="green-text text-3xl font-black">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-xs uppercase text-zinc-600">
                  {project.featured ? "FEATURED" : "BUILD"}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black uppercase tracking-[-0.04em]">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-zinc-400">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 md:items-end">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary inline-flex w-full items-center justify-center gap-2 px-4 py-3 text-sm md:w-auto"
                >
                  <FiGithub /> CODE
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary inline-flex w-full items-center justify-center gap-2 px-4 py-3 text-sm md:w-auto"
                >
                  <FiExternalLink /> LIVE
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;