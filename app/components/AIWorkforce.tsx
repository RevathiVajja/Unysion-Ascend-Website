"use client";

import { useState } from "react";

function Wave({ height = 72 }: { height?: number }) {
  const bars = Array.from({ length: 26 }, (_, i) => 18 + Math.abs(Math.sin(i * 0.62)) * 78);
  return (
    <div className="wave-row" style={{ height }}>
      {bars.map((h, i) => (
        <i key={i} style={{ height: `${h}%`, animationDelay: `${(i * 0.07).toFixed(2)}s` }} />
      ))}
    </div>
  );
}

function Mock({ children }: { children: React.ReactNode }) {
  return (
    <div className="mock">
      <div className="mock-bar"><i></i><i></i><i></i></div>
      {children}
    </div>
  );
}

const check = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M4 12l5 5L20 7" /></svg>
);

const panels = [
  {
    tab: "AI Voice Agents",
    pn: "Unysion Persona · Voice",
    title: "Talks like a person. Acts like a system.",
    text: "Autonomous voice agents that hold natural, bilingual conversation — Gulf-Arabic dialect included — with barge-in inside 100 milliseconds. They answer only from approved knowledge, transact on backend systems with financial-grade safeguards, and hand over to humans with full context when they should.",
    bullets: [
      "Grounded, citable answers — no fabrication, ever",
      "Autonomy is a dial you control, per intent",
      "Cannot be manipulated beyond its authority",
    ],
    mock: (
      <Mock>
        <Wave />
        <div className="mock-line g" style={{ width: "72%" }} />
        <div className="mock-line" style={{ width: "88%" }} />
        <div className="mock-line" style={{ width: "54%" }} />
        <div className="mock-foot">
          <div className="mock-chip">Grounded ✓</div>
          <div className="mock-chip">Escalate to human</div>
          <div className="mock-chip">Action: verified</div>
        </div>
      </Mock>
    ),
  },
  {
    tab: "Agent Copilot",
    pn: "Unysion Sidekick · Copilot",
    title: "Every agent, expert from day one.",
    text: "A real-time copilot that listens alongside your human agents — surfacing answers from governed knowledge with citations and confidence, drafting responses, and preparing actions the agent confirms. The human proposes nothing they're not authorized to do; the AI never acts alone.",
    bullets: [
      "Shorter handling times, consistent answers",
      "New-agent training time slashed",
      "Human in control — always",
    ],
    mock: (
      <Mock>
        <div className="mock-line" style={{ width: "60%" }} />
        <div className="mock-line g" style={{ width: "92%" }} />
        <div className="mock-line g" style={{ width: "78%" }} />
        <div className="mock-line" style={{ width: "44%" }} />
        <div className="mock-foot">
          <div className="mock-chip">Suggested answer · 96%</div>
          <div className="mock-chip">View source</div>
        </div>
      </Mock>
    ),
  },
  {
    tab: "Supervisor AI",
    pn: "Unysion Vantage · Supervisor AI",
    title: "Your operation, in plain language.",
    text: "Supervisors ask their operation questions in natural language — why is this queue growing, which agents need support, what happened in that interaction — and get grounded answers and safe actions. Monitor, whisper, barge, or take over on human and AI interactions alike.",
    bullets: [
      "Live view of the blended human + AI workforce",
      "Intervene in AI-handled interactions too",
      "Data becomes answers, not dashboards to babysit",
    ],
    mock: (
      <Mock>
        <div className="mock-line g" style={{ width: "52%" }} />
        <Wave height={56} />
        <div className="mock-line" style={{ width: "70%" }} />
        <div className="mock-foot">
          <div className="mock-chip">Queue risk: none</div>
          <div className="mock-chip">SL 94%</div>
          <div className="mock-chip">Ask anything…</div>
        </div>
      </Mock>
    ),
  },
  {
    tab: "Agentic Workflows",
    pn: "Unysion Nexus · Agentic",
    title: "Don't just answer the request. Do it.",
    text: "Multi-step agentic workflows execute open-ended goals — across your systems, standard AI tools, even legacy screens via computer use. Designed low-code by business users, invoked from any channel, and safe for a bank: bounded authority, step and cost limits, approval gates, rehearsal mode, and a complete recording of every action.",
    bullets: [
      "Automates even systems with no API",
      "Sensitive actions require human approval",
      "Every step recorded for audit",
    ],
    mock: (
      <Mock>
        <div className="mock-foot" style={{ marginTop: 0, marginBottom: 14 }}>
          <div className="mock-chip">1 · Verify identity ✓</div>
          <div className="mock-chip">2 · Retrieve case ✓</div>
        </div>
        <div className="mock-line g" style={{ width: "64%" }} />
        <div className="mock-foot" style={{ marginBottom: 14 }}>
          <div className="mock-chip">3 · Update core banking</div>
          <div className="mock-chip">4 · Notify customer</div>
        </div>
        <div className="mock-line" style={{ width: "40%" }} />
        <div className="mock-foot">
          <div className="mock-chip">Approval gate</div>
          <div className="mock-chip">Fully recorded</div>
        </div>
      </Mock>
    ),
  },
];

export default function AIWorkforce() {
  const [active, setActive] = useState(0);

  return (
    <section className="sec ai" id="ai">
      <div className="wrap" style={{ position: "relative" }}>
        <div className="eyebrow rv">The AI Workforce</div>
        <h2 className="h2 rv" style={{ color: "#fff" }}>
          AI that resolves. AI that assists.<br />AI you can audit.
        </h2>
        <p className="lede rv dark">
          Grounded in your governed knowledge, bound by your permissions, observable in real time. This is AI a
          risk committee can approve — with a knowledge-only mode where fabrication is structurally impossible.
        </p>
        <div className="tabs rv">
          {panels.map((p, i) => (
            <button
              key={p.tab}
              className={`tab${active === i ? " on" : ""}`}
              onClick={() => setActive(i)}
            >
              {p.tab}
            </button>
          ))}
        </div>
        {panels.map((p, i) => (
          <div key={p.tab} className={`panel${active === i ? " on" : ""}`}>
            <div>
              <h3><span className="pn">{p.pn}</span>{p.title}</h3>
              <p>{p.text}</p>
              <ul>
                {p.bullets.map((b) => (
                  <li key={b}>{check}{b}</li>
                ))}
              </ul>
            </div>
            {p.mock}
          </div>
        ))}
      </div>
    </section>
  );
}
