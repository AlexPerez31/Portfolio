import { createContext, useContext, useState } from 'react'

const CVModalContext = createContext()

export function CVModalProvider({ children }) {
  const [open, setOpen] = useState(false)
  return (
    <CVModalContext.Provider value={{ open, openCVModal: () => setOpen(true), closeCVModal: () => setOpen(false) }}>
      {children}
    </CVModalContext.Provider>
  )
}

export const useCVModal = () => useContext(CVModalContext)
