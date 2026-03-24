const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',').map((value) => value.trim()) : [];

function setCorsHeaders(res, origin) {
  if (ALLOWED_ORIGINS.length > 0 && origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default async function handler(req, res) {
  const origin = req.headers.origin;
  setCorsHeaders(res, origin);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_RECEIVER_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'ParoTeen Website <onboarding@resend.dev>';

  if (!resendApiKey || !toEmail) {
    return res.status(500).json({ error: 'Server email settings are missing.' });
  }

  const { email } = req.body || {};

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  const html = `
    <h2>New Newsletter Subscription</h2>
    <p><strong>Email:</strong> ${email}</p>
  `;

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: 'New newsletter subscription',
      html
    })
  });

  if (!resendResponse.ok) {
    const errorPayload = await resendResponse.text();
    return res.status(502).json({ error: 'Failed to send email.', details: errorPayload });
  }

  return res.status(200).json({ ok: true });
}
