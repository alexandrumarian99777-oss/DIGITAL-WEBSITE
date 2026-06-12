const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  excerpt: { type: String, required: true, trim: true },
  content: { type: String, required: true },
  coverImage: { type: String, trim: true },
  coverAlt: { type: String, trim: true },
  metaTitle: { type: String, trim: true },
  metaDescription: { type: String, trim: true },
  keywords: { type: String, trim: true },
  tags: [{ type: String, trim: true }],
  published: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
