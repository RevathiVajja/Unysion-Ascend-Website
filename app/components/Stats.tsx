"use client";

import { useEffect, useRef } from "react";

function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          el.textContent = "0";
          const t0 = performance.now(), dur = 1400;
          const tick = (t: number) => {
            const p = Math.min((t - t0) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            el.textContent = String(Math.round(target * ease));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return <span ref={ref}>{target}</span>;
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="wrap" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="stats-grid">
          <div className="stat rv">
            <div className="v"><Counter target={100} /><em>%</em></div>
            <div className="l">of interactions AI-evaluated for quality — not a sample</div>
          </div>
          <div className="stat rv rv-d1">
            <div className="v">&lt;<Counter target={100} /><em>ms</em></div>
            <div className="l">barge-in response — conversation that feels human</div>
          </div>
          <div className="stat rv rv-d2">
            <div className="v"><Counter target={4} /></div>
            <div className="l">deployment targets — cloud to fully air-gapped, one product</div>
          </div>
          <div className="stat rv rv-d3">
            <div className="v"><Counter target={1} /></div>
            <div className="l">codebase, one knowledge base, one definition of truth</div>
          </div>
        </div>
      </div>
    </section>
  );
}
