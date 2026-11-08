import heroStage from '../assets/images/hero-stage.png'
import './HomePage.css'

/**
 * HOMEPAGE
 *
 * Milestone 1: Hero section only.
 * Intro, categories, featured events and the CTA are added in
 * the following milestones.
 */
function HomePage() {
  return (
    <main>
      {/* ==================== HERO ==================== */}
      <section className="hero" id="hero">
        {/* Stage photo + three colour overlays stacked on top of it */}
        <img
          className="hero-bg"
          src={heroStage}
          alt="Khao Piyo live stage background"
        />
        <div className="hero-overlay hero-overlay-fade" />
        <div className="hero-overlay hero-overlay-vignette" />
        <div className="hero-overlay hero-overlay-spotlight" />

        <div className="hero-content">
          {/* Live status pill */}
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>⚡ 340+ College Fests, Concerts &amp; Bhandaras Happening This Week</span>
          </div>

          {/* Neon script title */}
          <h1 className="hero-title">Khao Piyo</h1>

          {/* Brand tagline pill */}
          <div className="hero-tagline-wrap">
            <span className="hero-tagline">
              <span className="hero-tagline-text">Khao Piyo Aish Karo Mitro!</span>
            </span>
          </div>

          {/* Supporting line */}
          <p className="hero-copy">
            Your next favourite experience is closer than you think. Catch university
            headliners, campus gigs, late-night open mics, and city Bhandaras.
          </p>

          {/* Calls to action */}
          <div className="hero-actions">
            <a className="btn btn-primary" href="#events">
              Explore Events
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </a>

            <a className="btn btn-secondary" href="#intro">
              Discover What&apos;s Nearby
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
