import { futureFeatures, topics } from "@/constants/home";
import type { TopicIconName } from "@/types/home";

function BrandMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="19" stroke="currentColor" strokeWidth="2" />
      <circle cx="22" cy="22" r="5" stroke="currentColor" strokeWidth="2" />
      <path d="M22 17V4M18.5 21H4.2M25.5 21h14.3M19 25l-8.5 9M25 25l8.5 9" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3 10h13M11.5 5.5 16 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function TopicIcon({ type }: { type: TopicIconName }) {
  if (type === "tips") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48" fill="none">
        <path d="M17 29c-3-2.2-5-5.2-5-9a12 12 0 1 1 24 0c0 3.8-2 6.8-5 9l-2 3H19l-2-3Z" stroke="currentColor" strokeWidth="2" />
        <path d="M19 37h10M21 42h6M24 3v4M7 20H3M45 20h-4M9 8l3 3M39 8l-3 3" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "care") {
    return (
      <svg aria-hidden="true" viewBox="0 0 48 48" fill="none">
        <path d="M18 9v10l-7 7v10h26V26l-7-7V9" stroke="currentColor" strokeWidth="2" />
        <path d="M15 19h18M16 31h16M20 36v4M28 36v4" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" fill="none">
      <path d="M12 17h24v20H12zM8 22h4M36 22h4M17 12v5M31 12v5M18 23h12v8H18z" stroke="currentColor" strokeWidth="2" />
      <path d="M16 37v4M32 37v4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function Home() {
  return (
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header">
          <a className="brand" href="#top" aria-label="AutoCompass home">
            <BrandMark />
            <span>AutoCompass</span>
          </a>

          <nav aria-label="Main navigation">
            <a href="#learn">Learn</a>
            <a href="#account">Sign in</a>
          </nav>
        </header>

        <div className="hero-layout page-width">
          <div className="hero-content">
            <p className="eyebrow">Learn your car</p>
            <h1 id="hero-title">Know your car.</h1>
            <p className="hero-copy">
              Simple lessons to help you understand and care for
              your car.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#learn">
                Start learning
                <ArrowIcon />
              </a>
              <a className="button button-quiet" href="#account">
                Sign in
              </a>
            </div>
            <p className="account-note">
              <span aria-hidden="true">✓</span> No account needed
            </p>
          </div>

          <div className="instrument-panel" aria-hidden="true">
            <div className="instrument-topline">
              <span>System ready</span>
              <span>AC 01</span>
            </div>
            <div className="gauge">
              <div className="gauge-ticks" />
              <div className="gauge-arc" />
              <div className="gauge-readout">
                <span>Knowledge</span>
                <strong>0</strong>
                <small>Start here</small>
              </div>
              <div className="gauge-needle" />
              <div className="gauge-hub" />
            </div>
            <div className="instrument-stats">
              <div>
                <span>Mode</span>
                <strong>Learn</strong>
              </div>
              <div>
                <span>Level</span>
                <strong>Starter</strong>
              </div>
              <div>
                <span>Status</span>
                <strong>Ready</strong>
              </div>
            </div>
          </div>
        </div>

        <a className="scroll-cue" href="#learn" aria-label="Go to learning topics">
          <span>Explore</span>
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section id="learn" className="learn-section page-width" aria-labelledby="learn-title">
        <div className="section-heading">
          <p className="eyebrow eyebrow-dark">Start here</p>
          <h2 id="learn-title">What do you want to learn?</h2>
        </div>

        <div className="topic-grid">
          {topics.map((topic) => (
            <article className="topic-card" key={topic.title}>
              <div className="topic-card-top">
                <span>{topic.number}</span>
                <TopicIcon type={topic.icon} />
              </div>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="steps" aria-labelledby="steps-title">
        <div className="steps-inner page-width">
          <div>
            <p className="eyebrow">How it works</p>
            <h2 id="steps-title">Learn. Check. Try.</h2>
          </div>
          <ol>
            <li>
              <span>01</span>
              <strong>Learn</strong>
              <p>Read a short lesson.</p>
            </li>
            <li>
              <span>02</span>
              <strong>Check</strong>
              <p>Answer a quick question.</p>
            </li>
            <li>
              <span>03</span>
              <strong>Try</strong>
              <p>Use what you learned.</p>
            </li>
          </ol>
        </div>
      </section>

      <section id="account" className="account-section page-width" aria-labelledby="account-title">
        <div>
          <p className="eyebrow eyebrow-dark">Your account</p>
          <h2 id="account-title">Save your progress.</h2>
          <p>Sign in is coming soon. You can start learning now.</p>
        </div>
        <button className="button button-disabled" type="button" disabled>
          Sign in
          <span>Coming soon</span>
        </button>
      </section>

      <section className="future-section" aria-labelledby="future-title">
        <div className="future-inner page-width">
          <div className="future-heading">
            <p className="eyebrow eyebrow-dark">Coming next</p>
            <h2 id="future-title">More tools for drivers and learners.</h2>
          </div>

          <div className="future-grid">
            {futureFeatures.map((feature) => (
              <article className="future-card" key={feature.title}>
                <span className="future-number">{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer page-width">
        <a className="brand footer-brand" href="#top" aria-label="AutoCompass home">
          <BrandMark />
          <span>AutoCompass</span>
        </a>
        <p>Learn your car. Drive with confidence.</p>
      </footer>
    </main>
  );
}
