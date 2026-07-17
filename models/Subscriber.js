const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    consentAccepted: {
        type: Boolean,
        required: true,
        default: true
    },

    status: {
        type: String,
        enum: ['active', 'unsubscribed'],
        default: 'active'
    },

    source: {
        type: String,
        default: 'footer-newsletter'
    }
}, {
    timestamps: true
});

module.exports =
    mongoose.models.Subscriber ||
    mongoose.model('Subscriber', subscriberSchema);