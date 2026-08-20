const fam: [string, string][] = [
  ["Relay", "Voice, telephony & interaction routing"],
  ["Aria", "IVR & visual self-service designer"],
  ["Persona", "Autonomous AI voice & text agents"],
  ["Converse", "Digital channels, social & Video KYC"],
  ["Desk", "The unified agent workspace"],
  ["Sidekick", "Real-time agent copilot"],
  ["Vantage", "Supervisor suite & reporting"],
  ["Lens", "AI quality management"],
  ["Codex", "Governed knowledge platform"],
  ["Thrive", "Workforce engagement"],
  ["Ledger", "Recording & compliance"],
  ["Outreach", "Outbound & campaigns"],
  ["Mosaic", "Unified customer profile"],
  ["Conduit", "Workflow automation & ticketing"],
  ["Nexus", "Agentic workflows"],
  ["Foundry", "Custom model registry"],
  ["Ping", "Public API & developer platform"],
  ["Orchestrate", "WFM connectors & AI forecasting"],
];

export default function ProductFamily() {
  return (
    <section className="sec" id="products">
      <div className="wrap">
        <div className="eyebrow rv">Product Family</div>
        <h2 className="h2 rv">One platform. A family of<br />purpose-built components.</h2>
        <div className="family-grid">
          {fam.map(([name, role], i) => (
            <div key={name} className={`fcard rv${i % 3 ? ` rv-d${i % 3}` : ""}`}>
              <div className="fname">Unysion <span>{name}</span></div>
              <p>{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
