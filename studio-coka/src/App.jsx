import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Brands from './components/Brands/Brands'
import Speaking from './components/Speaking/Speaking'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import {
  SkeletonHero,
  SkeletonAbout,
  SkeletonBrands,
  SkeletonSpeaking,
  SkeletonContact,
} from './components/Skeleton/Skeleton'
import styles from './App.module.css'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // start fade-out at 1.4s, unmount skeleton at 1.8s
    const fadeTimer = setTimeout(() => setFadeOut(true), 1400)
    const doneTimer = setTimeout(() => setLoading(false), 1800)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(doneTimer)
    }
  }, [])

  if (loading) {
    return (
      <div className={`${styles.skeletonPage} ${fadeOut ? styles.fadeOut : ''}`}>
        <div className={styles.skeletonNav}>
          <div className={styles.skeletonNavInner}>
            <div className={styles.skeletonLogo} />
            <div className={styles.skeletonLinks}>
              {[0, 1, 2, 3].map(i => (
                <div key={i} className={styles.skeletonLink} />
              ))}
            </div>
          </div>
        </div>
        <SkeletonHero />
        <div className={styles.darkSection}>
          <SkeletonAbout />
        </div>
        <div className={styles.altSection}>
          <SkeletonBrands />
        </div>
        <SkeletonSpeaking />
        <div className={styles.altSection}>
          <SkeletonContact />
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Brands />
        <Speaking />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
