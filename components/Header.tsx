"use client"

import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="header">
        <div className="logo">AVANI'S<br />KITCHEN</div>

        {/* Desktop nav */}
        <nav>
          <a href="#menu">Menu</a>
          <a href="#about">Our Story</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-right">
          <a href="https://www.zomato.com/pune/avanis-kitchen-yewale-wadi/order" target="_blank" rel="noopener noreferrer">
            <button className="btn-cta">Order Now</button>
          </a>
          {/* Hamburger — mobile only */}
          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`ham-line ${open ? "open-1" : ""}`} />
            <span className={`ham-line ${open ? "open-2" : ""}`} />
            <span className={`ham-line ${open ? "open-3" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile dropdown */}
      <div className={`mobile-menu ${open ? "mobile-menu-open" : ""}`}>
        <a href="#menu" onClick={() => setOpen(false)}>Menu</a>
        <a href="#about" onClick={() => setOpen(false)}>Our Story</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        <a
          href="https://www.zomato.com/pune/avanis-kitchen-yewale-wadi/order"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="mobile-menu-cta"
        >
          Order on Zomato →
        </a>
      </div>
    </>
  )
}
