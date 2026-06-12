const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  customerName: { type: String, required: true, trim: true },
  customerEmail: { type: String, required: true, trim: true },
  customerPhone: { type: String, required: true, trim: true },
  businessName: { type: String, trim: true },
  service: { type: String, required: true, trim: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  notes: { type: String, trim: true },
  customEmailMessage: { type: String, trim: true },
  status: { type: String, enum: ['programat', 'confirmat', 'anulat', 'finalizat'], default: 'programat' },
  emailSent: { type: Boolean, default: false }
}, { timestamps: true });

appointmentSchema.index({ date: 1, time: 1 }, { unique: true });

module.exports = mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema);
