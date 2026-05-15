'use client'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { usePopup } from '../context/PopupContext'

const PROCEDURES = [
  { name: 'Bariatric Surgery', desc: 'Safe, permanent weight loss with expert aftercare.' },
  { name: 'Sleeve Gastrectomy', desc: 'Remove hunger signals. Keep your nutrition.' },
  { name: 'Gastric Bypass', desc: 'Clinically proven long-term weight management.' },
  { name: 'Mini Gastric Bypass', desc: 'Shorter surgery time, faster recovery path.' },
]


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
          <img
            src="/assets/illustrations/weight-loss.png"
            alt=""
            aria-hidden="true"
            style={{ width: 200, flexShrink: 0 }}
          />
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
