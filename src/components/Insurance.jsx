import { useScrollReveal } from '../hooks/useScrollReveal'

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l4 4 10-10"/>
  </svg>
)

const ClockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
  </svg>
)

const POINTS = [
  'We work with all major insurers — Star, HDFC Ergo, Niva Bupa, and 20+ more',
  'Our team handles the entire claim — pre-auth, discharge papers, everything',
  'No upfront payment needed if your policy covers the procedure',
]

export default function Insurance() {
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()

  return (
    <section className="section alt-green" id="insurance">
      <span className="mark" style={{ top: '12%', right: '8%' }}>+</span>
      <div className="container">
        <div className="insurance-grid">
          <div className="reveal" ref={leftRef}>
            <span className="eyebrow">Zero paperwork. Full coverage.</span>
            <h2 className="section-title">Your insurance probably <span className="accent-word">covers</span> this surgery.</h2>
            <p className="section-sub">
              Most patients don't realise their health insurance already covers the surgery they've been putting off. We check it for free — in 60 seconds.
            </p>

            <ul className="insurance-points">
              {POINTS.map(p => (
                <li key={p}>
                  <span className="check"><CheckIcon /></span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="insurance-cta reveal" ref={rightRef}>
            <span className="badge"><ClockIcon /> Takes 60 seconds</span>
            <h3 className="bold">Wondering if your surgery is covered?</h3>
            <p className="soft">Tell us your insurer and condition — we'll tell you exactly what's covered. No fine print, no calls until you're ready.</p>
            <a href="#hero-form" className="btn btn-accent">Check My Insurance Coverage <span className="arr">→</span></a>
            <p className="note">We'll only call if you ask us to.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
