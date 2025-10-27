import styles from "./styles/HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.heroRoot}>
      <div className={styles.heroContainer}>
        {/* Left Column - Text Content */}
        <div className={styles.heroLeft}>
          <p className={styles.heroTagline}>Freshness in every bite</p>
          <h1 className={styles.heroTitle}>CHEF'S SPECIAL</h1>
          <p className={styles.heroDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo studio.
          </p>
          <button className={styles.heroButton}>Download Recipe</button>
        </div>

        {/* Right Column - Main Dish Image */}
        <div className={styles.heroRight}>
          <div className={styles.dishCircle}>
            <img
              src="/Images/hero/dish.png"
              alt="Chef's special dish"
              className={styles.dishImage}
            />
          </div>
        </div>

        {/* Decorative Elements - Positioned Absolutely */}
        <img
          src="/Images/hero/leave.png"
          alt=""
          className={`${styles.decorative} ${styles.decorativeLeaf1}`}
        />
        <img
          src="/Images/hero/leave.png"
          alt=""
          className={`${styles.decorative} ${styles.decorativeLeaf2}`}
        />
        <img
          src="/Images/hero/leave.png"
          alt=""
          className={`${styles.decorative} ${styles.decorativeLeaf3}`}
        />
        <img
          src="/Images/hero/Stawbarrypng.png"
          alt=""
          className={`${styles.decorative} ${styles.decorativeStrawberry}`}
        />
        <img
          src="/Images/hero/istockphoto-1338280922-170667a-removebg-preview 1.png"
          alt=""
          className={`${styles.decorative} ${styles.decorativeLemon1}`}
        />
        <img
          src="/Images/hero/istockphoto-1338280922-170667a-removebg-preview 1.png"
          alt=""
          className={`${styles.decorative} ${styles.decorativeLemon2}`}
        />
        <img
          src="/Images/hero/istockphoto-1338280922-170667a-removebg-preview 1.png"
          alt=""
          className={`${styles.decorative} ${styles.decorativeLemon3}`}
        />
        <img
          src="/Images/hero/sushi-chopsticks-27304150-removebg-preview 1.png"
          alt=""
          className={`${styles.decorative} ${styles.decorativeSushi}`}
        />
        <img
          src="/Images/hero/images-removebg-preview 2.png"
          alt=""
          className={`${styles.decorative} ${styles.decorativeChili}`}
        />

        {/* Follow Me - Right Side */}
        <div className={styles.followMe}>
          <span>Follow Me</span>
        </div>
      </div>
    </section>
  );
}
