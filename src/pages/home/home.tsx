import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/HomePage.module.css';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import LogoLoop from '@/components/LogoLoop';
import type { LogoItem } from '@/components/LogoLoop';
import Typewriter from '@/components/Typewriter';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiExpress,
  SiPrisma,
  SiFirebase,
  SiPython,
} from 'react-icons/si';

const featuredProjects = [
  {
    title: 'ApprentiLink',
    description: 'An apprentice clearing platform with automatic matching between jobs and pre-vetted candidates.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    href: '/portfolio/apprentilink',
  },
  {
    title: 'MyPropertyPal',
    description: 'The all-in-one property management platform for UK landlords. Track rent, expenses, compliance, and tenants from a single dashboard.',
    tags: ['Next.js', 'TypeScript', 'MongoDB'],
    href: '/portfolio/mypropertypal',
  },
  {
    title: 'QuixMTD',
    description: 'The only fully agnostic MTD bridging software. Users upload raw spreadsheets and transactions are automatically categorised into HMRC boxes.',
    tags: ['React', 'Express', 'HMRC API', 'OAuth 2.0'],
    href: '/portfolio/quixMTD',
  },
  {
    title: 'Gro',
    description: 'An AI-powered investing platform. Set your goal, watch AI build your path, achieve your outcome. Professional-grade algorithms with game-like simplicity.',
    tags: ['Flutter', 'Next.js', 'OpenAI'],
    href: '/portfolio/gro',
  },
  {
    title: 'MIDAS',
    description: 'An automated crypto arbitrage bot using flash loans on the Ethereum Virtual Machine.',
    tags: ['Solidity', 'TypeScript', 'Ethers.js'],
    href: '/portfolio/midas',
  },
];

const projectLogos: LogoItem[] = featuredProjects.map((p) => ({
  node: (
    <div className="projectLoopCard">
      <div className="projectLoopCard__info">
        <span className="projectLoopCard__title">{p.title}</span>
        <span className="projectLoopCard__desc">{p.description}</span>
      </div>
    </div>
  ),
  href: p.href,
  title: p.title,
}));

const techLogos: LogoItem[] = [
  { node: <SiReact />, title: 'React', description: 'A JavaScript library for building user interfaces with reusable components.' },
  { node: <SiNextdotjs />, title: 'Next.js', description: 'A React framework for production with SSR, routing, and optimisation built in.' },
  { node: <SiTypescript />, title: 'TypeScript', description: 'A typed superset of JavaScript that catches errors at compile time.' },
  { node: <SiJavascript />, title: 'JavaScript', description: 'The core language of the web, powering interactivity and logic.' },
  { node: <SiNodedotjs />, title: 'Node.js', description: 'A runtime that lets you run JavaScript on the server side.' },
  { node: <SiExpress />, title: 'Express', description: 'A minimal Node.js web framework for building APIs and servers.' },
  { node: <SiHtml5 />, title: 'HTML5', description: 'The standard markup language for structuring content on the web.' },
  { node: <SiCss3 />, title: 'CSS3', description: 'Stylesheet language for designing layouts, animations, and responsive UIs.' },
  { node: <SiPostgresql />, title: 'PostgreSQL', description: 'A powerful open-source relational database with advanced features.' },
  { node: <SiMongodb />, title: 'MongoDB', description: 'A NoSQL document database for flexible, scalable data storage.' },
  { node: <SiPrisma />, title: 'Prisma', description: 'A modern ORM for Node.js and TypeScript with type-safe database access.' },
  { node: <SiFirebase />, title: 'Firebase', description: 'A Google platform for auth, real-time databases, and hosting.' },
  { node: <SiGit />, title: 'Git', description: 'A distributed version control system for tracking code changes.' },
  { node: <SiPython />, title: 'Python', description: 'A versatile language used for scripting, automation, and data science.' },
];

