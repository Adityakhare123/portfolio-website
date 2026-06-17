import { motion } from "framer-motion";
import { experience } from "../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <p className="command-label">WORK_LOG</p>
        <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight tracking-[-0.06em] md:text-6xl">
          Experience timeline.
        </h2>

        <div className="mt-12 border border-white/10">
          {experience.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="grid gap-5 border-b border-white/10 p-6 last:border-b-0 md:grid-cols-[0.24fr_1fr]"
            >
              <div>
                <p className="green-text font-black">{item.period}</p>
                <p className="mt-1 text-xs uppercase text-zinc-600">
                  log_{String(index + 1).padStart(2, "0")}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-black uppercase">{item.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="terminal-card mt-8 p-6">
          <p className="command-label">RESUME_FILE</p>
          <h3 className="mt-3 text-2xl font-black uppercase">Download resume</h3>
          <p className="mt-3 text-zinc-400">
            Place your file here: <span className="green-text">public/resume.pdf</span>
          </p>
          <a href="/resume.pdf" download className="btn-primary mt-6 inline-flex px-6 py-3">
            DOWNLOAD_RESUME
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;