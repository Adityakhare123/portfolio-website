import { FiArrowUp } from "react-icons/fi";
import { profile, socialIcons } from "../data/portfolioData";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-5 py-8">
      <div className="container-width flex flex-col justify-between gap-5 md:flex-row md:items-center">
        <div>
          <p className="font-black">⌘ {profile.name}.exe</p>
          <p className="mt-1 text-xs uppercase text-zinc-600">
            © {new Date().getFullYear()} // PORTFOLIO_END
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {socialIcons.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="border border-white/10 bg-white/5 p-3 text-zinc-400 transition hover:border-[#9cff57] hover:text-[#9cff57]"
              >
                <Icon />
              </a>
            );
          })}

          <a
            href="#home"
            aria-label="Back to top"
            className="bg-[#9cff57] p-3 text-black transition hover:-translate-y-1"
          >
            <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;