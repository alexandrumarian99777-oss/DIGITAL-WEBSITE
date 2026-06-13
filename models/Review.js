const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
    trim: true
  },

  businessName: {
    type: String,
    trim: true
  },

  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },

  quote: {
    type: String,
    required: true,
    trim: true
  },

  videoUrl: {
    type: String,
    trim: true
  },

  thumbnail: {
    type: String,
    trim: true
  },

  approved: {
    type: Boolean,
    default: false
  },

  consentDataProcessing: {
    type: Boolean,
    default: false
  },

  consentPublicDisplay: {
    type: Boolean,
    default: false
  },

  consentDate: {
    type: Date
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Review', reviewSchema);