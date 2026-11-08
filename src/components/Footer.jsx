import './Footer.css'

/**
 * FOOTER
 *
 * Liquid-glass footer with the site name.
 * Shared by the homepage and the Discover All Events page.
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
        <h2 className="footer-brand" lang="hi">
          खाओ पियो
        </h2>
      </div>
    </footer>
  )
}

export default Footer
