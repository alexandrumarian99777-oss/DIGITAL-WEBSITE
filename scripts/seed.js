require('dotenv').config();

const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Review = require('../models/Review');
const Blog = require('../models/Blog');

async function seed() {
  try {
    await connectDB();

    if (
      process.env.NODE_ENV === 'production' &&
      process.env.ALLOW_DEMO_SEED !== 'true'
    ) {
      throw new Error(
        'Seed-ul demo este blocat în producție. Setează ALLOW_DEMO_SEED=true doar temporar.'
      );
    }

    // Restul codului pentru review-uri și bloguri.

    console.log('Seed demo complet.');
  } catch (error) {
    console.error('Eroare seed:', error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seed();