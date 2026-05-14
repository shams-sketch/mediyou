import { useScrollReveal } from '../hooks/useScrollReveal'

const SURGEONS = [
  {
    photo: 'https://images.unsplash.com/photo-1559839672-10e7b1d9d76c?w=80&h=80&fit=crop&auto=format&q=80',
    name: 'Dr. Anjali Mehta',
    spec: 'Bariatric & Laparoscopic Surgeon',
    meta: '14 years experience · Pune',
    quote: '"I chose MediYou because it lets me focus entirely on the patient. The coordination, insurance, and follow-up are handled — so when I meet a patient, we talk only about their health."',
    procedures: 312,
  },
  {
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&auto=format&q=80',
    name: 'Dr. Rajan Kulkarni',
    spec: 'Proctologist & General Surgeon',
    meta: '11 years experience · Delhi',
    quote: '"My patients come in anxious and leave reassured. MediYou gives them the support system around the surgery that I can\'t provide alone — and it shows in their recovery."',
    procedures: 248,
  },
  {
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=80&h=80&fit=crop&auto=format&q=80',
    name: 'Dr. Priya Nambiar',
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
                <img
                  src={s.photo}
                  alt={s.name}
                  className="surgeon-avatar"
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--medi-green-tint)',
                  }}
                />
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
