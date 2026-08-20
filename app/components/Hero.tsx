const marqueeItems = [
  "AI Voice Agents", "Omnichannel", "Fully Sovereign", "Video KYC",
  "Agent Copilot", "Quality Management", "Agentic Workflows",
  "Customer-Managed Keys", "Natural-Language Analytics", "Unified Routing",
  "Your Own Models", "Full-Parity API",
];

export default function Hero() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="wrap hero-inner">
        <div>
          <img className="hero-logo rv" src="/assets/logo-reversed.png" alt="unysion — unified · intelligent · connected" />
          <span className="pill rv"><span className="dot"></span>The AI-First Contact Center</span>
          <h1 className="rv rv-d1" style={{ marginTop: 26 }}>
            Customer experience,<br /><span className="grad">sovereign by design.</span>
          </h1>
          <p className="sub rv rv-d2">
            Unysion Ascend unifies every channel, every agent — human and AI — in{" "}
            <strong>one platform that runs anywhere</strong>: any cloud, on-premises, or fully air-gapped inside your walls.
          </p>
          <div className="hero-cta rv rv-d3">
            <a className="btn btn-p" href="#cta">
              Request a Demo
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a className="btn btn-g" href="#ai">Meet the AI Workforce</a>
          </div>
          <div className="hero-meta rv rv-d3">
            <div className="hm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /></svg>
              Fully sovereign, air-gap capable
            </div>
            <div className="hm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" /></svg>
              Sub-100 ms conversational AI
            </div>
            <div className="hm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 010 18" /></svg>
              Built for India &amp; the Gulf
            </div>
          </div>
        </div>
        <div className="hero-visual rv rv-d2">
          <div className="orb">
            <div className="orb-ring" style={{ width: 460, height: 460 }} />
            <div className="orb-ring r2" style={{ width: 340, height: 340 }} />
            <div className="orb-core"><img src="/assets/icon-reversed.png" alt="" /></div>
          </div>
          <div className="chip c1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0014 0M12 18v3" /></svg>
            AI Voice Agents
          </div>
          <div className="chip c2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a8 8 0 01-8 8H4l2-3.2A8 8 0 1121 12z" /></svg>
            Omnichannel
          </div>
          <div className="chip c3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" /></svg>
            Your Keys, Your Data
          </div>
          <div className="chip c4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h4l3-8 4 16 3-8h4" /></svg>
            100% Interaction Intelligence
          </div>
        </div>
      </div>
      <div className="marquee">
        <div className="mq-track">
          {doubled.map((t, i) => (
            <span key={i}><i></i>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
