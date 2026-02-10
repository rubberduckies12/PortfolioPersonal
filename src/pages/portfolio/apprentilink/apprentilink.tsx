import CaseStudyLayout from '@/components/CaseStudyLayout';
import { HiOutlineSwitchHorizontal, HiOutlineCheckCircle, HiOutlineUserGroup, HiOutlineLockClosed, HiOutlineLightBulb, HiOutlineBadgeCheck, HiOutlineBell, HiOutlineFilter, HiOutlineShieldCheck } from 'react-icons/hi';

const project = {
  title: 'ApprentiLink',
  heroLabel: 'Web Application',
  tagline: 'An apprentice clearing platform being built for the Airbus Defence and Space apprenticeship programme. Automatic matching between job roles and pre-vetted apprentice candidates. Candidates swipe to like a job, companies swipe to like a candidate. When both sides match, contact details are shared with user permission to initiate the interview process. Still in development.',
  description: [
    'The traditional apprenticeship recruitment process is slow, manual, and full of friction. ApprentiLink replaces that with a clearing-style matching system inspired by how modern platforms connect people. Airbus Defence and Space has a structured apprenticeship programme with dozens of roles across engineering, manufacturing, and technology. ApprentiLink gives each side of the process, candidates and hiring managers, a streamlined interface to find their best match without the noise of traditional job boards.',
    'The matching algorithm analyses candidate profiles against job requirements, factoring in skills, qualifications, location preferences, and programme-specific criteria. Candidates browse roles and express interest with a simple tick. Companies review pre-vetted candidate profiles and do the same. When both sides match, the platform shares contact details with explicit user permission so the interview process can begin immediately. Every candidate on the platform is pre-vetted through the Airbus programme, eliminating unqualified applications entirely.',
    'The system is designed to scale across multiple intake cycles and programme cohorts. Role-based access ensures candidates only see relevant opportunities, hiring managers only see qualified applicants, and programme administrators have full oversight of the matching pipeline. The entire process, from first expression of interest to interview initiation, is tracked with a full audit trail.',
  ],
  tags: ['React', 'Node.js', 'PostgreSQL', 'Express', 'REST API', 'Matching Algorithm'],
  features: [
    { icon: <HiOutlineSwitchHorizontal />, title: 'Two-Way Matching', description: 'Candidates like jobs, companies like candidates. When both sides express interest, a match is created and the interview process begins.' },
    { icon: <HiOutlineLightBulb />, title: 'Smart Matching Algorithm', description: 'Analyses skills, qualifications, location, and programme criteria to surface the most relevant opportunities for each candidate.' },
    { icon: <HiOutlineBadgeCheck />, title: 'Pre-Vetted Candidates', description: 'Every candidate on the platform is pre-screened through the Airbus apprenticeship programme. No unqualified applications, no noise.' },
    { icon: <HiOutlineUserGroup />, title: 'Role-Based Access', description: 'Candidates, hiring managers, and programme administrators each get a tailored interface with appropriate permissions and visibility.' },
    { icon: <HiOutlineLockClosed />, title: 'Permission-Based Sharing', description: 'Contact details are only shared when both sides match and the candidate grants explicit permission. Privacy by design throughout.' },
    { icon: <HiOutlineFilter />, title: 'Advanced Filtering', description: 'Filter candidates by skills, qualifications, availability, and location. Filter roles by discipline, department, and programme cohort.' },
    { icon: <HiOutlineBell />, title: 'Match Notifications', description: 'Instant alerts when a new match is confirmed. Both parties are notified with next steps to initiate the interview process.' },
    { icon: <HiOutlineCheckCircle />, title: 'Pipeline Tracking', description: 'Full visibility of every expression of interest, pending match, and confirmed match across the entire programme intake cycle.' },
    { icon: <HiOutlineShieldCheck />, title: 'Audit Trail', description: 'Complete log of all matching activity, permission grants, and contact sharing for programme compliance and oversight.' },
  ],
  learnings: [
    'Designing a two-sided matching algorithm that balances candidate preferences with employer requirements.',
    'Building a permission-based data sharing system where personal information is only revealed on mutual consent.',
    'Implementing role-based access control across three distinct user types with different data visibility rules.',
    'Designing database schemas that handle multiple intake cycles, cohorts, and programme structures cleanly.',
    'Building filtering and search systems that surface relevant matches without overwhelming either side.',
    'Creating a notification pipeline that alerts both parties when a match is confirmed with actionable next steps.',
    'Structuring API endpoints around the matching lifecycle: express interest, pending, matched, interview initiated.',
    'Designing onboarding flows that guide candidates and hiring managers through profile setup with minimal friction.',
    'Building an admin dashboard with full oversight of matching activity, pipeline health, and programme metrics.',
    'Working with stakeholders at Airbus to translate complex programme requirements into a simple, intuitive interface.',
  ],
  prevProject: undefined,
  nextProject: { title: 'Gro', href: '/portfolio/gro' },
};

export default function ApprentiLinkPage() {
  return <CaseStudyLayout project={project} />;
}
