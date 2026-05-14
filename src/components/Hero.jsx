import HeroForm from './HeroForm'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <span className="mark" style={{ top: '14%', left: '8%' }}>+</span>
      <span className="mark" style={{ top: '70%', left: '38%', fontSize: 36 }}>✛</span>
      <span className="mark" style={{ bottom: '12%', right: '7%' }}>+</span>

      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="hero-eyebrow h-anim d1">
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>
            </svg>
            Trusted by patients in Pune &amp; Delhi
          </span>
          <h1 className="h-anim d2">Aap ki sehat ka <span className="accent-word">naya sathi.</span></h1>
          <p className="lede h-anim d3">
            MediYou connects you to Pune and Delhi's top specialist surgeons. Free consultations, cashless insurance, and care at every step.
          </p>
          <div className="hero-actions h-anim d4">
            <a href="#hero-form" className="btn btn-accent">Book my free consultation</a>
            <a href="#specialities" className="btn-link">Browse treatments <span className="arr">→</span></a>
          </div>
        </div>

        <div className="hero-form-wrap h-anim d5">
          <HeroForm />
        </div>
      </div>
    </section>
  )
}
