const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },

  phone: {
    type: String,
    required: true,
    trim: true
  },

  businessName: {
    type: String,
    trim: true
  },

  businessType: {
    type: String,
    trim: true
  },

  website: {
    type: String,
    trim: true
  },

  packageInterest: {
    type: String,
    trim: true
  },

  message: {
    type: String,
    trim: true
  },

  completionStatus: {
    type: String,
    enum: ['uncompleted', 'completed'],
    default: 'uncompleted'
  },

  callStatus: {
    type: String,
    enum: ['uncalled', 'called'],
    default: 'uncalled'
  },

  paymentStatus: {
    type: String,
    enum: ['unpaid', 'paid'],
    default: 'unpaid'
  },

  reviewReminderDueAt: {
    type: Date
  },

  reviewReminderSent: {
    type: Boolean,
    default: false
  },

  reviewReminderSentAt: {
    type: Date
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Lead', leadSchema);