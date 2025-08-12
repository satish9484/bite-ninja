import styles from "./styles/HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.section1}>
      <div
        className={`${styles.container} ${styles.rootSection1} ${styles.dFlexColumn} ${styles.justifyCenter} ${styles.alignCenter} ${styles.gap80}`}
      >
        <h1>
          Work from anywhere
          <br /> build for peoples
        </h1>
        <p className={styles.heroSubtitle}>
          Transform your workflow with our innovative platform designed for
          modern professionals
        </p>
        <figure className={styles.section1Figure}>
          <img src="/Images/section_1.png" alt="Hero background image" />
        </figure>
      </div>
    </section>
  );
}
