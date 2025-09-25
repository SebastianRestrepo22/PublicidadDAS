// backend/utils/email.js
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // si usas Gmail
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER, // de .env
    pass: process.env.EMAIL_PASS  // contraseña de aplicación
  }
});

export const sendWelcomeEmail = async (to, password) => {
  try {
    await transporter.sendMail({
      from: '"Mi App" <no-reply@miapp.com>',
      to,
      subject: "Bienvenido a la plataforma",
      text: `Hola! Tu cuenta ha sido creada. Tu contraseña es: ${password}`,
      html: `
        <p>Hola 👋,</p>
        <p>Tu cuenta ha sido creada correctamente.</p>
        <p><b>Contraseña:</b> ${password}</p>
        <p>Por favor cámbiala en tu primer inicio de sesión.</p>
      `
    });
    console.log("Correo enviado a:", to);
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return false;
  }
};
