export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_RECEIVER_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'ParoTeen Website <onboarding@resend.dev>';

  if (!resendApiKey || !toEmail) {
    return res.status(500).json({ error: 'Email settings are missing' });
  }

  const { name, email, organization, service, message } = req.body || {};
  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const html = `
    <h2>New Contact Request</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Organization:</strong> ${organization || 'Not provided'}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Message:</strong><br/>${String(message).replace(/\n/g, '<br/>')}</p>
  `;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `New contact request from ${name}`,
      html
    })
  });

  if (!response.ok) {
    return res.status(502).json({ error: 'Failed to send email' });
  }

  return res.status(200).json({ ok: true });
}
