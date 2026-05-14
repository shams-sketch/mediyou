import { useEffect, useRef } from 'react'

function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3) }

function animateCounter(el, target, suffix, duration) {
  const start = performance.now()
  function frame(now) {
    const p = Math.min(1, (now - start) / duration)
    const v = target * easeOutCubic(p)
    const display = target % 1 !== 0 ? v.toFixed(1) : Math.round(v).toLocaleString('en-IN')
    el.textContent = display + (suffix || '')
    if (p < 1) requestAnimationFrame(frame)
    else el.textContent = (target % 1 !== 0 ? target.toFixed(1) : target.toLocaleString('en-IN')) + (suffix || '')
  }
  requestAnimationFrame(frame)
}

function StatCounter({ count, suffix, label, unit }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animateCounter(el, count, suffix, 800)
        io.disconnect()
      }
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [count, suffix])

  return (
    <div>
      <div className="stat-num">
        <span ref={ref}>0</span>
        {unit && <span className="unit"> {unit}</span>}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="stats reveal-stagger" aria-label="Our numbers">
      <div className="container stats-grid">
        <StatCounter count={50000} suffix="+" label="Surgeries completed" />
        <StatCounter count={4.8} unit="/ 5" label="Average patient rating" />
        <StatCounter count={95} suffix="%" label="Insurance approval rate" />
        <StatCounter count={50} suffix="+" label="Specialities covered" />
      </div>
    </section>
  )
}
