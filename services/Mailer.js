const keys = require('../config/keys');
const sgMail = require('@sendgrid/mail');

module.exports = async ({ subject, recipients }, content) => {
  // using SendGrid's v3 Node.js Library
  sgMail.setApiKey(keys.sendGridKey);
  // https://github.com/sendgrid/sendgrid-nodejs
  const formattedRecipients = recipients.map(({email}) => ({email}));
  const msg = {
    to: formattedRecipients,
    from: 'no-reply@emaily.com',
    subject: subject,
    html: content,
  };
  try {
    await sgMail.send(msg)
  } catch (error) {
    console.log(error);
  };
}