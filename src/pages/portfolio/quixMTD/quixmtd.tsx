import CaseStudyLayout from '@/components/CaseStudyLayout';
import { HiOutlineLightBulb, HiOutlineDocumentText, HiOutlineLink, HiOutlineCheckCircle, HiOutlineClipboardList, HiOutlineLockClosed } from 'react-icons/hi';

const project = {
  title: 'QuixMTD',
  heroLabel: 'Web Application',
  tagline: 'The only 100% agnostic MTD bridging software on the market. No accounting knowledge required. Upload your messy spreadsheet with rough descriptions and we automatically categorise everything into the correct HMRC boxes, validate the data, and submit your income tax return directly.',
  liveUrl: 'https://www.quixmtd.co.uk/',
  description: [
    'Every other Making Tax Digital solution requires users to pre-categorise transactions, understand accounting terminology, and map expenses to specific HMRC boxes. QuixMTD takes a completely different approach. It\'s the only fully agnostic bridging software on the market. Users upload their existing spreadsheets with rough descriptions like "boiler repair" or "Screwfix", and the system automatically categorises everything into the correct HMRC boxes.',
    'The technical challenge was building an intelligent categorisation engine integrated with HMRC\'s OAuth 2.0 authentication flow and MTD submission APIs. The entire pipeline, from spreadsheet parsing and fuzzy-matching categorisation to validation and direct HMRC submission, was built to require zero accounting knowledge from the end user.',
  ],
  tags: ['React', 'Express', 'HMRC API', 'OAuth 2.0', 'PostgreSQL'],
  features: [
    { icon: <HiOutlineLightBulb />, title: 'Smart Categorisation', description: 'Automatically maps rough transaction descriptions to the correct HMRC income tax categories. No accounting knowledge needed.' },
    { icon: <HiOutlineDocumentText />, title: 'Spreadsheet Ingestion', description: 'Parses messy, real-world spreadsheets with flexible column detection and data normalisation.' },
    { icon: <HiOutlineLink />, title: 'HMRC API Integration', description: 'Full OAuth 2.0 flow with HMRC\'s MTD APIs for secure, direct income tax return submission.' },
    { icon: <HiOutlineCheckCircle />, title: 'Confirm & Submit', description: 'Users review auto-categorised transactions and confirm before submission. The entire flow takes minutes.' },
    { icon: <HiOutlineClipboardList />, title: 'Submission History', description: 'Complete audit trail of all past submissions with status tracking and HMRC receipt references.' },
    { icon: <HiOutlineLockClosed />, title: 'Secure Authentication', description: 'Government-grade OAuth 2.0 authentication protecting sensitive taxpayer data throughout.' },
  ],
  learnings: [
    'Designing an intelligent categorisation system that handles ambiguous, real-world input data.',
    'Implementing OAuth 2.0 authentication flows with government APIs and handling token refresh cycles.',
    'Building robust spreadsheet parsing that gracefully handles inconsistent formats and missing data.',
    'Creating interfaces that abstract away complexity, making a regulation-heavy process feel effortless.',
    'Structuring a full submission pipeline with rollback handling and error recovery at each stage.',
    'Writing comprehensive test suites for financial data transformations where accuracy is critical.',
    'Designing audit logging systems to maintain a clear trail of all submissions and modifications.',
    'Building rate-limited API integrations that respect third-party service constraints without blocking the user.',
    'Managing complex date-range queries across overlapping tax periods and financial quarters.',
    'Architecting a modular plugin system so new HMRC obligation types can be added without touching core logic.',
  ],
  prevProject: { title: 'MyPropertyPal', href: '/portfolio/mypropertypal' },
  nextProject: undefined,
};

export default function QuixMTDPage() {
  return <CaseStudyLayout project={project} />;
}
