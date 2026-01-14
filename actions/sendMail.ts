"use server";
import nodemailer from "nodemailer";

export const sendEmail = async (formData: FormData) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const response = await transporter.sendMail({
    from: process.env.SMTP_USER,
    text: "Simple test",
    html: "Simple test",
    subject: "Welcome to D'Belkis club",
    to: process.env.SMTP_USER,
    replyTo: process.env.SMTP_USER,
  });

  console.log(response);
};
