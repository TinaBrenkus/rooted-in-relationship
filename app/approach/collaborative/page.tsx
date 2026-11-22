import type { Metadata } from 'next';
import ApproachShell, { BROWN, Card, GREEN, H2, H3, P, SAGE, TermList } from '../ApproachShell';

export const metadata: Metadata = {
  title: 'Collaborative - Rooted In Relationship',
  description:
    'Collaborative practice: co-designing solutions with families and educators, and teaching adults to solve problems with the child, not for them.',
};

const PILLARS = [
  {
    pillar: 'Curiosity over Judgment',
    applies: 'Replacing assumptions with open questions ("Help me understand what happens right before bedtime...").',
    impact: 'Helps adults feel supported rather than blamed or evaluated.',
  },
  {
    pillar: 'Joint Hypothesis Testing',
    applies: 'Treating strategies as experiments ("Let\'s try this routine change for 2 weeks and review what worked.").',
    impact: 'Reduces stress when a strategy needs tweaking or refinement.',
  },
  {
    pillar: 'Transparency & Equal Voice',
    applies: 'Sharing the "why" behind every neurodevelopmental or relational recommendation.',
    impact: 'Demystifies behavior and builds trust fast.',
  },
  {
    pillar: 'Cultural & Family Alignment',
    applies: 'Honoring family dynamics, sensory needs, and unique household norms.',
    impact: 'Ensures recommendations are realistic and sustainable.',
  },
];

const CYCLE = [
  {
    title: 'Empathy & Investigation',
    tagline: 'Understanding all perspectives.',
    text: 'Gather input from family, teachers, and (where appropriate/possible) the child. Identify the specific unresolved problems and lagging skills causing friction.',
  },
  {
    title: 'Define Shared Concerns',
    tagline: 'Finding common ground.',
    text: "Map out both the adult's concerns (e.g., safety, routines, school expectations) and the child's concerns (e.g., sensory overwhelm, feeling rushed, lack of choice).",
  },
  {
    title: 'Co-Create & Test Solutions',
    tagline: 'Iterative implementation.',
    text: 'Design a realistic, connection-centered action plan that addresses both sets of concerns. Review progress regularly and adapt together.',
  },
];

const SAYINGS = [
  "We don't fix children or judge parents—we solve hard problems together.",
  "Your child isn't an opponent to manage; they are a partner in finding what works.",
  'Less power struggle, more problem-solving.',
  "Behavior isn't a battle to win; it's a puzzle to solve together.",
  "Working with your child's brain, not against their spirit.",
  'Connection before correction.',
  'Rooted in relationship. Backed by science.',
  'Calm. Connected. Collaborative.',
  "Shift from 'My child is giving me a hard time' to 'My child is having a hard time.'",
];

export default function CollaborativePage() {
  return (
    <ApproachShell slug="collaborative" summary="Working together with families and educators as partners">
      <P className="mt-8">
        In a relationship-first child behavior consulting business, collaborative practice means moving away from the
        traditional &ldquo;expert-knows-best&rdquo; dynamic. Instead, I position myself as a co-thinker who works with
        families and educators—while teaching adults how to collaborate with the child.
      </P>
      <P>
        It operates on two distinct levels: Consultant-to-Adult Collaboration and Adult-to-Child Collaboration.
      </P>

      <H2>The Two Levels of Collaborative Practice</H2>
      <div className="space-y-6">
        <Card>
          <H3>Level 1: Consultant &rarr; Adult (Parent / Educator / Caregiver)</H3>
          <TermList
            items={[
              ['Co-Designing Solutions', "Rather than handing adults a rigid script, I combine my behavioral expertise with your deep knowledge of the child."],
              ['Shared Decision-Making', "Goals, boundaries, and routines are crafted together based on the family's values, culture, and capacity."],
              ['Empowerment over Dependency', "The goal is to build the adults' capacity and confidence so they can navigate future behavioral shifts without relying on a consultant."],
            ]}
          />
        </Card>
        <Card>
          <H3>Level 2: Adult &rarr; Child (Collaborative &amp; Proactive Solutions)</H3>
          <TermList
            items={[
              ['Problem-Solving With the Child', 'Moving away from top-down rules ("Plan A") or passive giving-in ("Plan C"), adults invite the child into the process ("Plan B").'],
              ['Uncovering Lagging Skills', 'Instead of asking "How do I stop this behavior?", collaboration asks "What obstacle is getting in the child\'s way, and how can we solve it together?"'],
              ['Mutual Respect', 'Children are treated as experts on their own internal experience, giving them agency while holding safe, firm adult boundaries.'],
            ]}
          />
        </Card>
      </div>

      <H2>Core Pillars of Collaborative Practice</H2>
      {/* A table on wide screens; stacked cards on phones, where three columns won't fit. */}
      <div className="hidden md:block organic-card rounded-2xl organic-shadow overflow-hidden">
        <table className="w-full text-left">
          <thead style={{ backgroundColor: 'rgba(122, 145, 82, 0.12)' }}>
            <tr>
              {['Pillar', 'How It Applies in Your Practice', 'Adult Learner Impact'].map(h => (
                <th key={h} className="p-4 font-semibold font-crimson text-lg" style={{ color: GREEN }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PILLARS.map(row => (
              <tr key={row.pillar} style={{ borderTop: '1px solid #e1d0bc' }}>
                <td className="p-4 align-top font-semibold" style={{ color: GREEN }}>{row.pillar}</td>
                <td className="p-4 align-top leading-relaxed" style={{ color: SAGE }}>{row.applies}</td>
                <td className="p-4 align-top leading-relaxed" style={{ color: SAGE }}>{row.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="md:hidden space-y-4">
        {PILLARS.map(row => (
          <Card key={row.pillar}>
            <H3>{row.pillar}</H3>
            <p className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: BROWN }}>How It Applies in Your Practice</p>
            <P>{row.applies}</P>
            <p className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: BROWN }}>Adult Learner Impact</p>
            <P className="mb-0">{row.impact}</P>
          </Card>
        ))}
      </div>

      <H2>The 3-Step Collaborative Cycle</H2>
      <ol className="space-y-6">
        {CYCLE.map((step, i) => (
          <li key={step.title}>
            <Card>
              <div className="flex items-start gap-4">
                <span
                  className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full font-crimson text-xl font-semibold"
                  style={{ backgroundColor: 'rgba(156, 106, 66, 0.12)', color: BROWN }}
                >
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <H3>{step.title}: <span className="font-normal italic">{step.tagline}</span></H3>
                  <P className="mb-0">{step.text}</P>
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ol>

      <div className="mt-14 space-y-6 text-center">
        {SAYINGS.map(s => (
          <p key={s} className="text-xl sm:text-2xl font-crimson leading-snug" style={{ color: GREEN }}>
            &ldquo;{s}&rdquo;
          </p>
        ))}
      </div>
    </ApproachShell>
  );
}
