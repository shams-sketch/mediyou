'use client'
import { useScrollReveal } from '../hooks/useScrollReveal'

const SURGEONS = [
  {
    name: 'Dr. Anjali',
    spec: 'Bariatric & Laparoscopic Surgeon',
    meta: '14 years experience · Pune',
    quote: '"I chose MediYou because it lets me focus entirely on the patient. The coordination, insurance, and follow-up are handled — so when I meet a patient, we talk only about their health."',
    procedures: 312,
  },
  {
    name: 'Dr. Pankaj',
    spec: 'Proctologist & General Surgeon',
    meta: '11 years experience · Delhi',
    quote: '"My patients come in anxious and leave reassured. MediYou gives them the support system around the surgery that I can\'t provide alone — and it shows in their recovery."',
    procedures: 248,
  },
  {
    name: 'Dr. Mariya',
    spec: 'Gynaecologist & Laparoscopic Surgeon',
    meta: '9 years experience · Pune & Delhi',
    quote: '"The patients who come through MediYou are better informed and less scared. That makes my job easier and their outcomes better. It\'s a genuine partnership."',
    procedures: 197,
  },
]

export default function Surgeons() {
  const headRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section className="section" id="surgeons" style={{ background: 'transparent' }}>
      <div className="container">
        <div className="reveal" ref={headRef} style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }}>
          <span className="eyebrow">Our surgeons</span>
          <h2 className="section-title" style={{ maxWidth: 'none' }}>Meet the specialists <span className="accent-word">behind</span> your care</h2>
        </div>

        <div className="surgeons-grid reveal-stagger" ref={gridRef}>
          {SURGEONS.map(s => (
            <div className="surgeon-card" key={s.name}>
              <div className="surgeon-head">
                <div>
                  <div className="surgeon-name">{s.name}</div>
                  <div className="surgeon-spec">{s.spec}</div>
                  <div className="surgeon-meta">{s.meta}</div>
                </div>
              </div>
              <p className="surgeon-quote">{s.quote}</p>
              <div className="surgeon-foot">
                <span className="stars">★★★★★</span>
                <span>{s.procedures} procedures at MediYou</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
