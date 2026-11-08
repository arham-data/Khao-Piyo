import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './HostEventPage.css'

/**
 * HOST AN EVENT
 *
 * The page behind "Host or List an Event" (homepage CTA) and
 * "Submit Your Event" (Discover All Events callout).
 *
 * This is a demo form. There is no backend: the fields live in
 * React state, validation runs in the browser, and submitting
 * only swaps the form for a success panel.
 *
 * The category list matches the `category` values in
 * src/data/events.js so a future backend could drop straight in.
 */

/* A blank form. Also used by "Submit another event". */
const EMPTY_FORM = {
  name: '',
  category: '',
  date: '',
  time: '',
  venue: '',
  city: '',
  description: '',
  ticketType: '',
  price: '',
  email: '',
}

const CATEGORIES = [
  'College Fest',
  'Music',
  'Comedy',
  'Tech',
  'Culture',
  'Food & Sewa',
  'Workshop',
]

/* Turn the raw input values into something readable. */
function formatDate(value) {
  if (!value) return ''

  const date = new Date(`${value}T00:00:00`)

  return date.toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  })
}

function formatTime(value) {
  if (!value) return ''

  const [hours, minutes] = value.split(':')
  const date = new Date()
  date.setHours(Number(hours), Number(minutes), 0, 0)

  return date.toLocaleTimeString('en-IN', {
    hour: 'numeric',
    minute: '2-digit',
  })
}

/**
 * Small helper so every field gets the same label / hint / error
 * markup without repeating it ten times.
 */
