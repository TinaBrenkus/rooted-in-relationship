import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import HandDrawnTree from '../components/HandDrawnTree';

export const metadata: Metadata = {
  title: 'Privacy Policy - Rooted In Relationship',
  description: 'What information Rooted In Relationship collects, and what it does not.',
};

const heading = { color: '#4a6b2a' };
const body = { color: '#7a9152' };

export default function PrivacyPage() {
  return (
    <div className="min-h-screen organic-bg">

      {/* Navigation */}
      <nav className="backdrop-blur-sm shadow-sm sticky top-0 z-50" style={{ backgroundColor: 'rgba(251, 237, 219, 0.95)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <HandDrawnTree size={40} />
              <span className="text-xl font-semibold font-crimson" style={heading}>
                Rooted In Relationship
              </span>
            </Link>

            <Link href="/" className="flex items-center space-x-2 transition hover:opacity-70" style={heading}>
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto organic-card p-8 sm:p-12 rounded-2xl organic-shadow">
          <h1 className="text-4xl sm:text-5xl font-bold mb-10 font-crimson" style={heading}>
            Privacy Policy
          </h1>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 font-crimson" style={heading}>We collect only:</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed" style={body}>
              <li>Name and contact information for consultation requests</li>
              <li>General information about your child&apos;s educational needs (no medical records)</li>
              <li>Payment information (processed securely through our third-party payment processor)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 font-crimson" style={heading}>We do NOT collect or store:</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed" style={body}>
              <li>Medical diagnoses or treatment information</li>
              <li>Educational records (IEPs, 504 plans, assessments)</li>
              <li>Detailed case notes on our website</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4 font-crimson" style={heading}>Questions?</h2>
            <p className="text-lg leading-relaxed" style={body}>
              If you have any questions about this privacy policy or the information you&apos;ve shared, please email{' '}
              <a href="mailto:rootedinrelationship@outlook.com" className="underline underline-offset-2 hover:opacity-70" style={heading}>
                rootedinrelationship@outlook.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
