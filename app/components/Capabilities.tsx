const cells = [
  {
    cls: "big",
    num: "01",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 01-8 8H4l2-3.2A8 8 0 1121 12z" /><circle cx="9" cy="12" r="1.2" fill="currentColor" /><circle cx="13" cy="12" r="1.2" fill="currentColor" /><circle cx="17" cy="12" r="1.2" fill="currentColor" /></svg>,
    title: "Omnichannel engagement",
    text: "Voice, video, chat, WhatsApp, email, and social — one routing engine, one agent workspace, one customer view. Customers move between channels without repeating themselves; agents never switch tools. Video KYC brings regulator-ready remote onboarding into the same fabric.",
  },
  {
    cls: "green",
    num: "02",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l3-8 4 16 3-8h4" /></svg>,
    title: "Unified human + AI routing",
    text: "AI agents are first-class routable resources — one engine, one blended workforce, one operational picture.",
  },
  {
    cls: "",
    num: "03",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="10.5" cy="10.5" r="6.5" /><path d="M20 20l-4.5-4.5M8 10.5h5M10.5 8v5" /></svg>,
    title: "Quality on 100% of interactions",
    text: "Every conversation on every channel is AI-evaluated against your scorecards — human and AI agents alike.",
  },
  {
    cls: "",
    num: "04",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M10 20V4M16 20v-8M22 20H2" /></svg>,
    title: "Ask your data anything",
    text: "Natural-language analytics over a single semantic layer — every metric defined once, so the wallboard and the board deck always agree.",
  },
  {
    cls: "",
    num: "05",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2V5z" /><path d="M4 19a2 2 0 012-2h13" /></svg>,
    title: "One governed knowledge base",
    text: "Every AI surface answers from the same curated, citable, bilingual knowledge — with a loop that finds the gaps for you.",
  },
  {
    cls: "big",
    num: "06",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8a2 2 0 002-2h12a2 2 0 002 2v3a2 2 0 000 4v3a2 2 0 00-2 2H6a2 2 0 00-2-2v-3a2 2 0 000-4V8z" /><path d="M13 6v2M13 11v2M13 16v2" /></svg>,
    title: "Front office to back office, automated",
    text: "Cases carry full context to back-office teams with SLAs and AI triage; agentic workflows execute multi-step requests across systems — bounded by authority, approvals, spending limits, and a complete recording of everything automation did. Compliance-grade recording, outbound controls, a full-parity API, and your own models in the registry complete the picture.",
  },
];

export default function Capabilities() {
  return (
    <section className="sec" id="capabilities">
      <div className="wrap">
        <div className="eyebrow rv">Platform Capabilities</div>
        <h2 className="h2 rv">Everything a modern contact center needs.<br />Nothing bolted on.</h2>
        <p className="lede rv">
          A full-suite platform from a single coherent codebase — depth of coverage that would take competitors
          four acquisitions to match.
        </p>
        <div className="bento">
          {cells.map((c, i) => (
            <div key={c.num} className={`bcell${c.cls ? " " + c.cls : ""} rv${i % 3 ? ` rv-d${i % 3}` : ""}`}>
              <span className="num">{c.num}</span>
              <div className="bic">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
