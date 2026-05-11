import { useEffect } from 'react'
import { FaXmark, FaDownload, FaFilePdf } from 'react-icons/fa6'
import { useCVModal } from '../context/CVModalContext'
import { useLang } from '../context/LanguageContext'
import { personalInfo } from '../data/portfolio'
import './CVModal.css'

const CONTENT = {
  en: {
    title: 'Download CV',
    subtitle: 'Choose your preferred language',
    en: { label: 'English', sub: 'Resume — English version', flag: '🇺🇸' },
    es: { label: 'Español', sub: 'Hoja de vida — versión en español', flag: '🇨🇴' },
  },
  es: {
    title: 'Descargar CV',
    subtitle: 'Elige el idioma de tu preferencia',
    en: { label: 'English', sub: 'Resume — English version', flag: '🇺🇸' },
    es: { label: 'Español', sub: 'Hoja de vida — versión en español', flag: '🇨🇴' },
  },
}

export default function CVModal() {
  const { open, closeCVModal } = useCVModal()
  const { lang } = useLang()
  const c = CONTENT[lang]

  // Close on Escape key
  useEffect(() => {
    if (!open) return
    const handleKey = (e) => { if (e.key === 'Escape') closeCVModal() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, closeCVModal])

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div className="cvmodal-overlay" onClick={closeCVModal}>
      <div className="cvmodal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">

        {/* Header */}
        <div className="cvmodal__header">
          <div>
            <p className="cvmodal__label">
              <FaFilePdf /> PDF
            </p>
            <h2 className="cvmodal__title">{c.title}</h2>
            <p className="cvmodal__subtitle">{c.subtitle}</p>
          </div>
          <button className="cvmodal__close" onClick={closeCVModal} aria-label="Close">
            <FaXmark />
          </button>
        </div>

        {/* Options */}
        <div className="cvmodal__options">
          <a
            href={personalInfo.cvUrlEN}
            download="Alex_Jordan_Perez_Rojas_EN.pdf"
            className="cvmodal__option"
            onClick={closeCVModal}
          >
            <span className="cvmodal__flag">{c.en.flag}</span>
            <div className="cvmodal__option-text">
              <span className="cvmodal__option-label">{c.en.label}</span>
              <span className="cvmodal__option-sub">{c.en.sub}</span>
            </div>
            <FaDownload className="cvmodal__option-icon" />
          </a>

          <a
            href={personalInfo.cvUrlES}
            download="Alex_Jordan_Perez_Rojas_ES.pdf"
            className="cvmodal__option"
            onClick={closeCVModal}
          >
            <span className="cvmodal__flag">{c.es.flag}</span>
            <div className="cvmodal__option-text">
              <span className="cvmodal__option-label">{c.es.label}</span>
              <span className="cvmodal__option-sub">{c.es.sub}</span>
            </div>
            <FaDownload className="cvmodal__option-icon" />
          </a>
        </div>
      </div>
    </div>
  )
}
