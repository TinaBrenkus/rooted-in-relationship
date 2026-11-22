import type { Metadata } from 'next';
import ApproachShell, { BROWN, Card, GREEN, H2, H3, P, SAGE } from '../ApproachShell';

export const metadata: Metadata = {
  title: 'Evidence-Based - Rooted In Relationship',
  description:
    'The research behind our work: Positive Behavior Supports, Collaborative & Proactive Solutions, the Mandt System, Polyvagal Theory, the Neurosequential Model, and Applied Educational Neuroscience.',
};

/** "What It Is / The Relational Lens / Key Concept" rows inside a framework card. */
function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <p className="text-lg leading-relaxed mb-3" style={{ color: SAGE }}>
      <strong className="font-semibold" style={{ color: GREEN }}>{label}:</strong> {children}
    </p>
  );
}

function Framework({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <Card className="mb-6">
      <div className="flex items-start gap-4">
        <span
          className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full font-crimson text-xl font-semibold"
          style={{ backgroundColor: 'rgba(156, 106, 66, 0.12)', color: BROWN }}
        >
          {n}
        </span>
        <div className="min-w-0">
          <H3>{title}</H3>
          {children}
        </div>
      </div>
    </Card>
  );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2 mb-4 text-lg leading-relaxed" style={{ color: SAGE }}>
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h4 className="text-lg font-semibold mt-6 mb-2" style={{ color: GREEN }}>{children}</h4>;
}

const b = (term: string) => <strong className="font-semibold" style={{ color: GREEN }}>{term}</strong>;

