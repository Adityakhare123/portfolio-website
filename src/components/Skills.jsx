import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="command-label">SKILL_MATRIX</p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight tracking-[-0.06em] md:text-6xl">
            Tools I use to ship working products.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            A focused technical stack across programming, AI/ML, data engineering,
            web development, and modern development tools.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {skills.map((group, index) => {
            const GroupIcon = group.icon;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                className="terminal-card terminal-hover hover-target group"
              >
                <div className="terminal-header relative z-10 flex items-center justify-between px-5 py-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                      module_{String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-1 font-black uppercase transition duration-300 group-hover:text-[#9cff57]">
                      {group.category}
                    </h3>
                  </div>

                  <GroupIcon className="green-text text-xl transition duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_12px_rgba(156,255,87,0.7)]" />
                </div>

                <div className="relative z-10 grid grid-cols-2">
                  {group.items.map((skill, skillIndex) => {
                    const Icon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.35,
                          delay: skillIndex * 0.035,
                        }}
                        whileHover={{
                          backgroundColor: "rgba(156, 255, 87, 0.08)",
                        }}
                        className="hover-target group/skill flex items-center gap-3 border-b border-r border-white/10 p-4 text-sm font-bold text-zinc-300 transition duration-300 hover:text-[#9cff57]"
                      >
                        <Icon className="green-text text-base transition duration-300 group-hover/skill:scale-125 group-hover/skill:drop-shadow-[0_0_10px_rgba(156,255,87,0.65)]" />

                        <span>{skill.name}</span>
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