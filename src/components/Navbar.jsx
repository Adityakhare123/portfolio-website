import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, profile } from "../data/portfolioData";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/70 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="container-width flex items-center justify-between px-5 py-4">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-sm font-black text-cyan-200 shadow-lg shadow-cyan-500/10">
            {profile.logo}
          </span>
          <span className="text-sm font-semibold tracking-wide text-white/90 group-hover:text-cyan-200">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-200"
            >
              {link.label}
            </a>
          ))}

          <a
            href={profile.resumePath}
            download
            className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-xl text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-width flex flex-col gap-2 px-5 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-cyan-200"
                >
                  {link.label}
                </a>
              ))}

              <a
                href={profile.resumePath}
                download
                onClick={closeMenu}
                className="mt-2 rounded-xl bg-cyan-300 px-4 py-3 text-center text-sm font-bold text-slate-950"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;