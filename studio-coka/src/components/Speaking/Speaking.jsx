import useInView from '../../hooks/useInView'
import styles from './Speaking.module.css'
import speakingImg from '../../assets/Crystal_s pictures/Cozy Architecture Podcast Workspace.png'

const topics = [
  'Architecture & Climate-Responsive Design',
  'African Cities & the Built Environment',
  'Design Entrepreneurship',
  'Women in Architecture',
  'Creative Practice & Career Building',
  'Faith, Purpose & Identity',
]

export default function Speaking() {
  const [contentRef, contentIn] = useInView()
  const [topicsRef, topicsIn] = useInView()

  return (
    <section id="speaking" className={styles.section}>
      <div className={styles.inner}>
        <div
          ref={contentRef}
          className={`${styles.content} fade-up ${contentIn ? 'visible' : ''}`}
        >
          <p className={styles.eyebrow}>Speaking</p>
          <h2 className={styles.heading}>
            Ideas worth<br /><em>sharing.</em>
          </h2>
          <p className={styles.body}>
            Crystal speaks at conferences, universities, panels, and events on
            architecture, design, entrepreneurship, African cities, and the intersection
            of faith and creative practice. Her talks are grounded in lived experience
            and delivered with clarity and conviction.
          </p>
          <a href="#contact" className={styles.btn}>Book Crystal to Speak</a>
        </div>

        <div
          ref={topicsRef}
          className={`${styles.topics} fade-up delay-2 ${topicsIn ? 'visible' : ''}`}
        >
          <div className={styles.speakingImgWrap}>
            <img
              src={speakingImg}
              alt="Crystal Kizor — architecture podcast and speaking workspace"
              className={styles.speakingImg}
            />
          </div>
          <p className={styles.topicsLabel}>Topics include</p>
          <ul className={styles.list}>
            {topics.map(t => (
              <li key={t} className={styles.item}>
                <span className={styles.dot} aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
