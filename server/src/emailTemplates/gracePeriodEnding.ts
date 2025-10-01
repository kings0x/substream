// gracePeriodEndingEmail.ts
export type GracePeriodEndingEmailOptions = {
  name: string;
  createdAt: Date | string;
  expiresAt: Date | string;      // original subscription expiry
  graceEndsAt: Date | string;    // end of grace period (final cutoff)
  locale?: string;               // e.g. "en-US"
  companyName?: string;
  supportEmail?: string;
  manageUrl?: string;            // link to manage/renew subscription
  renewUrl?: string;             // direct renewal link (optional)
  unsubscribeUrl?: string;
  logoUrl?: string;
};

export function makeGracePeriodEndingEmail(opts: GracePeriodEndingEmailOptions) {
  const {
    name,
    createdAt,
    expiresAt,
    graceEndsAt,
    locale = 'en-US',
    companyName = 'Your Company',
    supportEmail = 'support@yourcompany.com',
    manageUrl = '#',
    renewUrl,
    unsubscribeUrl = '#',
    logoUrl,
  } = opts;

  const toDate = (d: Date | string) => (typeof d === 'string' ? new Date(d) : d);

  const createdDate = toDate(createdAt);
  const expiresDate = toDate(expiresAt);
  const graceDate = toDate(graceEndsAt);

  function fmt(d: Date) {
    return new Intl.DateTimeFormat(locale, {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(d);
  }

  const now = new Date();
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysLeftRaw = Math.ceil((graceDate.getTime() - now.getTime()) / msPerDay);
  const daysLeftText =
    daysLeftRaw > 1 ? `${daysLeftRaw} days` : daysLeftRaw === 1 ? `1 day` : daysLeftRaw === 0 ? `today` : `expired`;

  const subject =
    daysLeftRaw > 0
      ? `${companyName}: Your account will be permanently disabled in ${daysLeftText}`
      : `${companyName}: Grace period ended — action required`;

  const preheader =
    daysLeftRaw > 0
      ? `Your ${companyName} account is in the grace period and will be disabled ${daysLeftText}. Renew now to avoid interruption.`
      : `Your grace period has ended. Sign in to renew or contact support.`;

  const html = `
<!doctype html>
<html lang="${escapeHtml(locale)}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
  <div style="display:none;max-height:0px;overflow:hidden;mso-hide:all;">${escapeHtml(preheader)}</div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 0;background:#f4f6f8;">
    <tr>
      <td align="center">
        <table role="presentation" width="680" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 6px 18px rgba(2,6,23,0.08);">
          <tr>
            <td style="padding:20px 28px;border-bottom:1px solid #eef2f6;">
              <table role="presentation" width="100%">
                <tr>
                  <td style="vertical-align:middle;">
                    ${logoUrl ? `<img src="${escapeHtml(logoUrl)}" alt="${escapeHtml(companyName)}" style="height:36px;display:block;">` : `<div style="font-weight:700;color:#0b1220;font-size:18px">${escapeHtml(companyName)}</div>`}
                  </td>
                  <td style="text-align:right;vertical-align:middle;color:#6b7280;font-size:13px;">
                    Account notice
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:28px 32px;color:#0b1220;">
              <h1 style="margin:0 0 10px 0;font-size:20px;line-height:1.25;">Hi ${escapeHtml(name)},</h1>

              <p style="margin:0 0 14px 0;color:#374151;font-size:15px;line-height:1.5;">
                This is an important notice: your ${escapeHtml(companyName)} subscription (created ${escapeHtml(fmt(createdDate))}) expired on <strong>${escapeHtml(fmt(expiresDate))}</strong> and is currently in the grace period.
              </p>

              <p style="margin:0 0 18px 0;color:#374151;font-size:15px;line-height:1.5;">
                The grace period will end on <strong>${escapeHtml(fmt(graceDate))}</strong> (${escapeHtml(daysLeftText)}). After that time your account and paid features will be disabled and any data retention policies will apply.
              </p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:16px 0;">
                <tr>
                  <td align="center">
                    <a href="${escapeHtml(renewUrl ?? manageUrl)}" style="display:inline-block;padding:12px 20px;border-radius:8px;background:#dc2626;color:#ffffff;text-decoration:none;font-weight:700;">
                      ${daysLeftRaw > 0 ? 'Renew now to keep access' : 'Renew or Restore Account'}
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 10px 0;color:#374151;font-size:14px;line-height:1.45;">
                If you already renewed, thank you — please disregard this message. If you need assistance restoring access or reviewing billing, contact us at <a href="mailto:${escapeHtml(supportEmail)}" style="color:#0b1220;text-decoration:underline;">${escapeHtml(supportEmail)}</a>.
              </p>

              <hr style="border:none;border-top:1px solid #eef2f6;margin:18px 0;" />

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:13px;color:#6b7280;">
                <tr>
                  <td style="padding-bottom:8px;"><strong>Subscription created:</strong> ${escapeHtml(fmt(createdDate))}</td>
                </tr>
                <tr>
                  <td style="padding-bottom:8px;"><strong>Original expiry:</strong> ${escapeHtml(fmt(expiresDate))}</td>
                </tr>
                <tr>
                  <td style="padding-bottom:8px;"><strong>Grace period ends:</strong> ${escapeHtml(fmt(graceDate))} (${escapeHtml(daysLeftText)})</td>
                </tr>
              </table>

              <p style="margin:18px 0 0 0;color:#6b7280;font-size:13px;line-height:1.4;">
                Questions? Reach out at <a href="mailto:${escapeHtml(supportEmail)}" style="color:#0b1220;text-decoration:underline;">${escapeHtml(supportEmail)}</a>.
              </p>
            </td>
          </tr>

          <tr>
            <td style="background:#fbfdff;padding:14px 32px;color:#6b7280;font-size:13px;">
              <table role="presentation" width="100%">
                <tr>
                  <td>© ${new Date().getFullYear()} ${escapeHtml(companyName)}. All rights reserved.</td>
                  <td style="text-align:right;">
                    <a href="${escapeHtml(manageUrl)}" style="color:#0b1220;text-decoration:none;margin-right:12px;">Manage</a>
                    <a href="${escapeHtml(unsubscribeUrl)}" style="color:#6b7280;text-decoration:underline;">Unsubscribe</a>
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
${companyName} — Grace period ending

Hi ${name},

Your ${companyName} subscription (created ${fmt(createdDate)}) expired on ${fmt(expiresDate)} and is in the grace period which ends on ${fmt(graceDate)} (${daysLeftText}).

Renew or manage your subscription: ${renewUrl ?? manageUrl}

If you need help contact ${supportEmail}.

Thanks,
${companyName}
`.trim();

  return { subject, html, text };
}

/** escape helper to avoid inserting raw user strings into HTML */
function escapeHtml(s: string) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export default makeGracePeriodEndingEmail;
