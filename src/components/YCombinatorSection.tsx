import styles from "./styles/YCombinatorSection.module.scss";

export default function YCombinatorSection() {
  return (
    <section className={styles.ycRoot}>
      <div className={`container ${styles.ycContainer}`}>
        <div
          className={`d-flex flex-column md:flex-row gap-8 ${styles.ycGrid}`}
        >
          <figure
            className={`${styles.ycImage} ${styles.ycFig1} d-flex flex-1`}
          >
            <img src="/Images/section_5_1.png" alt="Y Combinator image 1" />
          </figure>
          <figure
            className={`${styles.ycImage} ${styles.ycFig2} d-flex flex-1 justify-center`}
          >
            <img src="/Images/section_5_2.png" alt="Y Combinator image 2" />
          </figure>
          <figure
            className={`${styles.ycImage} ${styles.ycFig3} d-flex flex-1 justify-end`}
          >
            <img src="/Images/section_5_3.png" alt="Y Combinator image 3" />
          </figure>
        </div>
        <div
          className={`d-flex flex-column items-center ${styles.section2Right}`}
        >
          <h2 className={styles.ycAnimateIn}>
            We are the
            <br />Y Combinator Firm
          </h2>
          <p className={styles.ycAnimateIn}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            <br />
            egestas at justo, tellus amet dignissim. Quam enim est dignissim
            <br />
            quam dignissim aliquam congue.
          </p>
        </div>
      </div>
    </section>
  );
}
