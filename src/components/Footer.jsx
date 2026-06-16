import { FiArrowUp } from "react-icons/fi";
import { profile, socialIcons } from "../data/portfolioData";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-5 py-8">
      <div className="container-width flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <div>
          <p className="font-black text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialIcons.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
              >
                <Icon />
              </a>
            );
          })}

          <a
            href="#home"
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center rounded-full bg-cyan-300 text-slate-950 transition hover:-translate-y-1"
          >
            <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;