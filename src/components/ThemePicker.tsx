import { useState, useRef, useEffect } from 'react';
import { FaPaintRoller } from 'react-icons/fa';
import { useTheme, colorSchemes } from '@/context/ThemeContext';
import styles from '@/styles/ThemePicker.module.css';

export default function ThemePicker() {
  const { scheme, setScheme } = useTheme();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const lightSchemes = colorSchemes.filter(s => !s.dark);
  const darkSchemes = colorSchemes.filter(s => s.dark);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <button
        className={`${styles.trigger} ${open ? styles.triggerActive : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Change color scheme"
      >
        <FaPaintRoller />
      </button>

      <div className={`${styles.dropdown} ${open ? styles.dropdownOpen : ''}`}>
        <div className={styles.dropdownLabel}>Light</div>
        {lightSchemes.map((s) => (
          <button
            key={s.id}
            className={`${styles.option} ${scheme === s.id ? styles.optionActive : ''}`}
            onClick={() => { setScheme(s.id); setOpen(false); }}
          >
            <span className={styles.swatch} style={{ background: s.preview }} />
            <span className={styles.optionLabel}>{s.name}</span>
            {scheme === s.id && <span className={styles.optionCheck}>✓</span>}
          </button>
        ))}

        <div className={styles.divider} />

        <div className={styles.dropdownLabel}>Dark</div>
        {darkSchemes.map((s) => (
          <button
            key={s.id}
            className={`${styles.option} ${scheme === s.id ? styles.optionActive : ''}`}
            onClick={() => { setScheme(s.id); setOpen(false); }}
          >
            <span className={styles.swatch} style={{ background: s.preview }} />
            <span className={styles.optionLabel}>{s.name}</span>
            {scheme === s.id && <span className={styles.optionCheck}>✓</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
