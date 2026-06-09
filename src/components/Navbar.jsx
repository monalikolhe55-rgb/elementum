import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['Home','Works','Services','Author','FAQs']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [shadow, setShadow] = useState(false)

  useEffect(() => {
    const h = () => setShadow(window.scrollY > 10)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <nav className={`nav ${shadow ? 'nav--shadow' : ''}`}>
      <div className="wrap nav__row">
        <span className="nav__logo">Elementum</span>

        <ul className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map(l => (
            <li key={l}><a href="#" className="nav__a" onClick={() => setOpen(false)}>{l}</a></li>
          ))}
        </ul>

        {/* Hamburger icon (3 lines) */}
        <button
          className={`nav__burger ${open ? 'nav__burger--x' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span/><span/><span/>
        </button>
      </div>
    </nav>
  )
}
