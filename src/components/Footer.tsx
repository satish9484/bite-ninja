import styles from "./styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footerRoot}>
      <div className={`container ${styles.footerContainer}`}>
        <div
          className={`${styles.footerContent} d-grid grid-cols-1 md:grid-cols-3 gap-10`}
        >
          <div className={styles.footerLeft}>
            <div className={styles.footerLogo}>
              <img src="/Images/footer_logo.png" alt="Bite Ninja Logo" />
            </div>
            <p className={styles.footerDescription}>
              Connecting restaurants with skilled delivery ninjas to provide
              lightning-fast, reliable food delivery services.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className={styles.socialLink}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className={styles.socialLink}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className={styles.socialLink}>
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div
            className={`${styles.footerCenter} d-grid grid-cols-1 md:grid-cols-3 gap-8`}
          >
            <div className={styles.footerSection}>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#drive-through">Drive Through</a>
                </li>
                <li>
                  <a href="#delivery">Food Delivery</a>
                </li>
                <li>
                  <a href="#pickup">Pickup</a>
                </li>
                <li>
                  <a href="#catering">Catering</a>
                </li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h4>Support</h4>
              <ul>
                <li>
                  <a href="#help">Help Center</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a href="#contact">Contact Support</a>
                </li>
                <li>
                  <a href="#terms">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.footerRight}>
            <div className={styles.footerButton}>
              <img src="/Images/footer_button.png" alt="Get Started Button" />
            </div>
            <div className={styles.footerImage}>
              <img src="/Images/footer_right_img.png" alt="Footer decoration" />
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p>&copy; 2024 Bite Ninja. All rights reserved.</p>
            <div className={styles.footerBottomLinks}>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
