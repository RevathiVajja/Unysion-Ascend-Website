"use client";

import { useEffect } from "react";

export default function Reveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    const failsafe = window.setTimeout(() => {
      document.querySelectorAll(".rv:not(.in)").forEach((el) => el.classList.add("in"));
    }, 1600);
    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);
  return null;
}
