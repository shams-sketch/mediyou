'use client'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { usePopup } from '../context/PopupContext'

export default function CTABanner() {
  const ref = useScrollReveal()
  const { openPopup } = usePopup()

  return (
    <section
      className="reveal"
      ref={ref}
      id="cta-banner"
      style={{ padding: '64px 0', background: 'transparent' }}
    >
      <div className="container">
        <div
          className="cta-float-card"
          style={{
            background: 'rgba(255,255,255,0.72)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.9)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
            padding: '72px 48px',
            textAlign: 'center',
          }}
        >
          <h2>A free consultation takes <span className="accent-word">2</span> minutes</h2>
          <p>Our care team calls back within 2 hours. No fees, no commitment required.</p>
          <button
            className="btn btn-accent"
            onClick={openPopup}
            style={{ cursor: 'pointer', border: 'none' }}
          >
            Book FREE Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
