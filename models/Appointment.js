const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
    trim: true
  },

  customerEmail: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },

  customerPhone: {
    type: String,
    required: true,
    trim: true
  },

  businessName: {
    type: String,
    trim: true,
    default: ''
  },

  service: {
    type: String,
    required: true,
    trim: true
  },

  status: {
    type: String,
    enum: ['programat', 'confirmat', 'anulat', 'finalizat'],
    default: 'programat'
  },

  date: {
    type: String,
    required: true
  },

  time: {
    type: String,
    required: true
  },

  notes: {
    type: String,
    trim: true,
    default: ''
  }
}, {
  timestamps: true
});

module.exports = mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema);