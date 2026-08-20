"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#platform", label: "Platform" },
  { href: "#deploy", label: "Deploy Anywhere" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#ai", label: "AI Workforce" },
  { href: "#products", label: "Products" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`nav${solid ? " solid" : ""}`}>
        <div className="wrap nav-in">
          <a href="#top" className="nav-logo" aria-label="Unysion home">
            <img src="/assets/logo-reversed.png" alt="unysion — unified · intelligent · connected" />
          </a>
          <nav className="nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
            <a className="btn btn-p" href="#cta">Request a Demo</a>
          </nav>
          <button
            className="burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
      <div className={`mmenu${open ? " open" : ""}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#cta" style={{ color: "var(--green-2)" }} onClick={() => setOpen(false)}>
          Request a Demo →
        </a>
      </div>
    </>
  );
}
