import { useState, useRef } from 'react'

const CONDITIONS = [
  'Weight loss surgery',
  'Piles / Fistula / Fissure',
  'Hernia',
  'Gallstones',
  'Gynaecology',
  'Kidney stones',
  'Varicose veins',
  'Cataract / LASIK',
  'Knee / Spine',
  'Other',
]

function FloatingField({ id, type = 'text', label, autoComplete, children }) {
  const [filled, setFilled] = useState(false)

  function handleChange(e) {
    setFilled(e.target.value.length > 0)
  }

  if (children) {
    return (
      <div className={`field has-value`}>
        {children}
        <label htmlFor={id}>{label}</label>
      </div>
    )
  }

  return (
    <div className={`field${filled ? ' is-filled' : ''}`}>
      <input
        type={type}
        id={id}
        autoComplete={autoComplete}
        required
        onChange={handleChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default function HeroForm() {
  const [btnState, setBtnState] = useState(null)
  const formRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    if (btnState) return
    setBtnState('loading')
    setTimeout(() => {
      setBtnState('done')
      setTimeout(() => {
        setBtnState(null)
        formRef.current?.reset()
      }, 1800)
    }, 1100)
  }

  return (
    <form
      className="glass-card hero-form h-anim d5"
      id="hero-form"
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
    >
      <h3>Get a free consultation</h3>
      <p className="sub">Our team calls back within 2 hours.</p>

      <FloatingField id="hf-name" label="Full name" autoComplete="name" />
      <FloatingField id="hf-phone" type="tel" label="Mobile number" autoComplete="tel" />

      <div className="field has-value">
        <select id="hf-city" required>
          <option value="Pune">Pune</option>
          <option value="Delhi">Delhi</option>
        </select>
        <label htmlFor="hf-city">City</label>
      </div>

      <div className="field has-value">
        <select id="hf-cond" required>
          {CONDITIONS.map(c => <option key={c}>{c}</option>)}
        </select>
        <label htmlFor="hf-cond">Condition</label>
      </div>

      <button
        type="submit"
        className="btn btn-accent"
        style={{ height: 52, marginTop: 6 }}
        data-state={btnState || undefined}
      >
        Book My Free Consultation
      </button>
      <div className="trust">No spam · No fees · 100% confidential</div>
    </form>
  )
}
