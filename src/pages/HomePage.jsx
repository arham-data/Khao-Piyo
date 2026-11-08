import { Link } from 'react-router-dom'
import heroStage from '../assets/images/hero-stage.png'
import EventCard from '../components/EventCard'
import Footer from '../components/Footer'
import { categories } from '../data/categories'
import { events } from '../data/events'
import './HomePage.css'

/**
 * HOMEPAGE
 *
 * Hero -> Intro -> Categories -> Featured Events -> CTA -> Footer.
 *
 * The <Footer> sits outside <main> so screen readers treat it as a
 * real page footer landmark rather than part of the main content.
 */
function HomePage() {
  return (
    <>
      <main id="main-content" tabIndex={-1}>
        {/* ==================== HERO ==================== */}
        <section className="hero" id="hero">
          {/* Purely decorative stage photo + colour overlays */}
          <img
            className="hero-bg"
            src={heroStage}
            alt=""
            aria-hidden="true"
            decoding="async"
          />
          <div className="hero-overlay hero-overlay-fade" aria-hidden="true" />
          <div className="hero-overlay hero-overlay-vignette" aria-hidden="true" />
          <div className="hero-overlay hero-overlay-spotlight" aria-hidden="true" />

          <div className="hero-content">
            {/* Live status pill */}
            <div className="hero-badge">
              <span className="hero-badge-dot" aria-hidden="true" />
              <span>
                <span aria-hidden="true">⚡ </span>
                340+ College Fests, Concerts &amp; Bhandaras Happening This Week
              </span>
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
          <div className="intro-orb intro-orb-purple" aria-hidden="true" />
          <div className="intro-orb intro-orb-blue" aria-hidden="true" />

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
                <div className="intro-card-icon" aria-hidden="true">
                  🎟️
                </div>
                <span className="intro-card-label">Instant Access</span>
                <h3 className="intro-card-title">Last-Minute Passes</h3>
                <p className="intro-card-text">
                  Free student passes, early bird tickets, and last-second plus-one
                  wristbands before gates close.
                </p>
              </div>

              <div className="glass-card glass-card-hover intro-card is-cyan">
                <div className="intro-card-icon" aria-hidden="true">
                  🎸
                </div>
                <span className="intro-card-label">Live Campus Gigs</span>
                <h3 className="intro-card-title">Campus Fest Alerts</h3>
                <p className="intro-card-text">
                  Real-time artist lineups, stage schedules, and entry requirements for
                  inter-college mega fests.
                </p>
              </div>

              <div className="glass-card glass-card-hover intro-card is-amber">
                <div className="intro-card-icon" aria-hidden="true">
                  🍲
                </div>
                <span className="intro-card-label">Pocket Friendly</span>
                <h3 className="intro-card-title">Bhandara Trackers</h3>
                <p className="intro-card-text">
                  Authentic community feasts, holy prasad counters, and legendary local
                  street food trails on a ₹0 budget.
                </p>
              </div>

              <div className="glass-card glass-card-hover intro-card is-purple">
                <div className="intro-card-icon" aria-hidden="true">
                  🎙️
                </div>
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
                    <div className="category-icon" aria-hidden="true">
                      {category.emoji}
                    </div>
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

        {/* ==================== FEATURED EVENTS ==================== */}
        <section className="events" id="events">
          <div className="events-inner">
            <div className="events-header">
              <div>
                <span className="events-eyebrow">Curated For You</span>
                <h2 className="events-title">What&apos;s the scene?</h2>
                <p className="events-subtitle">
                  Good plans. Great people. Unforgettable experiences.
                </p>
              </div>

              {/* Filter chips — visual only, exactly as in the design */}
              <div className="events-filters" role="group" aria-label="Event categories">
                <button type="button" className="filter-chip is-active" aria-pressed="true">
                  All Plans
                </button>
                <button type="button" className="filter-chip" aria-pressed="false">
                  College Fests
                </button>
                <button type="button" className="filter-chip" aria-pressed="false">
                  Music
                </button>
                <button type="button" className="filter-chip" aria-pressed="false">
                  Comedy
                </button>
                <button type="button" className="filter-chip" aria-pressed="false">
                  Bhandaras
                </button>
              </div>
            </div>

            {/* Eight cards — the events flagged as featured */}
            <div className="events-grid">
              {events
                .filter((event) => event.featured)
                .map((event) => (
                  <EventCard key={event.id} event={event} image={heroStage} />
                ))}
            </div>

            <div className="events-more">
              <Link className="events-more-link" to="/events">
                <span>View All 84+ Events Happening AASPAAS</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ==================== DISCOVERY CTA ==================== */}
        <section className="cta" id="cta">
          <div className="cta-inner">
            <div className="cta-panel">
              <div className="cta-orb cta-orb-pink" aria-hidden="true" />
              <div className="cta-orb cta-orb-blue" aria-hidden="true" />

              <span className="cta-eyebrow">Weekend is Calling</span>

              <h2 className="cta-title">Your next plan starts here.</h2>

              <p className="cta-copy">
                Stop waiting for someone in the group chat to make plans. Find something
                happening right near your hostel or campus tonight.
              </p>

              <div className="cta-actions">
                <a className="cta-btn-primary" href="#events">
                  Explore Events Now
                </a>
                <button type="button" className="cta-btn-secondary">
                  Host or List an Event
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default HomePage
