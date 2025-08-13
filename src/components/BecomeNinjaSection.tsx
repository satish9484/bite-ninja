import styles from "./styles/BecomeNinjaSection.module.scss";

export default function BecomeNinjaSection() {
  return (
    <section className={styles.ninjaRoot}>
      <div className={`container ${styles.ninjaContainer}`}>
        <div
          className={`d-grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-16 sm:gap-10 ${styles.ninjaGrid}`}
        >
          <div
            className={`${styles.ninjaLeft} d-flex items-center justify-start md:justify-center`}
          >
            <figure className={styles.ninjaFigure}>
              <img src="/Images/section_3.png" alt="Ninja skills showcase" />
            </figure>
          </div>
          <div
            className={`${styles.ninjaRight} d-flex flex-column items-center md:items-start`}
          >
            <h2 className={styles.ninjaHeading}>Become a Ninja</h2>
            <p className={styles.ninjaDescription}>
              Master the ancient arts and unlock your hidden potential. Join our
              elite training program where discipline meets innovation.
              Transform yourself into a modern-day ninja with cutting-edge
              techniques and traditional wisdom passed down through generations.
            </p>
            <button className={`${styles.ninjaCtaButton} btn btn-primary`}>
              Start Your Journey
              <figure>
                <img src="/Images/Expand_right_double.png" alt="Arrow" />
              </figure>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
