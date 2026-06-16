import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { FaPython, FaReact, FaDatabase, FaBrain } from "react-icons/fa";
import { profile, stats } from "../data/portfolioData";

const floatingIcons = [
  { icon: FaPython, label: "Python", className: "left-3 top-10" },
  { icon: FaReact, label: "React", className: "right-4 top-20" },
  { icon: FaDatabase, label: "SQL", className: "left-8 bottom-16" },
  { icon: FaBrain, label: "AI", className: "right-10 bottom-8" },
];

const Hero = () => {
  return (
    <section id="home" className="section-padding relative flex min-h-screen items-center pt-32">
      <div className="container-width grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300" />
            Available for developer, data, and AI opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-white md:text-7xl"
          >
            Hi, I’m{" "}
            <span className="gradient-text">{profile.name}</span>
            <br />
            {profile.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-300"
          >
            {profile.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/30"
            >
              View Projects
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </a>

            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10"
            >
              <FiDownload />
              Download Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 font-semibold text-slate-200 transition hover:-translate-y-1 hover:text-cyan-200"
            >
              <FiMail />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-12 grid max-w-xl grid-cols-3 gap-4"
          >
            {stats.map((item) => (
              <div key={item.label} className="glass-card rounded-2xl p-4">
                <p className="text-2xl font-black text-white">{item.value}</p>
                <p className="mt-1 text-xs text-slate-400">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2 }}
          className="relative mx-auto h-[430px] w-full max-w-[430px]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-cyan-300/20"
          />

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card absolute inset-8 overflow-hidden rounded-[2rem] p-6"
          >
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="h-56 overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/70">
                  <img
                    src={profile.profileImage}
                    alt={profile.name}
                    className="h-full w-full object-cover opacity-90"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="grid h-full place-items-center text-center">
                    <div>
                      <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-cyan-300/10 text-3xl font-black text-cyan-200">
                        {profile.logo}
                      </div>
                      <p className="mt-4 text-sm text-slate-400">Add profile.jpg in public folder</p>
                    </div>
                  </div>
                </div>

                <h2 className="mt-6 text-2xl font-black text-white">{profile.name}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">{profile.role}</p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-slate-400">Focus</p>
                  <p className="mt-1 font-bold text-cyan-100">AI + Data</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-slate-400">Builds</p>
                  <p className="mt-1 font-bold text-purple-100">Products</p>
                </div>
              </div>
            </div>
          </motion.div>

          {floatingIcons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 3.5 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute ${item.className} glass-card flex items-center gap-2 rounded-2xl px-4 py-3 text-sm text-slate-200`}
              >
                <Icon className="text-cyan-200" />
                {item.label}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;