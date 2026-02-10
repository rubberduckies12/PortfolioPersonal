import CaseStudyLayout from '@/components/CaseStudyLayout';
import { HiOutlineLightBulb, HiOutlineTrendingUp, HiOutlineChartBar, HiOutlineGlobe, HiOutlineStar, HiOutlineAcademicCap, HiOutlineDeviceMobile, HiOutlineShieldCheck, HiOutlineSparkles } from 'react-icons/hi';

const project = {
  title: 'Gro',
  heroLabel: 'Mobile Application',
  tagline: 'Goals. Returns. Outcomes. The AI-powered investing platform that actually gets you. Set your goal, watch AI build your path, achieve your outcome. Professional-grade algorithms wrapped in game-like simplicity, built for your phone and optimised for your goals. Still in development.',
  liveUrl: 'https://growebpage.vercel.app/',
  description: [
    'Most investing platforms assume you already know what you\'re doing. Gro flips that entirely. Users tell us what they want in plain English, whether that\'s a house deposit, early retirement, or a dream holiday, and our AI builds a personalised portfolio optimised for their timeline and risk tolerance in under 3 minutes. The same quantitative models that power hedge funds, from Black-Scholes option pricing to Monte Carlo simulations, are wrapped in an interface anyone can use.',
    'The platform gamifies financial progress with XP rewards, streak tracking, daily check-ins, and interactive financial literacy courses. Every £100 invested plants a tree through our non-profit partner, with a live impact dashboard tracking CO₂ offset and a global forest map. Native iOS and Android apps built with Flutter make investing fit between Instagram and your morning commute, not require a laptop and a quiet afternoon.',
  ],
  tags: ['Flutter', 'Dart', 'Next.js', 'TypeScript', 'OpenAI', 'Alpaca API', 'Firebase', 'Node.js'],
  features: [
    { icon: <HiOutlineLightBulb />, title: 'AI Portfolio Builder', description: 'Tell us your goal in plain English. GPT-4 translates it into an optimised investment strategy with 5 custom portfolios to choose from.' },
    { icon: <HiOutlineTrendingUp />, title: 'Goal-Based Investing', description: 'House deposit, retirement, freedom fund. Set your target and timeline, and AI builds your personalised roadmap in under 3 minutes.' },
    { icon: <HiOutlineChartBar />, title: 'Monte Carlo Simulations', description: 'Stress-test your portfolio across thousands of market scenarios. See how your strategy performs in bull markets, bear markets, and everything in between.' },
    { icon: <HiOutlineStar />, title: 'XP & Gamification', description: 'Earn XP for daily check-ins, milestones, and financial literacy modules. Spend it on fractional shares, bonus tree plantings, and premium insights.' },
    { icon: <HiOutlineAcademicCap />, title: 'Goal Training Courses', description: 'Interactive, gamified courses tailored to your goals. Bite-sized lessons you can finish on your commute that make the AI smarter.' },
    { icon: <HiOutlineGlobe />, title: 'Plant Trees As You Invest', description: 'Every £100 invested plants a tree. Track your environmental impact with a live dashboard showing CO₂ offset and a global forest map.' },
    { icon: <HiOutlineDeviceMobile />, title: 'Mobile-First Platform', description: 'Built with Flutter for iOS and Android. Face ID, widgets, push notifications, and biometric auth. Investing that fits in your pocket.' },
    { icon: <HiOutlineShieldCheck />, title: 'FCA-Compliant Infrastructure', description: 'Institutional-grade trade execution via Alpaca API, bank-level security, regulatory compliance, and full transparency built in.' },
    { icon: <HiOutlineSparkles />, title: 'Community & Leaderboards', description: 'Anonymous leaderboards, achievement badges, streak rewards, and a community of goal-focused investors keeping each other motivated.' },
  ],
  learnings: [
    'Integrating OpenAI APIs for natural language goal matching and personalised financial strategy generation.',
    'Building real-time portfolio tracking with WebSocket connections and live market data feeds.',
    'Implementing Monte Carlo simulations and Modern Portfolio Theory for goal-based asset allocation.',
    'Designing gamification systems with XP, streaks, achievements, and reward redemption mechanics.',
    'Building cross-platform mobile apps with Flutter and Dart, including biometric auth and push notifications.',
    'Integrating Alpaca API for institutional-grade trade execution, custody, and clearing.',
    'Designing interactive financial literacy courses with adaptive questioning and progress tracking.',
    'Building an environmental impact dashboard with real-time tree planting metrics and CO₂ calculations.',
    'Implementing FCA-compliant infrastructure with proper KYC flows, data protection, and audit trails.',
    'Creating a community leaderboard system with anonymous ranking and streak-based reward tiers.',
  ],
  prevProject: { title: 'ApprentiLink', href: '/portfolio/apprentilink' },
  nextProject: { title: 'Midas', href: '/portfolio/midas' },
};

export default function GroPage() {
  return <CaseStudyLayout project={project} />;
}
