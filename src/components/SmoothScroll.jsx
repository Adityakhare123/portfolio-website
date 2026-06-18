import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const SmoothScroll = () => {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    const handleClick = (event) => {
      const href = event.currentTarget.getAttribute("href");

      if (!href || href === "#") return;

      const target = document.querySelector(href);

      if (!target) return;

      event.preventDefault();

      gsap.to(window, {
        scrollTo: {
          y: target,
          offsetY: 84,
        },
        duration: 0.9,
        ease: "power3.inOut",
      });
    };

    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return null;
};

export default SmoothScroll;