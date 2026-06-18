import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      cursor.style.display = "none";
      follower.style.display = "none";
      return;
    }

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
    });

    gsap.set(follower, {
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
    });

    const moveCursor = (event) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        opacity: 1,
        duration: 0.06,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x: event.clientX,
        y: event.clientY,
        opacity: 1,
        duration: 0.28,
        ease: "power3.out",
      });
    };

    const growCursor = () => {
      gsap.to(follower, {
        scale: 1.45,
        borderColor: "rgba(156, 255, 87, 0.75)",
        duration: 0.2,
        ease: "power2.out",
      });

      gsap.to(cursor, {
        scale: 0.75,
        duration: 0.18,
        ease: "power2.out",
      });
    };

    const shrinkCursor = () => {
      gsap.to(follower, {
        scale: 1,
        borderColor: "rgba(156, 255, 87, 0.45)",
        duration: 0.22,
        ease: "power2.out",
      });

      gsap.to(cursor, {
        scale: 1,
        duration: 0.18,
        ease: "power2.out",
      });
    };

    const hideCursor = () => {
      gsap.to([cursor, follower], {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const showCursor = () => {
      gsap.to([cursor, follower], {
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mouseenter", showCursor);

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, .hover-target"
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", growCursor);
      element.addEventListener("mouseleave", shrinkCursor);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("mouseenter", showCursor);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", growCursor);
        element.removeEventListener("mouseleave", shrinkCursor);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor-dot" />
      <div ref={followerRef} className="custom-cursor-ring" />
    </>
  );
};

export default CustomCursor;