import { motion } from "framer-motion";
import { FiCpu, FiDatabase, FiLayers, FiZap } from "react-icons/fi";
import { profile } from "../data/portfolioData";

const cards = [
  {
    icon: FiCpu,
    title: "AI_SYSTEMS",
    text: "OCR workflows, computer vision projects, document automation, and ML-based solutions.",
  },
  {
    icon: FiDatabase,
    title: "DATA_PIPELINES",
    text: "APIs, SQL, ETL pipelines, cleaning, transformation, and structured database loading.",
  },
  {
    icon: FiLayers,
    title: "WEB_APPS",
    text: "Responsive frontend experiences using React, Tailwind CSS, and interactive UI patterns.",
  },
  {
    icon: FiZap,
    title: "PROBLEM_SOLVING",
    text: "Focused on real-world usability, clean logic, scalable structure, and business value.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="command-label">ABOUT_ME</p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight tracking-[-0.06em] md:text-6xl">
            I build practical systems, not just pretty screens.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            {profile.about}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                className="terminal-card terminal-hover hover-target group p-6"
              >
                <div className="relative z-10 mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="font-black transition duration-300 group-hover:text-[#9cff57]">
                    {card.title}
                  </h3>

                  <Icon className="green-text text-xl transition duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_12px_rgba(156,255,87,0.7)]" />
                </div>

                <p className="relative z-10 leading-7 text-zinc-400 transition duration-300 group-hover:text-zinc-300">
                  {card.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="terminal-card terminal-hover hover-target group mt-4 p-6"
        >
          <div className="relative z-10">
            <p className="command-label">CURRENTLY_LEARNING</p>

            <p className="mt-3 leading-8 text-zinc-400 transition duration-300 group-hover:text-zinc-300">
              {profile.currentlyLearning}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;