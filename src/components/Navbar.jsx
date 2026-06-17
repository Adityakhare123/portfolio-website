import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, profile } from "../data/portfolioData";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-50 border-b border-white/10 ${
        scrolled ? "bg-[#050505]/90 backdrop-blur-xl" : "bg-[#050505]/70 backdrop-blur-md"
      }`}
    >
      <nav className="container-width flex items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="green-text text-xl">⌘</span>
          <span className="font-black tracking-tight">{profile.name}.exe</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-zinc-400 transition hover:text-[#9cff57]"
            >
              _{link.label}
            </a>
          ))}

          <a
            href={profile.resumePath}
            download
            className="btn-primary px-5 py-2 text-sm"
          >
            RESUME ↗
          </a>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="border border-white/15 bg-white/5 p-2 text-xl lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#050505]"
          >
            <div className="container-width grid gap-2 px-5 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border border-white/10 px-4 py-3 text-sm font-bold text-zinc-300"
                >
                  _{link.label}
                </a>
              ))}

              <a
                href={profile.resumePath}
                download
                className="btn-primary mt-2 px-4 py-3 text-center text-sm"
              >
                DOWNLOAD_RESUME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;