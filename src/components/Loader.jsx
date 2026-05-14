import { useEffect, useRef } from 'react'

export default function Loader() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const t = setTimeout(() => {
      el.classList.add('hide')
      setTimeout(() => el.remove(), 400)
    }, 1300)
    return () => clearTimeout(t)
  }, [])

  return (
    <div id="loader" ref={ref} aria-hidden="true">
      <div className="wm">
        <span className="m">Medi</span>
        <span className="y">You</span>
      </div>
    </div>
  )
}
