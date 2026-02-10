import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/styles/Header.module.css';
import ThemePicker from '@/components/ThemePicker';

export default function Header() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoverStyle, setHoverStyle] = useState<{ left: number; width: number } | null>(null);
  const [activeStyle, setActiveStyle] = useState<{ left: number; width: number } | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/cv', label: 'CV' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return router.pathname === '/';
    return router.pathname.startsWith(href);
  };

  // Measure the active link for the sliding indicator
  const updateActiveIndicator = useCallback(() => {
    const nav = navRef.current;
    if (!nav) return;
    const activeIndex = navItems.findIndex((item) => {
      if (item.href === '/') return router.pathname === '/';
      return router.pathname.startsWith(item.href);
    });
    const activeEl = linkRefs.current[activeIndex];
    if (activeEl) {
      const navRect = nav.getBoundingClientRect();
      const linkRect = activeEl.getBoundingClientRect();
      setActiveStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  useEffect(() => {
    // Wait for paint before measuring
    const raf = requestAnimationFrame(() => {
      updateActiveIndicator();
    });
    window.addEventListener('resize', updateActiveIndicator);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', updateActiveIndicator);
    };
  }, [updateActiveIndicator]);

  const handleMouseEnter = (index: number) => {
    const nav = navRef.current;
    const el = linkRefs.current[index];
    if (!nav || !el) return;
    const navRect = nav.getBoundingClientRect();
    const linkRect = el.getBoundingClientRect();
    setHoverStyle({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
    });
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverStyle(null);
    setHoveredIndex(null);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [router.pathname]);

  // Also update indicator on route change complete (after page transitions)
  useEffect(() => {
    const handleRouteChange = () => {
      requestAnimationFrame(() => updateActiveIndicator());
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events, updateActiveIndicator]);

  const mobileMenuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  const mobileLinkVariants = {
    closed: { opacity: 0, x: -30 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.05 + i * 0.08, duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    }),
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>
            tommy<span className={styles.logoAccent}>.</span>
          </span>
        </Link>

        <nav className={styles.nav} ref={navRef} onMouseLeave={handleMouseLeave}>
          {/* Sliding pill indicator */}
          {(hoverStyle || activeStyle) && (
            <motion.div
              className={styles.navPill}
              animate={{
                left: (hoverStyle || activeStyle)!.left,
                width: (hoverStyle || activeStyle)!.width,
              }}
              transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            />
          )}
          {navItems.map((item, i) => {
            const pillBehind = hoveredIndex !== null
              ? i === hoveredIndex
              : isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                ref={(el) => { linkRefs.current[i] = el; }}
                className={`${styles.navLink} ${isActive(item.href) ? styles.navLinkActive : ''} ${pillBehind ? styles.navLinkPillActive : ''}`}
                onMouseEnter={() => handleMouseEnter(i)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.navActions}>
          <ThemePicker />

          <button
            className={`${styles.mobileMenuBtn} ${mobileOpen ? styles.mobileMenuBtnOpen : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburger}>
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                custom={i}
                variants={mobileLinkVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <Link
                  href={item.href}
                  className={`${styles.mobileNavLink} ${isActive(item.href) ? styles.mobileNavLinkActive : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  <span className={styles.mobileNavNumber}>0{i + 1}</span>
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
