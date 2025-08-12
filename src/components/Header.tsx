import { useState } from "react";
import styles from "./styles/Header.module.scss";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo and Brand */}
        <div className={styles.logo}>
          <a href="/" className={styles.logoLink}>
            <img
              src="/Images/header_img_1.png"
              alt="Bite Ninja Logo"
              className={styles.logoImage}
            />
            <span className={styles.logoText}>Bite Ninja</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#home" className={`${styles.navLink} ${styles.active}`}>
                <span className={styles.navIcon}>🏠</span>
                <span className={styles.navText}>Home</span>
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#restaurants" className={styles.navLink}>
                <span className={styles.navIcon}>🍽️</span>
                <span className={styles.navText}>Restaurants</span>
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#ninjas" className={styles.navLink}>
                <span className={styles.navIcon}>⚡</span>
                <span className={styles.navText}>Ninjas</span>
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#about" className={styles.navLink}>
                <span className={styles.navIcon}>ℹ️</span>
                <span className={styles.navText}>About</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`${styles.mobileToggle} ${
            isMobileMenuOpen ? styles.active : ""
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
      >
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
            <li className={styles.mobileNavItem}>
              <a
                href="#home"
                className={`${styles.mobileNavLink} ${styles.active}`}
              >
                <span className={styles.mobileNavIcon}>🏠</span>
                <span className={styles.mobileNavText}>Home</span>
              </a>
            </li>
            <li className={styles.mobileNavItem}>
              <a href="#restaurants" className={styles.mobileNavLink}>
                <span className={styles.mobileNavIcon}>🍽️</span>
                <span className={styles.mobileNavText}>Restaurants</span>
              </a>
            </li>
            <li className={styles.mobileNavItem}>
              <a href="#ninjas" className={styles.mobileNavLink}>
                <span className={styles.mobileNavIcon}>⚡</span>
                <span className={styles.mobileNavText}>Ninjas</span>
              </a>
            </li>
            <li className={styles.mobileNavItem}>
              <a href="#about" className={styles.mobileNavLink}>
                <span className={styles.mobileNavIcon}>ℹ️</span>
                <span className={styles.mobileNavText}>About</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
