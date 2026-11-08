import './Footer.css'

/**
 * FOOTER
 *
 * Liquid-glass footer with the giant Amita brand tagline.
 * Shared by the homepage and (from milestone 6) the All Events page.
 *
 * Note: the Stitch homepage export cut the tagline off after "खाओ पियो,".
 * The All Events screen has the full line, so that version is used here.
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
        <h2 className="footer-tagline" lang="hi">
          खाओ पियो, ऐश करो मित्रों!
        </h2>
      </div>
    </footer>
  )
}

export default Footer