export default function EvidenceBasedPage() {
  return (
    <ApproachShell slug="evidence-based" summary="Strategies rooted in research and proven to be effective">
      <H2>Core Evidence-Based Frameworks</H2>

      <Framework n={1} title="Positive Behavior Supports (PBS / PBIS)">
        <Row label="What It Is">
          An evidence-based framework designed to modify environments and teach replacement skills rather than relying
          on punitive measures.
        </Row>
        <Row label="The Relational Lens">
          Instead of using PBS purely for external reinforcement (like token charts), a relational consultant uses it to
          build proactive safety. By analyzing the antecedent (what happens before a behavior), adults adjust triggers
          and build environmental predictability so the child doesn&apos;t reach a breaking point.
        </Row>
        <Row label="Key Concept">
          Skill Building over Compliance. Teaching a child how to ask for a sensory break rather than punishing a
          meltdown.
        </Row>
      </Framework>

      <Framework n={2} title="Collaborative & Proactive Solutions (CPS)">
        <Row label="What It Is">
          Developed by Dr. Ross Greene, this model operates on the core philosophy: &ldquo;Kids do well if they
          can.&rdquo;
        </Row>
        <Row label="The Relational Lens">
          Challenging behavior occurs when expectations outstrip a child&apos;s lagging cognitive or emotional skills.
          Rather than imposing top-down solutions (Plan A) or dropping expectations completely (Plan C), adults use
          Plan B: a 3-step collaborative process (Empathy &rarr; Share Adult Concern &rarr; Collaborate on a Solution).
        </Row>
        <Row label="Key Concept">
          Doing WITH, not TO. Solving the underlying problem together so the behavior disappears naturally while trust
          increases.
        </Row>
      </Framework>

      <Framework n={3} title="The Mandt System®">
        <Row label="What It Is">
          A crisis prevention and de-escalation framework widely used in human services, education, and healthcare.
        </Row>
        <Row label="The Relational Lens">
          Built on the fundamental principle that &ldquo;In this place, and with these people, I feel safe.&rdquo; Mandt
          prioritizes building healthy relationships, clear communication, and emotional co-regulation long before
          crisis hits.
        </Row>
        <Row label="Key Concept">
          Radical Safety &amp; Dignity. De-escalating big nervous system reactions through a calm presence, active
          listening, and affirming feelings rather than asserting power.
        </Row>
      </Framework>

      <Framework n={4} title="Polyvagal Theory (Dr. Stephen Porges)">
        <P>
          Teaches parents how the nervous system detects threat vs. safety. Focuses on co-regulation—using an
          adult&apos;s calm physiological state to soothe a child&apos;s fight-or-flight response.
        </P>
      </Framework>

      <Framework n={5} title="The Neurosequential Model (Regulate, Relate, Reason)">
        <P>
          Developed by neuroscientist Dr. Bruce Perry, the Neurosequential Model (NM) is a neurobiology-informed
          framework for assessing and treating children who have experienced trauma, neglect, or developmental
          disruption.
        </P>
        <P>
          Crucially, it is not a single therapy or technique. Rather, it is a way of organizing a child&apos;s history and
          current brain functioning to select and sequence interventions in a way that aligns with how the human brain
          actually grows.
        </P>

        <SubHeading>Core Principles of the Model</SubHeading>

        <SubHeading>1. Bottom-Up Brain Development</SubHeading>
        <P>The brain develops sequentially from the bottom up:</P>
        <BulletList
          items={[
            <>{b('Brainstem / Midbrain (Lowest):')} Controls basic physiological regulation, autonomic functions, and sensory integration.</>,
            <>{b('Limbic System (Middle):')} Manages emotional regulation, attachment, and relational connection.</>,
            <>{b('Cortex (Highest):')} Controls abstract thinking, logic, reasoning, and speech.</>,
          ]}
        />
        <P>
          If a child experiences severe stress or neglect early in life, the lower, foundational regions of the brain
          can become disorganized or dysregulated.
        </P>

        <SubHeading>2. The Core Mantra: &ldquo;Regulate, Relate, Reason&rdquo;</SubHeading>
        <P>
          Because higher areas of the brain depend on lower areas functioning smoothly, you cannot reason with a child
          whose lower brain is in a state of alarm. Interventions must follow a specific order:
        </P>
        <BulletList
          items={[
            <>{b('Regulate (Brainstem):')} First, calm the nervous system through patterned, rhythmic sensory input (e.g., walking, swinging, music, deep breathing).</>,
            <>{b('Relate (Limbic):')} Next, offer attuned emotional connection and relational safety (e.g., warm voice, eye level, empathetic validation).</>,
            <>{b('Reason (Cortex):')} Only after the child is calm and connected can they reflect on behavior, learn lessons, or engage in problem-solving.</>,
          ]}
        />

        <SubHeading>3. The &ldquo;6 R&apos;s&rdquo; for Healing</SubHeading>
        <P>
          For an intervention or routine to change the brain (neuroplasticity), Dr. Perry emphasizes that experiences
          must be:
        </P>
        <BulletList
          items={[
            <>{b('Rhythmic')} (patterned bodily rhythm)</>,
            <>{b('Relational')} (offered within a safe relationship)</>,
            <>{b('Repetitive')} (consistent over time)</>,
            <>{b('Relevant')} (matched to their developmental age, not chronological age)</>,
            <>{b('Rewarding')} (pleasurable)</>,
            <>{b('Respectful')} (honoring the child and family)</>,
          ]}
        />

        <SubHeading>What this means:</SubHeading>
        <P>
          The Neurosequential Model provides the ultimate scientific rationale for why &ldquo;connection before
          correction&rdquo; works. It proves that trying to talk or discipline a child out of a meltdown (using the
          Cortex) while their sensory system is in fight-or-flight (the Brainstem) is neurobiologically impossible.
        </P>
      </Framework>

      <Framework n={6} title="Applied Educational Neuroscience (AEN) (Dr. Lori Desautels)">
        <P>
          Focuses on brain-aligned strategies in homes and classrooms, teaching adults how to use routine, rhythmic
          sensory input, and attachment to calm the lower centers of a child&apos;s brain.
        </P>
      </Framework>

      <H2>What This Means</H2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <H3>For Parents</H3>
          <P>
            &ldquo;We don&apos;t use &lsquo;one-size-fits-all&rsquo; discipline. We combine neurobiology, de-escalation
            research (like Mandt), and collaborative problem-solving to help your child feel safe enough to learn new
            behaviors.&rdquo;
          </P>
        </Card>
        <Card>
          <H3>For Educators</H3>
          <P>
            &ldquo;Our consulting merges Tier 1 and Tier 2 Positive Behavior Supports with trauma-informed co-regulation
            tools—reducing classroom disruptions while preserving teacher-student relationships.&rdquo;
          </P>
        </Card>
      </div>
    </ApproachShell>
  );
}
