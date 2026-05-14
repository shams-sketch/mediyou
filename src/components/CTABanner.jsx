import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CTABanner() {
  const ref = useScrollReveal()

  return (
    <section className="cta-banner reveal" ref={ref}>
      <span className="mark" style={{ top: '18%', left: '12%' }}>+</span>
      <span className="mark" style={{ bottom: '18%', right: '12%', fontSize: 36 }}>✛</span>
      <div className="container">
        <h2>A free consultation takes <span className="accent-word">2</span> minutes</h2>
        <p>Our care team calls back within 2 hours. No fees, no commitment required.</p>
        <a href="#hero-form" className="btn btn-accent">Book FREE Consultation</a>
      </div>
    </section>
  )
}
