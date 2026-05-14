import { useScrollReveal } from '../hooks/useScrollReveal'
import { usePopup } from '../context/PopupContext'

const PROCEDURES = [
  { name: 'Bariatric Surgery', desc: 'Safe, permanent weight loss with expert aftercare.' },
  { name: 'Sleeve Gastrectomy', desc: 'Remove hunger signals. Keep your nutrition.' },
  { name: 'Gastric Bypass', desc: 'Clinically proven long-term weight management.' },
  { name: 'Mini Gastric Bypass', desc: 'Shorter surgery time, faster recovery path.' },
]

const WeightIllustration = () => (
  <svg width="200" height="140" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="100" cy="65" r="56" fill="rgba(255,116,45,0.05)" />
    <circle cx="100" cy="65" r="36" fill="rgba(255,116,45,0.08)" />
    <line x1="100" y1="32" x2="100" y2="72" stroke="rgba(255,116,45,0.5)" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="100" cy="30" r="7" fill="rgba(255,116,45,0.2)" stroke="rgba(255,116,45,0.6)" strokeWidth="2" />
    <line x1="100" y1="54" x2="62" y2="70" stroke="rgba(255,116,45,0.45)" strokeWidth="2" strokeLinecap="round" />
    <line x1="100" y1="54" x2="138" y2="70" stroke="rgba(255,116,45,0.45)" strokeWidth="2" strokeLinecap="round" />
    <path d="M50 70 Q62 79 74 70" stroke="rgba(255,116,45,0.55)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M126 70 Q138 79 150 70" stroke="rgba(255,116,45,0.55)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M86 93 L94 84 L102 93" stroke="rgba(0,168,133,0.7)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <line x1="94" y1="84" x2="94" y2="102" stroke="rgba(0,168,133,0.7)" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M148 44 h12 m-6-6 v12" stroke="rgba(0,168,133,0.35)" strokeWidth="2" strokeLinecap="round" />
    <path d="M33 50 h10 m-5-5 v10" stroke="rgba(0,168,133,0.35)" strokeWidth="2" strokeLinecap="round" />
    <line x1="72" y1="112" x2="128" y2="112" stroke="rgba(255,116,45,0.3)" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="28" cy="28" r="3" fill="rgba(255,116,45,0.25)" />
    <circle cx="172" cy="26" r="3" fill="rgba(255,116,45,0.25)" />
    <circle cx="20" cy="90" r="2.5" fill="rgba(0,168,133,0.2)" />
    <circle cx="180" cy="88" r="2.5" fill="rgba(0,168,133,0.2)" />
  </svg>
)

export default function WeightLoss() {
  const headRef = useScrollReveal()
  const gridRef = useScrollReveal()
  const ctaRef = useScrollReveal()
  const { openPopup } = usePopup()

  return (
    <section className="section" id="weight-loss" style={{ background: 'transparent' }}>
      <div className="container">
        <div
          className="reveal"
          ref={headRef}
          style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 32, marginBottom: 40, flexWrap: 'wrap' }}
        >
          <div style={{ maxWidth: 640 }}>
            <span className="eyebrow">Our speciality</span>
            <h2 className="section-title">Weight Loss Surgery That <span className="accent-word">Changes</span> Lives</h2>
            <p className="section-sub" style={{ marginBottom: 0 }}>
              Struggling with weight? Our bariatric specialists in Pune and Delhi offer safe, minimally invasive procedures with life-changing results — and full insurance support.
            </p>
          </div>
          <WeightIllustration />
        </div>

        <div className="weight-grid reveal-stagger" ref={gridRef}>
          {PROCEDURES.map(p => (
            <div className="weight-card" key={p.name}>
              <div className="name">{p.name}</div>
              <div className="desc">{p.desc}</div>
            </div>
          ))}
        </div>

        <div className="weight-cta-row reveal" ref={ctaRef}>
          <button
            className="btn btn-accent"
            onClick={openPopup}
            style={{ border: 'none', cursor: 'pointer' }}
          >
            Book a Weight Loss Consultation <span className="arr">→</span>
          </button>
          <span className="note">Free consultation · No commitment</span>
        </div>
      </div>
    </section>
  )
}
