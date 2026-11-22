'use client';

import { useRef, useState } from 'react';

/**
 * Client half of lib/spam.ts. Render `honeypot` inside the form and spread
 * `spamFields()` into the request body.
 */
export function useSpamGuard() {
  const [startedAt] = useState(() => Date.now());
  const ref = useRef<HTMLInputElement>(null);

  const honeypot = (
    <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
      <label>
        Leave this field empty
        <input ref={ref} type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );

  const spamFields = () => ({ website: ref.current?.value ?? '', formStartedAt: startedAt });

  return { honeypot, spamFields };
}

/** Posts a form to /api/submit. Throws if the server reports a failure. */
export async function submitForm(formType: string, data: Record<string, unknown>) {
  const res = await fetch('/api/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ formType, ...data }),
  });
  if (!res.ok) throw new Error('Submission failed');
}
