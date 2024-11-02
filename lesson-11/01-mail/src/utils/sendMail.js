import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: '',
    pass: '',
  },
});

export function sendMail(message) {
  return transporter.sendMail(message);
}
