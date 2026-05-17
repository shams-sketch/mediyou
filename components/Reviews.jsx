'use client'
import { useScrollReveal } from '../hooks/useScrollReveal'

const REVIEWS = [
  {
    quote: '"I had been putting off piles surgery for 3 years out of fear. MediYou\'s team called me, explained everything calmly, arranged the doctor, and my insurance covered it fully. I was home the same evening."',
    name: 'Aditya P.', location: 'Pune', treatment: 'Piles Treatment',
  },
  {
    quote: '"I didn\'t know hernia surgery could be this simple. They handled the hospital, the paperwork, and even sent a cab. I just showed up. Best decision I made for my health."',
    name: 'Vishal D.', location: 'Delhi', treatment: 'Hernia Surgery',
  },
  {
    quote: '"The weight loss surgery changed my life. I\'d been struggling for 10 years. MediYou made the whole process — consultation, surgery, follow-up — completely stress free."',
    name: 'Kiran M.', location: 'Pune', treatment: 'Bariatric Surgery',
  },
]

export default function Reviews() {
  const headRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section className="section" id="reviews" style={{ background: 'transparent' }}>
      <div className="container">
        <div className="reveal" ref={headRef} style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 48px' }}>
          <span className="eyebrow">Patient stories</span>
          <h2 className="section-title" style={{ maxWidth: 'none' }}>Came worried, <span className="accent-word">left</span> relieved</h2>
          <div className="reviews-stats">
            <span><strong>4.8 / 5</strong> Average rating</span>
            <span><strong>95%</strong> Would recommend MediYou</span>
          </div>
        </div>

        <div className="reviews-grid reveal-stagger" ref={gridRef}>
          {REVIEWS.map(r => (
            <div
              className="review-card"
              key={r.name}
              style={{
                transition: 'border-color var(--transition-base) var(--ease-out)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,168,133,0.2)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = ''
              }}
            >
              <span className="stars">★★★★★</span>
              <p className="review-quote">{r.quote}</p>
              <div className="review-meta">
                <strong>{r.name}</strong> · {r.location} · {r.treatment}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
