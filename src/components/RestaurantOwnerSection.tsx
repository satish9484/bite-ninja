import styles from "./styles/RestaurantOwnerSection.module.scss";

export default function RestaurantOwnerSection() {
  return (
    <section className={styles.section3}>
      <div className={styles.container}>
        <div className={styles.rootSection2}>
          <div className={styles.section2Right}>
            <h2 className={styles.heading}>
              Transform Your Restaurant Business
            </h2>
            <p className={styles.description}>
              Join thousands of successful restaurant owners who have
              revolutionized their operations with our innovative platform.
              Streamline your workflow, boost customer satisfaction, and
              increase your revenue with cutting-edge restaurant management
              solutions.
            </p>
            <button className={styles.btnLetsGo}>
              Get Started Today
              <figure>
                <img src="/Images/Expand_right_double.png" alt="Arrow" />
              </figure>
            </button>
          </div>
          <div className={styles.section3Left}>
            <figure className={styles.section2LeftFigure2}>
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
