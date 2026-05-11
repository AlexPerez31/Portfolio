import { createContext, useContext, useState } from 'react'
import { translations } from '../data/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  // t('nav.home') → translations[lang].nav.home
  const t = (path) =>
    path.split('.').reduce((obj, key) => obj?.[key], translations[lang]) ?? path

  const toggleLang = () => setLang(l => (l === 'en' ? 'es' : 'en'))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
