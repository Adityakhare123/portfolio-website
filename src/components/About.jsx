import { motion } from "framer-motion";
import { FiCpu, FiDatabase, FiLayers, FiZap } from "react-icons/fi";
import { profile } from "../data/portfolioData";

const cards = [
  {
    icon: FiCpu,
    title: "AI-powered systems",
    text: "OCR workflows, computer vision projects, document automation, and ML-based solutions.",
  },
  {
    icon: FiDatabase,
    title: "Data engineering",
    text: "APIs, SQL, ETL pipelines, cleaning, transformation, and structured database loading.",
  },
  {
    icon: FiLayers,
    title: "Modern web apps",
    text: "Responsive frontend experiences using React, Tailwind CSS, and interactive UI patterns.",
  },
  {
    icon: FiZap,
    title: "Practical problem solving",
    text: "Focused on real-world usability, clean logic, scalable structure, and business value.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-cyan-200">About Me</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            A builder mindset for software, AI, and data.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">{profile.about}</p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="glass-card rounded-3xl p-7"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-xl text-cyan-200">
                  <Icon />
                </div>
                <h3 className="mt-5 text-xl font-black text-white">{card.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{card.text}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="glass-card mt-6 rounded-3xl p-7"
        >
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-purple-200">
            Currently Learning
          </p>
          <p className="mt-3 text-lg leading-8 text-slate-300">{profile.currentlyLearning}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;