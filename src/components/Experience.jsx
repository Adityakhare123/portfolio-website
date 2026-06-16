import { motion } from "framer-motion";
import { experience } from "../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-cyan-200">Experience</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            Work areas and project journey.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            A clean timeline you can later replace with real company names, internship details, freelance work, or project experience.
          </p>
        </motion.div>

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300 via-purple-400 to-transparent md:block" />

          <div className="space-y-6">
            {experience.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative md:pl-12"
              >
                <div className="absolute left-[9px] top-7 hidden h-3 w-3 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/60 md:block" />

                <div className="glass-card rounded-3xl p-7">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-black text-white">{item.title}</h3>
                    <span className="rounded-full border border-purple-300/20 bg-purple-300/10 px-3 py-1 text-xs font-bold text-purple-100">
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-4 leading-7 text-slate-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.7 }}
          className="glass-card mt-12 rounded-3xl p-7 text-center"
        >
          <h3 className="text-2xl font-black text-white">Resume</h3>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-300">
            Place your resume file inside <span className="text-cyan-200">public/resume.pdf</span>.
            The download buttons across the website will automatically use it.
          </p>
          <a
            href="/resume.pdf"
            download
            className="mt-6 inline-flex rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/30"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;