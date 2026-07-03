// const nodemailer = require('nodemailer');
// const content = require('../data/content');

// function smtpConfigured() {
//   return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
// }

// function buildAppointmentEmail(appointment) {
//   const customMessage = appointment.customEmailMessage || 'Programarea ta a fost creată. Te vom contacta dacă avem nevoie de informații suplimentare.';

//   return `
// Bună, ${appointment.customerName},

// ${customMessage}

// Detalii programare:
// Nume: ${appointment.customerName}
// Email: ${appointment.customerEmail}
// Telefon: ${appointment.customerPhone}
// Afacere: ${appointment.businessName || '-'}
// Serviciu: ${appointment.service}
// Data: ${appointment.date}
// Ora: ${appointment.time}
// Status: ${appointment.status}
// Note: ${appointment.notes || '-'}

// Dacă trebuie să modifici programarea, răspunde la acest email sau contactează-ne la ${content.business.phone}.

// Cu respect,
// ${content.business.name}
// ${content.business.email}
// `;
// }

// async function sendAppointmentEmail(appointment) {
//   const subject = `Confirmare programare - ${appointment.date} la ${appointment.time}`;
//   const text = buildAppointmentEmail(appointment);

//   if (!smtpConfigured()) {
//     console.log('--- PREVIEW EMAIL PROGRAMARE ---');
//     console.log(`To: ${appointment.customerEmail}`);
//     console.log(`Subject: ${subject}`);
//     console.log(text);
//     console.log('--- FINAL PREVIEW EMAIL ---');
//     return { preview: true };
//   }

//   const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: Number(process.env.SMTP_PORT || 587),
//     secure: process.env.SMTP_SECURE === 'true',
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS
//     }
//   });

//   return transporter.sendMail({
//     from: process.env.SMTP_FROM || content.business.email,
//     to: appointment.customerEmail,
//     subject,
//     text
//   });
// }

// module.exports = { sendAppointmentEmail };