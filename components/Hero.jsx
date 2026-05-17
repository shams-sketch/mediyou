'use client'
import { useEffect, useRef } from 'react'
import HeroForm from './HeroForm'

const AVATARS = ['PS', 'AK', 'MR', 'RK', 'VN']

export default function Hero() {
  const heroRef    = useRef(null)
  const bw1Ref     = useRef(null)  // blob wrapper 1
  const bw2Ref     = useRef(null)  // blob wrapper 2
  const bw3Ref     = useRef(null)  // blob wrapper 3
  const copyRef    = useRef(null)  // hero copy (left)
  const formRef    = useRef(null)  // hero form wrap (right)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf
    let tx = 0, ty = 0   // target
    let cx = 0, cy = 0   // current (lerped)

    function lerp(a, b, t) { return a + (b - a) * t }

    function tick() {
      cx = lerp(cx, tx, 0.055)
      cy = lerp(cy, ty, 0.055)

      if (bw1Ref.current) bw1Ref.current.style.transform = `translate(${cx * 14}px, ${cy * 9}px)`
      if (bw2Ref.current) bw2Ref.current.style.transform = `translate(${-cx * 22}px, ${-cy * 14}px)`
      if (bw3Ref.current) bw3Ref.current.style.transform = `translate(${cx * 9}px, ${cy * 6}px)`
      if (copyRef.current) copyRef.current.style.transform = `translate(${cx * 5}px, ${cy * 3}px)`
      if (formRef.current) formRef.current.style.transform = `translate(${-cx * 7}px, ${-cy * 4}px)`

      raf = requestAnimationFrame(tick)
    }

    function onMove(e) {
      const r = hero.getBoundingClientRect()
      tx = (e.clientX - r.left  - r.width  / 2) / (r.width  / 2)
      ty = (e.clientY - r.top   - r.height / 2) / (r.height / 2)
    }

    function onLeave() { tx = 0; ty = 0 }

    raf = requestAnimationFrame(tick)
    hero.addEventListener('mousemove', onMove,  { passive: true })
    hero.addEventListener('mouseleave', onLeave, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      hero.removeEventListener('mousemove', onMove)
      hero.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section className="hero" id="hero" ref={heroRef}>
      {/* Atmospheric blobs — position on wrapper so parallax & blobDrift don't conflict */}
      <div ref={bw1Ref} className="hero-blob-wrap" style={{ top: '-120px', right: '5%' }}>
        <div className="hero-blob hero-blob-1" />
      </div>
      <div ref={bw2Ref} className="hero-blob-wrap" style={{ bottom: '-40px', left: '2%' }}>
        <div className="hero-blob hero-blob-2" />
      </div>
      <div ref={bw3Ref} className="hero-blob-wrap" style={{ top: '50%', left: '38%' }}>
        <div className="hero-blob hero-blob-3" />
      </div>

      {/* Decorative grid dots */}
      <div className="hero-dots" />

      <div className="container hero-grid">
        {/* LEFT — copy */}
        <div className="hero-copy" ref={copyRef}>
          <span className="hero-eyebrow h-anim d1">
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>
            </svg>
            Trusted by patients in Pune &amp; Delhi
          </span>

          <h1 className="h-anim d2">
            Aap ki sehat ka{' '}
            <span className="accent-word">naya sathi.</span>
          </h1>

          <p className="lede h-anim d3">
            MediYou connects you to Pune and Delhi's top specialist surgeons. Free consultations, cashless insurance, and care at every step.
          </p>

          <div className="hero-actions h-anim d4">
            <a href="tel:+919217214842" className="btn btn-accent">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.3 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call on +91 92172 14842
            </a>
            <a
              href="#specialities"
              className="btn btn-hero-ghost"
              onClick={e => { e.preventDefault(); document.getElementById('specialities')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Browse treatments
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </a>
          </div>

          {/* Social proof */}
          <div className="hero-social-proof h-anim d5">
            <div className="avatar-stack">
              {AVATARS.map(a => (
                <div className="avatar" key={a}>{a}</div>
              ))}
              <div className="avatar avatar-plus">+</div>
            </div>
            <div className="social-proof-text">
              <span className="social-proof-count">50,000+</span>
              <span className="social-proof-label">patients treated successfully</span>
            </div>
          </div>

          {/* Trust badges */}
          <div className="hero-trust-row h-anim d6">
            <div className="trust-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>
              Verified Specialists
            </div>
            <div className="trust-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/></svg>
              Cashless Insurance
            </div>
            <div className="trust-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              2-hr Callback
            </div>
          </div>
        </div>

        {/* RIGHT — form + floating cards */}
        <div className="hero-form-wrap h-anim d5" ref={formRef}>
          {/* Floating card — rating */}
          <div className="float-card fc-rating">
            <span className="fc-icon fc-icon-orange">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l2.6 5.5 6 .9-4.3 4.2 1 6L12 16.8 6.7 19.6l1-6-4.3-4.2 6-.9z"/></svg>
            </span>
            <div>
              <div className="fc-label">Patient Rating</div>
              <div className="fc-val">4.8 / 5 ★★★★★</div>
            </div>
          </div>

          {/* Floating card — insurance */}
          <div className="float-card fc-insurance">
            <span className="fc-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>
            </span>
            <div>
              <div className="fc-label">Insurance Approved</div>
              <div className="fc-val">95% approval rate</div>
            </div>
          </div>

          <HeroForm />
        </div>
      </div>
    </section>
  )
}
