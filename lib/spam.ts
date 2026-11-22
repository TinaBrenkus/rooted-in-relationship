/**
 * Spam screening for the site's forms, the same approach as tinabrenkus.com.
 *
 * Each form sends two extra fields via useSpamGuard():
 *   - `website`: a hidden honeypot input that only bots fill in.
 *   - `formStartedAt`: when the form appeared; bots submit instantly, and
 *     scripts posting straight to the API don't send it at all.
 * Free-text fields are also checked for random mixed-case filler
 * ("qpnjGrnNMrFPJOOZ"), and the email for dot-stuffed Gmail addresses.
 *
 * Spam should get a normal success response so bots have nothing to adapt to.
 */

const MIN_FILL_MS = 3000;

function isGibberishToken(token: string): boolean {
  if (!/^[A-Za-z]{8,}$/.test(token)) return false;
  if (token === token.toUpperCase()) return false;
  return token.slice(1).replace(/[^A-Z]/g, '').length >= 3;
}

function hasGibberish(value: unknown): boolean {
  return typeof value === 'string' && value.split(/[^A-Za-z]+/).some(isGibberishToken);
}

function isDotStuffedGmail(email: unknown): boolean {
  if (typeof email !== 'string') return false;
  const match = email.trim().toLowerCase().match(/^([^@]+)@(gmail|googlemail)\.com$/);
  return !!match && (match[1].match(/\./g) || []).length >= 4;
}

/** Returns why a submission looks like spam, or null if it looks real. */
export function detectSpam(data: Record<string, unknown>, textFields: string[]): string | null {
  if (typeof data.website === 'string' && data.website.trim() !== '') return 'honeypot filled';

  const startedAt = Number(data.formStartedAt);
  if (!startedAt) return 'missing form timestamp';
  if (Date.now() - startedAt < MIN_FILL_MS) return 'submitted too fast';

  if (isDotStuffedGmail(data.email)) return 'dot-stuffed gmail';

  const junk = textFields.find(field => hasGibberish(data[field]));
  return junk ? `gibberish in ${junk}` : null;
}
