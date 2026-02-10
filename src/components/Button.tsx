import Link from 'next/link';
import styles from '@/styles/Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  external?: boolean;
  className?: string;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'medium',
  onClick,
  external = false,
  className = '',
}: ButtonProps) {
  const classes = [
    styles.btn,
    styles[variant],
    size === 'small' ? styles.small : '',
    size === 'large' ? styles.large : '',
    className,
  ].filter(Boolean).join(' ');

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
