import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const parseBody = (req: any) =>
      new Promise<any>((resolve) => {
        let data = '';
        req.on('data', (chunk: Buffer) => {
          data += chunk.toString();
        });
        req.on('end', () => {
          try {
            resolve(data ? JSON.parse(data) : {});
          } catch {
            resolve({});
          }
        });
      });

    const sendResendEmail = async (payload: { subject: string; html: string; replyTo?: string }) => {
      const resendApiKey = env.RESEND_API_KEY;
      const toEmail = env.CONTACT_RECEIVER_EMAIL;
      const fromEmail = env.RESEND_FROM_EMAIL || 'ParoTeen Website <onboarding@resend.dev>';

      if (!resendApiKey || !toEmail) {
        return { ok: false, status: 500, error: 'Email settings are missing. Configure RESEND_API_KEY and CONTACT_RECEIVER_EMAIL.' };
      }

      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          subject: payload.subject,
          html: payload.html,
          reply_to: payload.replyTo
        })
      });

      if (!response.ok) {
        const details = await response.text();
        return { ok: false, status: 502, error: `Resend request failed: ${details}` };
      }

      return { ok: true, status: 200 };
    };

    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        {
          name: 'local-resend-api',
          configureServer(server) {
            server.middlewares.use('/api/newsletter', async (req, res) => {
              if (req.method !== 'POST') {
                res.statusCode = 405;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Method not allowed' }));
                return;
              }

              const body = await parseBody(req);
              if (!body?.email) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Email is required' }));
                return;
              }

              const result = await sendResendEmail({
                subject: 'New newsletter subscription',
                html: `<h2>New Newsletter Subscription</h2><p><strong>Email:</strong> ${body.email}</p>`,
                replyTo: body.email
              });

              res.statusCode = result.status;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(result.ok ? { ok: true } : { error: result.error }));
            });

            server.middlewares.use('/api/contact', async (req, res) => {
              if (req.method !== 'POST') {
                res.statusCode = 405;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Method not allowed' }));
                return;
              }

              const body = await parseBody(req);
              const { name, email, organization, service, message } = body || {};
              if (!name || !email || !service || !message) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Missing required fields' }));
                return;
              }

              const html = `
                <h2>New Contact Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Organization:</strong> ${organization || 'Not provided'}</p>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Message:</strong><br/>${String(message).replace(/\\n/g, '<br/>')}</p>
              `;

              const result = await sendResendEmail({
                subject: `New contact request from ${name}`,
                html,
                replyTo: email
              });

              res.statusCode = result.status;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(result.ok ? { ok: true } : { error: result.error }));
            });
          }
        }
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
