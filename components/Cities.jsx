'use client'
import { useScrollReveal } from '../hooks/useScrollReveal'

const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>
  </svg>
)

const CITIES = [
  {
    name: 'Pune',
    areas: ['Kothrud', 'Baner', 'Hadapsar', 'Shivajinagar', 'Viman Nagar', 'Wakad', 'Pimpri', 'Aundh', 'Koregaon Park', 'Kharadi'],
  },
  {
    name: 'Delhi',
    areas: ['Saket', 'Dwarka', 'Rohini', 'Lajpat Nagar', 'Pitampura', 'Janakpuri', 'Vasant Kunj', 'Karol Bagh', 'Noida', 'Gurgaon'],
  },
]

export default function Cities() {
  const headRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section className="section" id="cities" style={{ background: 'transparent' }}>
      <div className="container">
        <div className="reveal" ref={headRef} style={{ maxWidth: 720, marginBottom: 48 }}>
          <span className="eyebrow">Where we operate</span>
          <h2 className="section-title">Available in <span className="accent-word">Pune</span> &amp; Delhi</h2>
          <p className="section-sub" style={{ marginBottom: 0, maxWidth: 'none' }}>
            Partner hospitals and specialist clinics across both cities — with more cities coming soon.
          </p>
        </div>

        <div className="cities-grid reveal-stagger" ref={gridRef}>
          {CITIES.map(c => (
            <div className="city-card" key={c.name}>
              <div className="head">
                <span className="ic"><LocationIcon /></span>
                <div>
                  <div className="name">{c.name}</div>
                  <div className="count">{c.areas.length} areas covered</div>
                </div>
              </div>
              <div className="areas">
                {c.areas.map(a => <span className="area-pill" key={a}>{a}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
