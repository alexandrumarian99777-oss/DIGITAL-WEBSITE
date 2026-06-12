const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  customerName: { type: String, required: true, trim: true },
  businessName: { type: String, trim: true },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  quote: { type: String, required: true, trim: true },
  videoUrl: { type: String, trim: true },
  thumbnail: { type: String, trim: true },
  approved: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.models.Review || mongoose.model('Review', reviewSchema);
