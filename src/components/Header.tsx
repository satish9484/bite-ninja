import { useEffect, useState } from "react";
import styles from "./styles/Header.module.scss";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleTheme = () => {
    const root = document.documentElement;
    const nextIsDark = !isDarkMode;
    if (nextIsDark) root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    setIsDarkMode(nextIsDark);
    try {
      localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    } catch {}
  };

  useEffect(() => {
    const root = document.documentElement;
    setIsDarkMode(root.getAttribute("data-theme") === "dark");
  }, []);

  return (
    <header className={styles.headerRoot}>
      <div className={`container ${styles.headerContainer}`}>
        {/* Logo */}
        <div className={styles.headerLogo}>
          <a href="/" className={styles.headerLogoLink}>
            <span className={styles.headerLogoIcon}>F</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.headerNav}>
          <ul className={styles.headerNavList}>
            <li className={styles.headerNavItem}>
              <a
                href="#home"
                className={`${styles.headerNavLink} ${styles.active}`}
              >
                Home
              </a>
            </li>
            <li className={styles.headerNavItem}>
              <a href="#restaurants" className={styles.headerNavLink}>
                Restaurants
              </a>
            </li>
            <li className={styles.headerNavItem}>
              <a href="#ninjas" className={styles.headerNavLink}>
                Ninjas
              </a>
            </li>
            <li className={styles.headerNavItem}>
              <a href="#about" className={styles.headerNavLink}>
                About
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Side Actions */}
        <div className={styles.headerActions}>
          {/* Theme Toggle */}
          <button
            type="button"
            className={styles.headerThemeToggle}
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            aria-pressed={isDarkMode}
          >
            {isDarkMode ? "Light" : "Dark"}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className={`${styles.headerMobileToggle} ${
              isMobileMenuOpen ? styles.active : ""
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={styles.headerHamburgerLine}></span>
            <span className={styles.headerHamburgerLine}></span>
            <span className={styles.headerHamburgerLine}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${styles.headerMobileMenu} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
      >
        <nav className={styles.headerMobileNav}>
          <ul className={styles.headerMobileNavList}>
            <li className={styles.headerMobileNavItem}>
              <a
                href="#home"
                className={`${styles.headerMobileNavLink} ${styles.active}`}
              >
                Home
              </a>
            </li>
            <li className={styles.headerMobileNavItem}>
              <a href="#restaurants" className={styles.headerMobileNavLink}>
                Restaurants
              </a>
            </li>
            <li className={styles.headerMobileNavItem}>
              <a href="#ninjas" className={styles.headerMobileNavLink}>
                Ninjas
              </a>
            </li>
            <li className={styles.headerMobileNavItem}>
              <a href="#about" className={styles.headerMobileNavLink}>
                About
              </a>
            </li>
            <li className={styles.headerMobileNavItem}>
              <a href="#contact" className={styles.headerMobileContactLink}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
