import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <p className="command-label">SKILL_MATRIX</p>
        <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight tracking-[-0.06em] md:text-6xl">
          Tools I use to ship working products.
        </h2>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {skills.map((group, index) => {
            const GroupIcon = group.icon;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="terminal-card"
              >
                <div className="terminal-header flex items-center justify-between px-5 py-4">
                  <h3 className="font-black uppercase">{group.category}</h3>
                  <GroupIcon className="green-text" />
                </div>

                <div className="grid grid-cols-2">
                  {group.items.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ backgroundColor: "rgba(156,255,87,0.08)" }}
                        className="flex items-center gap-3 border-b border-r border-white/10 p-4 text-sm font-bold text-zinc-300"
                      >
                        <Icon className="green-text" />
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