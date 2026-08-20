"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    const el = ref.current;
    if (!el) return;
    let gx = window.innerWidth / 2, gy = 200, tx = gx, ty = gy, raf = 0;
    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const loop = () => {
      gx += (tx - gx) * 0.08; gy += (ty - gy) * 0.08;
      el.style.left = gx + "px"; el.style.top = gy + "px";
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div id="glow" ref={ref} aria-hidden="true" style={{ display: "none" }} />;
}
