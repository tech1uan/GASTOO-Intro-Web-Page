import { useState } from 'react'

export default function Navbar({ links }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      <div className="wordmark">
        <div className="badge">
          <img className="w-10 h-10 rounded-sm" src="/gastoo_logo.png" alt="Gastoo Logo" />
        </div>
        <span className="display font-black">GASTOO!</span>
      </div>

      {/* Desktop links */}
      <div className="links">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile menu toggle — state lives entirely in this component */}
      <button
        className="menu-toggle"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} />
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
