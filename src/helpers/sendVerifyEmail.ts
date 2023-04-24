import { accessEnv } from "./accessEnv";
import nodemailer from "nodemailer";

export const sendEmail = (email: string, token: string, name: string): void => {
  const authEmail = accessEnv("VERIFY_EMAIL");
  const authPassword = accessEnv("VERIFY_PASSWORD");
  const verificationLink = `http://localhost:3000/api/v1/verify/?key=${token}`;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: authEmail,
      pass: authPassword,
    },
  });

  const mailOptions = {
    from: `"Voithy" <no-reply@Voithy.world>`,
    to: email,
    subject: "Verify your email",
    html: `<h1>Verify your email</h1>
    <p>Hi ${name},</p>
    <p>Thank you for signing up with Voithy. Please verify your email address by clicking the link below.</p>
    <a href="${verificationLink}">Verify your email</a>
    <p>If you did not sign up for Voithy, please ignore this email.</p>
    <p>Thanks,</p>
    <p>Voithy Team</p>`,
  };

  transporter.sendMail(mailOptions).catch((err) => {
    console.log(err);
  });
};
