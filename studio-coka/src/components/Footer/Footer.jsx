import useInView from '../../hooks/useInView'
import styles from './Footer.module.css'

const brands = [
  { name: 'Studio COKA', href: '#' },
  { name: 'ELEvated', href: '#' },
  { name: 'The Effective Architect', href: '#' },
  { name: 'AKO Alliance', href: '#' },
  { name: 'Alive and Free', href: '#' },
  { name: 'Speaking', href: '#speaking' },
  { name: 'Writing & Research', href: '#' },
]

export default function Footer() {
  const [ref, inView] = useInView()

  return (
    <footer className={styles.footer}>
      <div
        ref={ref}
        className={`${styles.inner} fade-up ${inView ? 'visible' : ''}`}
      >
        <div className={styles.top}>
          <div className={styles.brand}>
            <p className={styles.name}>Crystal Kizor</p>
            <p className={styles.tagline}>Architect · Designer · Entrepreneur · Speaker · Creator</p>
          </div>
          <nav className={styles.nav}>
            {brands.map(b => (
              <a key={b.name} href={b.href}>{b.name}</a>
            ))}
          </nav>
        </div>
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Crystal Kizor. All rights reserved.</p>
          <p className={styles.built}>Designed &amp; built with intention.</p>
        </div>
      </div>
    </footer>
  )
}
