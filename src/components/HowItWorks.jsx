import { useScrollReveal } from '../hooks/useScrollReveal'

const STEPS = [
  {
    num: '01',
    title: 'Book a free consultation',
    body: 'Tell us your condition and city. We match you with the right specialist — zero cost, zero commitment.',
  },
  {
    num: '02',
    title: 'Meet your surgeon',
    body: 'Visit our partner clinic at a time that suits you. Clear diagnosis, plain language, no jargon.',
  },
  {
    num: '03',
    title: 'Get treated, go home',
    body: 'We handle insurance, paperwork, and follow-up. You focus entirely on getting better.',
  },
]

export default function HowItWorks() {
  const headRef = useScrollReveal()
  const stepsRef = useScrollReveal()

  return (
    <section className="section alt-white" id="how">
      <div className="container">
        <div className="reveal" ref={headRef} style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }}>
          <span className="eyebrow">How it works</span>
          <h2 className="section-title" style={{ maxWidth: 'none' }}>Three steps to <span className="accent-word">better</span> health</h2>
        </div>

        <div className="steps reveal-stagger" ref={stepsRef}>
          {STEPS.map(s => (
            <div className="step" key={s.num}>
              <div className="num">{s.num}</div>
              <div className="title">{s.title}</div>
              <p className="body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
