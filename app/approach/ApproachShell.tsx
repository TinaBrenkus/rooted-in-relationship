import Link from 'next/link';
import { ArrowLeft, ArrowRight, Heart, Star, Users } from 'lucide-react';
import HandDrawnTree from '@/app/components/HandDrawnTree';

/** The three principles, in homepage order. Cards and prev/next links read from here. */
export const PRINCIPLES = [
  { slug: 'relationship-first', title: 'Relationship-First', icon: Heart, iconColor: '#9c6a42' },
  { slug: 'evidence-based', title: 'Evidence-Based', icon: Star, iconColor: '#c9a88d' },
  { slug: 'collaborative', title: 'Collaborative', icon: Users, iconColor: '#7a9152' },
] as const;

export type PrincipleSlug = (typeof PRINCIPLES)[number]['slug'];

export const GREEN = '#4a6b2a';
export const SAGE = '#7a9152';
export const BROWN = '#9c6a42';

/* Small typographic building blocks so the three pages stay consistent. */

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold mt-14 mb-6 font-crimson" style={{ color: GREEN }}>
      {children}
    </h2>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xl font-semibold mb-3 font-crimson" style={{ color: GREEN }}>
      {children}
    </h3>
  );
}

export function P({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-lg leading-relaxed mb-4 ${className}`} style={{ color: SAGE }}>
      {children}
    </p>
  );
}

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`organic-card p-6 sm:p-8 rounded-2xl organic-shadow ${className}`}>{children}</div>;
}

/** A term followed by its explanation, e.g. "Behavior as Communication: ..." */
export function TermList({ items }: { items: [string, React.ReactNode][] }) {
  return (
    <ul className="space-y-4">
      {items.map(([term, text]) => (
        <li key={term} className="text-lg leading-relaxed pl-4" style={{ color: SAGE, borderLeft: `3px solid #e1d0bc` }}>
          <strong className="font-semibold" style={{ color: GREEN }}>{term}:</strong> {text}
        </li>
      ))}
    </ul>
  );
}

export function Quote({ children, cite }: { children: React.ReactNode; cite?: string }) {
  return (
    <figure className="my-10 text-center px-4">
      <blockquote className="text-2xl sm:text-3xl font-crimson leading-snug" style={{ color: GREEN }}>
        &ldquo;{children}&rdquo;
      </blockquote>
      {cite && (
        <figcaption className="mt-3 text-base" style={{ color: BROWN }}>
          &mdash; {cite}
        </figcaption>
      )}
    </figure>
  );
}

export default function ApproachShell({
  slug,
  summary,
  children,
}: {
  slug: PrincipleSlug;
  summary: string;
  children: React.ReactNode;
}) {
  const index = PRINCIPLES.findIndex(p => p.slug === slug);
  const current = PRINCIPLES[index];
  const prev = PRINCIPLES[index - 1];
  const next = PRINCIPLES[index + 1];
  const Icon = current.icon;

  return (
    <div className="min-h-screen organic-bg">

      {/* Navigation */}
      <nav className="backdrop-blur-sm shadow-sm sticky top-0 z-50" style={{ backgroundColor: 'rgba(251, 237, 219, 0.95)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <HandDrawnTree size={40} />
              <span className="text-xl font-semibold font-crimson" style={{ color: GREEN }}>
                Rooted In Relationship
              </span>
            </Link>
            <Link href="/#about" className="flex items-center space-x-2 transition hover:opacity-70" style={{ color: GREEN }}>
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-12 pb-4 px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full mb-6" style={{ backgroundColor: 'rgba(122, 145, 82, 0.1)' }}>
          <Icon className="w-6 h-6" style={{ color: current.iconColor }} />
          <span className="font-medium" style={{ color: GREEN }}>Our Approach</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-crimson" style={{ color: GREEN }}>
          {current.title}
        </h1>
        <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: SAGE }}>
          {summary}
        </p>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-3xl mx-auto">{children}</div>

        {/* Call to action */}
        <div className="max-w-3xl mx-auto mt-16 text-center p-8 rounded-2xl" style={{ backgroundColor: 'rgba(122, 145, 82, 0.1)' }}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 font-crimson" style={{ color: GREEN }}>
            Ready to take the next step?
          </h2>
          <Link
            href="/consultation"
            className="inline-block mt-3 text-white px-8 py-3 rounded-full transition-colors bg-[#4a6b2a] hover:bg-[#9c6a42]"
          >
            Request a Consultation
          </Link>
        </div>

        {/* Previous / next principle */}
        <div className="max-w-3xl mx-auto mt-10 flex justify-between gap-4">
          {prev ? (
            <Link href={`/approach/${prev.slug}`} className="flex items-center gap-2 transition hover:opacity-70" style={{ color: GREEN }}>
              <ArrowLeft className="w-4 h-4 shrink-0" />
              <span>{prev.title}</span>
            </Link>
          ) : <span />}
          {next && (
            <Link href={`/approach/${next.slug}`} className="flex items-center gap-2 text-right transition hover:opacity-70" style={{ color: GREEN }}>
              <span>{next.title}</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}
