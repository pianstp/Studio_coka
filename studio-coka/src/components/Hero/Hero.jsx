import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

import slide1 from '../../assets/Crystal_s pictures/Poised in a Warm Design Studio.png'
import slide2 from '../../assets/Crystal_s pictures/Confident Designer in Studio Workspace.png'
import slide3 from '../../assets/Crystal_s pictures/Architectural Designer in Her Studio.png'
import slide4 from '../../assets/Crystal_s pictures/Earthy Editorial Portrait by African Architecture.png'
import slide5 from '../../assets/Crystal_s pictures/Cozy Architecture Podcast Workspace.png'

const slides = [slide1, slide2, slide3, slide4, slide5]
const alts = [
  'Crystal Kizor — Poised in a warm design studio',
  'Crystal Kizor — Confident designer in studio workspace',
  'Crystal Kizor — Architectural designer in her studio',
  'Crystal Kizor — Earthy editorial portrait',
  'Crystal Kizor — Cozy architecture podcast workspace',
]

const INTERVAL = 4500

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(null)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(c => {
        setPrev(c)
        return (c + 1) % slides.length
      })
    }, INTERVAL)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (prev === null) return
    const t = setTimeout(() => setPrev(null), 900)
    return () => clearTimeout(t)
  }, [prev])

  const goTo = (i) => {
    if (i === current) return
    setPrev(current)
    setCurrent(i)
  }

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <p className={`${styles.eyebrow} fade-up ${loaded ? 'visible' : ''}`}>
          Architect · Designer · Entrepreneur · Speaker · Creator
        </p>
        <h1 className={`${styles.headline} fade-up delay-1 ${loaded ? 'visible' : ''}`}>
          Crystal Kizor<br />
          <em>builds worlds.</em>
        </h1>
        <p className={`${styles.sub} fade-up delay-2 ${loaded ? 'visible' : ''}`}>
          From buildings to brands, education to furniture, faith communities
          to the African city — Crystal creates work that is thoughtful,
          climate-responsive, and built to last.
        </p>
        <div className={`${styles.ctas} fade-up delay-3 ${loaded ? 'visible' : ''}`}>
          <a href="#brands" className={styles.btnPrimary}>See What She Builds</a>
          <a href="#about" className={styles.btnGhost}>Who is Crystal?</a>
        </div>
      </div>

      <div className={`${styles.imageWrap} fade-in delay-2 ${loaded ? 'visible' : ''}`}>
        {/* all slides rendered eagerly so browser fetches them all upfront */}
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={alts[i]}
            loading="eager"
            fetchpriority={i === 0 ? 'high' : 'low'}
            className={[
              styles.heroImg,
              i === current ? styles.slideIn : '',
              i === prev ? styles.slideOut : '',
              i !== current && i !== prev ? styles.slideHidden : '',
            ].join(' ')}
          />
        ))}

        <div className={styles.badge}>
          <span>07</span>
          <small>Initiatives</small>
        </div>

        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
