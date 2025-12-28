'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  botLink: string;
}

const navLinks = [
  { href: '#features', label: 'Возможности' },
  { href: '#how-it-works', label: 'Как работает' },
  { href: '#testimonials', label: 'Отзывы' },
  { href: '#roadmap', label: 'Развитие' },
  { href: '#pricing', label: 'Тарифы' },
  { href: '#faq', label: 'Вопросы' },
];

export default function Header({ botLink }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <img
            src="/images/logo-icon.png"
            alt="Volna360"
            className={styles.logoIcon}
          />
          <span className={styles.logoText}>Volna360</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={botLink} className={styles.cta}>
            Запустить
          </a>

          {/* Mobile Menu Button */}
          <button
            className={`${styles.menuButton} ${mobileMenuOpen ? styles.menuOpen : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Меню"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileNavLink}
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a href={botLink} className={styles.mobileCta}>
          Запустить бота
        </a>
      </div>
    </header>
  );
}
