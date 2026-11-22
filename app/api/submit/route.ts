import { NextResponse } from 'next/server';
import { sendFormEmail, type FormField } from '@/lib/email';
import { detectSpam } from '@/lib/spam';

type Data = Record<string, unknown>;
const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');

/** What each form sends, and how its notification email reads. */
const FORMS: Record<
  string,
  { required: string[]; textFields: string[]; build: (d: Data) => { subject: string; heading: string; fields: FormField[] } }
> = {
  consultation: {
    required: ['name', 'email', 'description'],
    textFields: ['name', 'phone', 'description'],
    build: d => ({
      subject: `Consultation request: ${str(d.name)}`,
      heading: 'New Consultation Request',
      fields: [
        { label: 'Name', value: str(d.name) },
        { label: 'Email', value: str(d.email) },
        { label: 'Phone', value: str(d.phone) },
        { label: 'Best time', value: str(d.bestTime) },
        { label: 'Would like help with', value: str(d.description) },
      ],
    }),
  },
  library: {
    required: ['email'],
    textFields: [],
    build: d => ({
      subject: `Resource Library signup: ${str(d.email)}`,
      heading: 'New Resource Library Signup',
      fields: [{ label: 'Email', value: str(d.email) }],
    }),
  },
  'quick-request': {
    required: ['email'],
    textFields: ['challenge'],
    build: d => ({
      subject: `Custom resources request: ${str(d.email)}`,
      heading: 'New Custom Resources Request (homepage)',
      fields: [
        { label: 'I am a', value: str(d.role) },
        { label: 'Biggest challenge', value: str(d.challenge) },
        { label: 'Email', value: str(d.email) },
      ],
    }),
  },
  'custom-support': {
    required: ['email'],
    textFields: ['childAge', 'challenge', 'situation'],
    build: d => ({
      subject: `Custom support request: ${str(d.email)}`,
      heading: `New Custom Support Request${str(d.source) ? ` (${str(d.source)} page)` : ''}`,
      fields: [
        { label: 'I am a', value: str(d.role) },
        { label: "Child's age", value: str(d.childAge) },
        { label: 'Main challenge', value: str(d.challenge) },
        { label: 'Resource type', value: str(d.resourceType) },
        { label: 'Email', value: str(d.email) },
        { label: 'Situation', value: str(d.situation) },
      ],
    }),
  },
};

export async function POST(request: Request) {
  let data: Data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const form = FORMS[str(data.formType)];
  if (!form) return NextResponse.json({ error: 'Unknown form.' }, { status: 400 });

  // Spam gets a normal success response so bots have nothing to adapt to.
  const spamReason = detectSpam(data, form.textFields);
  if (spamReason) {
    console.warn(`${data.formType} spam dropped: ${spamReason}`);
    return NextResponse.json({ success: true });
  }

  if (form.required.some(field => !str(data[field]))) {
    return NextResponse.json({ error: 'Please fill in the required fields.' }, { status: 400 });
  }

  try {
    const email = form.build(data);
    await sendFormEmail({ ...email, replyTo: str(data.email) || undefined });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`${data.formType} form failed to send:`, error);
    return NextResponse.json({ error: 'Failed to send.' }, { status: 500 });
  }
}
