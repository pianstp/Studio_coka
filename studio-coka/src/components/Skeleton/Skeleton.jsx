import styles from './Skeleton.module.css'

export function SkeletonBlock({ width = '100%', height = '1rem', rounded = false, style = {} }) {
  return (
    <div
      className={`${styles.block} ${rounded ? styles.rounded : ''}`}
      style={{ width, height, ...style }}
    />
  )
}

export function SkeletonHero() {
  return (
    <div className={styles.heroWrap}>
      <div className={styles.heroLeft}>
        <SkeletonBlock width="40%" height="0.75rem" />
        <SkeletonBlock width="90%" height="4rem" style={{ marginTop: '1.25rem' }} />
        <SkeletonBlock width="75%" height="4rem" style={{ marginTop: '0.5rem' }} />
        <SkeletonBlock width="85%" height="1rem" style={{ marginTop: '1.5rem' }} />
        <SkeletonBlock width="70%" height="1rem" style={{ marginTop: '0.5rem' }} />
        <SkeletonBlock width="60%" height="1rem" style={{ marginTop: '0.5rem' }} />
        <div className={styles.heroBtns}>
          <SkeletonBlock width="160px" height="2.75rem" />
          <SkeletonBlock width="140px" height="2.75rem" />
        </div>
      </div>
      <div className={styles.heroRight}>
        <SkeletonBlock width="100%" height="100%" />
      </div>
    </div>
  )
}

export function SkeletonAbout() {
  return (
    <div className={styles.aboutWrap}>
      <div className={styles.aboutLeft}>
        <SkeletonBlock width="30%" height="0.75rem" />
        <SkeletonBlock width="70%" height="3rem" style={{ marginTop: '1rem' }} />
        <SkeletonBlock width="55%" height="3rem" style={{ marginTop: '0.5rem' }} />
        <SkeletonBlock width="100%" height="1rem" style={{ marginTop: '1.5rem' }} />
        <SkeletonBlock width="95%" height="1rem" style={{ marginTop: '0.5rem' }} />
        <SkeletonBlock width="80%" height="1rem" style={{ marginTop: '0.5rem' }} />
        <SkeletonBlock width="100%" height="1rem" style={{ marginTop: '1rem' }} />
        <SkeletonBlock width="90%" height="1rem" style={{ marginTop: '0.5rem' }} />
      </div>
      <div className={styles.aboutRight}>
        {[0, 1, 2, 3].map(i => (
          <div key={i} className={styles.pillarSkel}>
            <SkeletonBlock width="60%" height="1.35rem" />
            <SkeletonBlock width="85%" height="0.82rem" style={{ marginTop: '0.5rem' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function SkeletonBrands() {
  return (
    <div className={styles.brandsWrap}>
      <div className={styles.brandsHeader}>
        <SkeletonBlock width="25%" height="0.75rem" />
        <SkeletonBlock width="50%" height="3rem" style={{ marginTop: '1rem' }} />
        <SkeletonBlock width="40%" height="3rem" style={{ marginTop: '0.5rem' }} />
      </div>
      <div className={styles.brandsGrid}>
        {[0, 1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className={styles.cardSkel}>
            <div className={styles.cardSkelTop}>
              <SkeletonBlock width="60px" height="1.2rem" />
              <SkeletonBlock width="24px" height="0.85rem" />
            </div>
            <SkeletonBlock width="40%" height="0.7rem" style={{ marginTop: '1rem' }} />
            <SkeletonBlock width="75%" height="1.6rem" style={{ marginTop: '0.5rem' }} />
            <SkeletonBlock width="100%" height="0.875rem" style={{ marginTop: '0.75rem' }} />
            <SkeletonBlock width="90%" height="0.875rem" style={{ marginTop: '0.4rem' }} />
            <SkeletonBlock width="70%" height="0.875rem" style={{ marginTop: '0.4rem' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function SkeletonSpeaking() {
  return (
    <div className={styles.speakingWrap}>
      <div className={styles.speakingLeft}>
        <SkeletonBlock width="30%" height="0.75rem" />
        <SkeletonBlock width="65%" height="3rem" style={{ marginTop: '1rem' }} />
        <SkeletonBlock width="50%" height="3rem" style={{ marginTop: '0.5rem' }} />
        <SkeletonBlock width="100%" height="1rem" style={{ marginTop: '1.5rem' }} />
        <SkeletonBlock width="90%" height="1rem" style={{ marginTop: '0.5rem' }} />
        <SkeletonBlock width="80%" height="1rem" style={{ marginTop: '0.5rem' }} />
        <SkeletonBlock width="150px" height="2.75rem" style={{ marginTop: '2rem' }} />
      </div>
      <div className={styles.speakingRight}>
        <SkeletonBlock width="30%" height="0.7rem" />
        {[0, 1, 2, 3, 4, 5].map(i => (
          <div key={i} className={styles.topicSkel}>
            <SkeletonBlock width="6px" height="6px" rounded style={{ flexShrink: 0 }} />
            <SkeletonBlock width={`${60 + (i % 3) * 12}%`} height="0.95rem" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function SkeletonContact() {
  return (
    <div className={styles.contactWrap}>
      <SkeletonBlock width="20%" height="0.75rem" />
      <SkeletonBlock width="55%" height="3rem" style={{ marginTop: '1rem' }} />
      <SkeletonBlock width="40%" height="3rem" style={{ marginTop: '0.5rem' }} />
      <div className={styles.pathsGrid}>
        {[0, 1, 2, 3].map(i => (
          <div key={i} className={styles.pathSkel}>
            <SkeletonBlock width="50%" height="0.65rem" />
            <SkeletonBlock width="80%" height="1.3rem" style={{ marginTop: '0.75rem' }} />
            <SkeletonBlock width="100%" height="0.82rem" style={{ marginTop: '0.75rem' }} />
            <SkeletonBlock width="85%" height="0.82rem" style={{ marginTop: '0.4rem' }} />
          </div>
        ))}
      </div>
    </div>
  )
}
