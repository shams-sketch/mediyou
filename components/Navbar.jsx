'use client'
import { useEffect, useRef } from 'react'

export default function Navbar() {
  const navRef = useRef(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    let lastY = window.scrollY
    let ticking = false

    function onScroll() {
      const y = window.scrollY
      nav.classList.toggle('scrolled', y > 60)
      if (y > 120 && y > lastY + 4) nav.classList.add('hidden')
      else if (y < lastY - 4) nav.classList.remove('hidden')
      lastY = y
      ticking = false
    }

    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(onScroll)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="nav" ref={navRef}>
      <div className="container nav-inner">
        <a href="#" className="nav-logo" aria-label="MediYou">
          <img src="/logo.png" alt="MediYou" />
        </a>
        <div className="nav-links">
          <a href="#specialities">Treatments</a>
          <a href="#surgeons">Doctors</a>
          <a href="#cities">Clinics</a>
          <a href="#reviews">Reviews</a>
          <a href="#">Blog</a>
        </div>
        <div className="nav-cta">
          <a href="#hero-form" className="btn btn-accent btn-sm">Book FREE Consultation</a>
        </div>
        {/* Mobile-only call button — replaces burger */}
        <a href="tel:+919217214842" className="nav-call btn btn-accent btn-sm">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.3 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Book a Call
        </a>
        <button className="nav-burger" aria-label="Menu"><span></span></button>
      </div>
    </nav>
  )
}
