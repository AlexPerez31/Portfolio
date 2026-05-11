import { useState } from 'react'
import { FaGithub, FaArrowUpRightFromSquare, FaPlay, FaXmark } from 'react-icons/fa6'
import { projects, personalInfo } from '../data/portfolio'
import { useLang } from '../context/LanguageContext'
import Carousel from '../components/Carousel'
import './Projects.css'

const CATEGORIES = {
  en: ['All', 'Full Stack', 'Mobile'],
  es: ['Todos', 'Full Stack', 'Mobile'],
}

function VideoModal({ url, onClose }) {
  const videoId = url?.match(/(?:v=|youtu\.be\/)([^&\s]+)/)?.[1]
  if (!videoId) return null
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close"><FaXmark /></button>
        <div className="modal__video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Project demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

function MobileSingleImage({ src, alt }) {
  const [error, setError] = useState(false)
  return (
    <div className="mobile-img-wrap">
      {!error
        ? <img src={src} alt={alt} className="mobile-img" onError={() => setError(true)} loading="lazy" />
        : <div className="mobile-img-fallback"><span>📱</span></div>
      }
    </div>
  )
}

function ProjectCard({ project, onPlayVideo, lang }) {
  return (
    <article className={`project-card card${project.featured ? ' project-card--featured' : ''}${project.mobile ? ' project-card--mobile' : ''}`}>

      {project.mobile ? (
        <div className="project-card__mobile-media">
          <MobileSingleImage
            src={project.mobileImage || project.images?.[0]}
            alt={project.title}
          />
          {project.video && (
            <div
              className="project-card__video-panel"
              onClick={() => onPlayVideo(project.video)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && onPlayVideo(project.video)}
            >
              <div className="project-card__video-play"><FaPlay /></div>
              <span className="project-card__video-label">
                {lang === 'en' ? 'Watch demo' : 'Ver demo'}
              </span>
            </div>
          )}
        </div>
      ) : (
        <div className="project-card__media">
          <Carousel images={project.images} />
          {project.featured && (
            <span className="project-card__badge">
              ⭐ {lang === 'en' ? 'Featured' : 'Destacado'}
            </span>
          )}
        </div>
      )}

      <div className="project-card__body">
        <div className="project-card__top">
          <span className="tag">{project.category}</span>
        </div>

        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description[lang]}</p>
        <p className="project-card__long-desc">{project.longDescription[lang]}</p>

        <div className="project-card__tech">
          {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
        </div>

        <div className="project-card__links">
          {project.links.github && project.links.github !== '#' && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer"
              className="btn btn-outline project-card__link">
              <FaGithub /> {lang === 'en' ? 'Code' : 'Código'}
            </a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer"
              className="btn btn-primary project-card__link">
              <FaArrowUpRightFromSquare /> Demo
            </a>
          )}
          {project.mobile && project.video && (
            <button className="btn btn-outline project-card__link"
              onClick={() => onPlayVideo(project.video)}>
              <FaPlay /> {lang === 'en' ? 'Watch demo' : 'Ver demo'}
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const { lang, t } = useLang()
  const [activeFilter, setActiveFilter] = useState(0)
  const [videoUrl, setVideoUrl] = useState(null)

  const categories = CATEGORIES[lang]
  const activeLabel = categories[activeFilter]
  const normalizedLabel = activeLabel === 'Todos' ? 'All' : activeLabel

  const filtered = normalizedLabel === 'All'
    ? projects
    : projects.filter(p => p.category === normalizedLabel)

  return (
    <div className="projects-page">
      <div className="container">

        <div className="projects-header">
          <p className="section-label">{t('projects.label')}</p>
          <h1 className="section-title">
            {t('projects.title').split(' ').slice(0, -1).join(' ')}{' '}
            <span className="accent-blue">{t('projects.title').split(' ').slice(-1)}</span>
          </h1>
          <p className="projects-header__desc">{t('projects.desc')}</p>
        </div>

        <div className="filters">
          {categories.map((cat, i) => (
            <button key={cat}
              className={`filter-btn${activeFilter === i ? ' filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(i)}>
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-list">
          {filtered.length > 0
            ? filtered.map(project => (
                <ProjectCard key={project.id} project={project}
                  onPlayVideo={setVideoUrl} lang={lang} />
              ))
            : <div className="projects-empty">
                <p>{lang === 'en' ? 'No projects in this category yet.' : 'No hay proyectos en esta categoría todavía.'}</p>
              </div>
          }
        </div>

        <div className="projects-cta">
          <p className="projects-cta__text">{t('projects.ctaText')}</p>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            className="btn btn-outline">
            <FaGithub /> {t('projects.viewGithub')}
          </a>
        </div>
      </div>

      {videoUrl && <VideoModal url={videoUrl} onClose={() => setVideoUrl(null)} />}
    </div>
  )
}
