import { Link } from 'react-router-dom'
import EventCard from '../components/EventCard'
import Footer from '../components/Footer'
import { allEvents } from '../data/allEvents'
import './AllEventsPage.css'

/**
 * DISCOVER ALL EVENTS
 *
 * The full listing page (/events):
 *   1. Ambient "stage rigging" background
 *   2. Header card with the page title and three stat chips
 *   3. Twelve event cards from src/data/allEvents.js
 *   4. Load more + pagination controls
 *   5. Host / list-your-event callout
 *   6. Devanagari sign-off card
 *   7. The shared liquid-glass Footer
 *
 * The pagination and "Load More" controls are visual only, just
 * like the filter chips on the homepage: the design is static and
 * there is no second batch of events to load.
 */
function AllEventsPage() {
  return (
    <>
      <main className="all-events-page" id="main-content" tabIndex={-1}>
        {/* ==================== AMBIENT STAGE LIGHTING ==================== */}
        <div className="all-events-stage" aria-hidden="true">
          <div className="all-events-orb all-events-orb-purple" />
          <div className="all-events-orb all-events-orb-magenta" />
          <div className="all-events-orb all-events-orb-cyan" />
          <div className="all-events-neon-bar" />
        </div>

        <div className="all-events-shell">
          {/* The design has no navbar, so this is the only way back */}
          <Link className="all-events-back" to="/">
            <span aria-hidden="true">←</span> Back to Khao Piyo
          </Link>

          {/* ==================== HEADER CARD ==================== */}
          <header className="all-events-hero">
            <div className="all-events-hero-beam" aria-hidden="true" />

            <div className="all-events-hero-inner">
              <div className="all-events-hero-topline">
                <span className="all-events-hero-pill">Stage Rigging Live</span>
                <span className="all-events-hero-script">
                  Nightlife &amp; Campus Playbook
                </span>
              </div>

              <h1 className="all-events-hero-title">Discover All Events</h1>

              <p className="all-events-hero-copy">
                Find your next favourite experience. From wild college pro-nites and
                underground techno warehouses to late-night paratha trails, open-air
                bhandaras, and weekend indie popups.
              </p>

              <div className="all-events-stats">
                <div className="all-events-stat">
                  <span
                    className="material-symbols-outlined stat-icon-magenta"
                    aria-hidden="true"
                  >
                    local_fire_department
                  </span>
                  <span>340+ College Fests</span>
                </div>
                <div className="all-events-stat">
                  <span
                    className="material-symbols-outlined stat-icon-cyan"
                    aria-hidden="true"
                  >
                    bolt
                  </span>
                  <span>Instant Student Passes</span>
                </div>
                <div className="all-events-stat">
                  <span
                    className="material-symbols-outlined stat-icon-lavender"
                    aria-hidden="true"
                  >
                    near_me
                  </span>
                  <span>Live across 12 Cities</span>
                </div>
              </div>
            </div>
          </header>

          {/* ==================== EVENT GRID ==================== */}
          <h2 className="sr-only">All events</h2>

          <div className="all-events-grid">
            {allEvents.map((event) => (
              <EventCard key={event.id} event={event} variant="listing" />
            ))}
          </div>

          {/* ==================== CONTROLS ==================== */}
          <div className="all-events-controls">
            <button type="button" className="all-events-load-more">
              <span>Load More Events (Showing 12 of 84)</span>
              <span className="material-symbols-outlined" aria-hidden="true">
                sync
              </span>
            </button>

            <div className="all-events-pagination">
              <button type="button" className="all-events-page-nav">
                Previous
              </button>
              <button
                type="button"
                className="all-events-page-num is-current"
                aria-current="page"
              >
                1
              </button>
              <button type="button" className="all-events-page-num">
                2
              </button>
              <button type="button" className="all-events-page-num">
                3
              </button>
              <button type="button" className="all-events-page-num">
                4
              </button>
              <span className="all-events-page-dots" aria-hidden="true">
                ...
              </span>
              <button type="button" className="all-events-page-num">
                7
              </button>
              <button type="button" className="all-events-page-nav">
                Next
              </button>
            </div>
          </div>

          {/* ==================== HOST CALLOUT ==================== */}
          <section className="all-events-host">
            <div className="all-events-host-orb all-events-host-orb-pink" aria-hidden="true" />
            <div className="all-events-host-orb all-events-host-orb-cyan" aria-hidden="true" />

            <div className="all-events-host-inner">
              <div className="all-events-host-text">
                <span className="all-events-host-pill">
                  College Societies &amp; Organisers
                </span>
                <h2 className="all-events-host-title">
                  Organising a college fest, club show, or open-air bhandara?
                </h2>
                <p className="all-events-host-copy">
                  Get listed in 2 minutes flat and beam your event directly onto 50,000+
                  student feeds across Delhi NCR, Mumbai, and Bengaluru.
                </p>
              </div>

              <div className="all-events-host-action">
                <button type="button" className="all-events-host-btn">
                  <span>Submit Your Event</span>
                  <span className="material-symbols-outlined" aria-hidden="true">
                    bolt
                  </span>
                </button>
              </div>
            </div>
          </section>

          {/* ==================== SIGN-OFF CARD ==================== */}
          <section className="all-events-signoff">
            <p className="all-events-signoff-tagline" lang="hi">
              खाओ पियो, ऐश करो मित्रों!
            </p>

            <div className="all-events-signoff-links">
              <button type="button" className="all-events-signoff-link">
                Campus Ambassador Program
              </button>
              <span aria-hidden="true">•</span>
              <button type="button" className="all-events-signoff-link">
                Student Ticket Verification
              </button>
              <span aria-hidden="true">•</span>
              <button type="button" className="all-events-signoff-link">
                Hostel Delivery Addas
              </button>
              <span aria-hidden="true">•</span>
              <button type="button" className="all-events-signoff-link">
                Safety Guidelines &amp; Bylaws
              </button>
            </div>

            <p className="all-events-signoff-note">
              Built for the late-night nocturnal circuits of Indian colleges. Keep the buzz
              high and the vibes golden.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default AllEventsPage
