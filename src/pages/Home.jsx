import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  FaGithub, FaLinkedin, FaEnvelope, FaDownload,
  FaArrowRight, FaDiscord,
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs,
  FaPython, FaJava, FaGitAlt, FaDocker,
} from 'react-icons/fa6'
import {
  SiJavascript, SiPostgresql, SiMongodb,
  SiMysql, SiDjango, SiFastapi, SiAngular,
  SiFirebase, SiGitlab, SiPostman, SiPandas,
  SiJupyter, SiAndroidstudio, SiSpring,
  SiBootstrap, SiJira, SiRedis,
} from 'react-icons/si'
import { personalInfo, techStack } from '../data/portfolio'
import { useLang } from '../context/LanguageContext'
import { useCVModal } from '../context/CVModalContext'
import NeonControllers from '../components/NeonControllers'
import './Home.css'

const iconMap = {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython,
  FaJava, FaGitAlt, FaDocker,
  SiJavascript, SiPostgresql, SiMongodb, SiMysql,
  SiDjango, SiFastapi, SiAngular, SiFirebase,
  SiGitlab, SiPostman, SiPandas, SiJupyter,
  SiAndroidstudio, SiSpring, SiBootstrap, SiJira, SiRedis,
}

function sortAlternating(items) {
  const sorted = [...items].sort((a, b) => a.name.length - b.name.length)
  const half = Math.ceil(sorted.length / 2)
  const shorts = sorted.slice(0, half)
  const longs  = sorted.slice(half).reverse()
  return shorts.flatMap((s, i) => longs[i] ? [s, longs[i]] : [s])
}

function TechItem({ name, icon: iconName, color }) {
  const Icon = iconName ? iconMap[iconName] : null
  return (
    <div className="tech-item">
      {Icon && <span className="tech-item__icon" style={{ color }}><Icon /></span>}
      <span className="tech-item__name">{name}</span>
    </div>
  )
}

export default function Home() {
  const { lang, t } = useLang()
  const { openCVModal } = useCVModal()
  const heroRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return
      heroRef.current.style.transform = `translateY(${window.scrollY * 0.12}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="home">

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__bg" ref={heroRef} />
        <div className="container hero__content">
          <div className="hero__left">
            <h1 className="hero__name animate-fade-up" style={{ animationDelay: '0.1s' }}>
              {t('home.greeting')}<br />
              <span className="hero__name-accent">{personalInfo.name}</span>
            </h1>
            <p className="hero__title animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <span className="hero__title-mono">&lt;</span>
              {personalInfo.title[lang]}
              <span className="hero__title-mono">/&gt;</span>
            </p>
            <p className="hero__bio animate-fade-up" style={{ animationDelay: '0.3s' }}>
              {personalInfo.bio[lang]}
            </p>
            <div className="hero__actions animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/projects" className="btn btn-primary">
                {t('home.viewProjects')} <FaArrowRight />
              </Link>
              <a href={`mailto:${personalInfo.email}`} className="btn btn-outline">
                {t('home.contactMe')}
              </a>
            </div>
            <div className="hero__socials animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="hero__social" aria-label="GitHub"><FaGithub /></a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="hero__social" aria-label="LinkedIn"><FaLinkedin /></a>
              <button className="btn btn-outline hero__cv-btn" onClick={openCVModal}>
                <FaDownload /> {t('home.downloadCV')}
              </button>
            </div>
          </div>

          <div className="hero__right animate-fade-up" style={{ animationDelay: '0.25s' }}>
            <div className="hero__photo-wrap">
              <div className="hero__photo-ring" />
              <div className="hero__photo-ring hero__photo-ring--2" />
              <img src={personalInfo.photo} alt={personalInfo.name} className="hero__photo"
                onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }} />
              <div className="hero__photo-fallback" style={{ display: 'none' }}>
                {personalInfo.name.charAt(0)}
              </div>
            </div>
          </div>
          <br />
        </div>
        <div className="hero__scroll">
          <span className="hero__scroll-line" />
          <span className="hero__scroll-text">scroll</span>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="section tech-section">
        <div className="container">
          <p className="section-label">{t('home.techLabel')}</p>
          <h2 className="section-title">
            {lang === 'en'
              ? <>Technologies &amp; <span className="accent-blue">Tools</span></>
              : <>Tecnologías y <span className="accent-blue">Herramientas</span></>}
          </h2>
          <div className="divider" />
          <div className="tech-grid">
            {techStack.map(cat => (
              <div key={cat.category.en} className="tech-category">
                <h3 className="tech-category__title" style={{ color: cat.color }}>
                  {cat.category[lang]}
                </h3>
                <div className="tech-category__items">
                  {sortAlternating(cat.items).map(item => (
                    <TechItem key={item.name} {...item} color={cat.color} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IWATA QUOTE ===== */}
      <section className="quote-section">
        <div className="container">
          <blockquote className="iwata-quote">
            <p className="iwata-quote__text">{t('home.iwataQuote')}</p>
            <cite className="iwata-quote__author">{t('home.iwataAuthor')}</cite>
          </blockquote>
        </div>
      </section>

      {/* ===== GAMER CTA ===== */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            {/* Neon rainbow controllers floating in background */}
            <NeonControllers />

            <div className="cta-box__glow" />
            <div className="cta-box__controller" aria-hidden="true">🎮</div>
            <p className="section-label">{t('home.ctaLabel')}</p>
            <h2 className="cta-box__title">{t('home.ctaTitle')}</h2>
            <p className="cta-box__desc">{t('home.ctaDesc')}</p>
            <div className="cta-box__actions">
              <a href={`https://discord.com/users/${personalInfo.discord}`}
                target="_blank" rel="noopener noreferrer" className="btn btn-discord">
                <FaDiscord /> {t('home.discordBtn')}
              </a>
            </div>
            <p className="cta-box__discord-tag">
              <span className="cta-box__discord-icon"><FaDiscord /></span>
              {'SorJor'}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
