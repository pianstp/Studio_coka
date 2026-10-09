import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

import heroPrimary from '../../assets/Crystal_s pictures/Poised in a Warm Design Studio.png'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

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
        <img
          src={heroPrimary}
          alt="Crystal Kizor — Architect and Designer"
          className={styles.heroImg}
          loading="eager"
          fetchpriority="high"
        />
        <div className={styles.badge}>
          <span>07</span>
          <small>Initiatives</small>
        </div>
      </div>
    </section>
  )
}
