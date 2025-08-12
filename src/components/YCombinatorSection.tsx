import styles from "./styles/YCombinatorSection.module.scss";

export default function YCombinatorSection() {
  return (
    <section className={styles.section5}>
      <div className={styles.container}>
        <div className={styles.section5Left}>
          <figure className={styles.section5Fig1}>
            <img src="/Images/section_5_1.png" alt="Y Combinator image 1" />
          </figure>
          <figure className={styles.section5Fig2}>
            <img src="/Images/section_5_2.png" alt="Y Combinator image 2" />
          </figure>
          <figure className={styles.section5Fig3}>
            <img src="/Images/section_5_3.png" alt="Y Combinator image 3" />
          </figure>
        </div>
        <div className={styles.section2Right}>
          <h2>
            We are the
            <br />Y Combinator Firm
          </h2>
          <p>
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
