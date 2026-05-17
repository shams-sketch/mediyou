'use client'
import { createContext, useContext, useEffect, useState } from 'react'

const PopupContext = createContext(null)

export function PopupProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [condition, setCondition] = useState('')

  useEffect(() => {
    if (sessionStorage.getItem('popup_shown')) return
    const timer = setTimeout(() => {
      setIsOpen(true)
      sessionStorage.setItem('popup_shown', '1')
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  function openPopup(cond = '') {
    setCondition(cond)
    setIsOpen(true)
  }

  function closePopup() {
    setIsOpen(false)
    setCondition('')
  }

  return (
    <PopupContext.Provider value={{ isOpen, condition, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  )
}

export function usePopup() {
  const ctx = useContext(PopupContext)
  if (!ctx) throw new Error('usePopup must be used inside PopupProvider')
  return ctx
}
