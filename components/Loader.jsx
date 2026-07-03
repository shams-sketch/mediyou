'use client'
import { useEffect, useState } from 'react'

export default function Loader() {
  const [hiding, setHiding] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setHiding(true), 1300)
    const t2 = setTimeout(() => setGone(true), 1700)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (gone) return null

  return (
    <div id="loader" className={hiding ? 'hide' : ''} aria-hidden="true">
      <div className="wm">
        <span className="m">Medi</span>
        <span className="y">You</span>
      </div>
    </div>
  )
}
