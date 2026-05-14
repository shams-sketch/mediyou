import { createContext, useContext, useEffect, useState } from 'react'

const PopupContext = createContext(null)

export function PopupProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('popup_shown')) return

    const timer = setTimeout(() => {
      setIsOpen(true)
      sessionStorage.setItem('popup_shown', '1')
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  function openPopup() { setIsOpen(true) }
  function closePopup() { setIsOpen(false) }

  return (
    <PopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  )
}

export function usePopup() {
  const ctx = useContext(PopupContext)
  if (!ctx) throw new Error('usePopup must be used inside PopupProvider')
  return ctx
}
