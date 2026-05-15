'use client'
import { useScrollReveal } from '../hooks/useScrollReveal'

const REASONS = [
  {
    title: 'Specialist surgeons only',
    body: 'Every doctor is a verified specialist — not a general physician. The right expert for your exact condition, every time.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/></svg>,
  },
  {
    title: 'Cashless insurance',
    body: 'We manage your entire claim — pre-auth, discharge papers, everything. No paperwork, no surprises.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M7 15h4"/></svg>,
  },
  {
    title: 'Free pickup & drop',
    body: 'A cab arranged to and from your surgery. Your recovery starts the moment you leave home.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13l2-5h11l3 5"/><path d="M2 13h20v4H2zM6 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0zM15 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/></svg>,
  },
  {
    title: 'No cost EMI',
    body: '0% EMI across 3–12 months. Surgery shouldn\'t wait because of money.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg>,
  },
]

export default function WhyMediYou() {
  const headRef = useScrollReveal()
  const gridRef = useScrollReveal()

  return (
    <section className="section" id="why" style={{ background: 'transparent' }}>
      <div className="container">
        <div className="reveal" ref={headRef} style={{ maxWidth: 640, marginBottom: 48 }}>
          <span className="eyebrow">Why MediYou</span>
          <h2 className="section-title">Built entirely <span className="accent-word">around</span> you</h2>
        </div>

        <div
          className="why-cards reveal-stagger"
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
          }}
        >
          {REASONS.map(r => (
            <div
              className="why-card"
              key={r.title}
              style={{
                background: 'rgba(255,255,255,0.65)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,0.85)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                borderRadius: 'var(--radius-md)',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                transition: 'transform var(--transition-base) var(--ease-out)',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.querySelector('.why-icon-circle').style.transform = 'scale(1.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.querySelector('.why-icon-circle').style.transform = 'scale(1)'
              }}
            >
              <div
                className="why-icon-circle"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'rgba(0,168,133,0.1)',
                  color: 'var(--medi-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'transform var(--transition-base) var(--ease-out)',
                }}
              >
                {r.icon}
              </div>
              <div style={{ fontWeight: 500, fontSize: 18 }}>{r.title}</div>
              <p style={{ margin: 0, color: 'var(--text-soft)', lineHeight: 1.6 }}>{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
