import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-cyan-200">Skills</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            Technical stack with practical project experience.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            A balanced mix of programming, AI/ML, data engineering, frontend development, and tools.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {skills.map((group, index) => {
            const GroupIcon = group.icon;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="glass-card rounded-3xl p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-purple-400/10 text-xl text-purple-200">
                    <GroupIcon />
                  </div>
                  <h3 className="text-xl font-black text-white">{group.category}</h3>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2">
                  {group.items.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.04, y: -4 }}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/10"
                      >
                        <Icon className="text-lg text-cyan-200" />
                        {skill.name}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;