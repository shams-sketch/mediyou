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
        <button className="nav-burger" aria-label="Menu"><span></span></button>
      </div>
    </nav>
  )
}
