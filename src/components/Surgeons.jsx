import { useScrollReveal } from '../hooks/useScrollReveal'

const SURGEONS = [
  {
    initials: 'AM',
    name: 'Dr. Anjali Mehta',
    spec: 'Bariatric & Laparoscopic Surgeon',
    meta: '14 years experience · Pune',
    quote: '"I chose MediYou because it lets me focus entirely on the patient. The coordination, insurance, and follow-up are handled — so when I meet a patient, we talk only about their health."',
    procedures: 312,
    avatarStyle: {},
  },
  {
    initials: 'RK',
    name: 'Dr. Rajan Kulkarni',
    spec: 'Proctologist & General Surgeon',
    meta: '11 years experience · Delhi',
    quote: '"My patients come in anxious and leave reassured. MediYou gives them the support system around the surgery that I can\'t provide alone — and it shows in their recovery."',
    procedures: 248,
    avatarStyle: { background: 'var(--medi-orange)' },
  },
  {
    initials: 'PN',
    name: 'Dr. Priya Nambiar',
    spec: 'Gynaecologist & Laparoscopic Surgeon',
    meta: '9 years experience · Pune & Delhi',
    quote: '"The patients who come through MediYou are better informed and less scared. That makes my job easier and their outcomes better. It\'s a genuine partnership."',
    procedures: 197,
    avatarStyle: {},
  },
]

export default function Surgeons() {
  const headRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section className="section alt-white" id="surgeons">
      <div className="container">
        <div className="reveal" ref={headRef} style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }}>
          <span className="eyebrow">Our surgeons</span>
          <h2 className="section-title" style={{ maxWidth: 'none' }}>Meet the specialists <span className="accent-word">behind</span> your care</h2>
        </div>

        <div className="surgeons-grid reveal-stagger" ref={gridRef}>
          {SURGEONS.map(s => (
            <div className="surgeon-card" key={s.name}>
              <div className="surgeon-head">
                <div className="surgeon-avatar" style={s.avatarStyle}>{s.initials}</div>
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
