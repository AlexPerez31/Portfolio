import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaDiscord } from 'react-icons/fa6'
import { personalInfo } from '../data/portfolio'
import { useLang } from '../context/LanguageContext'
import { useCVModal } from '../context/CVModalContext'
import './Footer.css'

export default function Footer() {
  const { lang } = useLang()
  const { openCVModal } = useCVModal()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            <span style={{ color: 'var(--accent-blue)' }}>&lt;</span>
            {personalInfo.name.split(' ')[0]}
            <span style={{ color: 'var(--accent-blue)' }}>/&gt;</span>
          </span>
          <p className="footer__tagline">{personalInfo.title[lang]}</p>
        </div>

        <div className="footer__socials">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            className="footer__social-link" aria-label="GitHub"><FaGithub /></a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
            className="footer__social-link" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href={`mailto:${personalInfo.email}`}
            className="footer__social-link" aria-label="Email"><FaEnvelope /></a>
          <button onClick={openCVModal}
            className="footer__social-link" aria-label="Download CV"><FaDownload /></button>
          <a href={`https://discord.com/users/${personalInfo.discord}`} target="_blank" rel="noopener noreferrer"
            className="footer__social-link" aria-label="Discord"><FaDiscord /></a>
        </div>

        <p className="footer__copy">
          © {year} {personalInfo.name} · Built with React ⚛️
        </p>
      </div>
    </footer>
  )
}
