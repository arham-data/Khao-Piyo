import './EventCard.css'

/**
 * EVENT CARD
 *
 * One reusable card for an event. It receives:
 *   event -> an object from src/data/events.js
 *   image -> the photo to show at the top
 *
 * Used on the homepage now, and on the All Events page later.
 */
function EventCard({ event, image }) {
  return (
    <article className={`glass-card glass-card-hover event-card is-${event.accent}`}>
      {/* ---------- Photo + badges ---------- */}
      <div className="event-card-media">
        <img
          className={`event-card-image img-${event.imageFilter}`}
          src={image}
          alt={event.title}
        />
        <div className="event-card-media-fade" />

        <span className={`event-card-badge badge-${event.badgeColor}`}>
          {event.badge}
        </span>

        <span className={`event-card-price price-${event.priceColor}`}>
          {event.price}
        </span>
      </div>

      {/* ---------- Text ---------- */}
      <div className="event-card-body">
        <div>
          <div className="event-card-date">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <span>{event.date}</span>
          </div>

          <h3 className="event-card-title">{event.title}</h3>

          <p className="event-card-venue">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <span>{event.venue}</span>
          </p>

          <p className="event-card-description">{event.description}</p>
        </div>

        {/* ---------- Footer ---------- */}
        <div className="event-card-footer">
          <span className={`event-card-footer-label footer-${event.footerColor}`}>
            {event.footer}
          </span>

          <a className="event-card-link" href="#">
            View Details
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}

export default EventCard
