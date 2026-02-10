import Head from 'next/head';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/CV.module.css';
import Button from '@/components/Button';
import {
  HiOutlineCode,
  HiOutlineDesktopComputer,
  HiOutlineDatabase,
  HiOutlineLightningBolt,
  HiOutlineChip,
  HiOutlineCog,
  HiOutlinePencil,
  HiOutlineGlobe,
  HiOutlineSpeakerphone,
  HiOutlineClipboardList,
  HiOutlineCube,
  HiOutlineAcademicCap,
  HiOutlineBeaker,
  HiOutlineColorSwatch,
} from 'react-icons/hi';

/* ─── Data ─── */

const experience = [
  {
    title: 'RF Engineer Apprentice',
    company: 'Airbus Defence and Space',
    description: 'Assisted in the design and development of RF test systems for space applications.',
    tags: ['RF Testing', 'Space Systems'],
  },
  {
    title: 'Radiation Engineer Apprentice',
    company: 'Airbus Defence and Space',
    description: 'Ensured electrical components can survive extreme radiation exposure during their mission lifetime on a spacecraft.',
    tags: ['Radiation Analysis', 'Component Testing'],
  },
  {
    title: 'EEE Engineer Apprentice',
    company: 'Airbus Defence and Space',
    description: 'Assisted in electrical parts selection and procurement for satellite systems. Ensured the correct parts are used and justified discrepancies.',
    tags: ['Parts Selection', 'Procurement', 'Satellite Systems'],
  },
  {
    title: 'Sales Assistant',
    company: 'Airbus Defence and Space',
    description: 'Managed campaigns and led projects across the space industry, supporting operations and customer relationships.',
    tags: ['Campaign Management', 'Space', 'Sales'],
  },
  {
    title: 'Co-Founder & Managing Director',
    company: 'RCKTS',
    description: 'Building full-stack products from the ground up — QuixMTD (MTD bridging software), Gro (AI-powered investing), MyPropertyPal (property management) and MIDAS (automated trading bot). Handling architecture, design, development, and deployment.',
    tags: ['React', 'Next.js', 'TypeScript', 'Flutter', 'Solidity', 'Node.js'],
  },
];

const education = [
  {
    icon: <HiOutlineAcademicCap />,
    title: 'BEng (Hons) Electrical and Electronic Engineering',
    institution: 'Solent Southampton University',
    description: 'Course representative for the apprentices — attending meetings with the university and being a voice for the apprentice cohort.',
  },
  {
    icon: <HiOutlineAcademicCap />,
    title: 'Level 3 Extended National Diploma in Electrical and Electronic Engineering',
    institution: 'CEMAST, Fareham College',
    description: 'Student Vice President and STEM Ambassador — representing the student body and promoting STEM subjects.',
  },
];

const projects = [
  {
    icon: <HiOutlineBeaker />,
    title: 'Fusion Rockets',
    description: 'Built a series of flight-capable model rockets using a PID feedback loop, thrust vector control, and solid-state fuel with a 2D gimbal TVC system.',
  },
  {
    icon: <HiOutlineLightningBolt />,
    title: 'Piezoelectric Nano-Generators',
    description: 'Researched and developed piezoelectric nano-generators to power cardiac implants, focusing on energy efficiency and miniaturisation.',
  },
  {
    icon: <HiOutlineCode />,
    title: 'ApprentiLink',
    description: 'An apprentice clearing platform built for Airbus Defence and Space with automatic two-way matching between apprentice roles and pre-vetted candidates.',
  },
];

const skills = [
  { icon: <HiOutlineColorSwatch />, name: 'Web & App Design', description: 'Designing modern, responsive websites and mobile apps.' },
  { icon: <HiOutlineCode />, name: 'React Programming', description: 'Building interactive UIs with React and Next.js.' },
  { icon: <HiOutlineDatabase />, name: 'PSQL', description: 'Managing relational databases with PostgreSQL.' },
  { icon: <HiOutlineDesktopComputer />, name: 'JavaScript', description: 'Developing dynamic web applications using JS.' },
  { icon: <HiOutlineCog />, name: 'C++', description: 'Efficient systems and hardware programming.' },
  { icon: <HiOutlineChip />, name: 'Arduino', description: 'Prototyping and automation with microcontrollers.' },
  { icon: <HiOutlinePencil />, name: 'Electronic Design', description: 'Designing and producing custom electronics.' },
  { icon: <HiOutlineCube />, name: 'CAD 2D & 3D', description: 'Creating precise models for engineering and design.' },
  { icon: <HiOutlineLightningBolt />, name: 'Rapid Prototyping', description: 'Turning ideas into working prototypes quickly.' },
  { icon: <HiOutlineSpeakerphone />, name: 'Marketing', description: 'Promoting products and services effectively.' },
  { icon: <HiOutlineGlobe />, name: 'Social Media Marketing', description: 'Growing brands and engagement on social platforms.' },
  { icon: <HiOutlineClipboardList />, name: 'Campaign Management', description: 'Planning and executing successful campaigns.' },
];

