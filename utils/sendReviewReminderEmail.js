// const nodemailer = require('nodemailer');

// async function sendReviewReminderEmail(lead) {
//   if (!lead || !lead.email) {
//     return;
//   }

//   const baseUrl = process.env.BASE_URL || 'http://localhost:8000';
//   const reviewLink = `${baseUrl}/#testimoniale`;

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS
//     }
//   });

//   const customerName = lead.name || 'Bună';

//   await transporter.sendMail({
//     from: `"AM Digital Growth" <${process.env.EMAIL_USER}>`,
//     to: lead.email,
//     subject: 'Ne poți lăsa o recenzie?',
//     html: `
//       <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827; max-width: 600px; margin: 0 auto;">
//         <h2 style="color: #111827;">Salut, ${customerName}!</h2>

//         <p>
//           Îți mulțumim pentru colaborarea cu <strong>AM Digital Growth</strong>.
//         </p>

//         <p>
//           Dacă ești mulțumit de serviciul primit, ne-ar ajuta foarte mult o recenzie scurtă.
//           Feedback-ul tău ne ajută să câștigăm încrederea altor afaceri locale.
//         </p>

//         <p>
//           Poți lăsa recenzia accesând butonul de mai jos:
//         </p>

//         <p style="margin: 24px 0;">
//           <a 
//             href="${reviewLink}" 
//             style="display: inline-block; background: #f97316; color: #ffffff; padding: 12px 18px; text-decoration: none; border-radius: 8px; font-weight: bold;"
//           >
//             Lasă o recenzie
//           </a>
//         </p>

//         <p>
//           Dacă butonul nu funcționează, folosește acest link:
//         </p>

//         <p>
//           <a href="${reviewLink}" style="color: #f97316;">
//             ${reviewLink}
//           </a>
//         </p>

//         <p>
//           Mulțumim,<br>
//           <strong>AM Digital Growth</strong>
//         </p>
//       </div>
//     `
//   });
// }

// module.exports = sendReviewReminderEmail;