import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { profile, stats } from "../data/portfolioData";

const Hero = () => {
  return (
    <section id="home" className="section-padding flex min-h-screen items-center pt-32">
      <div className="container-width grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="command-label"
          >
            SYSTEM_ONLINE // PERSONAL_PORTFOLIO_v1
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="big-title mt-6"
          >
            PYTHON
            <br />
            DATA
            <br />
            AI DEV.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400"
          >
            {profile.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#projects" className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3">
              VIEW_PROJECTS <FiArrowRight />
            </a>

            <a href={profile.resumePath} download className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3">
              RESUME <FiDownload />
            </a>

            <a href="#contact" className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3">
              CONTACT <FiMail />
            </a>
          </motion.div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 border border-white/10">
            {stats.map((item) => (
              <div key={item.label} className="border-r border-white/10 p-5 last:border-r-0">
                <p className="green-text text-2xl font-black">{item.value}</p>
                <p className="mt-1 text-xs uppercase text-zinc-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 34 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.24 }}
          className="terminal-card"
        >
          <div className="terminal-header flex items-center justify-between px-5 py-3">
            <span className="text-sm font-black">portfolio_status.sh</span>
            <span className="green-text text-xs">● ONLINE</span>
          </div>

          <div className="p-5 text-sm leading-8 text-zinc-300">
            <p>
              <span className="green-text">$</span> ./check_profile --role=developer
            </p>
            <p className="mt-4">
              <span className="green-text">✓</span> name: {profile.name}
            </p>
            <p>
              <span className="green-text">✓</span> role: Python / Data / AI / Web
            </p>
            <p>
              <span className="green-text">✓</span> projects_loaded: 4
            </p>
            <p>
              <span className="green-text">✓</span> recruiter_ready: TRUE
            </p>
            <p>
              <span className="green-text">✓</span> resume: public/resume.pdf
            </p>

            <div className="my-5 border-t border-dashed border-white/20" />

            <p>
              <span className="text-zinc-500">▲</span> focus: AI systems, OCR, ETL, automation
            </p>
            <p>
              <span className="text-zinc-500">▲</span> stack: Python, SQL, React, OpenCV
            </p>
            <p>
              <span className="text-zinc-500">▲</span> status: BUILDING
            </p>

            <div className="mt-5 bg-[#9cff57] px-4 py-3 font-black text-black">
              READY_TO_DEPLOY
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;