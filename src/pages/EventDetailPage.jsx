import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import EventCard from '../components/EventCard'
import Footer from '../components/Footer'
import { events } from '../data/events'
import './EventDetailPage.css'

/**
 * EVENT DETAIL
 *
 * The page behind every "View Details" / "Details" button.
 *
 *   /events/:id  ->  the matching event from src/data/events.js
 *
 * Contents:
 *   1. Ambient stage lighting
 *   2. Back link to the Discover All Events page
 *   3. Big photo with the badge and category on top
 *   4. Title, date / venue / category chips
 *   5. "About this event" and "What to expect"
 *   6. A sticky ticket panel with price, facts and a CTA
 *   7. Three related events (same category first)
 *   8. The shared liquid-glass Footer
 *
 * Unknown ids get a small "event not found" panel instead.
 * The ticket CTA always renders; it links to the event's
 * `ticketLink` when one is set and goes nowhere when it is empty.
 */
function EventDetailPage() {
  const { id } = useParams()
  const event = events.find((item) => item.id === id)

  // RouteEffects skips /events/... paths, so this page names itself.
  useEffect(() => {
    document.title = event
      ? `${event.title} | Khao Piyo`
      : 'Event not found | Khao Piyo'
  }, [event])

  /* ---------------- Unknown event ---------------- */
  if (!event) {
    return (
      <>
        <main className="event-detail-page" id="main-content" tabIndex={-1}>
          <div className="event-detail-stage" aria-hidden="true">
            <div className="event-detail-orb event-detail-orb-magenta" />
            <div className="event-detail-orb event-detail-orb-cyan" />
            <div className="event-detail-neon-bar" />
          </div>

          <div className="event-detail-shell">
            <Link className="event-detail-back" to="/events">
              <span aria-hidden="true">←</span> Back to all events
            </Link>

            <section className="event-detail-missing">
              <p className="event-detail-missing-pill">Event not found</p>
              <h1 className="event-detail-missing-title">
                This event has left the stage
              </h1>
              <p className="event-detail-missing-copy">
                The link may be old, or the event may have wrapped up. There are
                plenty of other nights to plan.
              </p>
              <Link className="event-detail-missing-btn" to="/events">
                Browse all events
              </Link>
            </section>
          </div>
        </main>

        <Footer />
      </>
    )
  }

  /* ---------------- Related events ----------------
     Same category first, then any other event, capped at three.
     With twelve events there is always enough to fill the row. */
  const sameCategory = events.filter(
    (item) => item.id !== event.id && item.category === event.category
  )
  const otherEvents = events.filter(
    (item) => item.id !== event.id && item.category !== event.category
  )
  const relatedEvents = [...sameCategory, ...otherEvents].slice(0, 3)

  return (
    <>
      <main className="event-detail-page" id="main-content" tabIndex={-1}>
        {/* ==================== AMBIENT STAGE LIGHTING ==================== */}
        <div className="event-detail-stage" aria-hidden="true">
          <div className="event-detail-orb event-detail-orb-magenta" />
          <div className="event-detail-orb event-detail-orb-cyan" />
          <div className="event-detail-orb event-detail-orb-purple" />
          <div className="event-detail-neon-bar" />
        </div>

        <div className="event-detail-shell">
          {/* The design has no navbar, so this is the way back */}
          <Link className="event-detail-back" to="/events">
            <span aria-hidden="true">←</span> Back to all events
          </Link>

          <div className="event-detail-layout">
            {/* ==================== MAIN COLUMN ==================== */}
            <div className="event-detail-main">
              <figure className="event-detail-hero">
                <img
                  className="event-detail-hero-image"
                  src={event.image}
                  alt={`${event.title} event photo`}
                  decoding="async"
                />
                <div className="event-detail-hero-fade" aria-hidden="true" />

                <div className="event-detail-hero-badges">
                  {/* badge-* colour classes come from EventCard.css */}
                  <span className={`event-detail-badge badge-${event.badgeColor}`}>
                    {event.badge}
                  </span>
                  <span className="event-detail-category">{event.category}</span>
                </div>
              </figure>

              <h1 className="event-detail-title">{event.title}</h1>

              <div className="event-detail-meta">
                <span className="event-detail-meta-item">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    calendar_month
                  </span>
                  {event.date}
                </span>
                <span className="event-detail-meta-item">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    location_on
                  </span>
                  {event.venue}
                </span>
                <span className="event-detail-meta-item">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    sell
                  </span>
                  {event.category}
                </span>
              </div>

              <section className="event-detail-section">
                <h2 className="event-detail-section-title">About this event</h2>
                <p className="event-detail-copy">{event.description}</p>
              </section>

              <section className="event-detail-section">
                <h2 className="event-detail-section-title">What to expect</h2>
                <ul className="event-detail-highlights">
                  {event.highlights.map((highlight) => (
                    <li className="event-detail-highlight" key={highlight}>
                      <span
                        className="material-symbols-outlined event-detail-highlight-mark"
                        aria-hidden="true"
                      >
                        check
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* ==================== TICKET PANEL ==================== */}
            <aside className="event-detail-ticket" aria-label="Ticket details">
              <h2 className="event-detail-ticket-label">Student Pass</h2>
              <p className="event-detail-price">{event.price}</p>
              <p className="event-detail-organiser">
                Hosted by {event.organiser}
              </p>

              <div className="event-detail-facts">
                <div className="event-detail-fact">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    calendar_month
                  </span>
                  <div>
                    <span className="event-detail-fact-label">When</span>
                    {event.date}
                  </div>
                </div>

                <div className="event-detail-fact">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    location_on
                  </span>
                  <div>
                    <span className="event-detail-fact-label">Where</span>
                    {event.venue}
                  </div>
                </div>

                <div className="event-detail-fact">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    confirmation_number
                  </span>
                  <div>
                    <span className="event-detail-fact-label">Entry</span>
                    {event.price}
                  </div>
                </div>
              </div>

              <a
                className="event-detail-cta"
                href={event.ticketLink || undefined}
                target={event.ticketLink ? '_blank' : undefined}
                rel={event.ticketLink ? 'noreferrer' : undefined}
              >
                Get Student Pass
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_forward
                </span>
              </a>

            </aside>
          </div>

          {/* ==================== RELATED EVENTS ==================== */}
          <section className="event-detail-related">
            <div className="event-detail-related-head">
              <h2 className="event-detail-related-title">More like this</h2>
              <Link className="event-detail-related-link" to="/events">
                View all events <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="event-detail-related-grid">
              {relatedEvents.map((related) => (
                <EventCard key={related.id} event={related} variant="listing" />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default EventDetailPage
