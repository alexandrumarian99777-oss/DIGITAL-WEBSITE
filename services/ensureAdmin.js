const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');

async function ensureAdmin() {
    const email = String(process.env.ADMIN_EMAIL || '')
        .trim()
        .toLowerCase();

    const password = String(process.env.ADMIN_PASSWORD || '');

    if (!email || !password) {
        if (process.env.NODE_ENV === 'production') {
            throw new Error(
                'ADMIN_EMAIL și ADMIN_PASSWORD trebuie configurate în variabilele de mediu.'
            );
        }

        console.warn(
            'Adminul nu a fost verificat: ADMIN_EMAIL sau ADMIN_PASSWORD lipsesc.'
        );

        return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await Admin.updateOne({
        email
    }, {
        $setOnInsert: {
            email,
            password: hashedPassword
        }
    }, {
        upsert: true
    });

    if (result.upsertedCount > 0) {
        console.log(`Administrator creat: ${email}`);
    } else {
        console.log(`Administrator existent: ${email}`);
    }
}

module.exports = ensureAdmin;