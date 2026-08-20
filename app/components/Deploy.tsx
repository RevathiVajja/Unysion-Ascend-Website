export default function Deploy() {
  return (
    <section className="sec" id="deploy" style={{ background: "#fff" }}>
      <div className="wrap">
        <div className="eyebrow rv">Deployment</div>
        <h2 className="h2 rv">Deploy where your regulator<br />lets you sleep at night.</h2>
        <p className="lede rv">
          Two reference profiles, one product. Choose per component what runs on-premises and what runs in a
          permitted cloud — and change your mind later without changing products.
        </p>
        <div className="split split-2">
          <div className="dcard mid rv">
            <span className="tag">Air-gap capable</span>
            <div className="dic">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>
            </div>
            <h3>Fully Sovereign</h3>
            <p>
              Voice and internal channels run on-premises with local AI inference and local data storage — no
              outbound internet dependency at all. The air-gapped profile for the most isolated regulated
              environments. Combined with customer-managed encryption keys, the platform is cryptographically
              unable to read your data without you.
            </p>
          </div>
          <div className="dcard rv rv-d1">
            <div className="dic">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" /></svg>
            </div>
            <h3>Sovereign Hybrid</h3>
            <p>
              The core platform, customer data, and AI stay on-premises, while channels that must reach external
              services — WhatsApp, social — connect through a controlled gateway with only the minimum required
              data leaving, and the data path documented transparently. Technically honest sovereignty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
