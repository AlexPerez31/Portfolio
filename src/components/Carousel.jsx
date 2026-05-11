import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import './Carousel.css'

export default function Carousel({ images = [], isMobile = false }) {
  const [current, setCurrent] = useState(0)
  const [imgErrors, setImgErrors] = useState({})

  if (!images.length) return null

  const prev = () => setCurrent(i => (i - 1 + images.length) % images.length)
  const next = () => setCurrent(i => (i + 1) % images.length)

  const handleError = (idx) => setImgErrors(prev => ({ ...prev, [idx]: true }))

  return (
    <div className={`carousel${isMobile ? ' carousel--mobile' : ''}`}>
      <div className="carousel__track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((src, idx) => (
          <div key={idx} className="carousel__slide">
            {!imgErrors[idx] ? (
              <img
                src={src}
                alt={`Screenshot ${idx + 1}`}
                className="carousel__img"
                onError={() => handleError(idx)}
                loading="lazy"
              />
            ) : (
              <div className="carousel__fallback">
                <span>{idx + 1}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button className="carousel__btn carousel__btn--prev" onClick={prev} aria-label="Previous">
            <FaChevronLeft />
          </button>
          <button className="carousel__btn carousel__btn--next" onClick={next} aria-label="Next">
            <FaChevronRight />
          </button>

          <div className="carousel__dots">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`carousel__dot${idx === current ? ' carousel__dot--active' : ''}`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
