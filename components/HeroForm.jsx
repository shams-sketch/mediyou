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

function FloatingField({ id, name, type = 'text', label, autoComplete }) {
  const [filled, setFilled] = useState(false)
  return (
    <div className={`field${filled ? ' is-filled' : ''}`}>
      <input
        type={type}
        id={id}
        name={name}
        autoComplete={autoComplete}
        required
        onChange={e => setFilled(e.target.value.length > 0)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

function PhoneField({ id, name }) {
  const [digits, setDigits] = useState('')
  const [focused, setFocused] = useState(false)
  const [error, setError] = useState('')
  const active = focused || digits.length > 0

  function handleChange(e) {
    const val = e.target.value.replace(/\D/g, '').slice(0, 10)
    setDigits(val)
    if (error) setError('')
  }

  function handleBlur() {
    setFocused(false)
    if (digits.length > 0 && digits.length !== 10) setError('Enter a valid 10-digit number')
  }

  return (
    <div className={`field phone-field${active ? ' is-filled' : ''}${error ? ' has-error' : ''}`}>
      {active && <span className="phone-prefix">+91</span>}
      <input
        type="tel"
        id={id}
        name={name}
        value={digits}
        inputMode="numeric"
        autoComplete="tel"
        required
        onChange={handleChange}
        onFocus={() => { setFocused(true); setError('') }}
        onBlur={handleBlur}
      />
      <label htmlFor={id}>Mobile number</label>
      {error && <span className="field-error">{error}</span>}
    </div>
  )
}

function FloatingSelect({ id, name, label, options }) {
  const [value, setValue] = useState('')
  return (
    <div className={`field${value ? ' has-value' : ''}`}>
      <select
        id={id}
        name={name}
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

  async function handleSubmit(e) {
    e.preventDefault()
    if (btnState) return
    setBtnState('loading')

    const data = new FormData(formRef.current)

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          phone: data.get('phone') ? `+91 ${data.get('phone')}` : '',
          city: data.get('city'),
          condition: data.get('condition'),
          insurance: insurance || 'Not specified',
        }),
      })

      if (res.ok) {
        setBtnState('done')
        setTimeout(() => {
          setBtnState(null)
          formRef.current?.reset()
          setInsurance(null)
        }, 1800)
      } else {
        setBtnState(null)
        alert('Something went wrong. Please try again.')
      }
    } catch {
      setBtnState(null)
      alert('Something went wrong. Please try again.')
    }
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

      <FloatingField id="hf-name" name="name" label="Full name" autoComplete="name" />
      <PhoneField id="hf-phone" name="phone" />
      <FloatingSelect id="hf-city" name="city" label="City" options={['Pune', 'Delhi']} />
      <FloatingSelect id="hf-cond" name="condition" label="Condition" options={CONDITIONS} />

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
        {btnState === 'loading' ? 'Submitting…' : btnState === 'done' ? "✓ We'll call you soon!" : 'Book My Free Consultation'}
      </button>
      <div className="trust">No spam · No fees · 100% confidential</div>
    </form>
  )
}
