const cards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" /><path d="M12 22V12M3 7l9 5 9-5" /></svg>
    ),
    title: "One build, every target",
    text: "Public cloud, private cloud, on-premises, or fully air-gapped — the same software, the same features. Feature parity is guaranteed by construction, and you can move between targets without retraining or migration.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" /></svg>
    ),
    title: "Sovereignty as configuration",
    text: "In the Fully Sovereign profile, every component — LLMs, speech, embeddings, data stores — runs inside your walls with zero outbound dependency. Verifiable: your own network monitoring will observe nothing phoning home.",
    tag: "Flagship",
    mid: true,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" /></svg>
    ),
    title: "Any AI model — even yours",
    text: "Cloud providers, local open-weight models, or your own registered ML models — bound through stable contracts per deployment or per tenant. Mix them, chain fallbacks, switch vendors. Never locked in.",
  },
];

export default function Platform() {
  return (
    <section className="sec" id="platform">
      <div className="wrap">
        <div className="eyebrow rv">Why Unysion</div>
        <h2 className="h2 rv">The AI revolution and the sovereignty wall —<br />solved by one platform.</h2>
        <p className="lede rv">
          Conversational AI is transforming customer service, while data-sovereignty regulation — India&apos;s DPDP Act,
          SAMA and NCA in Saudi Arabia, CBK and CITRA in Kuwait, the UAE&apos;s PDPL, Qatar&apos;s data-protection law —
          forbids regulated enterprises from sending conversations to foreign clouds. The buyers with the most to gain
          from AI are the ones forbidden from using it. Unysion exists for them.
        </p>
        <div className="split">
          {cards.map((c, i) => (
            <div key={c.title} className={`dcard${c.mid ? " mid" : ""} rv${i > 0 ? ` rv-d${i}` : ""}`}>
              {c.tag && <span className="tag">{c.tag}</span>}
              <div className="dic">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
