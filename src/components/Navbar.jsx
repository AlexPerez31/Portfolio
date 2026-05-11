import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { personalInfo } from '../data/portfolio'
import './Navbar.css'

export default function Navbar() {
  const { lang, toggleLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { labelKey: 'nav.home',     path: '/'        },
    { labelKey: 'nav.about',    path: '/resume'  },
    { labelKey: 'nav.projects', path: '/projects'},
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">

        {/* Logo */}
        <NavLink to="/" className="navbar__logo" onClick={close}>
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-name">{personalInfo.name.split(' ')[0] + " " + personalInfo.name.split(' ')[2]}</span>
          <span className="navbar__logo-bracket">/&gt;</span>
        </NavLink>

        {/* Links + lang toggle */}
        <nav className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `navbar__link${isActive ? ' navbar__link--active' : ''}`
              }
              onClick={close}
            >
              {t(item.labelKey)}
            </NavLink>
          ))}

          {/* Language toggle */}
          <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
            <span className={lang === 'en' ? 'lang-toggle__opt lang-toggle__opt--active' : 'lang-toggle__opt'}>EN</span>
            <span className="lang-toggle__sep">|</span>
            <span className={lang === 'es' ? 'lang-toggle__opt lang-toggle__opt--active' : 'lang-toggle__opt'}>ES</span>
          </button>
        </nav>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
