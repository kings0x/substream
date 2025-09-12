// emailTemplate.js
const  generateVerificationEmail = (appName: string, userName: string, code: string) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${appName} - Verification Code</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        background: #ffffff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      .header {
        background-color: #4CAF50;
        color: #ffffff;
        padding: 20px;
        text-align: center;
        font-size: 24px;
      }
      .content {
        padding: 30px;
        line-height: 1.6;
        color: #333333;
      }
      .code {
        display: inline-block;
        padding: 10px 20px;
        margin-top: 20px;
        font-size: 22px;
        font-weight: bold;
        letter-spacing: 4px;
        background-color: #f0f0f0;
        border: 1px dashed #ccc;
        border-radius: 5px;
      }
      .footer {
        font-size: 12px;
        color: #777777;
        text-align: center;
        padding: 15px;
        background-color: #f9f9f9;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">${appName}</div>
      <div class="content">
        <p>Hi ${userName},</p>
        <p>We received a request to verify your email address for your ${appName} account.</p>
        <p>Please use the verification code below:</p>
        <div class="code">${code}</div>
        <p>If you did not request this, please ignore this email.</p>
      </div>
      <div class="footer">
        &copy; ${new Date().getFullYear()} ${appName}. All rights reserved.
      </div>
    </div>
  </body>
  </html>
  `;
}

export default generateVerificationEmail;
