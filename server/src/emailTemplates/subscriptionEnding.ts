// subscriptionEmail.ts
export type SubscriptionEmailOptions = {
  name: string;
  createdAt: Date | string;
  expiresAt: Date | string;
  locale?: string; // e.g. "en-US"
  companyName?: string;
  supportEmail?: string;
  manageUrl?: string;      // link to manage subscription/account
  unsubscribeUrl?: string; // link to unsubscribe
  logoUrl?: string;        // optional logo src
};

export function makeSubscriptionEndingEmail(opts: SubscriptionEmailOptions) {
  const {
    name,
    createdAt,
    expiresAt,
    locale = 'en-US',
    companyName = 'Your Company',
    supportEmail = 'support@yourcompany.com',
    manageUrl = '#',
    unsubscribeUrl = '#',
    logoUrl,
  } = opts;

  const fmtDate = (d: Date | string) => {
    const dt = typeof d === 'string' ? new Date(d) : d;
    // medium date + short time, safe for many locales
    return new Intl.DateTimeFormat(locale, {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(dt);
  };

  const createdStr = fmtDate(createdAt);
  const expiresStr = fmtDate(expiresAt);

  const subject = `${companyName} — Your subscription will expire on ${expiresStr}`;

  // Short preheader (used by many email clients)
  const preheader = `Your ${companyName} subscription is expiring on ${expiresStr}. Renew or update your plan to avoid interruption.`;

  const html = `
<!doctype html>
<html lang="${locale}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background-color:#f6f7fb;font-family:Arial,Helvetica,sans-serif;">
  <!-- Hidden preheader text : visible in inbox preview -->
  <div style="display:none;max-height:0px;overflow:hidden;mso-hide:all;">
    ${preheader}
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f6f7fb;padding:24px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(16,24,40,0.06);">
          <tr>
            <td style="padding:20px; text-align:left; border-bottom:1px solid #eef0f5;">
              <table role="presentation" width="100%">
                <tr>
                  <td style="vertical-align:middle;">
                    ${logoUrl ? `<img src="${logoUrl}" alt="${companyName}" style="height:36px;display:block;">` : `<div style="font-weight:700;color:#0f172a;font-size:18px">${companyName}</div>`}
                  </td>
                  <td style="text-align:right; vertical-align:middle; color:#94a3b8; font-size:13px;">
                    Subscription notice
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:28px 32px 24px 32px; color:#0f172a;">
              <h1 style="margin:0 0 8px 0; font-size:20px; line-height:1.25;">Hi ${escapeHtml(name)},</h1>
              <p style="margin:0 0 16px 0; color:#475569; font-size:15px; line-height:1.5;">
                This is a friendly reminder that your ${companyName} subscription created on <strong>${escapeHtml(createdStr)}</strong> is scheduled to expire on <strong>${escapeHtml(expiresStr)}</strong>.
              </p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:18px 0 18px 0;">
                <tr>
                  <td align="center">
                    <a href="${manageUrl}" style="display:inline-block;padding:12px 22px;border-radius:8px;background:#f59e0b;color:#0f172a;text-decoration:none;font-weight:600;">
                      Manage your subscription
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 10px 0; color:#475569; font-size:14px; line-height:1.5;">
                If you want to continue using our service without interruption, please renew or update your payment method before the expiration date. If you recently renewed, you can ignore this message.
              </p>

              <hr style="border:none;border-top:1px solid #eef0f5;margin:18px 0;" />

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:13px;color:#64748b;">
                <tr>
                  <td style="padding-bottom:8px;">
                    <strong>Subscription created:</strong> ${escapeHtml(createdStr)}
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:8px;">
                    <strong>Expiration date:</strong> ${escapeHtml(expiresStr)}
                  </td>
                </tr>
              </table>

              <p style="margin:18px 0 0 0; color:#475569; font-size:13px; line-height:1.4;">
                Need help? Contact our support team at <a href="mailto:${supportEmail}" style="color:#0f172a;text-decoration:underline;">${supportEmail}</a>.
              </p>
            </td>
          </tr>

          <tr>
            <td style="background:#fafbff;padding:16px 32px;color:#64748b;font-size:13px;">
              <table role="presentation" width="100%">
                <tr>
                  <td style="vertical-align:middle;">© ${new Date().getFullYear()} ${escapeHtml(companyName)}. All rights reserved.</td>
                  <td style="text-align:right; vertical-align:middle;">
                    <a href="${manageUrl}" style="color:#0f172a;text-decoration:none;margin-right:12px;">Manage</a>
                    <a href="${unsubscribeUrl}" style="color:#64748b;text-decoration:underline;">Unsubscribe</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

  const text = `
${companyName} — Subscription expiring

Hi ${name},

This is a reminder that your ${companyName} subscription created on ${createdStr} will expire on ${expiresStr}.

Manage your subscription: ${manageUrl}

If you need help, contact ${supportEmail}.

Thanks,
${companyName}

To unsubscribe or manage preferences: ${unsubscribeUrl}
`.trim();

  return { subject, html, text };
}

/**
 * Small helper to escape user-provided text into HTML text nodes.
 * Prevents trivial HTML injection when inserting name, dates, etc.
 */
function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export default makeSubscriptionEndingEmail;
