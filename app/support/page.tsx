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

        .support-badge-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          font-size: 13px;
          color: #5e6a71;
        }

        .support-badge {
          display: inline-flex;
          align-items: center;
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: rgba(5, 32, 73, 0.06);
          color: #052049;
        }

        .support-page h1 {
          font-size: 26px;
          line-height: 1.25;
          font-weight: 600;
          color: #052049;
          letter-spacing: -0.03em;
          margin-bottom: 6px;
        }

        .support-subtitle {
          font-size: 14px;
          color: #5e6a71;
          max-width: 460px;
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

        .support-footer {
          margin-top: 22px;
          padding-top: 18px;
          border-top: 1px solid #e5e7eb;
          font-size: 13px;
          color: #6b7280;
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .support-footer-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .support-footer-photo {
          width: 72px;
          height: 72px;
          border-width: 2px;
        }

        .support-footer-text {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .support-contact {
          font-weight: 500;
          color: #052049;
          white-space: nowrap;
        }

        .support-closing {
          border-top: 1px solid #e5e7eb;
          padding-top: 22px;
        }

        .support-signature-image {
          margin-top: 12px;
          margin-bottom: 4px;
        }

        .support-signature-name {
          font-style: italic;
          font-size: 18px;
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

          .support-contact {
            white-space: normal;
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

          .support-footer-photo {
            width: 64px;
            height: 64px;
          }
        }
      `}</style>

      <div className="support-page">
        <main className="support-card">
          <header className="support-header">
            <div className="support-header-main">
              <h1>Bridge Funding for Psychedelic Research</h1>
              <p className="support-subtitle">
                Supporting continuity in psychedelic research during a funding gap
              </p>
            </div>
          </header>

          <section className="support-section">
            <h2 className="support-section-title">The Context</h2>
            <div className="support-content">
              <p>
                I&apos;m Jesse, a neuroscience researcher joining the Carhart-Harris Lab at UCSF.
                I&apos;m contributing to two active research efforts: a standardized psychedelic
                outcomes cohort integrated with state-regulated programs, and a 5-MeO-DMT
                clinical protocol focused on psychometric and phenomenological measurement.
              </p>
              <p>
                My work centers on protocol design, measurement strategy, and developing the
                data infrastructure required for reproducible psychedelic research.
              </p>
            </div>

            <div className="support-highlight-box">
              <div className="support-highlight-label">Bridge Support Need</div>
              <p>
                <strong>The situation:</strong> My paid UCSF appointment begins in March due to
                administrative timelines. The role initially supports 50% effort while longer-term
                funding is finalized.
              </p>
              <p>
                <strong>The gap:</strong> To remain onsite in San Francisco and continue work without
                interruption, I am seeking <strong>$10–20K</strong> in bridge support for January through
                March. This support enables sustained, full-time contribution during a time-sensitive
                phase of Cohort 3 and 5-MeO-DMT protocol development.
              </p>
            </div>
          </section>

          <section className="support-section">
            <h2 className="support-section-title">Why This Matters</h2>
            <div className="support-content">
              <p>
                Psychedelic research is at a transitional moment. State-regulated programs are beginning
                to generate large-scale data, while clinical protocols and measurement frameworks are
                still actively being shaped. Decisions made during this phase will influence how outcomes
                are defined, compared, and interpreted for years to come.
              </p>
              <p>In practical terms, your support helps ensure:</p>
              <ul>
                <li>Completion of the first 5-MeO-DMT protocol integrating multimodal neuroimaging</li>
                <li>Continuity in the global psychedelic outcomes survey during a critical phase in development</li>
                <li>Sustained involvement of an early-career researcher in a field with limited structural support</li>
                <li>Contribution to work defining how psychedelic outcomes are measured and compared across programs</li>
              </ul>
            </div>
          </section>

          <section className="support-section">
            <h2 className="support-section-title">Ways to Support</h2>
            <div className="support-options">
              <article className="support-option">
                <h3 className="support-option-title">Bridge Support</h3>
                <div className="support-option-amount">$10–15K</div>
                <p className="support-option-desc">
                  Supports living costs from January through March and allows uninterrupted full-time
                  research during the transition period. Includes periodic updates on study progress.
                </p>
              </article>

              <article className="support-option support-option-featured">
                <h3 className="support-option-title">Fellowship Support</h3>
                <div className="support-option-amount">$25–40K</div>
                <p className="support-option-desc">
                  Extends the support window, enables conference travel, and allows deeper engagement with
                  measurement development. Includes regular updates and the option for a private briefing.
                </p>
              </article>

              <article className="support-option">
                <h3 className="support-option-title">Named Fund</h3>
                <div className="support-option-amount">$100K+</div>
                <p className="support-option-desc">
                  Establishes a multi-year support structure for psychedelic neuroscience research.
                  Includes periodic presentations and long-term recognition.
                </p>
              </article>
            </div>
          </section>

          <section className="support-section">
            <h2 className="support-section-title">What Happens Next</h2>
            <div className="support-content">
              <p>
                <strong>January–March:</strong> Full-time contribution to protocol design, psychometric development,
                and the global outcomes infrastructure (Cohort 3) while remaining in San Francisco.
              </p>
              <p>
                <strong>March onward:</strong> Transition to a paid UCSF research appointment, with continued work on
                protocol development, manuscripts, and PhD applications. Supporters receive periodic updates on the
                research as it develops.
              </p>
            </div>
          </section>

          <section className="support-section support-closing">
            <div className="support-content">
              <p>If this resonates, reach out — I&apos;m happy to answer questions or discuss further.</p>
              <p style={{ marginTop: '20px' }}>Best,</p>
              <Image
                src="/signature.png"
                alt="Jesse's signature"
                width={120}
                height={50}
                className="support-signature-image"
              />
              <p className="support-signature-name">Jesse</p>
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
