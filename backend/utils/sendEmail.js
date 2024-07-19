const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (to, subject, text) => {
  const msg = {
    to,
    from: 'arun8894194653@gmail.com',
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent');
  } catch (error) {
    console.error('Error sending email:', error.response ? error.response.body : error.message);
  }
};

module.exports = sendEmail;
