import useInView from '../../hooks/useInView'
import styles from './Brands.module.css'

import studioCoka1 from '../../assets/Nature Home/Front View with Tree shade.jpeg'
import studioCoka2 from '../../assets/Nature Home/Family Sitting Room 2.jpeg'
import studioCoka3 from '../../assets/Nature Home 2/1.png'
import community1 from '../../assets/Community Centre Project/IMG_2041 2.PNG'
import community2 from '../../assets/Community Centre Project/IMG_2102 2.PNG'
import crystalEditorial from '../../assets/Crystal_s pictures/Earthy Editorial Portrait by African Architecture.png'
import crystalPodcast from '../../assets/Crystal_s pictures/Cozy Architecture Podcast Workspace.png'

const brands = [
  {
    name: 'Studio COKA',
    category: 'Architecture & Design',
    desc: 'An architecture, interior design and construction studio focused on thoughtful, climate-responsive design that responds to place, people, and purpose.',
    tag: 'Architecture',
    color: '#C86D51',
    href: '#',
    image: studioCoka1,
    imageAlt: 'Studio COKA — Nature Home project exterior',
  },
  {
    name: 'ELEvated',
    category: 'Furniture & Product Design',
    desc: 'A contemporary furniture and product design brand creating functional, well-designed objects rooted in African context, materials, and ideas.',
    tag: 'Design',
    color: '#D4A373',
    href: '#',
    image: studioCoka2,
    imageAlt: 'ELEvated — contemporary interior design',
  },
  {
    name: 'The Effective Architect',
    category: 'Education & Media',
    desc: 'An architecture education and media platform helping architects and built-environment professionals learn, grow, and build better careers.',
    tag: 'Education',
    color: '#334155',
    href: '#',
    image: crystalPodcast,
    imageAlt: 'The Effective Architect — podcast and education workspace',
  },
  {
    name: 'AKO Alliance',
    category: 'Access & Opportunity',
    desc: 'An initiative focused on expanding access to education and creating meaningful opportunities for children and young people.',
    tag: 'Community',
    color: '#2B2D27',
    href: '#',
    image: community1,
    imageAlt: 'AKO Alliance — community project',
  },
  {
    name: 'Speaking Engagements',
    category: 'Talks & Conversations',
    desc: 'Talks and engagements around architecture, climate-responsive design, African cities, entrepreneurship, and the built environment.',
    tag: 'Speaking',
    color: '#B85D33',
    href: '#speaking',
    image: community2,
    imageAlt: 'Crystal Kizor speaking engagement',
  },
  {
    name: 'Alive and Free',
    category: 'Faith & Youth',
    desc: 'A Christian youth movement helping young people walk in truth, healing, freedom, identity, purpose, and life in Christ.',
    tag: 'Faith',
    color: '#6B7280',
    href: '#',
    image: studioCoka3,
    imageAlt: 'Alive and Free — community and faith',
  },
  {
    name: 'Crystal Kizor',
    category: 'Research, Writing & Media',
    desc: 'Architecture, research, writing, media, and ideas that sit directly under the personal brand — the connective tissue across all her work.',
    tag: 'Personal',
    color: '#C86D51',
    href: '#',
    image: crystalEditorial,
    imageAlt: 'Crystal Kizor — architect and creator',
  },
]

export default function Brands() {
  const [headerRef, headerIn] = useInView()
  const [gridRef, gridIn] = useInView({ threshold: 0.05 })

  return (
    <section id="brands" className={styles.section}>
      <div
        ref={headerRef}
        className={`${styles.header} fade-up ${headerIn ? 'visible' : ''}`}
      >
        <p className={styles.eyebrow}>The Ecosystem</p>
        <h2 className={styles.heading}>
          Seven initiatives.<br /><em>One vision.</em>
        </h2>
        <p className={styles.sub}>
          Each brand is distinct — but together they form a coherent body of work
          driven by design, education, and human flourishing.
        </p>
      </div>

      <div ref={gridRef} className={styles.grid}>
        {brands.map((b, i) => (
          <a
            key={b.name}
            href={b.href}
            className={`${styles.card} fade-up ${gridIn ? 'visible' : ''} delay-${Math.min(i + 1, 7)}`}
            style={{ '--card-accent': b.color }}
          >
            <div className={styles.cardImage}>
              <img src={b.image} alt={b.imageAlt} className={styles.cardImg} />
            </div>
            <div className={styles.cardTop}>
              <span className={styles.tag}>{b.tag}</span>
              <span className={styles.index}>0{i + 1}</span>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.category}>{b.category}</p>
              <h3 className={styles.name}>{b.name}</h3>
              <p className={styles.desc}>{b.desc}</p>
            </div>
            <div className={styles.cardFooter}>
              <span>Learn more <span aria-hidden>→</span></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
