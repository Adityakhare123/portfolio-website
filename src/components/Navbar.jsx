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

  const closeMenu = () => setOpen(false);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 border-b border-white/10 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/92 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
          : "bg-[#050505]/72 backdrop-blur-md"
      }`}
    >
      <nav className="container-width flex items-center justify-between px-5 py-4">
        <a href="#home" className="hover-target group flex items-center gap-3">
          <span className="green-text text-xl transition duration-300 group-hover:rotate-12 group-hover:scale-110">
            ⌘
          </span>

          <span className="font-black tracking-tight text-white transition duration-300 group-hover:text-[#9cff57] group-hover:[text-shadow:0_0_18px_rgba(156,255,87,0.45)]">
            {profile.name}.exe
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link-terminal hover-target text-sm font-bold text-zinc-400 transition"
            >
              _{link.label}
            </a>
          ))}

          <a
            href={profile.resumePath}
            download
            className="btn-primary hover-target px-5 py-2 text-sm"
          >
            RESUME ↗
          </a>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="hover-target border border-white/15 bg-white/5 p-2 text-xl transition hover:border-[#9cff57] hover:text-[#9cff57] lg:hidden"
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
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-[#050505]"
          >
            <div className="container-width grid gap-2 px-5 py-5">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="hover-target border border-white/10 px-4 py-3 text-sm font-bold text-zinc-300 transition hover:border-[#9cff57] hover:bg-[#9cff57]/10 hover:text-[#9cff57]"
                >
                  _{link.label}
                </motion.a>
              ))}

              <motion.a
                href={profile.resumePath}
                download
                onClick={closeMenu}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.04 }}
                className="btn-primary hover-target mt-2 px-4 py-3 text-center text-sm"
              >
                DOWNLOAD_RESUME
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;