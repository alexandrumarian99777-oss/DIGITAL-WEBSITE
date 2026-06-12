const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  businessName: { type: String, trim: true },
  businessType: { type: String, trim: true },
  website: { type: String, trim: true },
  packageInterest: { type: String, trim: true },
  message: { type: String, required: true, trim: true },
  status: { type: String, enum: ['nou', 'contactat', 'calificat', 'câștigat', 'pierdut'], default: 'nou' }
}, { timestamps: true });

module.exports = mongoose.models.Lead || mongoose.model('Lead', leadSchema);
