"use server";
import nodemailer from "nodemailer";

export const sendEmail = async (formData: FormData) => {
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const message = formData.get("message");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const response = await transporter.sendMail({
    from: process.env.SMTP_USER,
    text: `Se ha enviado un mensaje de ${fullName} (${email}) con el siguiente mensaje: ${message}`,
    html: `<p>Se ha enviado un mensaje de ${fullName}</p> <p>(${email})</p> <strong>Mensaje:</strong> <p><em>${message}</em></p>`,
    subject: `${fullName} ha enviado un mensaje desde dbelkis.com`,
    to: process.env.SMTP_USER,
    replyTo: process.env.SMTP_USER,
  });

  console.log(response);
};
