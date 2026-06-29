type SubmissionPayload = Record<string, string>;

const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '3a58d877-389c-489c-99bb-5d1d8d271f80';

export async function submitWebsiteForm(payload: SubmissionPayload) {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      ...payload,
    }),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok || !result?.success) {
    throw new Error(result?.message || 'submission-failed');
  }

  return result;
}
