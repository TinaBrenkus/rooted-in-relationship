import type { Metadata } from 'next';
import ApproachShell, { H2, P, Quote, TermList } from '../ApproachShell';

export const metadata: Metadata = {
  title: 'Relationship-First - Rooted In Relationship',
  description:
    'A relationship-first approach views behavior as communication and puts the adult-child connection first: regulate, connect, then build new skills.',
};

export default function RelationshipFirstPage() {
  return (
    <ApproachShell slug="relationship-first" summary="Building trust and connection before addressing behaviors">
      <P className="mt-8">
        A relationship-first approach to child behavior consulting flips traditional behavior management on its head.
        Instead of focusing on controlling or eliminating &ldquo;bad&rdquo; behaviors through external rewards and
        punishments, it views behavior as communication and prioritizes the adult-child connection as the primary
        driver for regulation and growth. The approach is to help a child regulate, build deep connections, then learn
        new skills to meet their needs.
      </P>

      <Quote cite="Dr. James Comer">No significant learning can occur without a significant relationship.</Quote>

      <H2>Core Philosophy &amp; Guiding Principles</H2>
      <TermList
        items={[
          ['Behavior as Communication', 'Challenging behaviors are symptoms of unmet needs, lagging skills, or nervous system dysregulation—not willful disobedience.'],
          ['Connection Before Correction', 'A child cannot access higher-level thinking or behavioral adjustment until they feel safe, seen, and connected.'],
          ['Co-Regulation to Self-Regulation', 'Children learn to manage big emotions by repeatedly experiencing calm, attuned support from an adult.'],
          ['Collaboration over Control', 'Solutions are created with the child rather than imposed on them, building internal motivation and problem-solving skills.'],
        ]}
      />
    </ApproachShell>
  );
}
