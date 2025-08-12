import styles from "./styles/BecomeNinjaSection.module.scss";

export default function BecomeNinjaSection() {
  return (
    <section className={styles.section3}>
      <div className={styles.container}>
        <div className={styles.rootSection2}>
          <div className={styles.section3Left}>
            <figure className={styles.section2LeftFigure2}>
              <img src="/Images/section_3.png" alt="Ninja skills showcase" />
            </figure>
          </div>
          <div className={styles.section2Right}>
            <h2 className={styles.heading}>Become a Ninja</h2>
            <p className={styles.description}>
              Master the ancient arts and unlock your hidden potential. Join our
              elite training program where discipline meets innovation.
              Transform yourself into a modern-day ninja with cutting-edge
              techniques and traditional wisdom passed down through generations.
            </p>
            <button className={styles.btnLetsGo}>
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
