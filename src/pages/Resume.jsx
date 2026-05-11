import {
  FaBriefcase, FaGraduationCap, FaCertificate,
  FaCode, FaDownload, FaArrowUpRightFromSquare,
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs,
  FaPython, FaJava, FaGitAlt, FaDocker,
} from 'react-icons/fa6'
import {
  SiJavascript, SiPostgresql, SiMongodb, SiMysql,
  SiDjango, SiFastapi, SiAngular, SiFirebase,
  SiGitlab, SiPostman, SiPandas, SiJupyter,
  SiAndroidstudio, SiSpring, SiBootstrap, SiJira, SiRedis,
} from 'react-icons/si'
import { personalInfo, experience, education, certifications, techStack } from '../data/portfolio'
import { useLang } from '../context/LanguageContext'
import { useCVModal } from '../context/CVModalContext'
import './Resume.css'

const iconMap = {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava, FaGitAlt, FaDocker,
  SiJavascript, SiPostgresql, SiMongodb, SiMysql, SiDjango, SiFastapi,
  SiAngular, SiFirebase, SiGitlab, SiPostman, SiPandas, SiJupyter,
  SiAndroidstudio, SiSpring, SiBootstrap, SiJira, SiRedis,
}

export default function Resume() {
  const { lang, t } = useLang()
  const { openCVModal } = useCVModal()

  const softSkillsEN = ['Agile / Scrum', 'Teamwork', 'Assertive communication', 'Problem solving', 'Self-directed learning', 'Results-oriented']
  const softSkillsES = ['Metodologías ágiles (Scrum)', 'Trabajo en equipo', 'Comunicación asertiva', 'Resolución de problemas', 'Aprendizaje autónomo', 'Orientado a resultados']

  return (
    <div className="resume-page">
      <div className="container">

        <div className="resume-header">
          <div>
            <p className="section-label">{t('resume.pageLabel')}</p>
            <h1 className="section-title">
              {t('resume.pageTitle').split(' ').slice(0, -1).join(' ')}{' '}
              <span className="accent-blue">{t('resume.pageTitle').split(' ').slice(-1)}</span>
            </h1>
            <p className="resume-header__desc">{personalInfo.bio[lang]}</p>
          </div>
          <button className="btn btn-outline resume-header__download" onClick={openCVModal}>
            <FaDownload /> {t('resume.downloadCV')}
          </button>
        </div>

        <div className="resume-layout">
          <div className="resume-main">

            {/* Experience */}
            <section className="resume-section">
              <h2 className="resume-section__title">
                <FaBriefcase className="resume-section__icon" />
                {t('resume.experience')}
              </h2>
              <div className="timeline">
                {experience.map(job => (
                  <div key={job.id} className="timeline-item">
                    <div className="timeline-item__marker" />
                    <div className="timeline-item__content card">
                      <div className="timeline-item__header">
                        <div>
                          <h3 className="timeline-item__role">{job.role[lang]}</h3>
                          <p className="timeline-item__company">
                            {job.company}
                            <span className="timeline-item__location"> · {job.location}</span>
                          </p>
                        </div>
                        <div className="timeline-item__meta">
                          <span className="tag">{job.periodStart} – {job.current ? t('resume.present') : job.periodEnd}</span>
                          <span className="tag" style={{ marginTop: '0.3rem' }}>{job.type[lang]}</span>
                        </div>
                      </div>
                      <ul className="timeline-item__bullets">
                        {job.bullets[lang].map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                      {job.achievements && (
                        <>
                          <p className="timeline-item__section-label">{t('resume.achievements')}</p>
                          <ul className="timeline-item__bullets timeline-item__bullets--achievements">
                            {job.achievements[lang].map((a, i) => <li key={i}>{a}</li>)}
                          </ul>
                        </>
                      )}
                      <div className="timeline-item__tech">
                        {job.tech.map(tech => <span key={tech} className="tag">{tech}</span>)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="resume-section">
              <h2 className="resume-section__title">
                <FaGraduationCap className="resume-section__icon" />
                {t('resume.education')}
              </h2>
              <div className="timeline">
                {education.map(edu => {
                  const institution = typeof edu.institution === 'object' ? edu.institution[lang] : edu.institution
                  const period = typeof edu.period === 'object' ? edu.period[lang] : edu.period
                  return (
                    <div key={edu.id} className="timeline-item">
                      <div className="timeline-item__marker timeline-item__marker--edu" />
                      <div className="timeline-item__content card">
                        <div className="timeline-item__header">
                          <div>
                            <h3 className="timeline-item__role">{edu.degree[lang]}</h3>
                            <p className="timeline-item__company">
                              {institution}
                              <span className="timeline-item__location"> · {edu.location}</span>
                            </p>
                          </div>
                          <span className="tag">{period}</span>
                        </div>
                        {edu.graduationProject && (
                          <p className="edu-grad-project">
                            <span className="edu-grad-project__label">🏅 {t('resume.graduation')}:</span>
                            {' '}{edu.graduationProject[lang]}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Certifications */}
            <section className="resume-section">
              <h2 className="resume-section__title">
                <FaCertificate className="resume-section__icon" />
                {t('resume.certifications')}
              </h2>
              <div className="certs-grid">
                {certifications.map((cert, i) => (
                  <a key={i} href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-card card">
                    <div className="cert-card__year">{cert.year}</div>
                    <h4 className="cert-card__name">{cert.name[lang]}</h4>
                    <p className="cert-card__issuer">{cert.issuer}</p>
                    {cert.url !== '#' && <FaArrowUpRightFromSquare className="cert-card__arrow" />}
                  </a>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="resume-sidebar">
            <div className="sidebar-block">
              <h3 className="sidebar-block__title"><FaCode /> {t('resume.techSkills')}</h3>
              <div className="skills-list">
                {techStack.flatMap(cat => cat.items).map(item => {
                  const Icon = item.icon ? iconMap[item.icon] : null
                  return (
                    <span key={item.name} className="skill-chip">
                      {Icon && <Icon style={{ fontSize: '0.72rem', flexShrink: 0 }} />}
                      {item.name}
                    </span>
                  )
                })}
              </div>
            </div>
            <div className="sidebar-block">
              <h3 className="sidebar-block__title">💡 {t('resume.softSkills')}</h3>
              <ul className="soft-skills">
                {(lang === 'en' ? softSkillsEN : softSkillsES).map(s => (
                  <li key={s} className="soft-skills__item">
                    <span className="soft-skills__dot" />{s}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
