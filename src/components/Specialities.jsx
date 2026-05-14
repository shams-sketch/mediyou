import { useScrollReveal } from '../hooks/useScrollReveal'

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </svg>
)

const SpecIllustration = () => (
  <svg width="200" height="148" viewBox="0 0 200 148" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="100" cy="68" r="58" fill="rgba(0,168,133,0.05)" />
    <circle cx="100" cy="68" r="38" fill="rgba(0,168,133,0.08)" />
    <rect x="87" y="46" width="26" height="44" rx="6" fill="rgba(0,168,133,0.2)" />
    <rect x="78" y="55" width="44" height="26" rx="6" fill="rgba(0,168,133,0.2)" />
    <rect x="90" y="49" width="20" height="38" rx="4" fill="rgba(0,168,133,0.15)" />
    <rect x="81" y="58" width="38" height="20" rx="4" fill="rgba(0,168,133,0.15)" />
    <path d="M18 126 L50 126 L62 106 L76 144 L88 116 L100 132 L112 126 L182 126"
      stroke="rgba(255,116,45,0.5)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="30" cy="26" r="4" fill="rgba(0,168,133,0.22)" />
    <circle cx="170" cy="24" r="4" fill="rgba(0,168,133,0.22)" />
    <circle cx="22" cy="88" r="3" fill="rgba(255,116,45,0.22)" />
    <circle cx="178" cy="90" r="3" fill="rgba(255,116,45,0.22)" />
    <path d="M158 44 h10 m-5-5 v10" stroke="rgba(0,168,133,0.3)" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 50 h8 m-4-4 v8" stroke="rgba(255,116,45,0.3)" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

/* Unsplash photos — each curated for its treatment */
const SPECIALITIES = [
  {
    name: 'Proctology',
    desc: 'Piles, Fistula, Fissure',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=280&fit=crop&auto=format&q=80',
  },
  {
    name: 'Laparoscopy',
    desc: 'Hernia, Gallstones',
    img: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=280&fit=crop&auto=format&q=80',
  },
  {
    name: 'Gynaecology',
    desc: 'Cysts, Fibroids, PCOS',
    img: 'https://images.unsplash.com/photo-1584515933487-779ac9e97e8c?w=400&h=280&fit=crop&auto=format&q=80',
  },
  {
    name: 'ENT',
    desc: 'Tonsils, Sinus, Ear',
    img: 'https://images.unsplash.com/photo-1588776814546-1ffbb172871e?w=400&h=280&fit=crop&auto=format&q=80',
  },
  {
    name: 'Urology',
    desc: 'Kidney Stones, Circumcision',
    img: 'https://images.unsplash.com/photo-1586773860383-dab4bb00a5e1?w=400&h=280&fit=crop&auto=format&q=80',
  },
  {
    name: 'Vascular',
    desc: 'Varicose Veins, DVT',
    img: 'https://images.unsplash.com/photo-1530026405-a5ba7d95c2e2?w=400&h=280&fit=crop&auto=format&q=80',
  },
  {
    name: 'Aesthetics',
    desc: 'Gynecomastia, Liposuction',
    img: 'https://images.unsplash.com/photo-1521510895919-46920266ddb3?w=400&h=280&fit=crop&auto=format&q=80',
  },
  {
    name: 'Orthopedics',
    desc: 'Knee, Spine, Joints',
    img: 'https://images.unsplash.com/photo-1631217868264-e6e3a7e1dcff?w=400&h=280&fit=crop&auto=format&q=80',
  },
  {
    name: 'Ophthalmology',
    desc: 'Cataract, LASIK',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=280&fit=crop&auto=format&q=80',
  },
  {
    name: 'IVF & Fertility',
    desc: 'IVF, IUI, Fertility',
    img: 'https://images.unsplash.com/photo-1519689680058-324335573bb0?w=400&h=280&fit=crop&auto=format&q=80',
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
          <SpecIllustration />
        </div>

        <div className="specialities-grid reveal-stagger" ref={gridRef}>
          {SPECIALITIES.map(s => (
            <a className="spec-card" href="#" key={s.name}>
              <div className="spec-card-img-wrap">
                <img
                  className="spec-card-img"
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                />
              </div>
              <div className="spec-card-body">
                <div className="name">{s.name}</div>
                <div className="desc">{s.desc}</div>
                <span className="arrow">Learn more <ArrowIcon /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
