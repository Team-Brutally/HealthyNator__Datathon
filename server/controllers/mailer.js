// Send an email to the user using the nodemailer package

import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SMTP,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.EMAIL_PASSWORD,
  },
  secure: true,
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmail = (to, subject, text) => {
  let mailOptions = {
    from: `"${process.env.EMAIL_SENDER_NAME}" <${process.env.EMAIL_SENDER}>`,
    to: to,
    subject: subject,
    text: text,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Email sent: " + info.response);
  });
};

const sendEmailWithAttachment = (
  to,
  subject,
  text,
  attachment,
  attachment_name
) => {
  let mailOptions = {
    from: `"${process.env.EMAIL_SENDER_NAME}" <${process.env.EMAIL_SENDER}>`,
    to: to,
    subject: subject,
    text: text,
    attachments: [
      {
        filename: attachment_name,
        content: attachment,
      },
    ],
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Email sent: " + info.response);
  });
};

const mailerFunction = async (req, res) => {
  const { to, subject, text } = req.body;
  const { attachment, attachment_name } = req.body;
  if (attachment && attachment_name) {
    sendEmailWithAttachment(to, subject, text, attachment, attachment_name);
    res.json({ message: `Email sent with attachment to ${to}` });
    return;
  }
  sendEmail(to, subject, text);
  res.json({ message: "Email sent" });
};

export default mailerFunction;
