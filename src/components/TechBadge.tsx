import styles from '@/styles/TechBadge.module.css';

interface TechBadgeProps {
  name: string;
  icon?: string;
}

export default function TechBadge({ name, icon }: TechBadgeProps) {
  return (
    <span className={styles.badge}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {name}
    </span>
  );
}
