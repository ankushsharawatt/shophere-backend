// welcomeMail.js
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: process.env.SMPT_SERVICE,
  auth: {
    user: process.env.SHOPHERE_SMPT_MAIL,
    pass: process.env.SHOPHERE_SMPT_MAIL_PASSWORD,
  },
});

export const sendWelcomeEmail = async (user) => {
  const mailOptions = {
    from: process.env.STORFLEET_MAIL,
    to: user.email,
    subject: "Welcome to Shophere 🎉",
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <style>
              body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { text-align: center; }
              .logo { max-width: 120px; }
              .button {
                  display: inline-block;
                  padding: 12px 24px;
                  background-color: #20d49a;
                  color: #fff;
                  text-decoration: none;
                  border-radius: 5px;
                  font-weight: bold;
              }
              @media only screen and (max-width: 600px) {
                  .container { padding: 10px; }
                  .logo { max-width: 90px; }
                  .button { display: block; margin-top: 10px; }
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
        
                  <h1>Welcome to SHOPHERE 🚀</h1>
              </div>
              <p>Hi, ${user.name} 👋</p>
              <p>We’re thrilled to have you onboard! Your account has been successfully created, and you’re all set to explore everything Storefleet has to offer.</p>
        
              <p>If you have any questions, just reply to this email — we’re always happy to help.</p>
              <p>Cheers,<br/>The shophere Team</p>
          </div>
      </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
};
