"use client";

import Image from "next/image";

export default function SupportPage() {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap");

        .support-page {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
          background: radial-gradient(circle at top, #f3f6fb 0%, #eef1f6 45%, #e8ecf2 100%);
          color: #1f2933;
          padding: 48px 16px;
          min-height: 100vh;
        }

        .support-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .support-card {
          max-width: 840px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
          padding: 32px 40px 30px;
          border: 1px solid rgba(5, 32, 73, 0.08);
          position: relative;
        }

        .support-card::before {
          content: "";
          position: absolute;
          left: 32px;
          right: 32px;
          top: 0;
          height: 3px;
          border-radius: 999px;
          background: linear-gradient(90deg, #052049, #fdb515);
        }

        .support-header {
          display: flex;
          align-items: center;
          gap: 24px;
          padding-bottom: 20px;
          border-bottom: 1px solid #e5e7eb;
          margin-bottom: 26px;
        }

        .support-header-main {
          flex: 1;
        }

        .support-page h1 {
          font-size: 26px;
          line-height: 1.25;
          font-weight: 600;
          color: #052049;
          letter-spacing: -0.03em;
          margin-bottom: 12px;
        }

        .support-intro {
          font-size: 14px;
          line-height: 1.75;
          color: #28323c;
        }

        .support-profile-photo {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid rgba(5, 32, 73, 0.12);
          flex-shrink: 0;
        }

        .support-section {
          margin-bottom: 26px;
        }

        .support-section-title {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #052049;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .support-content {
          font-size: 14px;
          line-height: 1.75;
          color: #28323c;
        }

        .support-content p + p {
          margin-top: 10px;
        }

        .support-highlight-box {
          background: #f5f7fb;
          border-radius: 10px;
          border: 1px solid rgba(5, 32, 73, 0.12);
          padding: 16px 18px;
          margin: 20px 0 8px;
          font-size: 14px;
          color: #28323c;
        }

        .support-highlight-box p + p {
          margin-top: 8px;
        }

        .support-highlight-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #052049;
          margin-bottom: 4px;
        }

        .support-page ul {
          margin-left: 18px;
          margin-top: 8px;
        }

        .support-page li {
          margin-bottom: 6px;
          font-size: 14px;
        }

        .support-matter-item {
          margin-top: 16px;
        }

        .support-matter-item h3 {
          font-size: 14px;
          font-weight: 600;
          color: #052049;
          margin-bottom: 4px;
        }

        .support-matter-item p {
          font-size: 14px;
          line-height: 1.75;
          color: #28323c;
        }

        .support-options {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 14px;
        }

        .support-option {
          background: #ffffff;
          border-radius: 10px;
          border: 1px solid #e1e5eb;
          padding: 14px 14px 16px;
          transition: box-shadow 0.2s ease, transform 0.15s ease, border-color 0.2s ease;
        }

        .support-option:hover {
          border-color: rgba(5, 32, 73, 0.38);
          box-shadow: 0 10px 26px rgba(15, 23, 42, 0.08);
          transform: translateY(-1px);
        }

        .support-option-featured {
          border-color: rgba(5, 32, 73, 0.25);
          background: linear-gradient(135deg, #fafbfd 0%, #f5f7fb 100%);
          box-shadow: 0 4px 12px rgba(5, 32, 73, 0.06);
        }

        .support-option-featured:hover {
          border-color: rgba(5, 32, 73, 0.45);
        }

        .support-option-title {
          font-size: 13px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 4px;
        }

        .support-option-amount {
          font-size: 18px;
          font-weight: 600;
          color: #052049;
          margin-bottom: 6px;
        }

        .support-option-desc {
          font-size: 13px;
          color: #6b7280;
          line-height: 1.6;
        }

        .support-closing {
          border-top: 1px solid #e5e7eb;
          padding-top: 22px;
        }

        .support-signature-block {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-top: 24px;
        }

        .support-signature-photo {
          width: 72px;
          height: 72px;
          border-width: 2px;
        }

        .support-signature-info {
          font-size: 13px;
          line-height: 1.6;
          color: #28323c;
        }

        .support-signature-title {
          font-weight: 600;
          color: #052049;
          margin-bottom: 2px;
        }

        .support-core-note {
          font-size: 14px;
          color: #28323c;
          margin-top: 16px;
          padding-top: 12px;
          border-top: 1px solid #e5e7eb;
        }

        @media (max-width: 720px) {
          .support-card {
            padding: 24px 18px 24px;
          }

          .support-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .support-options {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .support-page h1 {
            font-size: 22px;
          }

          .support-profile-photo {
            width: 96px;
            height: 96px;
          }
        }
      `}</style>

      <div className="support-page">
        <main className="support-card">
          <header className="support-header">
            <div className="support-header-main">
              <h1>Continuity Support for Psychedelic Research</h1>
              <p className="support-intro">
                Bridging months of unpaid research work
              </p>
            </div>
          </header>

          <section className="support-section">
            <h2 className="support-section-title">Context</h2>
            <div className="support-content">
              <p>
                I&apos;m Jesse Schmidt, a neuroscience researcher joining the Carhart-Harris Lab at UCSF.
              </p>
              <p>
                I&apos;m building data infrastructure and measurement development for the Global Psychedelic Survey — a large-scale outcomes study integrated with state-regulated programs across the U.S. I also contribute to lab protocol development, including a 5-MeO-DMT clinical study.
              </p>
              <p>
                My work focuses on how psychedelic experiences are measured, compared, and understood across different substances, settings, and populations.
              </p>
            </div>
          </section>

          <section className="support-section">
            <h2 className="support-section-title">Why Independent Support</h2>
            <div className="support-content">
              <p>
                The field is expanding rapidly. State programs are generating data while researchers are still designing the measurement frameworks.
              </p>
              <p>
                The foundational questions remain open: What should we measure? What counts as change? How do we compare experiences across different contexts?
              </p>
              <p>
                I&apos;ve been doing this work unpaid since last July. My paid position starts in April. I&apos;m asking for support to stay in SF and maintain full-time focus until then.
              </p>
            </div>

            <div className="support-highlight-box">
              <div className="support-highlight-label">Note</div>
              <p>
                Support is provided directly to me as an independent researcher and does not fund UCSF.
              </p>
            </div>
          </section>

          <section className="support-section">
            <h2 className="support-section-title">Why This Work Matters</h2>
            <div className="support-content">
              <p>This research addresses three things the field needs:</p>

              <div className="support-matter-item">
                <h3>Move beyond blunt mental-health tools</h3>
                <p>Psychedelics let people step off SSRIs, not just add another medication. But we need better frameworks for understanding non-chronic interventions.</p>
              </div>

              <div className="support-matter-item">
                <h3>Create a shared language for psychedelic experience</h3>
                <p>Right now, every study uses different measures. The global survey builds a shared framework so data can actually accumulate across substances, settings, and populations.</p>
              </div>

              <div className="support-matter-item">
                <h3>Treat consciousness as data, not noise</h3>
                <p>Subjective experience is usually treated as measurement error. This work treats it as signal — integrating phenomenology with rigorous measurement so science can engage with it responsibly.</p>
              </div>

              <p className="support-core-note">
                This work creates the measurement infrastructure needed to study consciousness as rigorously as we study symptoms.
              </p>
            </div>
          </section>

          <section className="support-section">
            <h2 className="support-section-title">Ways to Support</h2>
            <div className="support-options">
              <article className="support-option">
                <h3 className="support-option-title">Research Patronage — Bridge Phase</h3>
                <div className="support-option-amount">$10–15K</div>
                <p className="support-option-desc">
                  Supports protected research time during protocol and measurement development. Includes periodic updates.
                </p>
              </article>

              <article className="support-option support-option-featured">
                <h3 className="support-option-title">Research Patronage — Fellowship Phase</h3>
                <div className="support-option-amount">$25–40K</div>
                <p className="support-option-desc">
                  Extends protected time for deeper synthesis, writing, and dissemination. Includes updates and a private briefing.
                </p>
              </article>

              <article className="support-option">
                <h3 className="support-option-title">Named Research Patronage</h3>
                <div className="support-option-amount">$100K+</div>
                <p className="support-option-desc">
                  Establishes a longer-term patron relationship supporting foundational psychedelic research and measurement.
                </p>
              </article>
            </div>
          </section>

          <section className="support-section">
            <h2 className="support-section-title">What Happens Next</h2>
            <div className="support-content">
              <p>
                <strong>January–April:</strong> Focused work on protocol design, psychometrics, and the global outcomes infrastructure.
              </p>
              <p>
                <strong>April onward:</strong> Transition to a paid UCSF appointment, with continued research, writing, and PhD applications. Supporters receive periodic updates.
              </p>
            </div>
          </section>

          <section className="support-section support-closing">
            <div className="support-content">
              <p>If this resonates — or if you have questions — I&apos;d love to talk. I&apos;m also happy to connect you with Robin or others in the lab if that&apos;s helpful.</p>
              <p style={{ marginTop: '20px' }}>Jesse</p>
            </div>

            <div className="support-signature-block">
              <Image
                src="/profile.jpg"
                alt="Portrait of Jesse Schmidt"
                width={72}
                height={72}
                className="support-profile-photo support-signature-photo"
              />
              <div className="support-signature-info">
                <div className="support-signature-title">Jesse Schmidt</div>
                <div>Research Associate, Carhart-Harris Lab</div>
                <div>University of California, San Francisco</div>
                <div><a href="mailto:jesse.schmidt@ucsf.edu" style={{ color: '#052049' }}>jesse.schmidt@ucsf.edu</a> &bull; 727-710-0037</div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
