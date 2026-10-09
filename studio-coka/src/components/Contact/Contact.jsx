import useInView from '../../hooks/useInView'
import styles from './Contact.module.css'
import contactImg from '../../assets/Crystal_s pictures/Confident Designer in Studio Workspace.png'

const paths = [
  {
    type: 'Architect / Designer',
    action: 'Explore TEA',
    desc: 'Resources, courses, and community for built-environment professionals.',
    href: '#',
  },
  {
    type: 'Client / Collaborator',
    action: 'Work with Studio COKA',
    desc: 'Architecture, interior design, and construction projects.',
    href: '#',
  },
  {
    type: 'Event Organiser',
    action: 'Book a Speaking Engagement',
    desc: 'Invite Crystal to speak at your conference, panel, or event.',
    href: '#',
  },
  {
    type: 'Young Person / Supporter',
    action: 'Alive and Free & AKO Alliance',
    desc: 'Faith, identity, and access to education for young people and those who champion them.',
    href: '#',
  },
  {
    type: 'Curious Visitor',
    action: 'Follow the Journey',
    desc: "Stay connected with Crystal's work, writing, and ideas.",
    href: '#',
  },
]

export default function Contact() {
  const [topRef, topIn] = useInView()
  const [pathsRef, pathsIn] = useInView({ threshold: 0.08 })
  const [directRef, directIn] = useInView()

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div
          ref={topRef}
          className={`${styles.top} fade-up ${topIn ? 'visible' : ''}`}
        >
          <p className={styles.eyebrow}>Connect</p>
          <h2 className={styles.heading}>
            Where do you<br /><em>want to go?</em>
          </h2>
          <p className={styles.sub}>
            Depending on who you are, there is a place for you in this ecosystem.
          </p>
        </div>

        <div ref={pathsRef} className={styles.paths}>
          {paths.map((p, i) => (
            <a
              key={p.type}
              href={p.href}
              className={`${styles.path} fade-up ${pathsIn ? 'visible' : ''} delay-${i + 1}`}
            >
              <p className={styles.pathType}>{p.type}</p>
              <h3 className={styles.pathAction}>{p.action} <span aria-hidden>→</span></h3>
              <p className={styles.pathDesc}>{p.desc}</p>
            </a>
          ))}
        </div>

        <div
          ref={directRef}
          className={`${styles.direct} fade-up delay-1 ${directIn ? 'visible' : ''}`}
        >
          <p>Or reach out directly</p>
          <a href="mailto:hello@crystalkizor.com" className={styles.email}>
            hello@crystalkizor.com
          </a>
        </div>
      </div>
    </section>
  )
}
