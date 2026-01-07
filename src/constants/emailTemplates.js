import { EMAIL_STYLES } from './emailStyles';

const { colors, fonts } = EMAIL_STYLES;

export const EMAIL_CATEGORIES = [
    { id: 'all', name: 'All Emails' },
    { id: 'welcome', name: 'Welcome' },
    { id: 'newsletter', name: 'Newsletter' },
    { id: 'transactional', name: 'Transactional' },
    { id: 'marketing', name: 'Marketing' },
];

export const EMAIL_TEMPLATES = [
    {
        id: 'welcome-basic',
        name: 'Classic Welcome',
        category: 'welcome',
        description: 'Simple welcome email with logo, hero text, and CTA.',
        tags: ['welcome', 'intro', 'simple'],
        preview: `
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<style>
  body { margin: 0; padding: 0; background-color: ${colors.bg}; }
  table { border-collapse: collapse; }
</style>
</head>
<body style="background-color: ${colors.bg}; margin: 0; padding: 0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: ${colors.bg};">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: ${colors.card}; border-radius: 12px; overflow: hidden; max-width: 600px; width: 100%;">
          <!-- Header -->
          <tr>
            <td align="center" style="padding: 40px 0 20px 0;">
               <h1 style="${fonts.base} color: ${colors.primary}; margin: 0; font-size: 32px; font-weight: bold;">XMS<span style="color: ${colors.text};">UI</span></h1>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td align="center" style="padding: 0 40px;">
              <h2 style="${fonts.base} color: ${colors.text}; margin: 0 0 16px 0; font-size: 24px;">Welcome Aboard!</h2>
              <p style="${fonts.base} color: ${colors.textMuted}; margin: 0 0 24px 0; font-size: 16px; line-height: 24px;">
                Thanks for joining us. We're excited to have you on board. Start building amazing user interfaces with our library of components.
              </p>
              <a href="#" style="${fonts.base} display: inline-block; background-color: ${colors.primary}; color: ${colors.bg}; text-decoration: none; padding: 12px 32px; border-radius: 6px; font-weight: bold; font-size: 16px;">Get Started</a>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
             <td align="center" style="padding: 40px; color: ${colors.textMuted}; font-size: 12px;">
               <p style="${fonts.base} margin: 0;">&copy; 2024 XMS UI. All rights reserved.</p>
               <p style="${fonts.base} margin: 8px 0 0 0;">123 UI Street, Design City</p>
             </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`,
        code: {
            html: `<!-- Full HTML Code same as preview for now -->` // Logic to fill this can be dynamic or static
        }
    },
    {
        id: 'reset-password',
        name: 'Reset Password',
        category: 'transactional',
        description: 'Clean password reset request email.',
        tags: ['password', 'security', 'action'],
        preview: `
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<style>
  body { margin: 0; padding: 0; background-color: ${colors.bg}; }
</style>
</head>
<body style="background-color: ${colors.bg}; margin: 0; padding: 0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: ${colors.bg};">
    <tr>
      <td align="center" style="padding: 60px 0;">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: ${colors.card}; border: 1px solid ${colors.border}; border-radius: 8px; max-width: 600px; width: 100%;">
          <tr>
            <td style="padding: 40px;">
                <p style="${fonts.base} color: ${colors.textMuted}; font-size: 14px; margin: 0 0 8px 0;">Security Alert</p>
                <h2 style="${fonts.base} color: ${colors.text}; font-size: 24px; margin: 0 0 24px 0;">Reset Your Password</h2>
                <p style="${fonts.base} color: ${colors.text}; font-size: 16px; line-height: 24px; margin: 0 0 24px 0;">
                    We received a request to reset your password. If you didn't make this request, you can ignore this email.
                </p>
                <a href="#" style="${fonts.base} display: block; text-align: center; background-color: ${colors.primary}; color: ${colors.bg}; text-decoration: none; padding: 14px 0; border-radius: 4px; font-weight: bold; font-size: 16px;">Reset Password</a>
                <p style="${fonts.base} color: ${colors.textMuted}; font-size: 14px; margin: 24px 0 0 0; border-top: 1px solid ${colors.border}; padding-top: 24px;">
                    Button not working? Paste this link into your browser:<br/>
                    <span style="color: ${colors.primary};">https://xmsui.com/reset-password/token123</span>
                </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `,
        code: {
            html: `<!-- HTML Code -->`
        }
    }
];

// Fill code property with preview if empty for simplicity in this mock
EMAIL_TEMPLATES.forEach(t => {
    if (t.code.html.includes('<!--')) t.code.html = t.preview.trim();
});