function FormField({ id, label, error, hint, full, children }) {
  const classes = ['host-field']
  if (full) classes.push('host-field-full')
  if (error) classes.push('has-error')

  return (
    <div className={classes.join(' ')}>
      <label className="host-label" htmlFor={id}>
        {label}
      </label>
      {children}
      {hint && !error && (
        <p className="host-hint" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      {error && (
        <p className="host-error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  )
}

function HostEventPage() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const successRef = useRef(null)
  const nameRef = useRef(null)
  const hasUsedForm = useRef(false)

  // Move focus into the success panel so screen readers land on it,
  // and back to the first field when the form is reset.
  useEffect(() => {
    if (submitted) {
      hasUsedForm.current = true
      if (successRef.current) successRef.current.focus()
    } else if (hasUsedForm.current && nameRef.current) {
      nameRef.current.focus()
    }
  }, [submitted])

  function handleChange(event) {
    const { name } = event.target
    let { value } = event.target

    // The price field takes digits only, so no stray symbols creep in.
    if (name === 'price') {
      value = value.replace(/[^\d]/g, '')
    }

    setForm((previous) => ({ ...previous, [name]: value }))

    // Clear that field's error as soon as the user edits it.
    setErrors((previous) => ({ ...previous, [name]: '' }))
  }

  function validate(values) {
    const next = {}

    if (!values.name.trim()) next.name = 'Give your event a name.'

    if (!values.category) next.category = 'Pick the closest category.'

    if (!values.date) next.date = 'Choose the event date.'

    if (!values.time) next.time = 'Choose a start time.'

    if (!values.venue.trim()) next.venue = 'Add the venue.'

    if (!values.city.trim()) next.city = 'Add the city.'

    if (!values.description.trim()) {
      next.description = 'Tell students what to expect.'
    } else if (values.description.trim().length < 20) {
      next.description = 'Add at least 20 characters so students know what it is.'
    }

    if (!values.ticketType) next.ticketType = 'Choose how entry works.'

    if (values.ticketType && values.ticketType !== 'free' && !values.price.trim()) {
      next.price = 'Add a price, or choose Free entry.'
    }

    if (!values.email.trim()) {
      next.email = 'Add a contact email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = 'That email does not look right.'
    }

    return next
  }

  function handleSubmit(event) {
    event.preventDefault()

    const nextErrors = validate(form)
    setErrors(nextErrors)

    const firstInvalid = Object.keys(nextErrors)[0]

    if (firstInvalid) {
      // Put the cursor on the first field that needs fixing.
      const field = document.getElementById(`host-${firstInvalid}`)
      if (field) field.focus()
      return
    }

    setSubmitted(true)
    window.scrollTo(0, 0)
  }

  function startAnother() {
    setForm(EMPTY_FORM)
    setErrors({})
    setSubmitted(false)
    window.scrollTo(0, 0)
  }

  const errorCount = Object.keys(errors).filter((key) => errors[key]).length

  return (
    <>
      <main className="host-page" id="main-content" tabIndex={-1}>
        {/* ==================== AMBIENT STAGE LIGHTING ==================== */}
        <div className="host-stage" aria-hidden="true">
          <div className="host-orb host-orb-magenta" />
          <div className="host-orb host-orb-cyan" />
          <div className="host-orb host-orb-purple" />
          <div className="host-neon-bar" />
        </div>

        <div className="host-shell">
          {/* The design has no navbar, so this is the way back */}
          <Link className="host-back" to="/">
            <span aria-hidden="true">←</span> Back to Khao Piyo
          </Link>

          {/* ==================== HEADER ==================== */}
          <header className="host-hero">
            <span className="host-hero-pill">College Societies &amp; Organisers</span>
            <h1 className="host-hero-title">List your event</h1>
            <p className="host-hero-copy">
              Put your fest, gig, workshop or bhandara in front of 50,000+ students
              across Delhi NCR, Mumbai and Bengaluru. It takes about two minutes.
            </p>
          </header>

          {/* ==================== SUCCESS PANEL ==================== */}
          {submitted ? (
            <section
              className="host-success"
              ref={successRef}
              tabIndex={-1}
              aria-live="polite"
            >
              <span className="host-success-mark" aria-hidden="true">
                <span className="material-symbols-outlined">check</span>
              </span>

              <h2 className="host-success-title">Your event is on the list</h2>

              <p className="host-success-copy">
                <strong>{form.name}</strong> is queued for review. We would email{' '}
                <strong>{form.email}</strong> once it goes live — but this is a demo
                form, so nothing was actually sent.
              </p>

              <dl className="host-success-facts">
                <div>
                  <dt>When</dt>
                  <dd>
                    {formatDate(form.date)} at {formatTime(form.time)}
                  </dd>
                </div>
                <div>
                  <dt>Where</dt>
                  <dd>
                    {form.venue}, {form.city}
                  </dd>
                </div>
                <div>
                  <dt>Category</dt>
                  <dd>{form.category}</dd>
                </div>
              </dl>

              <div className="host-success-actions">
                <button type="button" className="host-btn-primary" onClick={startAnother}>
                  Submit another event
                </button>
                <Link className="host-btn-secondary" to="/events">
                  Browse all events
                </Link>
              </div>
            </section>
          ) : (
            <div className="host-layout">
              {/* ==================== FORM ==================== */}
              <form
                className="host-form"
                onSubmit={handleSubmit}
                noValidate
                aria-labelledby="host-form-title"
              >
                <p className="sr-only" id="host-form-title">
                  Event submission form
                </p>

                {errorCount > 0 && (
                  <div className="host-form-alert" role="alert">
                    <span className="material-symbols-outlined" aria-hidden="true">
                      error
                    </span>
                    <span>
                      {errorCount === 1
                        ? 'One field needs attention below.'
                        : `${errorCount} fields need attention below.`}
                    </span>
                  </div>
                )}

                {/* ---------- The basics ---------- */}
                <h2 className="host-section-title">The basics</h2>

                <div className="host-grid">
                  <FormField
                    id="host-name"
                    label="Event name"
                    error={errors.name}
                    full
                  >
                    <input
                      className="host-input"
                      id="host-name"
                      name="name"
                      type="text"
                      placeholder="e.g. Mood Indigo 2025: Pro-Nite"
                      value={form.name}
                      onChange={handleChange}
                      ref={nameRef}
                      aria-required="true"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'host-name-error' : undefined}
                    />
                  </FormField>

                  <FormField
                    id="host-category"
                    label="Category"
                    error={errors.category}
                  >
                    <select
                      className="host-input host-select"
                      id="host-category"
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={Boolean(errors.category)}
                      aria-describedby={
                        errors.category ? 'host-category-error' : undefined
                      }
                    >
                      <option value="">Choose a category</option>
                      {CATEGORIES.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <FormField
                    id="host-email"
                    label="Organiser email"
                    error={errors.email}
                    hint="Students will use this to ask questions."
                  >
                    <input
                      className="host-input"
                      id="host-email"
                      name="email"
                      type="email"
                      placeholder="you@college.edu"
                      value={form.email}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? 'host-email-error' : 'host-email-hint'
                      }
                    />
                  </FormField>

                  <FormField
                    id="host-description"
                    label="What is the event?"
                    error={errors.description}
                    hint="Two or three sentences works best."
                    full
                  >
                    <textarea
                      className="host-input host-textarea"
                      id="host-description"
                      name="description"
                      rows={4}
                      placeholder="Tell students what the night looks like — the lineup, the food, the vibe."
                      value={form.description}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={Boolean(errors.description)}
                      aria-describedby={
                        errors.description
                          ? 'host-description-error'
                          : 'host-description-hint'
                      }
                    />
                  </FormField>
                </div>

                {/* ---------- When and where ---------- */}
                <h2 className="host-section-title">When and where</h2>

                <div className="host-grid">
                  <FormField id="host-date" label="Date" error={errors.date}>
                    <input
                      className="host-input"
                      id="host-date"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={Boolean(errors.date)}
                      aria-describedby={errors.date ? 'host-date-error' : undefined}
                    />
                  </FormField>

                  <FormField id="host-time" label="Start time" error={errors.time}>
                    <input
                      className="host-input"
                      id="host-time"
                      name="time"
                      type="time"
                      value={form.time}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={Boolean(errors.time)}
                      aria-describedby={errors.time ? 'host-time-error' : undefined}
                    />
                  </FormField>

                  <FormField id="host-venue" label="Venue" error={errors.venue}>
                    <input
                      className="host-input"
                      id="host-venue"
                      name="venue"
                      type="text"
                      placeholder="e.g. IIT Powai Main Gymkhana"
                      value={form.venue}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={Boolean(errors.venue)}
                      aria-describedby={errors.venue ? 'host-venue-error' : undefined}
                    />
                  </FormField>

                  <FormField id="host-city" label="City" error={errors.city}>
                    <input
                      className="host-input"
                      id="host-city"
                      name="city"
                      type="text"
                      placeholder="e.g. Mumbai"
                      value={form.city}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={Boolean(errors.city)}
                      aria-describedby={errors.city ? 'host-city-error' : undefined}
                    />
                  </FormField>
                </div>

                {/* ---------- Tickets ---------- */}
                <h2 className="host-section-title">Tickets</h2>

                <div className="host-grid">
                  <FormField
                    id="host-ticketType"
                    label="How does entry work?"
                    error={errors.ticketType}
                  >
                    <select
                      className="host-input host-select"
                      id="host-ticketType"
                      name="ticketType"
                      value={form.ticketType}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={Boolean(errors.ticketType)}
                      aria-describedby={
                        errors.ticketType ? 'host-ticketType-error' : undefined
                      }
                    >
                      <option value="">Choose one</option>
                      <option value="free">Free entry</option>
                      <option value="student">Student pass</option>
                      <option value="paid">Paid ticket</option>
                    </select>
                  </FormField>

                  <FormField
                    id="host-price"
                    label="Price (₹)"
                    error={errors.price}
                    hint="Leave blank if entry is free."
                  >
                    <input
                      className="host-input"
                      id="host-price"
                      name="price"
                      type="text"
                      inputMode="numeric"
                      placeholder="e.g. 299"
                      value={form.price}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.price)}
                      aria-describedby={
                        errors.price ? 'host-price-error' : 'host-price-hint'
                      }
                    />
                  </FormField>
                </div>

                <div className="host-actions">
                  <button type="submit" className="host-btn-primary">
                    Submit event
                    <span className="material-symbols-outlined" aria-hidden="true">
                      bolt
                    </span>
                  </button>
                </div>
              </form>

              {/* ==================== SIDE PANEL ==================== */}
              <aside className="host-aside" aria-label="How listing works">
                <h2 className="host-aside-title">What happens next</h2>

                <ol className="host-steps">
                  <li className="host-step">
                    <span className="host-step-number">1</span>
                    <div>
                      <h3 className="host-step-title">We check the details</h3>
                      <p className="host-step-copy">
                        A human reads every submission to keep listings real.
                      </p>
                    </div>
                  </li>
                  <li className="host-step">
                    <span className="host-step-number">2</span>
                    <div>
                      <h3 className="host-step-title">Your event goes live</h3>
                      <p className="host-step-copy">
                        It appears on Discover All Events and, if it is a standout,
                        the homepage grid.
                      </p>
                    </div>
                  </li>
                  <li className="host-step">
                    <span className="host-step-number">3</span>
                    <div>
                      <h3 className="host-step-title">Students show up</h3>
                      <p className="host-step-copy">
                        Passes, reminders and the group-chat hype are on you.
                      </p>
                    </div>
                  </li>
                </ol>

                
              </aside>
            </div>
          )}
        </div>
      </main>

      
    </>
  )
}

export default HostEventPage
