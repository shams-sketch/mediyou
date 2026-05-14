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
    <section className="section alt-light" id="why">
      <div className="container">
        <div className="reveal" ref={headRef} style={{ maxWidth: 640, marginBottom: 48 }}>
          <span className="eyebrow">Why MediYou</span>
          <h2 className="section-title">Built entirely <span className="accent-word">around</span> you</h2>
        </div>

        <div className="why-grid reveal-stagger" ref={gridRef}>
          {REASONS.map(r => (
            <div className="why-item" key={r.title}>
              <span className="ic">{r.icon}</span>
              <div>
                <div className="title">{r.title}</div>
                <p className="body">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
