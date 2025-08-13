import styles from "./styles/RestaurantOwnerSection.module.scss";

export default function RestaurantOwnerSection() {
  return (
    <section className={styles.ownerRoot}>
      <div className={`container ${styles.ownerContainer}`}>
        <div
          className={`d-grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-16 sm:gap-10 place-items-center ${styles.ownerGrid}`}
        >
          <div
            className={`${styles.ownerRight} d-flex flex-column items-center md:items-start`}
          >
            <h2 className={styles.ownerHeading}>
              Transform Your Restaurant Business
            </h2>
            <p className={styles.ownerDescription}>
              Join thousands of successful restaurant owners who have
              revolutionized their operations with our innovative platform.
              Streamline your workflow, boost customer satisfaction, and
              increase your revenue with cutting-edge restaurant management
              solutions.
            </p>
            <button className={`${styles.ownerCtaButton} btn btn-primary`}>
              Get Started Today
              <figure>
                <img src="/Images/Expand_right_double.png" alt="Arrow" />
              </figure>
            </button>
          </div>
          <div
            className={`${styles.ownerLeft} d-flex items-center justify-center md:justify-end`}
          >
            <figure className={styles.ownerFigure}>
              <img
                src="/Images/section_3.png"
                alt="Restaurant success metrics"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
