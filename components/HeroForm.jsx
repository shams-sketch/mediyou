'use client'
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

function FloatingField({ id, type = 'text', label, autoComplete }) {
  const [filled, setFilled] = useState(false)
  return (
    <div className={`field${filled ? ' is-filled' : ''}`}>
      <input
        type={type}
        id={id}
        autoComplete={autoComplete}
        required
        onChange={e => setFilled(e.target.value.length > 0)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

function FloatingSelect({ id, label, options }) {
  const [value, setValue] = useState('')
  return (
    <div className={`field${value ? ' has-value' : ''}`}>
      <select
        id={id}
        required
        value={value}
        onChange={e => setValue(e.target.value)}
      >
        <option value="" disabled />
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default function HeroForm() {
  const [btnState, setBtnState] = useState(null)
  const [insurance, setInsurance] = useState(null)
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
      <FloatingSelect id="hf-city" label="City" options={['Pune', 'Delhi']} />
      <FloatingSelect id="hf-cond" label="Condition" options={CONDITIONS} />

      <div className="ins-toggle-wrap">
        <span className="ins-toggle-label">Do you have health insurance?</span>
        <div className="ins-toggle" role="group" aria-label="Insurance">
          <button type="button" className={`ins-opt${insurance === 'yes' ? ' active' : ''}`} onClick={() => setInsurance('yes')}>Yes</button>
          <button type="button" className={`ins-opt${insurance === 'no' ? ' active' : ''}`} onClick={() => setInsurance('no')}>No</button>
        </div>
        {insurance === 'no' && (
          <p className="ins-hint">No worries — we help you get covered before surgery.</p>
        )}
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
