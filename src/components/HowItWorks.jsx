import { useScrollReveal } from '../hooks/useScrollReveal'

const CalendarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <path d="M16 2v4M8 2v4M3 10h18"/>
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
  </svg>
)

const StethoscopeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 6.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
    <path d="M6.5 8.5v5a5 5 0 0 0 10 0v-1a3 3 0 1 1 0 0"/>
  </svg>
)

const HomeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12L12 3l9 9"/>
    <path d="M9 21V12h6v9"/>
    <path d="M5 10v11h14V10"/>
  </svg>
)

const STEPS = [
  {
    num: '01',
    title: 'Book a free consultation',
    body: 'Tell us your condition and city. We match you with the right specialist — zero cost, zero commitment.',
    Icon: CalendarIcon,
  },
  {
    num: '02',
    title: 'Meet your surgeon',
    body: 'Visit our partner clinic at a time that suits you. Clear diagnosis, plain language, no jargon.',
    Icon: StethoscopeIcon,
  },
  {
    num: '03',
    title: 'Get treated, go home',
    body: 'We handle insurance, paperwork, and follow-up. You focus entirely on getting better.',
    Icon: HomeIcon,
  },
]

export default function HowItWorks() {
  const headRef = useScrollReveal()
  const stepsRef = useScrollReveal()

  return (
    <section className="section" id="how" style={{ background: 'transparent' }}>
      <div className="container">
        <div className="reveal" ref={headRef} style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }}>
          <span className="eyebrow">How it works</span>
          <h2 className="section-title" style={{ maxWidth: 'none' }}>Three steps to <span className="accent-word">better</span> health</h2>
        </div>

        <div className="steps reveal-stagger" ref={stepsRef}>
          {STEPS.map(s => (
            <div
              className="step"
              key={s.num}
              style={{
                background: 'rgba(255,255,255,0.65)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,0.85)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                borderRadius: 'var(--radius-md)',
                borderLeft: '3px solid var(--medi-green)',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'var(--medi-green)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 20,
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                {s.num}
              </div>
              <div style={{ color: 'var(--medi-green)', opacity: 0.8 }}>
                <s.Icon />
              </div>
              <div className="title" style={{ fontWeight: 600, fontSize: 17 }}>{s.title}</div>
              <p className="body" style={{ margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