export default function Home() {
  const [greetingDone, setGreetingDone] = useState(false);
  const [titleDone, setTitleDone] = useState(false);
  const [descLine1Done, setDescLine1Done] = useState(false);
  const [descLine2Done, setDescLine2Done] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const snapRef = useRef<HTMLDivElement>(null);
  const typingComplete = descLine2Done;

  // Lock snap container scroll until typing is complete
  useEffect(() => {
    const el = snapRef.current;
    if (!el) return;
    if (!typingComplete) {
      el.style.overflow = 'hidden';
    } else {
      el.style.overflow = '';
    }
    return () => { if (el) el.style.overflow = ''; };
  }, [typingComplete]);

  // Prevent body scroll — all scrolling happens inside snap container (desktop only)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)');
    const apply = () => {
      document.body.style.overflow = mq.matches ? 'hidden' : '';
    };
    apply();
    mq.addEventListener('change', apply);
    return () => { document.body.style.overflow = ''; mq.removeEventListener('change', apply); };
  }, []);

  // Delay before showing buttons after typing completes
  useEffect(() => {
    if (descLine2Done) {
      const timeout = setTimeout(() => setShowButtons(true), 600);
      return () => clearTimeout(timeout);
    }
  }, [descLine2Done]);

  return (
    <>
      <Head>
        <title>Tommy Rowe | Engineer & Co-Founder</title>
        <meta name="description" content="Hi, I'm Tommy Rowe — an engineer turned co-founder building full-stack products at RCKTS." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://tommyrowe.dev" />
        <meta property="og:title" content="Tommy Rowe | Engineer & Co-Founder" />
        <meta property="og:description" content="Hi, I'm Tommy Rowe — an engineer turned co-founder building full-stack products at RCKTS." />
        <meta property="og:url" content="https://tommyrowe.dev" />
        <meta name="twitter:title" content="Tommy Rowe | Engineer & Co-Founder" />
        <meta name="twitter:description" content="Hi, I'm Tommy Rowe — an engineer turned co-founder building full-stack products at RCKTS." />
      </Head>

      {/* Hero Section */}
      <div ref={snapRef} className={styles.snapContainer}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroGreeting}>
              <Typewriter
                text="HELLO, MY NAME IS TOMMY"
                speed={40}
                delay={300}
                onComplete={() => setGreetingDone(true)}
              />
            </span>
            <h1 className={styles.heroTitle} style={{ visibility: greetingDone ? 'visible' : 'hidden' }}>
              {greetingDone ? (
                <Typewriter
                  text="I build things on the web."
                  speed={35}
                  delay={200}
                  highlight={{ word: 'web', className: styles.heroHighlight }}
                  onComplete={() => setTitleDone(true)}
                />
              ) : (
                <span style={{ visibility: 'hidden' }}>I build things on the web.</span>
              )}
            </h1>
            <p className={styles.heroDescription} style={{ visibility: titleDone ? 'visible' : 'hidden' }}>
              {titleDone ? (
                <>
                  <Typewriter
                    text="Co-founder of RCKTS, a small software studio based in the United Kingdom."
                    speed={20}
                    delay={200}
                    onComplete={() => setDescLine1Done(true)}
                  />
                  <br />
                  {descLine1Done ? (
                    <Typewriter
                      key="desc2-active"
                      text="We build websites and applications that solve real problems, creating user-friendly digital experiences."
                      speed={20}
                      delay={100}
                      onComplete={() => setDescLine2Done(true)}
                    />
                  ) : (
                    <span style={{ color: 'transparent' }}>We build websites and applications that solve real problems, creating user-friendly digital experiences.</span>
                  )}
                </>
              ) : (
                <>
                  <span style={{ visibility: 'hidden' }}>Co-founder of RCKTS, a small software studio based in the United Kingdom.</span>
                  <br />
                  <span style={{ visibility: 'hidden' }}>We build websites and applications that solve real problems, creating user-friendly digital experiences.</span>
                </>
              )}
            </p>
            <div className={styles.heroCtas} style={{ visibility: showButtons ? 'visible' : 'hidden' }}>
              {showButtons ? (
                <motion.div
                  style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Button href="/portfolio" size="large">View My Work</Button>
                  <Button href="/about" variant="secondary" size="large">About Me</Button>
                </motion.div>
              ) : (
                <div style={{ visibility: 'hidden', display: 'flex', gap: 'var(--space-md)' }}>
                  <Button href="/portfolio" size="large">View My Work</Button>
                  <Button href="/about" variant="secondary" size="large">About Me</Button>
                </div>
              )}
            </div>
          </div>
          <div className={styles.heroDecoration} />
        </div>
      </section>

      {/* Featured Projects */}
      <section className={`section ${styles.featured} ${styles.snapSection}`}>
          <SectionHeading
            title="Featured Works"
            subtitle="A few things I've built recently that I'm proud of."
          />
          <div className={styles.projectLoopWrapper}>
            <LogoLoop
              logos={projectLogos}
              speed={40}
              direction="left"
              logoHeight={280}
              gap={32}
              hoverSpeed={0}
              fadeOut
              fadeOutColor="var(--color-bg-alt)"
              ariaLabel="Featured projects"
            />
          </div>
          <div style={{ textAlign: 'left' }}>
            <Button href="/portfolio" variant="secondary">View All Projects →</Button>
          </div>
      </section>

      {/* Tech Stack */}
      <section className={`section ${styles.snapSection}`}>
          <SectionHeading
            title="Tools I Work With"
            subtitle="From modern frameworks like React and Next.js to robust databases and cloud platforms. These are the tools I reach for to build fast, scalable, and maintainable applications."
          />
          <div className={styles.logoLoopWrapper}>
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={48}
              gap={64}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              ariaLabel="Technologies I work with"
            />
          </div>
      </section>

      {/* About Snippet */}
      <section className={`section ${styles.featured} ${styles.snapSection}`}>
          <div className={styles.aboutSnippet}>
            <div className={styles.aboutText}>
              <SectionHeading
                title="A bit about me."
              />
              <p>
                I&apos;m a web developer with a passion for creating elegant solutions to
                complex problems. I enjoy the entire process from concept to deployment,
                and I&apos;m always looking to learn new technologies and improve my craft.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new tech, contributing
                to projects, or working on the next big idea.
              </p>
              <Button href="/about" variant="secondary">Learn More →</Button>
            </div>
            <motion.div
              className={styles.aboutImage}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/boxing.png"
                alt="Tommy boxing"
                width={400}
                height={400}
                className={styles.aboutPhoto}
              />
            </motion.div>
          </div>
      </section>
      </div>
    </>
  );
}
