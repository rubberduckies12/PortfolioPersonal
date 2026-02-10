import Head from 'next/head';
import SectionHeading from '@/components/SectionHeading';

export default function AdminPage() {
  return (
    <>
      <Head>
        <title>Admin | Tommy Rowe Portfolio</title>
      </Head>
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Admin"
            title="Content Management"
            subtitle="This area is under construction. Content management features coming soon."
            center
          />
          <div style={{
            textAlign: 'center',
            fontSize: '4rem',
            padding: 'var(--space-3xl) 0',
          }}>
            🚧
          </div>
        </div>
      </section>
    </>
  );
}
