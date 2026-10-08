import useInView from '../../hooks/useInView'
import styles from './About.module.css'
import studioPortrait from '../../assets/Crystal_s pictures/Architectural Designer in Her Studio.png'

const pillars = [
  { label: 'Architecture', desc: 'Climate-responsive, context-driven design' },
  { label: 'Education', desc: 'Empowering the next generation of builders' },
  { label: 'Entrepreneurship', desc: 'Building brands with purpose and vision' },
  { label: 'Community', desc: 'Faith, youth, and human flourishing' },
]

export default function About() {
  const [leftRef, leftIn] = useInView()
  const [rightRef, rightIn] = useInView()

  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div
          ref={leftRef}
          className={`${styles.left} fade-up ${leftIn ? 'visible' : ''}`}
        >
          <p className={styles.eyebrow}>The Person Behind the Work</p>
          <h2 className={styles.heading}>
            One person.<br />
            <em>Many dimensions.</em>
          </h2>
          <p className={styles.body}>
            Crystal Kizor is an architect, designer, entrepreneur, speaker, researcher,
            and creator. Her work spans the built environment, education, product design,
            media, and faith — united by a single thread: the belief that thoughtful
            creation changes lives.
          </p>
          <p className={styles.body}>
            Whether she is designing a building, mentoring an architect, launching a
            furniture brand, or speaking on a stage — Crystal brings the same rigour,
            warmth, and conviction to everything she builds.
          </p>
          <a href="#contact" className={styles.link}>
            Work with Crystal <span aria-hidden>→</span>
          </a>
        </div>

        <div ref={rightRef} className={styles.right}>
          <div className={`${styles.portraitWrap} fade-up ${rightIn ? 'visible' : ''} delay-1`}>
            <img
              src={studioPortrait}
              alt="Crystal Kizor in her architectural studio"
              className={styles.portrait}
            />
          </div>
          <div className={styles.pillars}>
            {pillars.map((p, i) => (
            <div
              key={p.label}
              className={`${styles.pillar} fade-up ${rightIn ? 'visible' : ''} delay-${i + 1}`}
            >
              <h3>{p.label}</h3>
              <p>{p.desc}</p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