/* ─── Animation variants ─── */

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

/* ─── Component ─── */

export default function CVPage() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <>
      <Head>
        <title>CV | Tommy Rowe</title>
        <meta name="description" content="Tommy Rowe's CV — Airbus Defence and Space, RCKTS, engineering projects, and technical skills." />
        <link rel="canonical" href="https://tommyrowe.dev/cv" />
        <meta property="og:title" content="CV | Tommy Rowe" />
        <meta property="og:description" content="Tommy Rowe's CV — Airbus Defence and Space, RCKTS, engineering projects, and technical skills." />
        <meta property="og:url" content="https://tommyrowe.dev/cv" />
        <meta name="twitter:title" content="CV | Tommy Rowe" />
        <meta name="twitter:description" content="Tommy Rowe's CV — Airbus Defence and Space, RCKTS, engineering projects, and technical skills." />
      </Head>

      <div className={styles.snapContainer}>

        {/* ─── Hero ─── */}
        <section className={`${styles.snapSection} ${styles.hero}`}>
          <div className={styles.heroDecoration} />
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.span className={styles.heroLabel} variants={fadeUp}>Curriculum Vitae</motion.span>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>Tommy Rowe</motion.h1>
            <motion.p className={styles.heroSubtitle} variants={fadeUp}>
              Developer, engineer, and co-founder building full-stack products and hardware projects.
            </motion.p>
            <motion.div className={styles.heroCtas} variants={fadeUp}>
              <Button href="/portfolio" size="large">View My Work</Button>
            </motion.div>
          </motion.div>
        </section>

        {/* ─── Experience ─── */}
        <section className={`${styles.snapSection} ${styles.altBg}`}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.span className={styles.sectionLabel} variants={fadeUp}>Experience</motion.span>
            <motion.h2 className={styles.sectionTitle} variants={fadeUp}>Work History</motion.h2>
          </motion.div>

          <div className={styles.timeline}>
            <motion.div
              className={styles.timelineLine}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            />
            {experience.map((item, i) => (
              <motion.div
                key={i}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.9, delay: i * 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              >
                <motion.div
                  className={styles.timelineDot}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.35 + 0.2, type: 'spring', stiffness: 160, damping: 14 }}
                />
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <span className={styles.timelineCompany}>{item.company}</span>
                <p className={styles.timelineDesc}>{item.description}</p>
                <div className={styles.timelineTags}>
                  {item.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── Education ─── */}
        <section className={styles.snapSection}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.span className={styles.sectionLabel} variants={fadeUp}>Education</motion.span>
            <motion.h2 className={styles.sectionTitle} variants={fadeUp}>Qualifications</motion.h2>
          </motion.div>

          <div className={styles.rowList}>
            {education.map((item, i) => (
              <motion.div
                key={i}
                className={styles.rowItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.25, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              >
                <div className={styles.rowIcon}>{item.icon}</div>
                <div className={styles.rowContent}>
                  <h3 className={styles.rowTitle}>{item.title}</h3>
                  <span className={styles.rowSub}>{item.institution}</span>
                  <p className={styles.rowDesc}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Projects sub-section */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            style={{ marginTop: 'var(--space-xl)' }}
          >
            <motion.span className={styles.sectionLabel} variants={fadeUp}>Projects</motion.span>
            <motion.h2 className={styles.sectionTitle} variants={fadeUp}>Engineering Projects</motion.h2>
          </motion.div>

          <div className={styles.rowList}>
            {projects.map((item, i) => (
              <motion.div
                key={i}
                className={styles.rowItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.25, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              >
                <div className={styles.rowIcon}>{item.icon}</div>
                <div className={styles.rowContent}>
                  <h3 className={styles.rowTitle}>{item.title}</h3>
                  <p className={styles.rowDesc}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── Skills ─── */}
        <section className={`${styles.snapSection} ${styles.altBg}`}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.span className={styles.sectionLabel} variants={fadeUp}>Skills</motion.span>
            <motion.h2 className={styles.sectionTitle} variants={fadeUp}>What I Can Do</motion.h2>
          </motion.div>

          <motion.div
            className={styles.skillsGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            {skills.map((skill) => (
              <motion.div key={skill.name} className={styles.skillCard} variants={fadeUp}>
                <div className={styles.skillIcon}>{skill.icon}</div>
                <h3 className={styles.skillName}>{skill.name}</h3>
                <p className={styles.skillDesc}>{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

      </div>
    </>
  );
}
