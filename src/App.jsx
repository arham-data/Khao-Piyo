import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AllEventsPage from './pages/AllEventsPage'
import EventDetailPage from './pages/EventDetailPage'
import HostEventPage from './pages/HostEventPage'

/* The browser tab title for each route. */
const PAGE_TITLES = {
  '/': 'Khao Piyo — Khao Piyo Aish Karo Mitro! | College Fests, Concerts & Bhandaras',
  '/events': 'Discover All Events | Khao Piyo',
  '/host': 'List Your Event | Khao Piyo',
}

/**
 * Runs on every route change:
 *   1. sets the browser tab title
 *   2. jumps back to the top of the page
 *   3. moves focus into the new page so screen readers announce it
 *
 * Without this, opening /events after scrolling the homepage would
 * drop you halfway down the new page.
 */
function RouteEffects() {
  const { pathname } = useLocation()
  const isFirstLoad = useRef(true)

  useEffect(() => {
    // Event detail pages name themselves (they know the event title).
    const isEventDetail = pathname.startsWith('/events/')

    if (!isEventDetail) {
      document.title = PAGE_TITLES[pathname] ?? 'Khao Piyo'
    }

    window.scrollTo(0, 0)

    // Do not steal focus on the very first page load.
    if (isFirstLoad.current) {
      isFirstLoad.current = false
      return
    }

    const main = document.getElementById('main-content')
    if (main) main.focus({ preventScroll: true })
  }, [pathname])

  return null
}

/**
 * Small floating button that appears once the page is scrolled
 * past 400px and smoothly returns the user to the top.
 */
function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollToTop() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      className={visible ? 'back-to-top is-visible' : 'back-to-top'}
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path
          d="M5 10l7-7m0 0l7 7m-7-7v18"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
      </svg>
    </button>
  )
}

function App() {
  return (
    <BrowserRouter>
      {/* Keyboard users can jump straight past the hero */}
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <RouteEffects />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<AllEventsPage />} />
        <Route path="/events/:id" element={<EventDetailPage />} />
        <Route path="/host" element={<HostEventPage />} />
      </Routes>

      <BackToTop />
    </BrowserRouter>
  )
}

export default App
