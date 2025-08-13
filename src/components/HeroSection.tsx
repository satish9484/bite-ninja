import styles from "./styles/HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.heroRoot}>
      <div
        className={`container d-flex flex-column items-center justify-center ${styles.heroContainer} ${styles.heroContent} ${styles.heroGap}`}
      >
        <h1>
          Work from anywhere
          <br /> build for peoples
        </h1>
        <p className={styles.heroSubtitle}>
          Transform your workflow with our innovative platform designed for
          modern professionals
        </p>
        <figure className={styles.heroFigure}>
          <img src="/Images/section_1.png" alt="Hero background image" />
        </figure>
      </div>
    </section>
  );
}
