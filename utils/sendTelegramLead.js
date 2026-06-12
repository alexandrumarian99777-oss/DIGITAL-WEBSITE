function escapeHtml(value) {
    return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

async function sendTelegramLead(lead) {
    try {
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            console.log('Telegram not configured. Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID.');
            console.log('Lead preview:', lead);
            return;
        }

        const message = `
🚨 <b>Lead nou pe site</b>

👤 <b>Nume:</b> ${escapeHtml(lead.name)}
📧 <b>Email:</b> ${escapeHtml(lead.email)}
📞 <b>Telefon:</b> ${escapeHtml(lead.phone)}
🏢 <b>Afacere:</b> ${escapeHtml(lead.businessName || '-')}
📌 <b>Tip afacere:</b> ${escapeHtml(lead.businessType || '-')}
🌐 <b>Website:</b> ${escapeHtml(lead.website || '-')}
💼 <b>Pachet:</b> ${escapeHtml(lead.packageInterest || '-')}

💬 <b>Mesaj:</b>
${escapeHtml(lead.message || '-')}
`;

        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'HTML'
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Telegram error:', data);
            return;
        }

        console.log('Telegram lead notification sent.');
    } catch (error) {
        console.error('Telegram notification failed:', error.message);
    }
}

module.exports = sendTelegramLead;