import CaseStudyLayout from '@/components/CaseStudyLayout';
import { HiOutlineHome, HiOutlineChatAlt2, HiOutlineDocumentText, HiOutlineShieldCheck, HiOutlineBell, HiOutlineCash, HiOutlineClipboardCheck, HiOutlineUserGroup, HiOutlineLightningBolt } from 'react-icons/hi';

const project = {
  title: 'MyPropertyPal',
  heroLabel: 'Web Application',
  tagline: 'The all-in-one property management platform built for UK landlords who are sick of spreadsheets, missed rent, and chasing tenants. Manage every property, tenant, and document from a single dashboard. Track rent and expenses automatically, stay compliant without the stress, and save 10+ hours a week. This project has since been shut down.',
  description: [
    'Every landlord knows the pain of juggling spreadsheets, emails, WhatsApp threads, and scattered documents across multiple properties. MyPropertyPal was built to replace all of that with one clean, modern dashboard. Landlords could manage their entire portfolio, from rent collection and expense tracking to compliance certificates and tenant communication, without ever touching a spreadsheet.',
    'The platform supported multiple user roles with isolated data access, a built-in messaging system to replace informal channels, automated compliance tracking with expiry reminders for gas safety and EPCs, and a full maintenance request workflow. A built-in AI assistant helped landlords with tenant queries and property insights. The financial engine handled rent tracking, receipt scanning with auto-categorisation, and was built to be Making Tax Digital ready.',
  ],
  tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Node.js', 'Stripe', 'AI'],
  features: [
    { icon: <HiOutlineHome />, title: 'Portfolio Dashboard', description: 'Track your entire portfolio from one screen. Rent collection, documents, compliance, and expenses all in one place.' },
    { icon: <HiOutlineChatAlt2 />, title: 'Tenant Messaging', description: 'No more WhatsApps, emails, or calls. Message tenants securely and keep a record of everything in one place.' },
    { icon: <HiOutlineShieldCheck />, title: 'Compliance Tracking', description: 'Track gas safety, EPCs, and all compliance in one dashboard with automatic alerts before anything expires.' },
    { icon: <HiOutlineCash />, title: 'Rent & Expense Tracking', description: 'Automated rent tracking, receipt scanning with AI categorisation, and expense logging ready for tax season.' },
    { icon: <HiOutlineClipboardCheck />, title: 'Maintenance Workflow', description: 'Tenants log issues, you update progress in a click. Everyone stays informed without extra calls.' },
    { icon: <HiOutlineLightningBolt />, title: 'AI Assistant', description: 'Instant help with any task, from rent queries to compliance questions. Your personal property management sidekick.' },
    { icon: <HiOutlineDocumentText />, title: 'Document Management', description: 'Tenancy agreements, inspection reports, and certificates all linked to the right tenant automatically.' },
    { icon: <HiOutlineBell />, title: 'Smart Notifications', description: 'Automated reminders for rent due dates, certificate expiries, maintenance updates, and tenant messages.' },
    { icon: <HiOutlineUserGroup />, title: 'Multi-Tenant System', description: 'Support for multiple landlords and tenants with role-based access and proper data isolation.' },
  ],
  learnings: [
    'Designing complex relational database schemas with Prisma ORM.',
    'Building multi-tenant applications with proper data isolation.',
    'Implementing file upload and document management systems.',
    'Creating notification systems and email integrations.',
    'Handling concurrent data access patterns in a shared landlord-tenant environment.',
    'Building search and filtering systems that scale across large property portfolios.',
    'Implementing role-specific dashboards that surface the most relevant data for each user type.',
    'Designing a maintenance request workflow with status tracking and automated reminders.',
    'Building a payment ledger system that reconciles rent, deposits, and overdue balances.',
    'Implementing PDF generation for tenancy agreements and inspection reports on the fly.',
  ],
  prevProject: { title: 'Midas', href: '/portfolio/midas' },
  nextProject: { title: 'QuixMTD', href: '/portfolio/quixMTD' },
};

export default function MyPropertyPalPage() {
  return <CaseStudyLayout project={project} />;
}
