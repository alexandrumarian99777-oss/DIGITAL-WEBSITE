const Lead = require('../models/Lead');
const sendReviewReminderEmail = require('../utils/sendReviewReminderEmail');

async function sendDueReviewReminders() {
    try {
        const now = new Date();

        const leads = await Lead.find({
            completionStatus: 'completed',
            paymentStatus: 'paid',
            reviewReminderSent: false,
            reviewReminderDueAt: {
                $lte: now
            },
            email: {
                $exists: true,
                $ne: ''
            }
        }).limit(20);

        for (const lead of leads) {
            try {
                await sendReviewReminderEmail(lead);

                lead.reviewReminderSent = true;
                lead.reviewReminderSentAt = new Date();

                await lead.save();

                console.log(`Review reminder sent to ${lead.email}`);
            } catch (error) {
                console.error(`Failed to send review reminder to ${lead.email}:`, error.message);
            }
        }
    } catch (error) {
        console.error('Review reminder job error:', error.message);
    }
}

function startReviewReminderJob() {
    console.log('Review reminder job started.');

    setTimeout(sendDueReviewReminders, 10000);

    setInterval(sendDueReviewReminders, 60 * 60 * 1000);
}

module.exports = startReviewReminderJob;