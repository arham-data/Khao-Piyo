import { Link } from 'react-router-dom'
import './AllEventsPage.css'

/**
 * DISCOVER ALL EVENTS
 *
 * Placeholder for now — the full listing page is built in milestone 6.
 */
function AllEventsPage() {
  return (
    <main className="all-events-page">
      <h1 className="all-events-title">Discover All Events</h1>
      <p className="all-events-note">This page is built in milestone 6.</p>
      <Link className="all-events-back" to="/">
        ← Back to homepage
      </Link>
    </main>
  )
}

export default AllEventsPage
