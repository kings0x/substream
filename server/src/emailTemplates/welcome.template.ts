const generateWelcomeEmail = (appName:string, userName:string) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Welcome to ${appName}!</title>
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
        color: #333333;
        line-height: 1.6;
      }
      .button {
        display: inline-block;
        margin-top: 25px;
        padding: 12px 24px;
        background-color: #4CAF50;
        color: white;
        font-weight: bold;
        text-decoration: none;
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
        <p>Welcome to <strong>${appName}</strong>! Your email has been successfully verified.</p>
        <p>We're excited to have you on board. Start exploring all the great features we offer.</p>
        <p>If you need any help or have questions, feel free to reach out to our support team anytime.</p>
        <a href="#" class="button">Get Started</a>
      </div>
      <div class="footer">
        &copy; ${new Date().getFullYear()} ${appName}. All rights reserved.
      </div>
    </div>
  </body>
  </html>
  `;
}

export default generateWelcomeEmail;
