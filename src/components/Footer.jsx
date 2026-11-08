import { siteSocials, people, team } from '../data/team'
import './Footer.css'

/* Feather-style icons — inline so no icon library is needed. */

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

/**
 * FOOTER
 *
 * Liquid-glass footer with the site socials, the people behind
 * the site, and the big Amita site name.
 * Shared by the homepage, Discover All Events and event pages.
 *
 * Left: the site's own socials under a "Site Socials" label.
 * Right: leadership (Founder, Co-founder, General Secretary) in
 * one vertical column and the rest of the team in the other.
 * Each person has an Instagram icon beside their name.
 *
 * Names, handles and URLs live in src/data/team.js.
 */
function Footer() {
  return (
    <footer className="footer">
      {/* Thin bright line along the top edge */}
      <div className="footer-beam" />

      {/* Coloured glow orbs behind the glass */}
      <div className="footer-orb footer-orb-pink" />
      <div className="footer-orb footer-orb-blue" />
      <div className="footer-orb footer-orb-purple" />

      <div className="footer-inner">
        {/* ---------- Socials + people ---------- */}
        <section className="footer-connect" aria-label="Khao Piyo community">
          {/* Site socials */}
          <div className="footer-socials-block">
            <p className="footer-connect-title">Site Socials</p>

            <div className="footer-socials">
              <a
                className="footer-social-link"
                href={siteSocials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Khao Piyo on Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                className="footer-social-link"
                href={siteSocials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Khao Piyo on LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* Leadership column + team column */}
          <div className="footer-people">
            <div className="footer-person-column">
              {people.map((person) => (
                <div className="footer-person" key={person.name}>
                  <p className="footer-person-role">{person.role}</p>

                  <div className="footer-person-row">
                    <a
                      className="footer-person-name"
                      href={person.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {person.name}
                    </a>

                    <a
                      className="footer-person-instagram"
                      href={person.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${person.name} on Instagram (${person.handle})`}
                    >
                      <InstagramIcon />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="footer-person-column">
              <p className="footer-person-role">Team</p>

              <ul className="footer-team-list">
                {team.map((member) => (
                  <li className="footer-person-row" key={member.name}>
                    {member.link ? (
                      <a
                        className="footer-person-name"
                        href={member.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {member.name}
                      </a>
                    ) : (
                      <span className="footer-person-name">{member.name}</span>
                    )}

                    <a
                      className="footer-person-instagram"
                      href={member.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} on Instagram (${member.handle})`}
                    >
                      <InstagramIcon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <h2 className="footer-brand" lang="hi">
          खाओ पियो
        </h2>
      </div>
    </footer>
  )
}

export default Footer
