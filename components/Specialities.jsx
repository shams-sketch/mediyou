'use client'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { usePopup } from '../context/PopupContext'

const SPECIALITIES = [
  { name: 'Proctology',      desc: 'Piles, Fistula, Fissure',       img: '/assets/treatments/proctology.png',    condition: 'Piles / Fistula / Fissure' },
  { name: 'Laparoscopy',     desc: 'Hernia, Gallstones',             img: '/assets/treatments/Laparoscopy.png',  condition: 'Hernia' },
  { name: 'Gynaecology',     desc: 'Cysts, Fibroids, PCOS',         img: '/assets/treatments/gynaecology.png',   condition: 'Gynaecology' },
  { name: 'ENT',             desc: 'Tonsils, Sinus, Ear',           img: '/assets/treatments/ent.png',           condition: 'Other' },
  { name: 'Urology',         desc: 'Kidney Stones, Circumcision',   img: '/assets/treatments/urology.png',       condition: 'Kidney stones' },
  { name: 'Vascular',        desc: 'Varicose Veins, DVT',           img: '/assets/treatments/vascular.png',      condition: 'Varicose veins' },
  { name: 'Aesthetics',      desc: 'Gynecomastia, Liposuction',     img: '/assets/treatments/aesthetics.png',    condition: 'Other' },
  { name: 'Orthopedics',     desc: 'Knee, Spine, Joints',           img: '/assets/treatments/orthopedics.png',   condition: 'Knee / Spine' },
  { name: 'Ophthalmology',   desc: 'Cataract, LASIK',               img: '/assets/treatments/ophthalmology.png', condition: 'Cataract / LASIK' },
  { name: 'IVF & Fertility', desc: 'IVF, IUI, Fertility',           img: '/assets/treatments/ivf-fertility.png', condition: 'Other' },
]

export default function Specialities() {
  const headRef = useScrollReveal()
  const gridRef = useScrollReveal()
  const { openPopup } = usePopup()

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
            <button
              className="spec-card"
              key={s.name}
              onClick={() => openPopup(s.condition)}
              type="button"
            >
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
                <span className="arrow">Book consultation <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
