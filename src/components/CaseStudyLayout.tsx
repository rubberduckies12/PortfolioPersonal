import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineUser, HiOutlineCalendar } from 'react-icons/hi';
import styles from '@/styles/CaseStudy.module.css';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';
import LogoLoop from '@/components/LogoLoop';
import type { LogoItem } from '@/components/LogoLoop';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProjectData {
  title: string;
  heroLabel?: string;
  tagline: string;
  description: string[];
  role?: string;
  timeline?: string;
  tags: string[];
  gallery?: string[];
  features: Feature[];
  learnings: string[];
  liveUrl?: string;
  githubUrl?: string;
  prevProject?: { title: string; href: string };
  nextProject?: { title: string; href: string };
}

export default function CaseStudyLayout({ project }: { project: ProjectData }) {
  const router = useRouter();
  const canonicalUrl = `https://tommyrowe.dev${router.asPath}`;

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)');
    const apply = () => {
      document.body.style.overflow = mq.matches ? 'hidden' : '';
    };
    apply();
    mq.addEventListener('change', apply);
    return () => { document.body.style.overflow = ''; mq.removeEventListener('change', apply); };
  }, []);

  const featureLogos: LogoItem[] = useMemo(() => project.features.map((feature) => ({
    node: (
      <div className="featureLoopCard">
        <div className="featureLoopCard__iconRow">
          <span className="featureLoopCard__icon">{feature.icon}</span>
          <span className="featureLoopCard__title">{feature.title}</span>
        </div>
        <span className="featureLoopCard__desc">{feature.description}</span>
      </div>
    ),
    title: feature.title,
  })), [project.features]);

  const galleryLogos: LogoItem[] = useMemo(() => (project.gallery ?? []).map((src, i) => ({
    node: (
      <div className={styles.galleryCard}>
        <Image src={src} alt={`${project.title} screenshot ${i + 1}`} width={960} height={600} className={styles.galleryImage} />
      </div>
    ),
    title: `${project.title} screenshot ${i + 1}`,
  })), [project.gallery, project.title]);

  return (
    <>
      <Head>
        <title>{`${project.title} | Tommy Rowe`}</title>
        <meta name="description" content={project.tagline} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${project.title} | Tommy Rowe`} />
        <meta property="og:description" content={project.tagline} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:title" content={`${project.title} | Tommy Rowe`} />
        <meta name="twitter:description" content={project.tagline} />
      </Head>

      <div className={styles.snapContainer}>
      {/* Hero */}
      <section className={`${styles.hero} ${styles.snapSection}`}>
        <div className={styles.heroDecoration} />

        <Link href="/portfolio" className={styles.backLink}>
          ← Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.heroLabel}>{project.heroLabel ?? 'Case Study'}</span>
          <h1 className={styles.heroTitle}>{project.title}</h1>
          <p className={styles.heroTagline}>{project.tagline}</p>

          {(project.role || project.timeline) && (
            <div className={styles.heroMeta}>
              {project.role && (
                <span className={styles.heroMetaItem}>
                  <HiOutlineUser className={styles.heroMetaIcon} /> {project.role}
                </span>
              )}
              {project.timeline && (
                <span className={styles.heroMetaItem}>
                  <HiOutlineCalendar className={styles.heroMetaIcon} /> {project.timeline}
                </span>
              )}
            </div>
          )}

          {(project.liveUrl || project.githubUrl) && (
            <div className={styles.heroLinks}>
              {project.liveUrl && (
                <Button href={project.liveUrl} external>Go to {project.title}</Button>
              )}
              {project.githubUrl && (
                <Button href={project.githubUrl} variant="secondary" external>💻 GitHub</Button>
              )}
            </div>
          )}

          <div className={styles.heroTags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.heroTag}>{tag}</span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Overview */}
      <section className={`${styles.section} ${styles.sectionAlt} ${styles.snapSection}`}>
        <SectionHeading label="Overview" title="About the Project" />
        <div className={styles.overviewGrid}>
          {project.description.map((para, i) => (
            <motion.p
              key={i}
              className={styles.overviewText}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Gallery */}
      {galleryLogos.length > 0 && (
        <section className={`${styles.section} ${styles.snapSection}`}>
          <SectionHeading label="Gallery" title="Screenshots" />
          <div className={styles.galleryLoopWrapper}>
            <LogoLoop
              logos={galleryLogos}
              speed={25}
              direction="left"
              logoHeight={320}
              gap={24}
              hoverSpeed={0}
              fadeOut
              fadeOutColor="var(--color-bg)"
              ariaLabel={`${project.title} gallery`}
            />
          </div>
        </section>
      )}

      {/* Features */}
      <section className={`${styles.section} ${styles.snapSection}`}>
        <SectionHeading label="Features" title="Key Functionality" />
        <div className={styles.featureLoopWrapper}>
          <LogoLoop
            logos={featureLogos}
            speed={35}
            direction="left"
            logoHeight={240}
            gap={24}
            hoverSpeed={0}
            fadeOut
            fadeOutColor="var(--color-bg)"
            ariaLabel={`${project.title} features`}
          />
        </div>
      </section>

      {/* Learnings */}
      <section className={`${styles.section} ${styles.sectionAlt} ${styles.snapSection}`}>
        <SectionHeading label="Reflection" title="What I Learned" />
        <div className={styles.learningsGrid}>
          {project.learnings.map((learning, i) => (
            <motion.div
              key={i}
              className={styles.learningCard}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className={styles.learningNumber}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className={styles.learningText}>{learning}</span>
            </motion.div>
          ))}
        </div>
      </section>
      </div>
    </>
  );
}