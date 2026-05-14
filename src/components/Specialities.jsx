import { useScrollReveal } from '../hooks/useScrollReveal'

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </svg>
)

const SPECIALITIES = [
  {
    name: 'Proctology', desc: 'Piles, Fistula, Fissure',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v6a4 4 0 0 0 8 0V3"/><circle cx="18" cy="14" r="2"/><path d="M14 14v3a4 4 0 0 0 8 0v-2"/></svg>,
  },
  {
    name: 'Laparoscopy', desc: 'Hernia, Gallstones',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/></svg>,
  },
  {
    name: 'Gynaecology', desc: 'Cysts, Fibroids, PCOS',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-4.35-7-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.65-7 11-7 11"/></svg>,
  },
  {
    name: 'ENT', desc: 'Tonsils, Sinus, Ear',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 4a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-3a3 3 0 0 1 3-3h3"/><path d="M9 9h2"/></svg>,
  },
  {
    name: 'Urology', desc: 'Kidney Stones, Circumcision',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 4a5 5 0 0 1 10 0v3a5 5 0 0 1-2 4 5 5 0 0 0-2 4v5"/><circle cx="12" cy="7" r="2"/></svg>,
  },
  {
    name: 'Vascular', desc: 'Varicose Veins, DVT',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4c4 0 4 6 7 6s3-6 7-6"/><path d="M5 12c4 0 4 6 7 6s3-6 7-6"/></svg>,
  },
  {
    name: 'Aesthetics', desc: 'Gynecomastia, Liposuction',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l2.6 5.5 6 .9-4.3 4.2 1 6L12 16.8 6.7 19.6l1-6-4.3-4.2 6-.9z"/></svg>,
  },
  {
    name: 'Orthopedics', desc: 'Knee, Spine, Joints',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3l3 3-3 3M9 6h6M18 9l-3 3 3 3M15 12H9M6 15l3 3-3 3"/></svg>,
  },
  {
    name: 'Ophthalmology', desc: 'Cataract, LASIK',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>,
  },
  {
    name: 'IVF & Fertility', desc: 'IVF, IUI, Fertility',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="5"/><path d="M9 14l-2 7 5-3 5 3-2-7"/></svg>,
  },
]

export default function Specialities() {
  const headRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section className="section alt-white" id="specialities">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <div className="lhs">
            <span className="eyebrow">What we treat</span>
            <h2 className="section-title">What would you like <span className="accent-word">help</span> with?</h2>
          </div>
        </div>

        <div className="specialities-grid reveal-stagger" ref={gridRef}>
          {SPECIALITIES.map(s => (
            <a className="spec-card" href="#" key={s.name}>
              <span className="ic">{s.icon}</span>
              <div className="name">{s.name}</div>
              <div className="desc">{s.desc}</div>
              <span className="arrow">Learn more <ArrowIcon /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
