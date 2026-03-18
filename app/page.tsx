import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function HomePage() {
  const dark = "#0a1f35";
  const darkAlt = "#0d2545";
  const accent = "#00aaff";

  const painPoints = [
    {
      title: "Time drain",
      text: "Searching legacy drawings, files, and plant records manually slows quoting, estimating, engineering, and production decisions.",
    },
    {
      title: "Missed matches",
      text: "Teams recreate work that already exists because similar designs, parts, lines, or past jobs cannot be surfaced fast enough.",
    },
    {
      title: "Knowledge loss",
      text: "Operational knowledge stays trapped in folder structures, filenames, archived specs, and the memory of a few experienced people.",
    },
  ];

  const workflow = [
    {
      step: "01",
      title: "Search",
      text: "Search by customer, part, plant, line, spec, job history, or prior design context.",
    },
    {
      step: "02",
      title: "Compare",
      text: "Review structured matches side by side and quickly identify what is relevant and reusable.",
    },
    {
      step: "03",
      title: "Reuse",
      text: "Move faster with proven historical work instead of rebuilding from scratch each time.",
    },
  ];

  const recordTypes = [
    "Drawings and legacy files",
    "Dimensions and specifications",
    "Factory and production context",
    "Line history and revisions",
    "Rules, tolerances, and constraints",
    "Original file access and traceability",
  ];

  const metrics = [
    { value: "45m → 30s", label: "Search time reduction" },
    { value: "85%", label: "Target match relevance" },
    { value: "40K+", label: "Files indexed" },
    { value: "3x", label: "Faster quoting workflow" },
  ];

  const onboarding = [
    "Upload a sample of your archive",
    "We index and structure the files",
    "Your team tests real searches",
    "Expand across plants, lines, and legacy systems",
  ];

  const searchRows = [
    ["FAC-20344", "Matched line design for a repeat customer", "Best match"],
    ["FAC-18772", "Legacy customer variant with board revision", "Strong match"],
    ["FAC-15200", "Similar structure with production-ready output", "Relevant"],
  ];

  const resultRows = [
    ["FAC-20344", "3.1 x 12.0 x 8.5, Plant North, customer A", "Best match"],
    ["FAC-18772", "4.5 x 10.2 x 11.0, similar variant", "Strong match"],
    ["FAC-15200", "Related structure with adjusted production settings", "Relevant"],
    ["FAC-09831", "Legacy design referenced by past estimator", "Legacy"],
  ];

  return (
    <main className={poppins.className}>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#" className="brand" aria-label="FactoryFound.ai home">
            <span className="brand-mark">F</span>
            <span className="brand-name">
              <span className="brand-heavy">Factory</span>
              <span className="brand-light">Found.ai</span>
            </span>
          </a>
          <nav className="nav-links">
            <a href="#product">Product</a>
            <a href="#how">How it works</a>
            <a href="#impact">Impact</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-cta">
            <a className="btn btn-secondary" href="#contact">Login</a>
            <a className="btn btn-primary" href="#contact">Request a Demo</a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">AI search infrastructure for manufacturing archives</div>
            <h1>Turn your factory archive into a searchable system.</h1>
            <p className="hero-text">
              FactoryFound.ai indexes legacy drawings, files, specs, and production knowledge
              so teams can find prior work, compare matches, and reuse proven outputs in seconds.
            </p>
            <div className="hero-actions">
              <a className="btn btn-dark" href="#contact">Request a Demo</a>
              <a className="btn btn-outline" href="#how">See Live Example</a>
            </div>
            <div className="metrics-grid">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="window-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="search-card">
              <div className="search-top">
                <div>
                  <div className="card-label">Search archive</div>
                  <div className="fake-input">Search by part, customer, line, plant, or historical match...</div>
                </div>
                <div className="mini-panel">
                  <div className="mini-label">Archive</div>
                  <div className="mini-title">System</div>
                </div>
              </div>
              <div className="search-results">
                {searchRows.map((row) => (
                  <div key={row[0]} className="result-card">
                    <div>
                      <div className="result-id">{row[0]}</div>
                      <div className="result-text">{row[1]}</div>
                    </div>
                    <div className="pill">{row[2]}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="floating-note">
              <div className="floating-label">Quote faster</div>
              <div className="floating-title">Past work found</div>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="section section-soft">
        <div className="container two-col">
          <div>
            <div className="section-kicker">The problem</div>
            <h2>Most factories are sitting on a broken access system.</h2>
            <p className="section-intro">
              Your archive already contains the answers your team needs. The problem is not file creation.
              It is retrieval, context, and usable access.
            </p>
            <div className="stack">
              {painPoints.map((item) => (
                <div key={item.title} className="info-card">
                  <div className="info-title">{item.title}</div>
                  <div className="info-text">{item.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="dark-panel">
            <div className="section-kicker panel-kicker">Access problem</div>
            <h3>This is not a file problem. It is an access problem.</h3>
            <div className="dark-list">
              <div><span>Manual folder search</span><strong>Slow and unreliable</strong></div>
              <div><span>Tribal knowledge dependency</span><strong>Hard to scale</strong></div>
              <div><span>Duplicate design creation</span><strong>Wastes engineering time</strong></div>
            </div>
            <div className="value-box">
              <div className="value-label">Estimated value unlocked</div>
              <div className="value-number">$50K–$150K</div>
              <p>Typical annual value from faster estimating, less rework, and better retrieval of prior work.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="section">
        <div className="container">
          <div className="section-kicker">How it works</div>
          <h2>Search your archive. Compare your matches. Reuse what already exists.</h2>
          <p className="section-intro wide">
            FactoryFound.ai turns historical factory knowledge into structured, searchable intelligence
            that your team can actually use.
          </p>
          <div className="three-grid">
            {workflow.map((item) => (
              <div key={item.step} className="step-card">
                <div className="step-badge">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container two-col-wide">
          <div>
            <div className="section-kicker">Live example</div>
            <h2>This is what your archive should have always been.</h2>
            <p className="section-intro">
              Instead of digging through folders, your team gets ranked results, structured context,
              and immediate access to relevant historical work.
            </p>
          </div>
          <div className="results-panel">
            <div className="results-top">
              <div className="results-title">Search results</div>
              <div className="results-query">Query: previous similar job + dieline + plant</div>
            </div>
            <div className="stack-sm">
              {resultRows.map((item, index) => (
                <div key={item[0]} className="result-card">
                  <div>
                    <div className="result-id">{item[0]}</div>
                    <div className="result-text">{item[1]}</div>
                  </div>
                  <div className={index < 3 ? "pill" : "pill pill-muted"}>{item[2]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-kicker">What gets indexed</div>
          <h2>Every factory record becomes structured, searchable, and usable.</h2>
          <div className="three-grid">
            {recordTypes.map((item) => (
              <div key={item} className="feature-card">
                <div className="feature-bar" />
                <div className="info-title">{item}</div>
                <p className="info-text">
                  Captured, indexed, and made available for real-world search, comparison, and reuse across your operation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="section impact-section">
        <div className="container">
          <div className="section-kicker light">Impact</div>
          <h2 className="light-heading">This is what happens when your archive becomes usable.</h2>
          <p className="section-intro light-intro">
            FactoryFound.ai reveals hidden operational value through faster quoting, smarter retrieval, and less duplicated work.
          </p>
          <div className="metrics-grid">
            {metrics.map((metric) => (
              <div key={metric.label} className="impact-card">
                <div className="impact-value">{metric.value}</div>
                <div className="impact-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <div className="section-kicker">Getting started</div>
            <h2>How companies start with FactoryFound.ai</h2>
            <p className="section-intro">
              Adoption starts with a focused sample, validated by your own team, then expands across plants and legacy systems once results are proven.
            </p>
          </div>
          <div className="setup-panel">
            {onboarding.map((item, index) => (
              <div key={item} className="setup-row">
                <div
                  className="setup-badge"
                  style={{ backgroundColor: index % 2 === 0 ? dark : accent }}
                >
                  {index + 1}
                </div>
                <div className="setup-text">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-last">
        <div className="container cta-panel">
          <h2 className="light-heading">Turn your archive into a system your team can actually use.</h2>
          <p className="light-intro center">
            Find, compare, and reuse historical factory knowledge instantly across quoting, engineering, and operations.
          </p>
          <div className="hero-actions center">
            <a className="btn btn-white" href="mailto:hello@factoryfound.ai">Request a Demo</a>
            <a className="btn btn-outline-light" href="mailto:hello@factoryfound.ai">Contact Sales</a>
          </div>
          <div className="footer-email">hello@factoryfound.ai</div>
        </div>
      </section>

      <style jsx global>{`
        :root {
          --dark: ${dark};
          --dark-alt: ${darkAlt};
          --accent: ${accent};
          --text: #0f172a;
          --muted: #5f6b7a;
          --line: #e5e7eb;
          --soft: #fbfaf8;
          --gray: #f7f8fa;
          --white: #ffffff;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          color: var(--text);
          background: var(--white);
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .container {
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
        }

        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(229, 231, 235, 0.75);
        }

        .nav-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 18px 0;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-mark {
          display: inline-flex;
          width: 40px;
          height: 40px;
          border-radius: 14px;
          align-items: center;
          justify-content: center;
          background: var(--dark);
          color: white;
          font-weight: 700;
          box-shadow: 0 8px 20px rgba(10, 31, 53, 0.18);
        }

        .brand-name {
          font-size: 30px;
          letter-spacing: -0.03em;
          line-height: 1;
        }

        .brand-heavy {
          font-weight: 800;
          color: var(--dark);
        }

        .brand-light {
          font-weight: 500;
          color: var(--accent);
        }

        .nav-links,
        .nav-cta,
        .hero-actions,
        .metrics-grid,
        .two-col,
        .three-grid,
        .two-col-wide,
        .search-top,
        .nav-wrap,
        .setup-row,
        .results-top {
          display: flex;
        }

        .nav-links {
          gap: 28px;
          color: #4b5563;
          font-size: 14px;
        }

        .nav-links a:hover {
          color: var(--text);
        }

        .nav-cta {
          gap: 12px;
          align-items: center;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          padding: 12px 18px;
          font-size: 14px;
          font-weight: 600;
          transition: 0.2s ease;
          border: 1px solid transparent;
        }

        .btn:hover {
          transform: translateY(-1px);
        }

        .btn-primary {
          background: var(--accent);
          color: white;
        }

        .btn-secondary,
        .btn-outline {
          background: white;
          color: var(--text);
          border-color: #d1d5db;
        }

        .btn-dark {
          background: var(--dark);
          color: white;
          box-shadow: 0 16px 30px rgba(10, 31, 53, 0.18);
        }

        .btn-white {
          background: white;
          color: var(--text);
        }

        .btn-outline-light {
          border-color: rgba(255, 255, 255, 0.32);
          color: white;
        }

        .hero {
          position: relative;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 20%, rgba(0, 170, 255, 0.14), transparent 28%),
            radial-gradient(circle at 80% 18%, rgba(0, 170, 255, 0.08), transparent 24%),
            linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
        }

        .hero-grid,
        .two-col,
        .two-col-wide {
          display: grid;
          gap: 40px;
        }

        .hero-grid {
          position: relative;
          grid-template-columns: 1.05fr 0.95fr;
          align-items: center;
          padding: 88px 0 96px;
        }

        .hero-copy h1,
        h2,
        h3 {
          margin: 0;
          letter-spacing: -0.04em;
        }

        .hero-copy h1 {
          max-width: 720px;
          font-size: clamp(42px, 5.8vw, 66px);
          line-height: 1.02;
        }

        .eyebrow,
        .section-kicker,
        .card-label,
        .mini-label,
        .floating-label,
        .value-label,
        .light,
        .panel-kicker {
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 12px;
          font-weight: 700;
        }

        .eyebrow,
        .section-kicker {
          color: var(--accent);
        }

        .eyebrow {
          display: inline-flex;
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid rgba(0, 170, 255, 0.18);
          background: rgba(0, 170, 255, 0.08);
          margin-bottom: 22px;
        }

        .hero-text,
        .section-intro,
        .info-text,
        .step-card p,
        .feature-card p,
        .light-intro {
          color: var(--muted);
          line-height: 1.75;
        }

        .hero-text {
          max-width: 640px;
          margin-top: 24px;
          font-size: 18px;
        }

        .hero-actions {
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .hero-actions.center {
          justify-content: center;
        }

        .metrics-grid {
          margin-top: 34px;
          gap: 16px;
          flex-wrap: wrap;
        }

        .metric-card,
        .impact-card {
          min-width: 140px;
          flex: 1 1 140px;
          border-radius: 22px;
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.92);
          padding: 18px;
          box-shadow: 0 14px 36px rgba(0, 28, 61, 0.05);
        }

        .metric-value {
          color: var(--dark);
          font-size: 28px;
          font-weight: 700;
        }

        .metric-label,
        .impact-label {
          margin-top: 6px;
          color: #64748b;
          font-size: 14px;
        }

        .hero-panel {
          position: relative;
          border-radius: 32px;
          border: 1px solid var(--line);
          background: white;
          padding: 20px;
          box-shadow: 0 24px 64px rgba(0, 170, 255, 0.12);
        }

        .window-dots {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
        }

        .window-dots span {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: #cbd5e1;
        }

        .search-card {
          border-radius: 22px;
          border: 1px solid var(--line);
          padding: 18px;
        }

        .search-top {
          justify-content: space-between;
          gap: 18px;
          align-items: flex-start;
        }

        .card-label,
        .floating-label,
        .results-query,
        .mini-label {
          color: #94a3b8;
        }

        .fake-input {
          margin-top: 10px;
          border-radius: 14px;
          border: 1px solid var(--line);
          background: #f8fafc;
          padding: 14px 16px;
          color: #64748b;
          font-size: 14px;
        }

        .mini-panel {
          border-radius: 18px;
          background: var(--dark);
          color: white;
          padding: 14px 16px;
          min-width: 104px;
        }

        .mini-title {
          margin-top: 4px;
          font-size: 22px;
          font-weight: 700;
        }

        .search-results,
        .stack,
        .stack-sm,
        .dark-list {
          margin-top: 18px;
          display: grid;
          gap: 12px;
        }

        .result-card,
        .info-card,
        .step-card,
        .feature-card,
        .setup-row {
          border-radius: 20px;
          border: 1px solid var(--line);
          background: white;
          padding: 18px;
        }

        .result-card {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: center;
        }

        .result-id,
        .info-title,
        .results-title {
          font-weight: 700;
          color: var(--text);
        }

        .result-text {
          margin-top: 4px;
          color: #64748b;
          font-size: 14px;
        }

        .pill {
          flex-shrink: 0;
          border-radius: 999px;
          padding: 8px 12px;
          background: rgba(0, 170, 255, 0.12);
          color: var(--accent);
          font-size: 12px;
          font-weight: 700;
        }

        .pill-muted {
          background: #f1f5f9;
          color: #64748b;
        }

        .floating-note {
          position: absolute;
          top: 56px;
          right: -16px;
          border-radius: 20px;
          border: 1px solid var(--line);
          background: white;
          padding: 16px;
          box-shadow: 0 20px 48px rgba(15, 23, 42, 0.08);
        }

        .floating-title {
          margin-top: 6px;
          font-size: 24px;
          font-weight: 700;
          color: var(--dark);
        }

        .section {
          padding: 92px 0;
        }

        .section-soft {
          background: var(--soft);
        }

        .section-gray {
          background: var(--gray);
        }

        .two-col {
          grid-template-columns: 1fr 1fr;
          align-items: start;
        }

        .two-col-wide {
          grid-template-columns: 0.95fr 1.05fr;
          align-items: start;
        }

        h2 {
          max-width: 860px;
          font-size: clamp(34px, 4.5vw, 52px);
          line-height: 1.08;
          color: #020617;
          margin-top: 14px;
        }

        .section-intro {
          max-width: 700px;
          margin-top: 18px;
          font-size: 18px;
        }

        .section-intro.wide {
          max-width: 760px;
        }

        .dark-panel,
        .cta-panel {
          border-radius: 32px;
          background: linear-gradient(135deg, var(--dark) 0%, #101826 50%, rgba(0, 170, 255, 0.28) 100%);
          color: white;
          padding: 34px;
          box-shadow: 0 24px 64px rgba(10, 31, 53, 0.2);
        }

        .dark-panel h3 {
          margin-top: 16px;
          font-size: 34px;
          line-height: 1.1;
        }

        .dark-list div {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          padding: 14px 16px;
          color: #dbeafe;
          font-size: 14px;
        }

        .value-box {
          margin-top: 24px;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.1);
          padding: 24px;
        }

        .value-number {
          margin-top: 8px;
          font-size: 44px;
          font-weight: 700;
        }

        .value-box p,
        .light-intro {
          color: #d3dfec;
        }

        .three-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-top: 34px;
        }

        .step-card,
        .feature-card {
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.04);
        }

        .step-badge,
        .setup-badge {
          width: 42px;
          height: 42px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--dark);
          color: white;
          font-size: 14px;
          font-weight: 700;
        }

        .step-card h3 {
          margin-top: 18px;
          font-size: 24px;
        }

        .step-card p {
          margin-top: 10px;
        }

        .results-panel,
        .setup-panel {
          border-radius: 30px;
          border: 1px solid var(--line);
          background: white;
          padding: 24px;
          box-shadow: 0 18px 44px rgba(15, 23, 42, 0.06);
        }

        .results-top {
          justify-content: space-between;
          gap: 14px;
          align-items: center;
          margin-bottom: 12px;
        }

        .results-query {
          font-size: 12px;
        }

        .feature-bar {
          width: 48px;
          height: 8px;
          border-radius: 999px;
          background: var(--accent);
          margin-bottom: 14px;
        }

        .impact-section {
          background:
            radial-gradient(circle at 0% 0%, rgba(0, 170, 255, 0.18), transparent 28%),
            linear-gradient(135deg, #09111f 0%, var(--dark) 65%, #08131f 100%);
        }

        .light,
        .light-heading {
          color: white;
        }

        .light-heading {
          font-size: clamp(34px, 4.5vw, 52px);
          line-height: 1.08;
          max-width: 860px;
        }

        .impact-card {
          border-color: rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.05);
        }

        .impact-value {
          color: white;
          font-size: 40px;
          font-weight: 700;
        }

        .setup-panel {
          background: #fcfcfd;
          display: grid;
          gap: 14px;
        }

        .setup-row {
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
        }

        .setup-text {
          font-weight: 600;
          color: var(--text);
        }

        .section-last {
          padding-top: 0;
          padding-bottom: 90px;
        }

        .cta-panel {
          text-align: center;
          background: linear-gradient(135deg, var(--dark) 0%, var(--dark-alt) 55%, var(--accent) 100%);
        }

        .center {
          margin-left: auto;
          margin-right: auto;
        }

        .footer-email {
          margin-top: 22px;
          color: #dbeafe;
          font-size: 14px;
        }

        @media (max-width: 1100px) {
          .hero-grid,
          .two-col,
          .two-col-wide,
          .three-grid {
            grid-template-columns: 1fr;
          }

          .floating-note {
            position: static;
            margin-top: 16px;
          }

          .nav-links {
            display: none;
          }
        }

        @media (max-width: 700px) {
          .container {
            width: min(100% - 28px, 1200px);
          }

          .nav-wrap {
            flex-wrap: wrap;
          }

          .nav-cta {
            width: 100%;
            justify-content: flex-start;
          }

          .brand-name {
            font-size: 24px;
          }

          .section,
          .hero-grid {
            padding-top: 72px;
            padding-bottom: 72px;
          }

          .btn {
            width: 100%;
          }

          .hero-actions,
          .nav-cta {
            flex-direction: column;
            align-items: stretch;
          }

          .result-card,
          .dark-list div,
          .results-top,
          .search-top {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </main>
  );
}
