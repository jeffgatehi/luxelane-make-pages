import { useState } from 'react'
import './Nav.css'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="nav">
        <div className="nav__inner">
          <button className="nav__menu" onClick={() => setMenuOpen(o => !o)}>
            <span className="nav__menu-icon">
              <span /><span /><span />
            </span>
            <span className="nav__menu-label">MENU</span>
          </button>

          <a href="#" className="nav__brand">
            <span className="nav__brand-name">
              <strong>LUXE</strong>LANE
            </span>
            <span className="nav__brand-sub">AUTOS</span>
          </a>

          <div className="nav__actions">
            <a href="#" className="nav__signin">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              SIGN IN
            </a>
            <a href="#" className="nav__join">JOIN FREE</a>
            <a href="#contact" className="nav__contact">
              CONTACT US
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="nav__breadcrumb">
          <span>HOME</span>
          <span className="nav__bc-sep">›</span>
          <span>CARS</span>
          <span className="nav__bc-sep">›</span>
          <span className="nav__bc-current">ALFA ROMEO</span>
        </div>
      </nav>

      {menuOpen && (
        <div className="nav__overlay" onClick={() => setMenuOpen(false)}>
          <div className="nav__drawer" onClick={e => e.stopPropagation()}>
            <button className="nav__drawer-close" onClick={() => setMenuOpen(false)}>✕</button>
            <div className="nav__drawer-links">
              <a href="#">Home</a>
              <a href="#">All Marques</a>
              <a href="#heritage">Heritage</a>
              <a href="#models">Models</a>
              <a href="#import">Import to Kenya</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
