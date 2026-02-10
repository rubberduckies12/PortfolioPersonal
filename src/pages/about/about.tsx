import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/About.module.css';
import Button from '@/components/Button';
import {
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineDatabase,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineLightningBolt,
  HiOutlineGlobe,
  HiOutlineChip,
  HiOutlineBeaker,
} from 'react-icons/hi';

const skillCategories = [
  {
    icon: <HiOutlineCode />,
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    icon: <HiOutlineServer />,
    title: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'Authentication', 'Server Management'],
  },
  {
    icon: <HiOutlineDatabase />,
    title: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Prisma', 'Database Design'],
  },
  {
    icon: <HiOutlineDeviceMobile />,
    title: 'Mobile',
    skills: ['Flutter', 'Dart', 'React Native', 'Responsive Design'],
  },
  {
    icon: <HiOutlineChip />,
    title: 'Hardware & Engineering',
    skills: ['Arduino', 'C++', 'Electronic Design', 'CAD 2D & 3D', 'Rapid Prototyping'],
  },
  {
    icon: <HiOutlineLightningBolt />,
    title: 'Emerging Tech',
    skills: ['Solidity', 'Web3', 'OpenAI API', 'Smart Contracts', 'DeFi'],
  },
];

const experience = [
  {
    title: 'RF Engineer Apprentice',
    company: 'Airbus Defence and Space',
    description: 'Assisted in the design and development of RF test systems for space applications.',
  },
  {
    title: 'Radiation Engineer Apprentice',
    company: 'Airbus Defence and Space',
    description: 'Ensured electrical components can survive extreme radiation exposure during their mission lifetime on a spacecraft.',
  },
  {
    title: 'EEE Engineer Apprentice',
    company: 'Airbus Defence and Space',
    description: 'Assisted in electrical parts selection and procurement for satellite systems.',
  },
  {
    title: 'Sales Assistant',
    company: 'Airbus Defence and Space',
    description: 'Managed campaigns and led projects across the space industry, supporting operations and customer relationships.',
  },
  {
    title: 'Co-Founder & Managing Director',
    company: 'RCKTS',
    description: 'Building full-stack products from the ground up — QuixMTD, Gro, MyPropertyPal, MIDAS, and more.',
  },
];

const interests = [
  { icon: <HiOutlineDesktopComputer />, name: 'Building Products' },
  { icon: <HiOutlineLightningBolt />, name: 'Startups' },
  { icon: <HiOutlineBeaker />, name: 'Rockets' },
  { icon: <HiOutlineGlobe />, name: 'Travel' },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function AboutPage() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <>
      <Head>
        <title>About | Tommy Rowe</title>
        <meta name="description" content="Learn more about Tommy Rowe — an engineer turned co-founder, building real products at RCKTS." />
        <link rel="canonical" href="https://tommyrowe.dev/about" />
        <meta property="og:title" content="About | Tommy Rowe" />
        <meta property="og:description" content="Learn more about Tommy Rowe — an engineer turned co-founder, building real products at RCKTS." />
        <meta property="og:url" content="https://tommyrowe.dev/about" />
        <meta name="twitter:title" content="About | Tommy Rowe" />
        <meta name="twitter:description" content="Learn more about Tommy Rowe — an engineer turned co-founder, building real products at RCKTS." />
      </Head>

      <div className={styles.snapContainer}>

        {/* ─── Hero ─── */}
        <section className={`${styles.snapSection} ${styles.hero}`}>
          <div className={styles.heroDecoration} />
          <div className={styles.heroLayout}>
            <motion.div
              className={styles.heroText}
              initial="hidden"
              animate="show"
              variants={stagger}
            >
              <motion.span className={styles.heroLabel} variants={fadeUp}>About Me</motion.span>
              <motion.h1 className={styles.heroTitle} variants={fadeUp}>
                Hey, I&apos;m <span className={styles.accent}>Tommy</span>.
              </motion.h1>
              <motion.p className={styles.heroTagline} variants={fadeUp}>
                I&apos;m an engineer turned co-founder. From testing satellite hardware at
                Airbus to building full-stack products at RCKTS — I care about every
                pixel, circuit, and user interaction in between.
              </motion.p>
              <motion.p className={styles.heroParagraph} variants={fadeUp}>
                My journey started with RF test systems and radiation analysis on spacecraft,
                before a passion for building things led me to co-found RCKTS. I&apos;ve shipped
                tax software, AI-powered investing platforms, automated trading bots, and more
                — always as the person who writes the code, designs the experience, and
                deploys to production.
              </motion.p>
              <motion.div className={styles.heroCtas} variants={fadeUp}>
                <Button href="/portfolio" size="large">View My Work</Button>
                <Button href="/cv" variant="secondary" size="large">See My CV</Button>
              </motion.div>
            </motion.div>

            <motion.div
              className={styles.heroImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              <Image
                src="/boxing.png"
                alt="Tommy"
                width={400}
                height={400}
                className={styles.heroPhoto}
              />
            </motion.div>
          </div>
        </section>

        {/* ─── Skills ─── */}
        <section className={`${styles.snapSection} ${styles.skillsSection}`}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span className={styles.sectionLabel} variants={fadeUp}>Skills</motion.span>
            <motion.h2 className={styles.sectionTitle} variants={fadeUp}>What I Work With</motion.h2>
            <motion.p className={styles.sectionSubtitle} variants={fadeUp}>
              The technologies I reach for when building products.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.bentoGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            {skillCategories.map((cat) => (
              <motion.div key={cat.title} className={styles.bentoCard} variants={fadeUp}>
                <div className={styles.bentoIcon}>{cat.icon}</div>
                <h3 className={styles.bentoTitle}>{cat.title}</h3>
                <div className={styles.bentoSkills}>
                  {cat.skills.map((s) => (
                    <span key={s} className={styles.bentoTag}>{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ─── Experience ─── */}
        <section className={`${styles.snapSection} ${styles.experienceSection}`}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span className={styles.sectionLabel} variants={fadeUp}>Experience</motion.span>
            <motion.h2 className={styles.sectionTitle} variants={fadeUp}>My Journey</motion.h2>
            <motion.p className={styles.sectionSubtitle} variants={fadeUp}>
              From engineering satellites at Airbus to building products at RCKTS.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.timeline}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            {experience.map((item, i) => (
              <motion.div key={i} className={styles.timelineCard} variants={fadeUp}>
                <h3 className={styles.timelineRole}>{item.title}</h3>
                <span className={styles.timelineCompany}>{item.company}</span>
                <p className={styles.timelineDesc}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ─── Interests ─── */}
        <section className={`${styles.snapSection} ${styles.interestsSection}`}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span className={styles.sectionLabel} variants={fadeUp}>Beyond Code</motion.span>
            <motion.h2 className={styles.sectionTitle} variants={fadeUp}>What Drives Me</motion.h2>
          </motion.div>

          <motion.div
            className={styles.interestsRow}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            {interests.map((item) => (
              <motion.div key={item.name} className={styles.interestPill} variants={fadeUp}>
                <span className={styles.interestIcon}>{item.icon}</span>
                <span className={styles.interestLabel}>{item.name}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={styles.closingCta}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className={styles.closingText}>
              Want to work together or just say hello?
            </p>
            <Button href="mailto:rckts.thomas@gmail.com" variant="secondary">Get In Touch →</Button>
          </motion.div>
        </section>

      </div>
    </>
  );
}
