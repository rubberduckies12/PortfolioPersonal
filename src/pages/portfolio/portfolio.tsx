import Head from 'next/head';
import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/Portfolio.module.css';
import LogoLoop from '@/components/LogoLoop';
import type { LogoItem } from '@/components/LogoLoop';

const allProjects = [
  {
    title: 'QuixMTD',
    label: 'Web Application',
    description: 'The only 100% agnostic MTD bridging software. Upload your messy spreadsheet and we automatically categorise everything into the correct HMRC boxes and submit your income tax return directly.',
    tags: ['React', 'Express', 'HMRC API', 'OAuth 2.0', 'PostgreSQL'],
    href: '/portfolio/quixMTD',
  },
  {
    title: 'Gro',
    label: 'Mobile Application',
    description: 'An AI-powered investing platform. Set your goal, watch AI build your path, achieve your outcome. Professional-grade algorithms wrapped in game-like simplicity, built for your phone.',
    tags: ['Flutter', 'Dart', 'Next.js', 'OpenAI', 'Alpaca API'],
    href: '/portfolio/gro',
  },
  {
    title: 'MIDAS',
    label: 'Automated Trading Bot',
    description: 'An automated crypto arbitrage bot that exploits price inefficiencies across decentralised exchanges using flash loan arbitrage on the Ethereum Virtual Machine.',
    tags: ['Solidity', 'TypeScript', 'Ethers.js', 'Hardhat', 'EVM'],
    href: '/portfolio/midas',
  },
  {
    title: 'MyPropertyPal',
    label: 'Web Application',
    description: 'The all-in-one property management platform for UK landlords. Track rent, expenses, compliance, and tenants from a single dashboard. This project has since been shut down.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Stripe'],
    href: '/portfolio/mypropertypal',
  },
  {
    title: 'ApprentiLink',
    label: 'Web Application',
    description: 'An apprentice clearing platform built for Airbus Defence and Space. Automatic matching between job roles and pre-vetted apprentice candidates with two-way swiping and permission-based contact sharing.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Matching Algorithm'],
    href: '/portfolio/apprentilink',
  },
];

export default function PortfolioPage() {
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)');
    const apply = () => {
      document.body.style.overflow = mq.matches ? 'hidden' : '';
    };
    apply();
    mq.addEventListener('change', apply);
    return () => { document.body.style.overflow = ''; mq.removeEventListener('change', apply); };
  }, []);

  const projectLogos: LogoItem[] = useMemo(() => allProjects.map((p) => ({
    node: (
      <div className="portfolioLoopCard">
        <span className="portfolioLoopCard__label">{p.label}</span>
        <span className="portfolioLoopCard__title">{p.title}</span>
        <span className="portfolioLoopCard__desc">{p.description}</span>
        <div className="portfolioLoopCard__tags">
          {p.tags.map((t) => (
            <span key={t} className="portfolioLoopCard__tag">{t}</span>
          ))}
        </div>
        <span className="portfolioLoopCard__arrow">View Case Study →</span>
      </div>
    ),
    href: p.href,
    title: p.title,
  })), []);

  return (
    <>
      <Head>
        <title>Portfolio | Tommy Rowe</title>
        <meta name="description" content="Browse Tommy Rowe's portfolio — QuixMTD, Gro, MIDAS, MyPropertyPal, ApprentiLink, and more." />
        <link rel="canonical" href="https://tommyrowe.dev/portfolio" />
        <meta property="og:title" content="Portfolio | Tommy Rowe" />
        <meta property="og:description" content="Browse Tommy Rowe's portfolio — QuixMTD, Gro, MIDAS, MyPropertyPal, ApprentiLink, and more." />
        <meta property="og:url" content="https://tommyrowe.dev/portfolio" />
        <meta name="twitter:title" content="Portfolio | Tommy Rowe" />
        <meta name="twitter:description" content="Browse Tommy Rowe's portfolio — QuixMTD, Gro, MIDAS, MyPropertyPal, ApprentiLink, and more." />
      </Head>

      <div className={styles.snapContainer}>
        {/* Hero */}
        <section className={`${styles.snapSection} ${styles.hero}`}>
          <div className={styles.heroDecoration} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.heroLabel}>Portfolio</span>
            <h1 className={styles.heroTitle}>Things I&apos;ve Built</h1>
            <p className={styles.heroSubtitle}>
              A collection of web applications, trading bots, and platforms. Each one solved a real problem and taught me something new along the way.
            </p>

            <div className={styles.statsBar}>
              <div className={styles.stat}>
                <span className={styles.statValue}>{allProjects.length}</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>3</span>
                <span className={styles.statLabel}>Live Products</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>12+</span>
                <span className={styles.statLabel}>Technologies</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects Carousel */}
        <section className={`${styles.snapSection} ${styles.projectsSection}`}>
          <div className={styles.loopWrapper}>
            <LogoLoop
              logos={projectLogos}
              speed={25}
              direction="left"
              logoHeight={320}
              gap={28}
              hoverSpeed={0}
              fadeOut
              fadeOutColor="var(--color-bg)"
              ariaLabel="Portfolio projects"
            />
          </div>
          <motion.p
            className={styles.carouselHeading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            Click on a project
          </motion.p>
        </section>
      </div>
    </>
  );
}
