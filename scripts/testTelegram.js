require('dotenv').config();

function cleanEnv(value) {
    return String(value || '')
        .trim()
        .replace(/^["']|["']$/g, '');
}

async function testTelegram() {
    const botToken = cleanEnv(process.env.TELEGRAM_BOT_TOKEN);
    const chatId = cleanEnv(process.env.TELEGRAM_CHAT_ID);

    console.log('Checking Telegram config...');
    console.log('Bot token exists:', Boolean(botToken));
    console.log('Bot token preview:', botToken ? `${botToken.slice(0, 8)}...${botToken.slice(-6)}` : 'missing');
    console.log('Chat ID:', chatId || 'missing');

    if (!botToken || !chatId) {
        console.log('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID in .env');
        process.exit(1);
    }

    const meResponse = await fetch(`https://api.telegram.org/bot${botToken}/getMe`);
    const meData = await meResponse.json();

    console.log('Bot check:', meData);

    if (!meData.ok) {
        console.log('Your TELEGRAM_BOT_TOKEN is wrong.');
        process.exit(1);
    }

    const messageResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: 'Test message from AM Digital Growth website'
        })
    });

    const messageData = await messageResponse.json();

    console.log('Send message result:', messageData);

    if (!messageData.ok) {
        console.log('Telegram test failed.');
        console.log('If error says "chat not found", your CHAT_ID is wrong or you did not start this exact bot.');
        process.exit(1);
    }

    console.log('Telegram test message sent successfully.');
    process.exit(0);
}

testTelegram().catch((error) => {
    console.error('Telegram test crashed:', error);
    process.exit(1);
});