import styles from "./styles/ContactSection.module.scss";

export default function ContactSection() {
  return (
    <section className={styles.section7}>
      <div className={styles.container}>
        <div className={styles.section7Left}>
          <h4 className={styles.animateLeft}>Reach Out Us</h4>
          <p className={styles.animateIn}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas
            at justo, tellus amet dignissim. Quam enim est dignissim quam
            dignissim aliquam congue.
          </p>
          <figure className={`${styles.section7Figure} ${styles.animateScale}`}>
            <img src="/Images/section_7_map.png" alt="Map" />
          </figure>
        </div>
        <div className={styles.section7Right}>
          <form className={styles.contactForm} action="#">
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                className={styles.formInput}
                type="text"
                id="name"
                name="name"
                placeholder="Kevin Watson"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                className={styles.formInput}
                type="email"
                id="email"
                name="email"
                placeholder="kwatson10@gmail.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                className={`${styles.formInput} ${styles.formTextarea}`}
                id="message"
                name="message"
                rows={4}
                placeholder="Type message here..."
              ></textarea>
            </div>

            <button type="submit" className={styles.btnSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
