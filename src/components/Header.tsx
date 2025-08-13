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
      <div
        className={`${styles.headerContainer} container d-flex items-center justify-between`}
      >
        {/* Logo and Brand */}
        <div className={styles.headerLogo}>
          <a href="/" className={styles.headerLogoLink}>
            <img
              src="/Images/header_img_1.png"
              alt="Bite Ninja Logo"
              className={styles.headerLogoImage}
            />
            <span className={styles.headerLogoText}>Bite Ninja</span>
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
                <span className={styles.headerNavIcon}>🏠</span>
                <span className={styles.headerNavText}>Home</span>
              </a>
            </li>
            <li className={styles.headerNavItem}>
              <a href="#restaurants" className={styles.headerNavLink}>
                <span className={styles.headerNavIcon}>🍽️</span>
                <span className={styles.headerNavText}>Restaurants</span>
              </a>
            </li>
            <li className={styles.headerNavItem}>
              <a href="#ninjas" className={styles.headerNavLink}>
                <span className={styles.headerNavIcon}>⚡</span>
                <span className={styles.headerNavText}>Ninjas</span>
              </a>
            </li>
            <li className={styles.headerNavItem}>
              <a href="#about" className={styles.headerNavLink}>
                <span className={styles.headerNavIcon}>ℹ️</span>
                <span className={styles.headerNavText}>About</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Theme Toggle */}
        <button
          type="button"
          className="btn btn-secondary"
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
        >
          <span className={styles.headerHamburgerLine}></span>
          <span className={styles.headerHamburgerLine}></span>
          <span className={styles.headerHamburgerLine}></span>
        </button>
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
                <span className={styles.headerMobileNavIcon}>🏠</span>
                <span className={styles.headerMobileNavText}>Home</span>
              </a>
            </li>
            <li className={styles.headerMobileNavItem}>
              <a href="#restaurants" className={styles.headerMobileNavLink}>
                <span className={styles.headerMobileNavIcon}>🍽️</span>
                <span className={styles.headerMobileNavText}>Restaurants</span>
              </a>
            </li>
            <li className={styles.headerMobileNavItem}>
              <a href="#ninjas" className={styles.headerMobileNavLink}>
                <span className={styles.headerMobileNavIcon}>⚡</span>
                <span className={styles.headerMobileNavText}>Ninjas</span>
              </a>
            </li>
            <li className={styles.headerMobileNavItem}>
              <a href="#about" className={styles.headerMobileNavLink}>
                <span className={styles.headerMobileNavIcon}>ℹ️</span>
                <span className={styles.headerMobileNavText}>About</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
