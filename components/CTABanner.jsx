'use client'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { usePopup } from '../context/PopupContext'

export default function CTABanner() {
  const ref = useScrollReveal()
  const { openPopup } = usePopup()

  return (
    <section className="cta-banner-section" style={{ padding: '64px 0', background: 'transparent' }}>
      <div className="container">
        <div className="cta-card reveal" ref={ref}>

          {/* Left — text + CTA */}
          <div className="cta-content">
            <span className="cta-eyebrow">Free Consultation</span>
            <h2 className="cta-heading">
              Ready to take the<br />
              <span className="cta-accent">next step</span> towards<br />
              better health?
            </h2>
            <p className="cta-body">
              Our care coordinators will call you back within 2 hours. No fees, no commitment — just answers.
            </p>

            <div className="cta-trust">
              <span className="cta-trust-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#00a885" fillOpacity=".15"/><path d="M5 8l2 2 4-4" stroke="#00a885" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                No hidden charges
              </span>
              <span className="cta-trust-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#00a885" fillOpacity=".15"/><path d="M5 8l2 2 4-4" stroke="#00a885" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                2-hour callback
              </span>
              <span className="cta-trust-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#00a885" fillOpacity=".15"/><path d="M5 8l2 2 4-4" stroke="#00a885" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Insurance assisted
              </span>
            </div>

            <button
              className="btn btn-accent cta-btn"
              onClick={openPopup}
              style={{ cursor: 'pointer', border: 'none' }}
            >
              Book FREE Consultation
            </button>
          </div>

          {/* Right — doctor photo */}
          <div className="cta-photo-wrap">
            <img
              src="/assets/doctors/stock-doctor.png"
              alt="MediYou care specialist"
              className="cta-photo"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
