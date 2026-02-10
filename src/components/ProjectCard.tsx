import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/ProjectCard.module.css';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  image?: string;
}

export default function ProjectCard({ title, description, tags, href, image }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <Link href={href} className={styles.card}>
        <div className={styles.imageWrapper}>
          {image ? (
            <Image src={image} alt={title} width={600} height={400} className={styles.image} />
          ) : (
            <div className={styles.image} style={{ background: 'var(--color-accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--color-accent)' }}>
              {title.charAt(0)}
            </div>
          )}
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
