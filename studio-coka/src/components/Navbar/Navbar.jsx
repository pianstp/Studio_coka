import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#brands' },
  { label: 'Speaking', href: '#speaking' },
  { label: 'Connect', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <a href="#hero" className={styles.logo}>Crystal Kizor</a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.x : ''}></span>
          <span className={menuOpen ? styles.x : ''}></span>
          <span className={menuOpen ? styles.x : ''}></span>
        </button>
      </nav>
    </header>
  )
}
