import heroStage from '../assets/images/hero-stage.png'
import { categories } from '../data/categories'
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

      {/* ==================== INTRO ==================== */}
      <section className="intro" id="intro">
        {/* Ambient glow spheres */}
        <div className="intro-orb intro-orb-purple" />
        <div className="intro-orb intro-orb-blue" />

        <div className="intro-inner">
          {/* Section header */}
          <div className="intro-header">
            <span className="intro-eyebrow">The Campus Weekend Fix</span>

            <h2 className="intro-title">
              Boring weekends?{' '}
              <span className="intro-title-gradient">Not anymore.</span>
            </h2>

            <p className="intro-copy">
              College fests, live shows, workshops, Bhandaras and unexpected plans —
              discover what&apos;s happening{' '}
              <span className="intro-accent">AASPAAS</span> without endless WhatsApp
              group arguments.
            </p>
          </div>

          {/* Four showcase cards */}
          <div className="intro-grid">
            <div className="glass-card glass-card-hover intro-card is-pink">
              <div className="intro-card-icon">🎟️</div>
              <span className="intro-card-label">Instant Access</span>
              <h3 className="intro-card-title">Last-Minute Passes</h3>
              <p className="intro-card-text">
                Free student passes, early bird tickets, and last-second plus-one
                wristbands before gates close.
              </p>
            </div>

            <div className="glass-card glass-card-hover intro-card is-cyan">
              <div className="intro-card-icon">🎸</div>
              <span className="intro-card-label">Live Campus Gigs</span>
              <h3 className="intro-card-title">Campus Fest Alerts</h3>
              <p className="intro-card-text">
                Real-time artist lineups, stage schedules, and entry requirements for
                inter-college mega fests.
              </p>
            </div>

            <div className="glass-card glass-card-hover intro-card is-amber">
              <div className="intro-card-icon">🍲</div>
              <span className="intro-card-label">Pocket Friendly</span>
              <h3 className="intro-card-title">Bhandara Trackers</h3>
              <p className="intro-card-text">
                Authentic community feasts, holy prasad counters, and legendary local
                street food trails on a ₹0 budget.
              </p>
            </div>

            <div className="glass-card glass-card-hover intro-card is-purple">
              <div className="intro-card-icon">🎙️</div>
              <span className="intro-card-label">Late Night Vibes</span>
              <h3 className="intro-card-title">Underground Comedy</h3>
              <p className="intro-card-text">
                Basement open-mics, unannounced comic trial spots, and acoustic jamming
                sessions right across campus gates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CATEGORIES ==================== */}
      <section className="categories" id="categories">
        <div className="categories-inner">
          <div className="categories-header">
            <div>
              <span className="categories-eyebrow">Discover by Mood</span>
              <h2 className="categories-title">Explore Categories</h2>
            </div>

            <p className="categories-copy">
              Pick your vibe for the evening. Filter college culture, intense rhythms,
              or hearty street food.
            </p>
          </div>

          {/* Eight tiles generated from src/data/categories.js */}
          <div className="categories-grid">
            {categories.map((category) => (
              <a
                key={category.id}
                className={`glass-card glass-card-hover category-card is-${category.color}`}
                href="#events"
              >
                <div>
                  <div className="category-icon">{category.emoji}</div>
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-text">{category.description}</p>
                </div>

                <div className="category-cta">
                  <span>{category.cta}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
