'use client'
import { useEffect, useRef, useState } from 'react'
import { usePopup } from '../context/PopupContext'

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

const STEPS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.3 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: 'Share your details',
    body: 'Our care coordinator gets in touch within 2 hours.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: 'We understand your condition',
    body: 'The coordinator listens and maps your symptoms to the right specialist.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
      </svg>
    ),
    title: 'Consultation scheduled',
    body: 'Your appointment is confirmed at the earliest available slot.',
  },
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

function FloatingSelect({ id, label, options, initialValue = '' }) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

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

export default function PopupModal() {
  const { isOpen, condition, closePopup } = usePopup()
  const [btnState, setBtnState] = useState(null)
  const [insurance, setInsurance] = useState(null)
  const formRef = useRef(null)

  // Lock / unlock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

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

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) closePopup()
  }

  if (!isOpen) return null

  return (
    <div className="popup-overlay" onClick={handleOverlayClick} role="dialog" aria-modal="true" aria-label="Free consultation popup">
      <div className="popup-card">

        {/* Close button */}
        <button
          className="popup-close"
          onClick={closePopup}
          aria-label="Close"
          type="button"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Left: content */}
        <div className="popup-left">
          <div className="popup-eyebrow">Free Consultation</div>
          <h2 className="popup-title">Simplifying Your Surgery Journey</h2>
          <p className="popup-subtitle">Expert surgeons for 50+ conditions, covered by insurance</p>

          <ol className="popup-steps">
            {STEPS.map((step, i) => (
              <li key={i} className="popup-step">
                <div className="popup-step-icon">{step.icon}</div>
                <div className="popup-step-text">
                  <div className="popup-step-title">{step.title}</div>
                  <div className="popup-step-body">{step.body}</div>
                </div>
              </li>
            ))}
          </ol>

          <div className="popup-stats">
            <div className="popup-stat">
              <div className="popup-stat-num">50,000+</div>
              <div className="popup-stat-label">Happy Patients</div>
            </div>
            <div className="popup-stat-divider" />
            <div className="popup-stat">
              <div className="popup-stat-num">50+</div>
              <div className="popup-stat-label">Specialities</div>
            </div>
            <div className="popup-stat-divider" />
            <div className="popup-stat">
              <div className="popup-stat-num">2</div>
              <div className="popup-stat-label">Cities</div>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="popup-right">
          <form
            className="popup-form"
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
          >
            <h3 className="popup-form-title">Book a Free Consultation</h3>
            <p className="popup-form-sub">Our team calls back within 2 hours.</p>

            <FloatingField id="pf-name" label="Full name" autoComplete="name" />
            <FloatingField id="pf-phone" type="tel" label="Mobile number" autoComplete="tel" />

            <FloatingSelect id="pf-city" label="City" options={['Pune', 'Delhi']} />
            <FloatingSelect id="pf-cond" label="Condition" options={CONDITIONS} initialValue={condition} />

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
              className="btn btn-accent popup-submit"
              data-state={btnState || undefined}
            >
              Book My Free Consultation
            </button>
            <p className="popup-trust">No spam · No fees · 100% confidential</p>
          </form>
        </div>

      </div>
    </div>
  )
}
