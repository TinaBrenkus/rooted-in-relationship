import { Resend } from 'resend';

/**
 * Form notifications go out through Resend from the verified
 * rootedinrelationship.com domain.
 *
 * Environment variables (set in Vercel and .env.local):
 *   RESEND_API_KEY   - the "rooted-in-relationship" key in Resend
 *   FORM_TO_EMAIL    - the inbox that receives form submissions
 *   FORM_FROM_EMAIL  - optional; defaults to forms@rootedinrelationship.com
 */
const FROM_EMAIL =
  process.env.FORM_FROM_EMAIL || 'Rooted In Relationship <forms@rootedinrelationship.com>';

export interface FormField {
  label: string;
  value: string | undefined | null;
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Sends one notification email. Throws on any failure so the route can return a 500. */
export async function sendFormEmail(opts: {
  subject: string;
  heading: string;
  fields: FormField[];
  replyTo?: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.FORM_TO_EMAIL;
  if (!apiKey || !to) {
    throw new Error('Email is not configured: set RESEND_API_KEY and FORM_TO_EMAIL');
  }

  const shown = opts.fields.filter(f => f.value != null && String(f.value).trim() !== '');

  const rows = shown
    .map(
      f => `<tr>
        <td style="padding:10px 16px;font-weight:600;color:#4a6b2a;white-space:nowrap;vertical-align:top;">${escapeHtml(f.label)}</td>
        <td style="padding:10px 16px;color:#3a3a2e;white-space:pre-wrap;">${escapeHtml(String(f.value))}</td>
      </tr>`
    )
    .join('');

  const html = `<!doctype html><html><body style="margin:0;background:#fbeddb;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:560px;margin:24px auto;background:#ffffff;border:1px solid #e1d0bc;border-radius:12px;overflow:hidden;">
      <div style="background:#4a6b2a;padding:18px 22px;">
        <p style="margin:0;color:#fbeddb;font-size:18px;font-weight:700;">${escapeHtml(opts.heading)}</p>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:15px;">${rows}</table>
      <div style="padding:14px 22px;border-top:1px solid #f1e6d6;color:#7a9152;font-size:12px;">
        Sent from the Rooted In Relationship website${opts.replyTo ? ' &middot; Reply to this email to answer them directly' : ''}
      </div>
    </div>
  </body></html>`;

  const text =
    `${opts.heading}\n\n` +
    shown.map(f => `${f.label}: ${String(f.value)}`).join('\n') +
    `\n\nSent from the Rooted In Relationship website`;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to,
    subject: opts.subject,
    replyTo: opts.replyTo,
    html,
    text,
  });

  if (error) {
    throw new Error(`Resend error: ${error.message || JSON.stringify(error)}`);
  }
}
