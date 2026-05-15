'use client'
import { useScrollReveal } from '../hooks/useScrollReveal'

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l4 4 10-10"/>
  </svg>
)

const ClockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
  </svg>
)

const POINTS = [
  'We work with all major insurers — Star, HDFC Ergo, Niva Bupa, and 20+ more',
  'Our team handles the entire claim — pre-auth, discharge papers, everything',
  'No upfront payment needed if your policy covers the procedure',
]

const INSURERS = ['Star Health', 'HDFC Ergo', 'Niva Bupa', 'Care Health', 'Bajaj Allianz', '+ 20 more']

export default function Insurance() {
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()

  return (
    <section className="section" id="insurance" style={{ background: 'transparent' }}>
      <div className="container">
        <div className="insurance-grid">

          {/* Left column */}
          <div className="reveal" ref={leftRef}>
            <span className="eyebrow">Zero paperwork. Full coverage.</span>
            <h2 className="section-title">Your insurance probably <span className="accent-word">covers</span> this surgery.</h2>
            <p className="section-sub">
              Most patients don't realise their health insurance already covers the surgery they've been putting off. We check it for free — in 60 seconds.
            </p>
            <ul className="insurance-points">
              {POINTS.map(p => (
                <li key={p}>
                  <span className="check"><CheckIcon /></span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Right card */}
          <div className="reveal" ref={rightRef}>
            <div
              style={{
                background: 'rgba(255,116,45,0.06)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,116,45,0.18)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                borderRadius: 'var(--radius-lg)',
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
              }}
            >
              <span className="badge" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, alignSelf: 'flex-start' }}>
                <ClockIcon /> Check in 60 seconds
              </span>
              <h3 className="bold" style={{ margin: 0 }}>Wondering if your surgery is covered?</h3>
              <p style={{ margin: 0, color: 'var(--text-soft)', lineHeight: 1.6 }}>
                Tell us your insurer and condition — we'll tell you exactly what's covered. No fine print, no calls until you're ready.
              </p>

              {/* Insurer pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {INSURERS.map(name => (
                  <span
                    key={name}
                    style={{
                      padding: '5px 12px',
                      borderRadius: 999,
                      background: 'rgba(255,255,255,0.7)',
                      border: '1px solid rgba(255,116,45,0.2)',
                      color: 'var(--fg-muted)',
                      fontSize: 12,
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {name}
                  </span>
                ))}
              </div>

              <a href="#hero-form" className="btn btn-accent" style={{ alignSelf: 'flex-start' }}>
                Check My Insurance Coverage <span className="arr">→</span>
              </a>
              <p style={{ margin: 0, fontSize: 12, color: 'var(--text-soft)', opacity: 0.7 }}>
                We'll only call if you ask us to.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
