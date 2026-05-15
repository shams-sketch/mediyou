'use client'
import { useScrollReveal } from '../hooks/useScrollReveal'

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </svg>
)

const SPECIALITIES = [
  { name: 'Proctology',     desc: 'Piles, Fistula, Fissure',        img: '/assets/treatments/proctology.png' },
  { name: 'Laparoscopy',    desc: 'Hernia, Gallstones',              img: '/assets/treatments/Laparoscopy.png' },
  { name: 'Gynaecology',    desc: 'Cysts, Fibroids, PCOS',          img: '/assets/treatments/gynaecology.png' },
  { name: 'ENT',            desc: 'Tonsils, Sinus, Ear',            img: '/assets/treatments/ent.png' },
  { name: 'Urology',        desc: 'Kidney Stones, Circumcision',    img: '/assets/treatments/urology.png' },
  { name: 'Vascular',       desc: 'Varicose Veins, DVT',            img: '/assets/treatments/vascular.png' },
  { name: 'Aesthetics',     desc: 'Gynecomastia, Liposuction',      img: '/assets/treatments/aesthetics.png' },
  { name: 'Orthopedics',    desc: 'Knee, Spine, Joints',            img: '/assets/treatments/orthopedics.png' },
  { name: 'Ophthalmology',  desc: 'Cataract, LASIK',                img: '/assets/treatments/ophthalmology.png' },
  { name: 'IVF & Fertility',desc: 'IVF, IUI, Fertility',            img: '/assets/treatments/ivf-fertility.png' },
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
          <img
            src="/assets/illustrations/specialities.png"
            alt=""
            aria-hidden="true"
            style={{ width: 200, flexShrink: 0 }}
          />
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
