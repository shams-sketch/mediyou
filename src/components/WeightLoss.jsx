import { useScrollReveal } from '../hooks/useScrollReveal'

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

  return (
    <section className="section alt-orange" id="weight-loss">
      <span className="mark" style={{ top: '8%', right: '6%' }}>+</span>
      <span className="mark" style={{ bottom: '10%', left: '8%', fontSize: 36 }}>✛</span>
      <div className="container">
        <div className="reveal" ref={headRef} style={{ maxWidth: 720, marginBottom: 40 }}>
          <span className="eyebrow on-orange">Our speciality</span>
          <h2 className="section-title">Weight Loss Surgery That <span className="accent-word">Changes</span> Lives</h2>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            Struggling with weight? Our bariatric specialists in Pune and Delhi offer safe, minimally invasive procedures with life-changing results — and full insurance support.
          </p>
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
          <a href="#hero-form" className="btn btn-accent">Book a Weight Loss Consultation <span className="arr">→</span></a>
          <span className="note">Free consultation · No commitment</span>
        </div>
      </div>
    </section>
  )
}
