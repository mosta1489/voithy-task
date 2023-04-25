"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const accessEnv_1 = require("./accessEnv");
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendEmail = (email, token, name) => {
    const authEmail = (0, accessEnv_1.accessEnv)("VERIFY_EMAIL");
    const authPassword = (0, accessEnv_1.accessEnv)("VERIFY_PASSWORD");
    const verificationLink = `http://172.190.14.21/api/v1/verify/?key=${token}`;
    const transporter = nodemailer_1.default.createTransport({
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
exports.sendEmail = sendEmail;
//# sourceMappingURL=sendVerifyEmail.js.map